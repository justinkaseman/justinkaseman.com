import { createGlobalStyle, css, keyframes } from "styled-components";

import styled from "styled-components";

/* 
GLOBALS 
*/

const spacing = {
  quarter: "10px",
  half: "20px",
  single: "40px",
  double: "80px",
};

// Media Queries

const small = (...args) => css`
  @media screen and (max-width: 600px) {
    ${css(...args)};
  }
`;
const medium = (...args) => css`
  @media screen and (min-width: 601px) and (max-width: 1200px) {
    ${css(...args)};
  }
`;
const large = (...args) => css`
  @media screen and (min-width: 1201px) {
    ${css(...args)};
  }
`;

// Colors

const orangered = "#EB613D";
const blue = "#0000ff";
const black = "#282B2E";
const white = "#ffffff";
const grey = "#BBC0C6";

// Animations

const easeOutCubic = "cubic-bezier(0.215, 0.610, 0.355, 1.000)";

// Global

export const GlobalStyle = createGlobalStyle`
  
  @import url('https://fonts.googleapis.com/css?family=Space+Mono:400,700');
  *, *:before, *:after {
    box-sizing: border-box;
  }
  body{
    font-family: "Space Mono", monospace, sans-serif;
    font-variant-ligatures: no-common-ligatures
    padding: 0;
    margin: 0;
    color: ${black};
  }
  h1, h2, h3, h4, h5, h6{
    margin: 0 0 ${spacing.single} 0;
    line-height: 1.3;
  }
  p{
    margin: 0;
    line-height: 1.6;
  }
  a{
    color: ${orangered};
    text-decoration: none;
    font-weight: bold;
    &:hover{
      color: ${orangered};
      text-decoration: underline;
    }
  }
`;

/* 
TEMPLATES
*/

export const Layout = styled.div`
  line-height: 1.6;
  position: relative;
`;

export const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TextureContainer = styled.div`
  svg {
    position: absolute;
    top: 0px;
    bottom: 0px;
    right: 0px;
    left: 0px;
    height: 100%;
    width: 100%;
    z-index: 1;
  }
`;

export const SketchyContainer = styled.div`
  width: calc(100% + ${props => (props.offSetLeft ? props.offSetLeft : 4)}px);
  height: calc(
    101% + ${props => (props.offSetBottom ? props.offSetBottom : 0)}px
  );
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;

  svg {
    position: absolute;
    top: -2px;
    bottom: 0px;
    right: 0px;
    left: -${props => (props.offSetLeft ? props.offSetLeft : 3)}px;
    height: calc(
      102% + ${props => (props.offSetBottom ? props.offSetBottom : 0)}px
    );
    width: calc(
      100% + ${props => (props.offSetLeft ? props.offSetLeft : 10)}px
    );
  }
`;

export const BackgroundContainer = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0px;
  bottom: 0px;
  right: 0px;
  left: 0px;
  z-index: 1;
`;

/* 
COMPONENTS
*/

//Navigation

export const NavigationModal = styled.div`
  display: flex;
  position: fixed;
  z-index: 10;
  bottom: 2%;
  left: 3%;
  width: ${props => props.width}px;
  justify-content: space-between;

  ${medium`
  left: 2%;

  `} ${large`
  left: 1%;

  `};
`;

export const NavigationMap = styled.div`
  position: fixed;
  background: red;
  right: 1%;
  bottom: calc(50vh - 110px);
  height: 300px;
  width: 350px;
  z-index: 15;
`;

export const NavigationButton = styled.button`
  height: 60px;
  width: 60px;
  order: 0;
  box-shadow: 4px 4px rgba(0, 0, 0, 0.15);
  position: relative;
  cursor: pointer;

  &:active {
    border: 1px solid black;
  }
  &:focus {
    outline: none;
  }
`;

export const NavigationSubButton = styled.button`
  height: 60px;
  width: 60px;
  box-shadow: 4px 4px rgba(0, 0, 0, 0.15);
  position: relative;
  cursor: pointer;

  &:active {
    border: 1px solid black;
  }
  &:focus {
    outline: none;
  }
`;

export const Arrow = styled.div`
  height: 30px;
  width: 30px;
  position: fixed;
  ${props => (props.up ? "top: 4%; margin-left: -30px; left: 50%;" : null)}
  ${props => (props.left ? "margin-top: -15px; top: 50%; left: 3%;" : null)}
  ${props => (props.down ? "bottom: 1%; margin-left: -30px; left: 50%;" : null)}
  ${props => (props.right ? "right: 3%; margin-top: -15px; top: 50%;" : null)}
  cursor: pointer;
  z-index: 15;

	background: transparent;
	border-top: 1vmin solid white;
	border-right: 1vmin solid white;
	box-shadow: 0 0 0 lightgray;
  ${props =>
    props.up ? "transform: translate3d(0,-50%,0) rotate(-45deg);" : null}
  ${props =>
    props.left ? "transform: translate3d(0,-50%,0) rotate(-135deg);" : null}
  ${props =>
    props.down ? "transform: translate3d(0,-50%,0) rotate(135deg);" : null}
  ${props =>
    props.right ? "transform: translate3d(0,-50%,0) rotate(45deg);" : null}

`;

// Section

export const SectionContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  position: relative;
${small`
padding: 10px 10px 10px 10px;
`}
${medium`
padding: 20px 100px 20px 100px;
min-height: 100vh;
`}
${large`
padding: 40px 160px 40px 160px;
min-height: 100vh;
`}
`;

export const SectionContents = styled.div`
  position: relative;
  z-index: 5;
  background: ${white};
  box-shadow: 8px 8px rgba(0, 0, 0, 0.15);
  border-left: 40px solid #eee;
  width: 100%;
  ${small`
    padding: ${spacing.half} ${spacing.half};
  `}
  ${medium`
    padding: ${spacing.single} ${spacing.double};
  `}
  ${large`
    padding: ${spacing.single} ${spacing.double};
  `}
`;

export const SectionHeader = styled.div`
  background: ${white};
  height: 80%;
`;

export const SectionTitle = styled.h1`
  width: 50%;
`;

export const SectionDescription = styled.h2`
  width: 50%;
`;

export const SectionItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  ${large`
  > div {
    width: calc( ( 100% - ${spacing.double} ) / 2 );
  }
  > div:nth-child(2n) {
    margin-left: ${spacing.double};
  }
`};
`;

export const IconContainer = styled.div`
height: 80px;
width: 80px;
position: absolute;
left: 50%;
margin-left: -80px
margin-top: -50px;
top: 0;

${small`
height: 50px;
width: 50px;
position: absolute;
left: 0;
margin-left: -44px;
margin-top: -25px;
top: 50%;
`}
`;

export const Icon = styled.img`
  position: absolute;
  height: 80px;
  width: 80px;
`;

export const Item = styled.div`
  padding: 5px;
`;
