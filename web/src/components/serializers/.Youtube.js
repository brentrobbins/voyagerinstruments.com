import React from 'react'
import getYouTubeID from 'get-youtube-id'
import loadable from '@loadable/component'
//import YoutubePlayer from 'react-lazy-youtube'

function Youtube (props) {
  // console.log({props})
  const id = getYouTubeID(props.url)
  // const url = `https://www.youtube-nocookie.com/embed/${id}?modestbranding=1`
  if (!id) {
    return <div>Missing YouTube URL</div>
  }
  if (typeof window !== undefined) {
    const YoutubePlayer = loadable(() => import('react-lazy-youtube'));

    return <div style={{
      maxWidth: `${props.maxWidth ? props.maxWidth + 'px' : 'auto'}`, margin: '0 auto', width: '100%'}} >
      <div className="youtubeWrapper" style={{position: 'relative', paddingBottom: '56.25%'}} >
        {typeof window !== undefined ? (<YoutubePlayer id={id}  playerVars={{ playerVars: {rel: '0', modestbranding: '1' } }} imageSize='sddefault' noCookies='false' styles={{position: 'absolute', top: '0', left: '0', height: '100%', width: '100%'}} />) : (null)}
      </div>
    </div>
    // playerVars={{}}
  } else { // if window does not exist
    return null
  }
}
export default Youtube
