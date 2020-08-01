import {TiDocumentText as Icon} from 'react-icons/ti'

export default {
  name: 'textBlock',
  title: 'Text',
  type: 'object',
  icon: Icon,
  fields: [
    {
      name: 'body',
      title: 'Body',
      type: 'bodyPortableText'
    },
    {
      title: 'Content Options',
      name: 'contentOptions',
      type: 'contentOptions'
    }
  ],
  preview: {
    prepare () {
      const title = 'Text'
      return {
        title: title
      }
    }
  }
}
