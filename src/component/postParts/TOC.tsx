/*==========================================================
参考：https://github.com/Takumon/react-markdown-sync-toc
============================================================*/

import { Link } from 'react-scroll';
import loadable from '@loadable/component';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
const List = loadable(() => import('@material-ui/core/List'));
const ListItem = loadable(() => import('@material-ui/core/ListItem'));
const ListItemText = loadable(() => import('@material-ui/core/ListItemText'));

type propsType = {
  toc: render.toc.iditem[];
  activeItemIds: render.toc.activeItemIds | null;
};

const MAX_DEPTH = 3;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: '100%',
      width: '100%',
      overflowY: 'auto',
      overflowX: 'hidden',
      padding: theme.spacing(1),
      '&::-webkit-scrollbar': {
        width: '4px',
      },
      '&::-webkit-scrollbar-track': {
        borderRadius: '6px',
        border: 'none',
      },
      '&::-webkit-scrollbar-thumb': {
        borderRadius: '6px',
        background: theme.palette.secondary.light,
      },
    },
    list: {
      color: theme.palette.secondary.main,
    },
    active: {
      background: theme.palette.secondary.light,
      color: theme.palette.secondary.contrastText,
    },
  })
);

const TOC: React.FC<propsType> = (props) => {
  const styles = useStyles();
  const { toc, activeItemIds } = props;
  const TOCList = toc.map((item) => {
    return (
      item.depth <= MAX_DEPTH && (
        <Link
          to={item.id}
          smooth={true}
          duration={500}
          offset={-100}
          key={item.id}
        >
          <ListItem
            style={{ marginLeft: `${(item.depth - 2) * 1}rem` }}
            button
            className={
              activeItemIds && activeItemIds.includes(item.id)
                ? styles.active
                : styles.list
            }
          >
            <ListItemText>{item.value}</ListItemText>
          </ListItem>
        </Link>
      )
    );
  });
  return (
    <>
      <List className={styles.root}>{TOCList}</List>
    </>
  );
};

export default TOC;
