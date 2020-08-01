import React from 'react'
import BlogView from '../viewComponents/BlogView'
import CommunityPartnerView from '../viewComponents/CommunityPartnerView'
import StaffView from '../viewComponents/StaffView'
import BoardView from '../viewComponents/BoardView'
import CfDonate from '../viewComponents/CfDonate'
import CfSchoolFees from '../viewComponents/CfSchoolFees'
import WfContact from '../viewComponents/WfContact'
import WfFacilityRental from '../viewComponents/WfFacilityRental'
import GoogleSearch from '../viewComponents/GoogleSearch'

import styles from './contentviews.module.css'

export default ({contentView}) => {
  // console.log({contentView})
  return (
    <div className={` ${styles.contentviews__wrapper}`}>
      {contentView === 'blogPostView' && (<BlogView />)}
      {contentView === 'communityPartnerView' && (<CommunityPartnerView />)}
      {contentView === 'staffView' && (<StaffView />)}
      {contentView === 'boardView' && (<BoardView />)}
      {contentView === 'cfDonate' && (<CfDonate />)}
      {contentView === 'cfSchoolFees' && (<CfSchoolFees />)}
      {contentView === 'wfContact' && (<WfContact />)}
      {contentView === 'wfFacilityRental' && (<WfFacilityRental />)}
      {contentView === 'googleSearch' && (<GoogleSearch />)}
    </div>
  )
}
