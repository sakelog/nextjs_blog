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
