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
                  buildHookId: '5f00dc168ed8b87d5a6a2117',
                  title: 'voyagerinstruments.com Frontend Website',
                  name: 'voyagerinstruments',
                  apiId: 'abd4c9d3-f21b-4d46-9046-34a9d06176a2'
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
          {title: 'Frontend', value: 'https://voyagerinstruments.netlify.app', category: 'apps'}
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
            siteUrl: 'https://voyagerinstruments-org-6166644563.gtsb.io/'
          }
        ]
      }
    }
  ]
}
