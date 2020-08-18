import React from 'react'
import PageNames from '../../const/PageNames'
import ButtonNavTab from '../buttons/ButtonNavTab'

const NavTabs = ({ currentPage, setCurrentPage }) => {

  const handleNavClick = pageName => setCurrentPage(pageName)

  const getDivIndicatorClass = pageName => currentPage === pageName ? 'div__indicator' : ''

  return (
    <nav className='nav__tabs'>
      {PageNames.map(pageName => (
        <ButtonNavTab
          key={pageName}
          text={pageName}
          onClick={() => handleNavClick(pageName)}
          indicatorClass={getDivIndicatorClass(pageName)}
        />
      ))}
    </nav>
  )
}

export default NavTabs
