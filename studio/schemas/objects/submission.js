/*
 * Doesn't cover all the data fields.
 * Remove or set readOnly to `false` if you want to be able
 * to edit the responses in the Studio
 */

export default {
  name: 'submission',
  type: 'object',
  title: 'Form submission',
  readOnly: true,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'created_at',
      type: 'datetime',
      title: 'Created at'
    },
    {
      name: 'email',
      type: 'email',
      title: 'Email'
    },
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'message',
      type: 'text',
      title: 'Message'
    }
  ]
}
