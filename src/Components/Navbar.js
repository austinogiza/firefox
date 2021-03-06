import React from 'react'
import styled from 'styled-components'
import logo from '../Assets/logo.svg'
import { themes } from '../Styles/Color'
const Navbar = () => {
  return (

      <Navbarwrap>
        <Container>
<Logowrap>
  <Logo src={logo}/>
</Logowrap>

<Navlink>
  <NavlinkUL>
    <Navlinkli>Home</Navlinkli>
    <Navlinkli>Product</Navlinkli>
    <Navlinkli>Faq</Navlinkli>
    <Navlinkli>Contact</Navlinkli>
  </NavlinkUL>
</Navlink>
        </Container>
      </Navbarwrap>

  )
}

const Navbarwrap = styled.div`

width: 100%;
min-height: 130px;
`
const Container = styled.div`
max-width: 1100px;
width: 100%;
display: grid;
grid-template-columns: repeat(2,1fr);
margin: 0 auto;
padding: 10px 25px;
`
const Logowrap = styled.div`
height: 102px;
width: 100%;
display: flex;
justify-content: flex-start;
align-items: flex-start;

`
const Logo = styled.img`
padding: 10px;
width: 100%;
height: 100%;
max-width: 246px;
`
const Navlink = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: flex-end;
align-items: flex-end;
@media only screen and (max-width: 800px){
  display: none;
}
`
const NavlinkUL = styled.ul`
width: 100%;
height: 100%;
display: flex;
flex-direction: row;
justify-content: space-evenly;
align-items: center;
`
const Navlinkli = styled.li`
list-style-type: none;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: 1.2;
transition: 0.3s ease-in;
text-align: center;
cursor: pointer;
color: #252B42;
:hover{
  color: ${themes.primary};
}
`
export default Navbar
