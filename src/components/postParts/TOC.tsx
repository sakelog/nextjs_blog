/*==========================================================
参考：https://github.com/Takumon/react-markdown-sync-toc
============================================================*/

import { Link } from 'react-scroll';
import { List, ListItem } from '@material-ui/core';

import { TOCStyles as useStyles } from '@styles/component/post__toc.style';

type propsType = {
  toc: render.toc.iditem[];
  activeItemIds: render.toc.activeItemIds | null;
};

const MAX_DEPTH = 3;

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
            {item.value}
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
