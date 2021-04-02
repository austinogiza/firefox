import React from 'react'
import styled from 'styled-components'
import { themes } from '../Styles/Color'
import { Header, secondHeader, secondText, Text } from '../Styles/TextStyle'

const Work = () => {
  return (
  <>

<Workbody>

  <Workcontainer>
    <Worktitle>
      <Worktileh1>How the app works</Worktileh1>
    </Worktitle>

    <Workcover>
    <Accountimage>
        <Image src="https://res.cloudinary.com/austinogiza/image/upload/v1617356100/mockup02_xd93tt.png" alt="Food" />
      </Accountimage>
      <Accounttext>
        <Accounttexttitle>Create an account</Accounttexttitle>
        <Accounttextparagraph>
        Create/login to an existing
account to get started
        </Accounttextparagraph>
        <Accounttextdescription>An account is created with your email
and a desired password</Accounttextdescription>
      </Accounttext>
     
     
      <Exploretext>
        <Accounttexttitle>Explore varieties</Accounttexttitle>
        <Accounttextparagraph>
        Shop for your favorites
meal as e dey hot.
        </Accounttextparagraph>
        <Accounttextdescription>Shop for your favorite meals or drinks
and enjoy while doing it.</Accounttextdescription>
      </Exploretext>
      <Exploreimage>
      <Image src="https://res.cloudinary.com/austinogiza/image/upload/v1617356099/mockup03_umekxt.png" alt="Food" />
      </Exploreimage>
    
      <Checkoutimage>
      <Image src="https://res.cloudinary.com/austinogiza/image/upload/v1617356100/mockup01_rebbsl.png" alt="Food" />
      </Checkoutimage>
      <Checkouttext>
        <Accounttexttitle>Checkout</Accounttexttitle>
        <Accounttextparagraph>
        When you done check out
and get it delivered.
        </Accounttextparagraph>
        <Accounttextdescription>When you done check out and get it 
delivered with ease.</Accounttextdescription>
      </Checkouttext>
     
    </Workcover>
  </Workcontainer>
</Workbody>

  </>
  )
}

const Workbody = styled.div`
width: 100%;
min-height: 600px;
`
const Workcontainer = styled.div`
max-width: 1100px;
width: 100%;
height:100%;
display: flex;
flex-direction: column;
align-items: center;
margin: 0 auto;
`
const Worktitle = styled.div`
width: 100%;
min-height: 50px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin: 64px 0;
@media  only screen and (max-width: 650px){
  margin: 24px 0;
}
`
const Worktileh1 = styled(Header)`
color: ${themes.black};


`
const Workcover = styled.div`
width: 100%;
min-height: 600px;
display: grid;
grid-gap: 100px;
padding: 10px 20px;
grid-template-columns: repeat(2,1fr);
grid-auto-rows: minmax(300px, auto);
grid-template-areas: "AccountImage AccountText"
                      "Exploretext ExploreImage"
                      "CheckoutImage CheckoutText";
@media only screen and (max-width: 650px){
  grid-gap: 40px;
  grid-template-columns: repeat(1,1fr);
  grid-template-areas: "AccountImage"
  "AccountText"
  "ExploreImage"
  "Exploretext"
"CheckoutImage"
"CheckoutText";
}
`
const Accountimage = styled.div`
grid-area: AccountImage;
width: 100%;
min-height: 300px;
display: flex;
align-items: center;
justify-content: center;
`
const Image = styled.img`
min-height: 300px;
max-width: 300px;
width: 100%;
/* box-shadow:50px 30px 150px rgba(46, 4, 4, 0.05); */
`
const Accounttext = styled.div`
grid-area: AccountText;
width: 100%;
min-height: 300px;
display: flex;
align-items: flex-start;
justify-content: center;
flex-direction: column;
`
const Accounttexttitle = styled(secondHeader)`
color: ${themes.primary};
margin: 0;
`
const Accounttextparagraph = styled(Text)`
color: ${themes.text};
margin: 8px 0;
`
const Accounttextdescription = styled(secondText)`
color: ${themes.secondText};
margin: 0;
`
const Exploretext = styled.div`
grid-area: Exploretext;
width: 100%;
min-height: 300px;
display: flex;
align-items: flex-start;
justify-content: center;
flex-direction: column;
`
const Exploreimage = styled.div`
grid-area: ExploreImage;
width: 100%;
min-height: 300px;
display: flex;
align-items: center;
justify-content: center;
`
const Checkoutimage = styled.div`
grid-area: CheckoutImage;
width: 100%;
min-height: 300px;
display: flex;
align-items: center;
justify-content: center;
`
const Checkouttext = styled.div`
grid-area: CheckoutText;
width: 100%;
min-height: 300px;
display: flex;
align-items: flex-start;
justify-content: center;
flex-direction: column;
`


export default Work
