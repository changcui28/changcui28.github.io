import React from 'react'
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, SocialMediaIcons, SocialMediaIcon, ButtonContainer, MobileIcon, MobileMenu,  MobileLink } from './NavbarStyledComponent'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { FaBars } from 'react-icons/fa';
import { Bio } from '../../data/constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>
           <Span>Claire Cui</Span>
        </NavLogo>

        <MobileIcon>
          <FaBars onClick={() => {
            setIsOpen(!isOpen)
          }} />
        </MobileIcon>

        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href='#education'>Education</NavLink>
          <NavLink href='#skills'>Skills</NavLink>
          <NavLink href='#projects'>Projects</NavLink>
          <NavLink href='#experience'>Experience</NavLink>
        </NavItems>

        <ButtonContainer>
          <SocialMediaIcons>
          <SocialMediaIcon href={Bio.linkedin} target="display"><LinkedInIcon /></SocialMediaIcon>
          <SocialMediaIcon href={Bio.github} target="display"><GitHubIcon /></SocialMediaIcon>
        </SocialMediaIcons>
        </ButtonContainer>

        {
          isOpen &&
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="#about" onClick={() => {
              setIsOpen(!isOpen)
            }}>About</MobileLink>
             <MobileLink href='#education' onClick={() => {
              setIsOpen(!isOpen)
            }}>Education</MobileLink>
            <MobileLink href='#skills' onClick={() => {
              setIsOpen(!isOpen)
            }}>Skills</MobileLink>
            <MobileLink href='#projects' onClick={() => {
              setIsOpen(!isOpen)
            }}>Projects</MobileLink>
            <MobileLink href='#experience' onClick={() => {
              setIsOpen(!isOpen)
            }}>Experience</MobileLink>
            <SocialMediaIcons style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <SocialMediaIcon href={Bio.linkedin} target="display"><LinkedInIcon /></SocialMediaIcon>
            <SocialMediaIcon href={Bio.github} target="display"><GitHubIcon /></SocialMediaIcon>
             </SocialMediaIcons>
          </MobileMenu>
        }
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar