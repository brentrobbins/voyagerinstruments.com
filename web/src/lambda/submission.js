const sanityClient = require('@sanity/client')
const client = sanityClient({
  projectId: process.env.GATSBY_SANITY_PROJECT_ID,
  dataset: 'production',
  token: process.env.SANITY_TOKEN
})

exports.handler = async function (event, context, callback) {
  console.log('yippee!')
  const {payload} = JSON.parse(event.body)
  const result = await client.create({_type: 'submission.form', ...payload})
  callback(null, {
    statusCode: 200
  })
}
