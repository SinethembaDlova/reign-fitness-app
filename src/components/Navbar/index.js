// ARCHITECT-CONTAINERS [ SECTION ] ############################################

// 1. DEPENDENCIES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
import React, { useState } from 'react';
import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavbarExtendedContainer,
  NavbarInnerContainer,
  NavbarLinkContainer,
  NavbarLink,
  //   Logo,
  OpenLinksButton,
  NavbarLinkExtended
} from './index.style';
// import LogoImg from "../assets/logo.png";

// 1. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2. COMPONENT ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const Navbar = () => {
  // 2.1. FUNCTIONS ............................................................
  const [extendNavbar, setExtendNavbar] = useState(false);
  // 2.1. END ..................................................................

  // 2.2. RENDER COMPONENT .....................................................
  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          {/* <Logo src={LogoImg}></Logo> */}
        </LeftContainer>
        <RightContainer>
          <NavbarLinkContainer>
            <NavbarLink to="/"> MEMBERSHIPS</NavbarLink>
            <NavbarLink to="/products"> CLUBS</NavbarLink>
            <NavbarLink to="/about"> ABOUT US</NavbarLink>
            <NavbarLink to="/contact"> CONTACT US</NavbarLink>
            <OpenLinksButton
              onClick={() => {
                setExtendNavbar(curr => !curr);
              }}
            >
              {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
            </OpenLinksButton>
          </NavbarLinkContainer>
        </RightContainer>
      </NavbarInnerContainer>
      {extendNavbar && (
        <NavbarExtendedContainer>
          <NavbarLinkExtended to="/"> Home</NavbarLinkExtended>
          <NavbarLinkExtended to="/clubs">
            {' '}
            Products
          </NavbarLinkExtended>
          <NavbarLinkExtended to="/contact">
            {' '}
            Contact Us
          </NavbarLinkExtended>
          <NavbarLinkExtended to="/about">
            {' '}
            About Us
          </NavbarLinkExtended>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
  // 2.2. END ..................................................................
};

// 2. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3. PROP-TYPES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export default Navbar;

// END OF FILE #################################################################
