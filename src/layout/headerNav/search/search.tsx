import Link from 'next/link';
import dynamic from 'next/dynamic';
import { connectAutoComplete } from 'react-instantsearch-dom';
import { AutocompleteProvided } from 'react-instantsearch-core';
import { InputBase, List, ListItem } from '@material-ui/core';

const SearchIcon = dynamic(() => import('@material-ui/icons/Search'));
import Highlight from './highlight';
import { Message } from './types';

import { getRootPath } from '@lib/getPath';
import { searchStyles as useStyles } from '@styles/component/search.style';

type Props = AutocompleteProvided<Message>;

const Autocomplete: React.FC<Props> = ({ hits, currentRefinement, refine }) => {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <div className={styles.search}>
        <SearchIcon className={styles.searchIcon} />
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
