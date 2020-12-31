/*
'use strict'
require('ts-node').register({
  compilerOptions: {
    module: 'commonjs',
    target: 'esnext',
  },
})
exports.createPages = require('./gatsby-node/index').createPages
*/
'use strict';
require('ts-node').register({
  compilerOptions: {
    target: 'es5',
    module: 'commonjs',
  },
});

exports.createPages = require('./gatsby-node/index').createPages;

/*
exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allContentfulPost {
        nodes {
          slug
        }
      }
    }
  `);
  data.allContentfulPost.nodes.forEach((node) => {
    const slug = node.slug;
    actions.createPage({
      path: slug,
      component: require.resolve(`./src/templates/postList.tsx`),
      context: { slug: slug },
    });
  });
};
*/
