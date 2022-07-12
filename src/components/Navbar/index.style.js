// NAVBAR [ STYLE ] ############################################################

// 1. DEPENDENCIES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// 1. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2. FUNCTIONS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// 2. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3. STYLES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3.1 NAVBAR CONTAINER ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
export const NavbarContainer = styled.nav`
  width: 100%;
  height: ${props => (props.extendNavbar ? '100vh' : '65px')};
  background-color: #1635fc;
  display: flex;
  flex-direction: row;
  @media (min-width: 700px) {
    height: 65px;
  }
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  font-weight: bold;
  border-radius: 2px;
  margin-bottom: 1%;
`;
// 3.1 END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3.2 LEFT CONTAINER ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
export const LeftContainer = styled.div`
  flex: 30%;
  display: flex;
  padding-left: 5%;
`;
// 3.2 END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3.3 RIGHT CONTAINER +++++++++++++++++++++++++++++++++++++++++++++++++++++++++
export const RightContainer = styled.div`
  flex: 70%;
  display: flex;
  justify-content: flex-end;
  padding-right: 5%;
  align-items: center;
`;
// 3.3 END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3.4 NAVBAR INNER CONTAINER ++++++++++++++++++++++++++++++++++++++++++++++++++
export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
`;
// 3.4 END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3.5 NAVBAR LINK CONTAINER +++++++++++++++++++++++++++++++++++++++++++++++++++
export const NavbarLinkContainer = styled.div`
  display: flex;
`;
// 3.5 END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// 3.6 NAVBAR LINK +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
export const NavbarLink = styled(Link)`
  color: white;
  font-size: medium;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;
  @media (max-width: 700px) {
    display: none;
  }
`;
// 3.6 END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3.7 NAVBAR LINK EXTERNDED +++++++++++++++++++++++++++++++++++++++++++++++++++
export const NavbarLinkExtended = styled(Link)`
  color: white;
  font-size: x-large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;
`;
// 3.7 END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3.8 LOGO ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
export const Logo = styled.img`
  margin: 10px;
  max-width: 180px;
  height: auto;
`;
// 3.8 END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3.9 OPEN LINK BUTTON ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
export const OpenLinksButton = styled.button`
  width: 70px;
  height: 50px;
  background: none;
  border: none;
  color: white;
  font-size: 45px;
  cursor: pointer;
  @media (min-width: 700px) {
    display: none;
  }
`;
// 3.9 END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3.10 NAVBAR EXTERNDED CONTAINER +++++++++++++++++++++++++++++++++++++++++++++++
export const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 700px) {
    display: none;
  }
`;
// 3.10 END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// END OF FILE #################################################################
