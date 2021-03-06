import styled from "styled-components";
import { themes } from "./Color";

export const primaryButton = styled.button`
height: 64px;
max-width: 162px;
width:100%;
backface-visibility: hidden;
border-radius: 30px;
/* padding: 18px, 31px, 18px, 31px; */
background: #FA4A0C;
display: flex;
align-items: center;
justify-content: center;
outline: none;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: 1.4;
border: none;
color: ${themes.white};
transition: 0.3s ease-in;
:hover{
  background: ${themes.white};
  color: ${themes.primary};
}
` 


export const ghostButton = styled.button`
height: 64px;
max-width: 162px;
width:100%;
border-radius: 30px;
display: flex;
color: ${themes.white};
align-items: center;
justify-content: center;
/* padding: 18px, 31px, 18px, 31px; */
background: transparent;
border: 1px solid #FFFFFF;
outline: none;
backface-visibility: hidden;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: 1.4;
transition: 0.3s ease-in;
:hover{
  background: ${themes.white};
  color: ${themes.primary};
  border: none;
}
` 