import React from 'react'

/**
 * Couple of things to note:
 * - width and height is set to 1em
 * - fill is `currentColor` - this will ensure that the icon looks uniform and
 *   that the hover/active state works. You can of course render anything you
 *   would like here, but for plugins that are to be used in more than one
 *   studio, we suggest these rules are followed
 **/
export default () => (

  <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 512.352 512.352'><path fill='none' stroke='currentColor' d='M512.352 197.624h-195.6v-.016L258.704 1.16l-62.96 195.008H0L158.784 315.32 97.776 510.936l159.136-119.408 159.456 119.664-62.752-194.448 158.736-119.12zM385.68 468.152l-128.768-96.624-129.104 96.88 49.616-159.104-129.44-97.12h159.44l50.608-156.832L304.8 213.624h159.6l-129.488 97.184 50.768 157.344z' /></svg>

)
