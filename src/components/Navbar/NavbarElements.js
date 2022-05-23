import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

export const Nav = styled.nav`
  background-color: ${({scrollNav}) => (scrollNav ? '#0a3149' : '#fff')};
  height: 70px;
  font-family: inter;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  font-size: 1rem;
  position: sticky;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 70px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 100%;
`

export const NavLogoContainer = styled(LinkR)`
  display: flex;
  justify-self: flex-start;
  cursor: pointer;
  align-items: center;
`

export const NavLogo = styled.img`
  width: 70px;
  height: 70px;
`

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 770px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    color: ${({scrollNav}) => (scrollNav ? '#fff' : '#000')};
    cursor: pointer;
  }
`
export const NavMenu = styled.ul`
    display: flex;
    align-items: center:
    list-style: none:
    text-align: center;
    margin-right: -22px;
    font-size: 16px;
    font-family: 'Asap', sans-serif;
    color: ${({scrollNav}) => (scrollNav ? '#fff' : '#000')};


    @media screen and (max-width: 770px) {
        display: none;
    }
 `
export const NavItem = styled.li`
  height: 60px;
  list-style: none;

`

export const NavLinks = styled(LinkS)`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer 
  
  &.active {
    color: #3a56e8;
    border-bottom: 3px solid #3a56e8;
  }

  &:hover {
    color: #127cf9;
    cursor: pointer;
  }

`

export const NavButton = styled.nav`
  display: flex;
  align-items: center;
  max-width: 200px;

  @media screen and (max-width: 770px) {
    display: none;
  }
`

export const NavButtonLink = styled(LinkR)`
  background: #127cf9;
  display: flex;
  color: #fff;
  white-space: nowrap;
  text-align: center;
  border-radius: 3.84px;
  padding: 10px 19px;
  font-size: 16px;
  font-family: 'Inter';
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #00bbff;
    font-weight: 530;
    color: #fff;
  }
`
