export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5dd81b8e8e74218ed97b8f29',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-8vjwk7kr',
                  apiId: '318495ab-db55-4908-80d8-ff091993cf07'
                },
                {
                  buildHookId: '5dd81b8e5b7707ff82aed015',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-exqacg2p',
                  apiId: 'e80b0345-14de-4328-8b12-3aa0f25f4aad'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/prathameshspork/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-exqacg2p.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
