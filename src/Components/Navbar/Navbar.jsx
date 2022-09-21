import React from 'react'
import DigitalClock from '../DigitalClock/DigitalClock'
import Weather from '../Weather/Weather'
import { Nav, NavBarContainer } from './NavbarElements'

const Navbar = () => {
  return (
    <div>
        <Nav>
            <NavBarContainer>
                <DigitalClock/>
                <Weather/>
            </NavBarContainer>
        </Nav>
    </div>
  )
}

export default Navbar