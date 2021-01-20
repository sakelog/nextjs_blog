import React from 'react';

import { useStaticQuery, graphql, Link } from 'gatsby';
import { getCategoryPath } from '../../lib/getPath';

const HeaderCatList = () => {
  const data = useStaticQuery(
    graphql`
      query {
        categoryGroup: allContentfulPost {
          group(field: category___name) {
            fieldValue
          }
        }
        category: allContentfulCategory {
          nodes {
            name
            slug
          }
        }
      }
    `
  );
  const categorys = data.category.nodes;
  const categoryPostGroup = data.categoryGroup.group;
  let hasPostCategorys: Post.category[] = [];

  categoryPostGroup.map((hasPostCategory) => {
    for (var i = 0; i < categorys.length; i++) {
      const isHit = hasPostCategory.fieldValue === categorys[i].name;

      if (isHit) {
        hasPostCategorys.push(categorys[i]);
        break;
      }
    }
  });

  const categoryList = hasPostCategorys
    ? hasPostCategorys.map((category) => {
        return (
          <li>
            <Link to={getCategoryPath(category.slug)}>{category.name}</Link>
          </li>
        );
      })
    : null;

  const categoryTag = hasPostCategorys ? (
    <ul className="l-header__nav__drawer--list">{categoryList}</ul>
  ) : null;

  return categoryTag;
};

export default HeaderCatList;
