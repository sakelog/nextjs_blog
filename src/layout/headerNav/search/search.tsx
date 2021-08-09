import Link from 'next/link';
import { connectAutoComplete } from 'react-instantsearch-dom';
import { AutocompleteProvided } from 'react-instantsearch-core';

import { HiOutlineSearch } from 'react-icons/hi';

import Highlight from '@layout/headerNav/search/highlight';

import { Message } from './types';
import { getRootPath } from '@lib/getPath';
type Props = AutocompleteProvided<Message>;

const Autocomplete: React.FC<Props> = ({
  hits,
  currentRefinement,
  refine,
}) => {
  return (
    <div className="relative flex-1 px-2">
      <div className="flex items-center space-x-2 p-2 rounded bg-gray-100 bg-opacity-30">
        <HiOutlineSearch />
        <input
          type="search"
          placeholder="検索..."
          value={currentRefinement}
          onChange={(e) => refine(e.currentTarget.value)}
          className="bg-transparent border-0 placeholder-gray-800 flex-auto"
        />
      </div>
      {currentRefinement != '' && (
        <div
          onClick={() => refine()}
          className="fixed bg-gray-50 z-50 left-0 w-full
                   text-gray-800 p-2 shadow-sm"
        >
          <ul className="space-y-2 divide-y divide-dashed divide-gray-400">
            {hits.map((hit) => (
              <li key={hit.objectID}>
                <Link href={getRootPath(hit.slug.ja)}>
                  <Highlight
                    hit={hit}
                    attribute="title.ja"
                  />
                </Link>
              </li>
            ))}
          </ul>
          <span
            className="inline-block m-2 p-2 bg-gray-800 text-white text-sm cursor-pointer"
            onClick={() => refine()}
          >
            クリア
          </span>
        </div>
      )}
    </div>
  );
};

export default connectAutoComplete(Autocomplete);
