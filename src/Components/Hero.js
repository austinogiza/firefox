import React from 'react'
import styled from 'styled-components'
import { themes } from '../Styles/Color'
import { secondHeader,largeHeader ,secondTextLight} from '../Styles/TextStyle'
import { ghostButton,primaryButton } from '../Styles/Button'
const background = "https://res.cloudinary.com/austinogiza/image/upload/v1617356101/hero-2_dwtos0.jpg"
const mockup = "https://res.cloudinary.com/austinogiza/image/upload/v1617356100/mockup_neczbz.png"


const Hero = () => {

  return (
  <Herobody>
<Topsection>
<Headtextwrap><Headersmalltitle>Food app.</Headersmalltitle>
<Headertitle>Why stay hungry when you can order from Bella Onojie</Headertitle>
         <Downloadtext>Download the bella onoje’s food app now on</Downloadtext></Headtextwrap>
         <Downloadbuttons>
           <Playstore>Playstore</Playstore>
           <Appstore>App store</Appstore>
         </Downloadbuttons>
</Topsection>
<BottomSection>
<Mock>
<Mockup src={mockup}/></Mock>
<LineBreak/>
</BottomSection>

  </Herobody>
  )
}

const Herobody = styled.div`
width: 100%;
min-height: 400px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const Topsection = styled.div`
width: 100%;
min-height: 610px;
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
  background: rgba(0,17,8,0.6);
  z-index: -1;
}
`


const Headtextwrap = styled.div`
max-width: 900px;
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
padding: 10px 25px;
`
const Headersmalltitle = styled(secondHeader)`
margin:0;
color: ${themes.white};
position: relative;
z-index: 1;
`
const Headertitle = styled(largeHeader)`
margin:16px 0;
color: ${themes.white};
position: relative;
z-index: 1;
`
const Downloadtext = styled(secondTextLight)`
margin:0;
color: ${themes.white};
position: relative;
z-index: 1;
`
const Downloadbuttons = styled.div `
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
const Playstore = styled(primaryButton) `
margin: 8px;
`
const Appstore = styled(ghostButton)`
margin: 8px;
`
const BottomSection = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 700px;
max-width: 708px;
width: 100%;
z-index: 40;
position: relative;
padding: 10px 25px;
`

const Mock = styled.div`
width: 100%;
height: 100%;
`
const Mockup = styled.img`
max-height: 640px;
max-width: 550px;
position: absolute;
top: -20px;
left: 50%;
width: 100%;
height: 100%;
transform: translate(-50%,-20%);

@media only screen and (max-width: 650px){
  max-width: 422px;
  width: 100%;
height: 492px;
top: 0px;
transform: translate(-50%,10%);
}
`
const LineBreak = styled.div`
max-width: 884px;
height: 3px;
width: 100%;
background: #E4E4E4;
`

export default Hero
