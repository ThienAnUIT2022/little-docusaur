import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/little-docusaur/blog',
    component: ComponentCreator('/little-docusaur/blog', 'b3d'),
    exact: true
  },
  {
    path: '/little-docusaur/blog/archive',
    component: ComponentCreator('/little-docusaur/blog/archive', 'a0d'),
    exact: true
  },
  {
    path: '/little-docusaur/blog/authors',
    component: ComponentCreator('/little-docusaur/blog/authors', '098'),
    exact: true
  },
  {
    path: '/little-docusaur/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/little-docusaur/blog/authors/all-sebastien-lorber-articles', '545'),
    exact: true
  },
  {
    path: '/little-docusaur/blog/authors/yangshun',
    component: ComponentCreator('/little-docusaur/blog/authors/yangshun', '833'),
    exact: true
  },
  {
    path: '/little-docusaur/blog/first-blog-post',
    component: ComponentCreator('/little-docusaur/blog/first-blog-post', 'ea8'),
    exact: true
  },
  {
    path: '/little-docusaur/blog/long-blog-post',
    component: ComponentCreator('/little-docusaur/blog/long-blog-post', '06c'),
    exact: true
  },
  {
    path: '/little-docusaur/blog/mdx-blog-post',
    component: ComponentCreator('/little-docusaur/blog/mdx-blog-post', '3d8'),
    exact: true
  },
  {
    path: '/little-docusaur/blog/tags',
    component: ComponentCreator('/little-docusaur/blog/tags', '4c0'),
    exact: true
  },
  {
    path: '/little-docusaur/blog/tags/docusaurus',
    component: ComponentCreator('/little-docusaur/blog/tags/docusaurus', '405'),
    exact: true
  },
  {
    path: '/little-docusaur/blog/tags/facebook',
    component: ComponentCreator('/little-docusaur/blog/tags/facebook', '71b'),
    exact: true
  },
  {
    path: '/little-docusaur/blog/tags/hello',
    component: ComponentCreator('/little-docusaur/blog/tags/hello', '533'),
    exact: true
  },
  {
    path: '/little-docusaur/blog/tags/hola',
    component: ComponentCreator('/little-docusaur/blog/tags/hola', 'd82'),
    exact: true
  },
  {
    path: '/little-docusaur/blog/welcome',
    component: ComponentCreator('/little-docusaur/blog/welcome', '513'),
    exact: true
  },
  {
    path: '/little-docusaur/markdown-page',
    component: ComponentCreator('/little-docusaur/markdown-page', '119'),
    exact: true
  },
  {
    path: '/little-docusaur/docs',
    component: ComponentCreator('/little-docusaur/docs', '73b'),
    routes: [
      {
        path: '/little-docusaur/docs',
        component: ComponentCreator('/little-docusaur/docs', 'be2'),
        routes: [
          {
            path: '/little-docusaur/docs',
            component: ComponentCreator('/little-docusaur/docs', '731'),
            routes: [
              {
                path: '/little-docusaur/docs/category/tutorial---basics',
                component: ComponentCreator('/little-docusaur/docs/category/tutorial---basics', '789'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/little-docusaur/docs/category/tutorial---extras',
                component: ComponentCreator('/little-docusaur/docs/category/tutorial---extras', 'd42'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/little-docusaur/docs/intro',
                component: ComponentCreator('/little-docusaur/docs/intro', '3cc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/little-docusaur/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/little-docusaur/docs/tutorial-basics/congratulations', 'ea1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/little-docusaur/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/little-docusaur/docs/tutorial-basics/create-a-blog-post', '572'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/little-docusaur/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/little-docusaur/docs/tutorial-basics/create-a-document', 'ba1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/little-docusaur/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/little-docusaur/docs/tutorial-basics/create-a-page', 'd45'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/little-docusaur/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/little-docusaur/docs/tutorial-basics/deploy-your-site', '36c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/little-docusaur/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/little-docusaur/docs/tutorial-basics/markdown-features', 'a8d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/little-docusaur/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/little-docusaur/docs/tutorial-extras/manage-docs-versions', '667'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/little-docusaur/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/little-docusaur/docs/tutorial-extras/translate-your-site', '49b'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/little-docusaur/',
    component: ComponentCreator('/little-docusaur/', '013'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
