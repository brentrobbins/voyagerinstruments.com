// import ConditionalFields from '../../../components/ConditionalFields.js'
import {BsSquare as Icon, BsLayoutThreeColumns as Icon3} from 'react-icons/bs'
import {FiColumns as Icon2} from 'react-icons/fi'
import {GrColumns as Icon4} from 'react-icons/gr'
import {GoAlert as Icon0} from 'react-icons/go'
// 1 BsSquare
// 2 FiColumns
// 3 BsLayoutThreeColumns
// 4 GrColumns

export default {
  title: 'Content Layout',
  name: 'contentLayout',
  type: 'object',
  fields: [
    {
      title: 'Content Title',
      name: 'title',
      type: 'string',
      description: 'Required. This is only shown in the CMS.'
    },
    {
      title: 'Layout Options',
      name: 'layoutOptions',
      type: 'layoutOptions'
    },
    {
      title: 'Header',
      name: 'columnHeaderContent',
      type: 'columnContent',
      description: 'Optional.'
    },
    {
      title: 'Column One\'s Content',
      name: 'columnOneContent',
      type: 'columnContent',
      validation: Rule => Rule.required()
    },
    {
      title: 'Column Two\'s Content',
      name: 'columnTwoContent',
      type: 'columnContent'
    },
    {
      title: 'Column Three\'s Content',
      name: 'columnThreeContent',
      type: 'columnContent'
    },
    {
      title: 'Column Four\'s Content',
      name: 'columnFourContent',
      type: 'columnContent'
    },
    {
      title: 'Footer',
      name: 'columnFooterContent',
      type: 'columnContent',
      description: 'Optional.'
    }
  ],
  preview: {
    select: {
      title: 'title' || '',
      oneColumn: 'columnOneContent',
      twoColumn: 'columnTwoContent',
      threeColumn: 'columnThreeContent',
      fourColumn: 'columnFourContent'
    },
    prepare ({title, oneColumn, twoColumn, threeColumn, fourColumn}) {
      let icon = Icon
      // let title = title
      if (fourColumn && fourColumn.length > 0) {
        title = `Four Column Layout: ${title}`
        icon = Icon4
      } else if (threeColumn && threeColumn.length > 0) {
        title = `Three Column Layout: ${title}`
        icon = Icon3
      } else if (twoColumn && twoColumn.length > 0) {
        title = `Two Column Layout: ${title}`
        icon = Icon2
      } else if (oneColumn && oneColumn.length > 0) {
        title = `One Column Layout: ${title}`
        icon = Icon
      } else {
        title = `NO CONTENT: ${title}`
        icon = Icon0
      }
      return {
        title: title,
        media: icon
      }
    }
  }
}
