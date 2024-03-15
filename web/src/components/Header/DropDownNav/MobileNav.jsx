import React, {useEffect, useRef, useState} from 'react'
// import {menuItemsData} from '../menuItemsData'
import MobileMenuItems from './MobileMenuItems'

const MobileNav = ({data}) => {
  const depthLevel = 0
  const [showMenu, setShowMenu] = useState(false)
  let ref = useRef()

  useEffect(() => {
    const handler = (event) => {
      if (showMenu && ref.current && !ref.current.contains(event.target)) {
        setShowMenu(false)
      }
    }
    document.addEventListener('mousedown', handler)
    document.addEventListener('touchstart', handler)
    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', handler)
      document.removeEventListener('touchstart', handler)
    }
  }, [showMenu])
  // console.log({showMenu})
  return (
    <nav className='mobile-nav'>
      <button
        className={`mobile-nav__menu-button ${showMenu ? 'showMenu-active' : 'showMenu-inactive'}`}
        type='button'
        onClick={() => setShowMenu((prev) => !prev)}>
        Menu
      </button>

      {showMenu && (
        <ul className='menus' ref={ref}>
          {data?.map((menu, index) => {
            return (
              <MobileMenuItems
                items={menu}
                key={index}
                depthLevel={depthLevel}
                showMenu={showMenu}
                setShowMenu={setShowMenu}
              />
            )
          })}
        </ul>
      )}
    </nav>
  )
}

export default MobileNav
