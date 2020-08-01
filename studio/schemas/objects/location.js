export default {
  type: 'object',
  name: 'location',
  title: 'Location',
  fields: [
    {
      type: 'string',
      name: 'streetAddress',
      title: 'Street Address',
      validation: Rule => Rule.required()
    },
    {
      type: 'string',
      name: 'city',
      title: 'City',
      validation: Rule => Rule.required()
    },
    {
      type: 'string',
      name: 'state',
      title: 'State',
      validation: Rule => Rule.required()
    },
    {
      type: 'string',
      name: 'zipcode',
      title: 'Zipcode',
      validation: Rule => Rule.required()
    }
    // {
    //   name: 'geoPoint',
    //   type: 'geopoint',
    //   title: 'Latitude and Longitude',
    //   description: 'This is used to map this location'
    // }
  ]
}
