import {Link, graphql, useStaticQuery} from 'gatsby'
import React, {useEffect, useState} from 'react'
// import Image from 'gatsby-image'
// import Navigation from './Navigation'

import Logo from '../../assets/svgs/logo.svg'

import {cn} from '../../lib/helpers'

import styles from './header.module.css'

// import MobileNav from './DropDownNav/MobileNav'
// import Navbar from './DropDownNav/Navbar'

import {NavDropdown, Container, Navbar, Nav} from 'react-bootstrap'
import {DropdownSubmenu, NavDropdownMenu} from 'react-bootstrap-submenu'
import 'bootstrap/dist/css/bootstrap.min.css'
import './react-bootstrap-submenu.css'

const SubMenu = ({items}) => {
  const renderMenuItems = (menuItems) => {
    return menuItems.map((item, index) => {
      if (item.submenu && item.submenu.length > 0) {
        return (
          <DropdownSubmenu key={index} title={item.title}>
            {renderMenuItems(item.submenu)}
          </DropdownSubmenu>
        )
      } else if (item.url) {
        return (
          <NavDropdown.Item key={index} href={item.url}>
            {item.title}
          </NavDropdown.Item>
        )
      } else {
        return null
      }
    })
  }

  return (
    <Nav className={styles.Nav}>
      {items.map((menuItem, index) => {
        if (menuItem.submenu && menuItem.submenu.length > 0) {
          return (
            <NavDropdownMenu
              key={index}
              title={menuItem.title}
              id={`menu-${index}`}
              alignRight
            >
              {renderMenuItems(menuItem.submenu)}
            </NavDropdownMenu>
          )
        } else if (menuItem.url) {
          return (
            <Nav.Item key={index}>
              <Nav.Link href={menuItem.url}>{menuItem.title}</Nav.Link>
            </Nav.Item>
          )
        } else {
          return null
        }
      })}
    </Nav>
  )
}

const Header = ({location, onHideNav, onShowNav, showNav, mainImage}) => {
  const [mobileStatus, setMobileStatus] = useState(false)
  // console.log({mainImage})
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        setMobileStatus(mobileStatus === false)
        // console.log('Close')
      }
    }
    window.addEventListener('keydown', handleEsc)

    return () => {
      window.removeEventListener('keydown', handleEsc)
    }
  }, [mobileStatus])

  const toggleMobileNav = e => {
    e.preventDefault()
    // console.log('click')
    setMobileStatus(mobileStatus === false)
  }

  const data = useStaticQuery(graphql`
  {
      mainNav:  sanityNavigation(_id: { eq: "mainNav" }) {
        links {
          _key
          title
          siteLink
          links {
            _key
            title
            siteLink
            links {
            _key
            title
            siteLink
            links {
            _key
            title
            siteLink
          }
          }
          }
        }
      }
  }
  `)
  // console.log(data.topMiniNav)
  function convertData (data) {
    function convertLinks (links) {
      return links.map(link => ({
        title: link.title,
        url: link.siteLink,
        submenu: link.links ? convertLinks(link.links) : []
      }))
    }

    return convertLinks(data.links)
  }
  const mainNav = convertData(data.mainNav)
  // console.log(mainNav)

  return (
    <>
      <div className={styles.root}>
        <div className={styles.wrapper} style={{zIndex: 2}}>
          <div className={styles.innerWrapper}>

            <Navbar expand='lg' variant='light' className={styles.NavBar}>
              <Container>
                <Navbar.Brand>
                  <div className={styles.branding}>
                    <Link to='/' aria-label='Logo'>
                      <span className={styles.logoWrapper}><Logo /></span>
                    </Link>
                  </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>

                  <SubMenu items={mainNav} />
                </Navbar.Collapse>
              </Container>
            </Navbar>

            {/* <nav className={styles.topMiniNav}>
              <Navigation nav={data.topMiniNav} />
            </nav>
            <div className={styles.branding}>
              <Link to='/' aria-label='Logo'>
                <span className={styles.logoWrapper}><Logo /></span>
              </Link>
            </div>
            <button className={mobileStatus ? styles.menuToggleOn : styles.menuToggle} onClick={toggleMobileNav} aria-label='Click this to toggle the main navigation'><span /></button>

            <nav className={cn(styles.nav, !mobileStatus ? styles.hideNav : styles.showNav)} role='navigation' aria-label='Main menu'>
              <Navigation nav={data.mainNav} main top={data.topMiniNav} />

              <Navbar data={mainNav} /> */}

            {/*  <MobileNav data={mainNav} /> */}

            {/* </nav> */}

          </div>
        </div>
      </div>

    </>
  )
}

export default Header
