import React from 'react';
import { Button } from '@material-ui/core';
import { getCategoryPath } from '@lib/getPath';

type PropsType = {
  category: contentful.category;
  heading: string;
};

const CategoryTag: React.FC<PropsType> = (props) => {
  return (
    <Button
      variant="outlined"
      href={getCategoryPath(props.category.fields.slug)}
    >
      {React.createElement(props.heading, {}, props.category.fields.name)}
    </Button>
  );
};

export default CategoryTag;
