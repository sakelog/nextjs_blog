import { createElement } from 'react';
import Link from 'next/link';
import { HiOutlineTag } from 'react-icons/hi';

import { getTagPath } from '@lib/getPath';

type PropsType = {
  tags: contentful.tags[];
  heading: string;
};

const TagList = (props: PropsType) => {
  const listItems = props.tags.map((tag) => {
    return (
      <li key={tag.fields.slug} className="w-auto">
        <Link href={getTagPath(tag.fields.slug)}>
          <a className="rounded hover:bg-gray-200 flex items-center">
            <HiOutlineTag />
            {createElement(
              props.heading,
              {},
              tag.fields.name
            )}
          </a>
        </Link>
      </li>
    );
  });

  return (
    <ul className="inline-flex justify-start flex-wrap text-sm space-x-2">
      {listItems}
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
