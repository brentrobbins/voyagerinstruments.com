export default {
  widgets: [
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
                  buildHookId: '5f25db35903f160c53af412d',
                  title: 'voyagerdynamics.com Frontend Website',
                  name: 'voyagerdynamics',
                  apiId: '9fbe81e9-6713-427a-b548-d576b8c08091'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/brentrobbins/voyagerinstruments.com',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://www.voyagerdynamics.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent pages', order: '_createdAt desc', types: ['page']},
      layout: {width: 'medium'}
    },
    {
      name: 'gatsby',
      options: {
        sites: [
          {
            siteUrl: 'https://voyagerdynamics.com/'
          }
        ]
      }
    }
  ]
}
