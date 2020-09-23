import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import { ReactComponent as CogIcon } from '../icons/cog.svg'
import { ReactComponent as ArrowIcon } from '../icons/arrow.svg'
import { ReactComponent as ListIcon } from '../icons/list.svg'
import { ReactComponent as LockIcon } from '../icons/lock.svg'
import { ReactComponent as GlobeIcon } from '../icons/globe.svg'

const DropdownMenu = () => {
  // We are going to call the menu main...though, this could be any name
  const [activeMenu, setActiveMenu] = useState('main')
  const [menuHeight, setMenuHeight] = useState(null)

  const calcHeight = (el) => {
    // Returns the height of an element
    const height = el.offsetHeight
    // Set the menuHeight state to the element's offset height
    setMenuHeight(height)
  }

  // Note: this is a component. You can create a separate component file if you wish. To make things 
  // simple later on, we have created it in here
  const DropdownItem = (props) => {
    return (
      <a
        href='#'
        className='menu-item'
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}> {/* If props.goToMenu, i.e., settings, set activeMenu to settings */}
        <span className='icon-button'>{props.leftIcon}</span>{/* Set icon. Note: you are not required to specify a prop for leftIcon */}
        {props.children} {/* Content of DropdownItem, i.e., Settings */}
      </a>
    )
  }

  return (
    <div className='dropdown' style={{ height: menuHeight }}> {/* Set the height of the dropdown menu to the menuHeight */}
      {/* CSSTransition controls the conditional logic for rendering & transition between multiple menus */}
      <CSSTransition
        in={activeMenu === 'main'} // If activeMenu is main, display the following menu div
        timeout={500} // When the icon is clicked, it will shift to the entering 
                      // state & stay there for 500ms before it switches to the entered state
        classNames='menu-primary'
        unmountOnExit // By default, the child components remains mounted after it reaches the 
                      // exited state. Set unmountOnExit to unmount the after it finishes exiting
        onEnter={calcHeight}> {/* Called immediately after the enter className is applied */}
        <div className='menu'>
          <DropdownItem>Grayson Orr</DropdownItem>
          <hr />
          <DropdownItem leftIcon={<CogIcon />} goToMenu='settings'>
            Settings
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'settings'} // If activeMenu is setting, display the following menu div
        timeout={500}
        classNames='menu-secondary'
        unmountOnExit
        onEnter={calcHeight}> {/* Returns the height of the five DropdownItem components */}
        <div className='menu'>
          <DropdownItem goToMenu='main' leftIcon={<ArrowIcon />}>
            <h2>Settings & Privacy</h2>
          </DropdownItem>
          <DropdownItem leftIcon={<CogIcon />}>Settings</DropdownItem>
          <DropdownItem leftIcon={<LockIcon />}>Privacy Shortcuts</DropdownItem>
          <DropdownItem leftIcon={<ListIcon />}>Activity Log</DropdownItem>
          <DropdownItem leftIcon={<GlobeIcon />}>Language</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  )
}

export default DropdownMenu
