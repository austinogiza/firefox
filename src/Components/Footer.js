import React from 'react'
import styled from 'styled-components'
import logo from '../Assets/logo.svg'
import {  FaFacebookSquare,FaTwitter, FaInstagram} from 'react-icons/fa'
import { themes } from '../Styles/Color'
const Footer = () => {
  return (
 <Footerwrap>

   <Footercontainer>
     <FooterLogo>
       <Logo src={logo} alt="Food logo"/>
     </FooterLogo>
     <Footersocial>
     <Twittericon  color="#FA4A0C" />
   <FacebookIcon  color="#FA4A0C"/>
   <Instagramicon color="#FA4A0C"/>
     </Footersocial>
     <Footercredit>
       <p>Copyright &copy; {new Date().getFullYear()} Designed by  <a rel="noopener noreferrer" href="https://www.dribbble.com/Marv_arts" target="_blank">Marvis Dosa</a></p>
       <p>Built by Augustine Ogiza</p>
     </Footercredit>
   </Footercontainer>
 </Footerwrap>
  )
}


const Footerwrap = styled.div`
margin: 32px 0 0 0;
width: 100%;
min-height: 50px;
`
const Footercontainer = styled.div`
max-width: 1100px;
width: 100%;
min-height: 50px;
display: grid;
grid-template-columns: repeat(3,1fr);
margin: 16px auto;
grid-auto-rows: minmax(30px,auto);
padding: 10px 25px;
grid-gap: 20px;
@media only screen and (max-width:750px){
  grid-template-columns: repeat(1,1fr);
}
`
const FooterLogo = styled.div`
height: 102px;
width: 100%;
display: flex;
justify-content: flex-start;
align-items: flex-start;
@media only screen and (max-width:750px){
  align-items: center;
  justify-content: center;
}
`
const Logo = styled.img`
padding: 10px;
width: 100%;
max-width: 246px;
height: 100%;
`
const Footersocial = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;

width: 100%;
height: 100%;
`
const Instagramicon = styled(FaInstagram)`
height: 40px;
width: 40px;
cursor: pointer;
`
const Twittericon = styled(FaTwitter)`
height: 40px;
width: 40px;
cursor: pointer;
`
const FacebookIcon = styled(FaFacebookSquare)`
height: 40px;
width: 40px;
margin: 0 24px;
cursor: pointer;
`
const Footercredit = styled.div`
min-height: 18px;
/* max-width: 190px; */
width: 100%;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
p{
font-size: 12px;
font-style: normal;
font-weight: 700;
line-height: 1.4;
margin: 4px 0;
color: ${themes.secondText};

a{
  color: ${themes.primary};
  transition: 0.3s ease-in;
  :hover{
    color: ${themes.black};
  }
}
}
@media only screen and (max-width:750px){
  align-items: center;
}
`
export default Footer
