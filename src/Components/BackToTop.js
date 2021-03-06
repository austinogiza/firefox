import React, {useState, useEffect} from 'react'
import styled, {keyframes}from 'styled-components'
import { themes } from '../Styles/Color'
import {BsChevronUp} from 'react-icons/bs'
const BackToTop = () => {

 
  const [hide, setHide] = useState(true)

  const handleBackTo =()=>{
window.scrollTo(0,0);
  }
const showButton =()=>{
  if(window.pageYOffset > 100){
    setHide(true)
  }else{
    setHide(false)
  }
}
  useEffect(() => {
 
window.addEventListener("scroll", showButton)

  }, [])
  return (
    <div>
  <Topbutton show={hide} onClick={handleBackTo}>
   <Button> <Topicon color="#fff"/></Button>
  </Topbutton>    
    </div>
  )
}

const animation = keyframes`
0%{
  transform: translateY(-15px);
}
50%{
  transform: translateY(-10px);
}

100%{
  transform: translateY(0px);
}

`

const Topbutton = styled.div`
width: 60px;
height: 60px;
background: ${themes.primary};
border-radius: 50%;
position: fixed;
right: 20px;
bottom: 30px;
cursor: pointer;
z-index: 50;
animation: ${animation} 2.1s infinite alternate-reverse;
display: ${props=> props.show ? "block" : 'none'};
`


const Button = styled.div`
width: 60px;
height: 60px;
display: flex;
justify-content: center;
align-items: center;
`
const Topicon = styled(BsChevronUp)`

width: 24px;
height: 24px;
`

export default BackToTop
