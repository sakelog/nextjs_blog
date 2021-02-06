import { connectAutoComplete } from 'react-instantsearch-dom';
import { AutocompleteProvided } from 'react-instantsearch-core';
import { MdSearch } from 'react-icons/md';
import Highlight from './Highlight';
import { Message } from './types';

import { getRootPath } from '@lib/getPath';
import styles from '@styles/component/_c-search.module.scss';

type Props = AutocompleteProvided<Message>;

const Autocomplete: React.FC<Props> = ({ hits, currentRefinement, refine }) => {
  return (
    <div className={styles.root}>
      <div className={styles.searchBox}>
        <MdSearch className={styles.searchIcon} />
        <input
          type="search"
          placeholder="検索"
          value={currentRefinement}
          onChange={(event) => refine(event.currentTarget.value)}
        />
      </div>
      {currentRefinement != '' && (
        <ul className={styles.hits}>
          {hits.map((hit) => (
            <li key={hit.objectID}>
              <a href={getRootPath(hit.slug.ja).slice(0, -1)}>
                <Highlight hit={hit} attribute="title.ja" />
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default connectAutoComplete(Autocomplete);
