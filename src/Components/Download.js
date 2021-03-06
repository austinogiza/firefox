import React from 'react'
import styled from 'styled-components'
import { Header ,secondText} from '../Styles/TextStyle'
import { themes } from '../Styles/Color'
import { ghostButton,primaryButton } from '../Styles/Button'
import background from '../Assets/background.png'

const Download = () => {
  return (
   <>

     <Downloadbody>
       <Downloadcontainer>
         <Headertitle>Download the app now.</Headertitle>
         <Downloadtext>Available on your favorite store. Start your premium experience now</Downloadtext>
         <Downloadbuttons>
           <Playstore>Playstore</Playstore>
           <Appstore>App store</Appstore>
         </Downloadbuttons>
       </Downloadcontainer>
     </Downloadbody>
   </>
  )
}

const Downloadbody = styled.div`
margin: 80px 0;
width: 100%;
min-height: 500px;
background: url(${background}) no-repeat center center/cover;
position: relative;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
z-index: 1;
::after{
  position: absolute;
  content:"";
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(37, 43, 66, 0.4);
  z-index: -1;
}
`
const Downloadcontainer = styled.div`
max-width: 1100px;
width: 100%;
min-height: 400px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin: 0 auto;
padding: 10px 25px;
`
const Headertitle = styled(Header)`
margin:10px 0; 
color: ${themes.white};
position: relative;
z-index: 1;
`
const Downloadtext = styled(secondText)`
margin:0;
color: ${themes.white};
position: relative;
z-index: 1;
`
const Downloadbuttons = styled.div`
margin:40px 0;
width: 100%;
min-height: 60px;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
position: relative;
z-index: 1;
`
const Playstore = styled(primaryButton)`
margin: 8px;
`
const Appstore = styled(ghostButton)`
margin: 8px;
`

export default Download
