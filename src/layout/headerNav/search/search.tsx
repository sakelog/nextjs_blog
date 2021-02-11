import Link from 'next/link';
import { connectAutoComplete } from 'react-instantsearch-dom';
import { AutocompleteProvided } from 'react-instantsearch-core';
import { InputBase, List, ListItem } from '@material-ui/core';
import {
  createStyles,
  fade,
  Theme,
  makeStyles,
} from '@material-ui/core/styles';
import { MdSearch } from 'react-icons/md';
import Highlight from './Highlight';
import { Message } from './types';

import { getRootPath } from '@lib/getPath';
import config from '@component/config';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'relative',
      flexGrow: 1,
      flexShrink: 0,
      flexBasis: '30%',
      margin: theme.spacing(0, 2),
    },
    search: {
      position: 'relative',
      borderRadius: '6px',
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
      width: '100%',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
    },
    hits: {
      position: 'fixed',
      background: '#ffffff',
      zIndex: 999,
      left: 0,
      width: '100%',
      padding: theme.spacing(2),
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.26)',
    },
    hit: {
      borderBottom: '1px dashed #000000',
    },
    clearWrapper: {
      textAlign: 'right',
    },
    clear: {
      background: config.themeColor,
      color: '#ffffff',
      fontWeight: 'bold',
      padding: theme.spacing(1),
      cursor: 'pointer',
    },
  })
);

type Props = AutocompleteProvided<Message>;

const Autocomplete: React.FC<Props> = ({ hits, currentRefinement, refine }) => {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <div className={styles.search}>
        <div className={styles.searchIcon}>
          <MdSearch />
        </div>
        <InputBase
          placeholder="検索…"
          classes={{
            root: styles.inputRoot,
            input: styles.inputInput,
          }}
          inputProps={{ 'aria-label': '検索' }}
          value={currentRefinement}
          onChange={(event) => refine(event.currentTarget.value)}
        />
      </div>
      {currentRefinement != '' && (
        <div className={styles.hits} onClick={() => refine()}>
          <List>
            {hits.map((hit) => (
              <ListItem key={hit.objectID} button className={styles.hit}>
                <Link href={getRootPath(hit.slug.ja)}>
                  <Highlight hit={hit} attribute="title.ja" />
                </Link>
              </ListItem>
            ))}
          </List>
          <div className={styles.clearWrapper}>
            <span className={styles.clear} onClick={() => refine()}>
              クリア
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default connectAutoComplete(Autocomplete);
