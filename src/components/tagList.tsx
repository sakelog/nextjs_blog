import { createElement } from 'react';
import Link from 'next/link';
import { HiOutlineTag } from 'react-icons/hi';

import { getTagPath } from '@lib/getPath';

type PropsType = {
  tags: Contentful.tags[];
  heading: string;
};

const TagList = (props: PropsType) => {
  return (
    <ul className="inline-flex justify-start flex-wrap text-sm">
      {props.tags.map((tag) => (
        <li key={tag.fields.slug} className="w-auto m-1">
          <Link href={getTagPath(tag.fields.slug)}>
            <a
              className="rounded-full bg-gray-200 text-gray-800 hover:text-white hover:bg-gray-600
                         flex items-center py-1 px-2 space-x-1"
            >
              <HiOutlineTag />
              {createElement(
                props.heading,
                {},
                tag.fields.name
              )}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default TagList;

/*
import React from 'react';
import Link from 'next/link';
import { Button, List, ListItem } from '@material-ui/core';
import LabelIcon from '@material-ui/icons/Label';

import { getTagPath } from '@lib/getPath';

import { tagListStyles as useStyles } from '@styles/component/tagList.style';

type PropsType = {
  tags: contentful.tags[];
  heading: string;
};

const TagList: React.FC<PropsType> = (props) => {
  const styles = useStyles();
  const list = props.tags.map((tag) => {
    return (
      <ListItem key={tag.fields.slug} className={styles.item}>
        <Button startIcon={<LabelIcon />} style={{ textTransform: 'none' }}>
          <Link href={getTagPath(tag.fields.slug)}>
            {React.createElement(props.heading, {}, tag.fields.name)}
          </Link>
        </Button>
      </ListItem>
    );
  });
  return <List className={styles.root}>{list}</List>;
};

export default TagList;
*/
