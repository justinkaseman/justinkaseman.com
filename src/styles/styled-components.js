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

const fontsize = {
  extralarge: "4em",
  large: "1.9em",
  medium: "1.5em",
  small: "1em",
  extrasmall: "0.6em",
  tiny: "0.4em",
};

// Media Queries

const small = (...args) => css`
  @media screen and (max-width: 640px) {
    ${css(...args)};
  }
`;
const medium = (...args) => css`
  @media screen and (min-width: 641px) and (max-width: 1200px) {
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

const blink = keyframes`
  85.5% {
    color: inherit;
    text-shadow: inherit;
  }
  86%{
    color: #333;
  }
  87.5% {
    text-shadow: none;
  }
  88% {
    color: inherit;
    text-shadow: inherit;
  }
  89.5% {
    color: #333;
    text-shadow: none;
  }
  90% {
    color: inherit;
    text-shadow: inherit;
  }
  99% {
    color: #333;
    text-shadow: none;
  }
  99.5% {
    color: inherit;
    text-shadow: inherit;
  }
`;

const hop = keyframes`
  10% { transform: scale(1.1, .8) translateY(3%) }
  15% { transform: scale(.9, 1.1) translateY(-6%)}
  25% { transform: scale(1.05, .9) translateY(-10%) }
  30% { transform: scale(1) translateY(-8%) }
  40% { transform: scale(1.05, 1) translateY(0) }
  41% { transform: scale(1.1, .9) }
  50% { transform: translateY(-4%) }
  60% { transform: translateY(0) }
}`;

const point = keyframes`
  10% { transform: scale(1.1, .8) translateX(3%) }
  15% { transform: scale(.9, 1.1) translateX(-6%)}
  25% { transform: scale(1.05, .9) translateX(-10%) }
  30% { transform: scale(1) translateX(-8%) }
  40% { transform: scale(1.05, 1) translateX(0) }
  41% { transform: scale(1.1, .9) }
  50% { transform: translateX(-4%) }
  60% { transform: translateX(0) }
}`;

// Global

export const GlobalStyle = createGlobalStyle`
  
  @import url('https://fonts.googleapis.com/css?family=Montserrat');
  *, *:before, *:after {
    box-sizing: border-box;
  }
  body{
    font-family: "Monserrat", monospace, sans-serif;
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
  width: 100%;
  height: 100%;
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
  height: 1px;
  width: 1px;
  position: fixed;
  cursor: pointer;
  z-index: 15;
  font-family: Sullivan Regular;
  font-size: 8rem;
  transition: color 0.4s;
    
  ${props =>
    props.up ? "top: 0; margin-top: 44px; margin-left: 8px; left: 50%;" : null}
  ${props =>
    props.left
      ? "left: 0; margin-left: 40px; margin-top: -10px; top: 50%;"
      : null}
  ${props =>
    props.down
      ? "bottom: 0; margin-bottom: 140px; margin-left: 8px; left: 50%;"
      : null}
  ${props =>
    props.right
      ? "right: 0; margin-right: 120px; margin-top: -10px; top: 50%;"
      : null}

  ${props =>
    props.down ? "transform: translate3d(0,-50%,0) rotate(90deg);" : null}
  ${props =>
    props.up ? "transform: translate3d(0,-50%,0) rotate(90deg);" : null}
    
    ${props =>
      props.right || props.down
        ? `
    &:after {
      position: absolute;
      z-index: -1;
      content: "→";
      font-family: Sullivan Fill;
      top: 100%;
      left: 50%;
      height: 0;
      width: 0;
      color: white;
    }`
        : `&:after {
        position: absolute;
        z-index: -1;
        content: "←";
        font-family: Sullivan Fill;
        top: 100%;
        left: 50%;
        height: 0;
        width: 0;
        color: white;
      }`}

    &:hover {
      color: black;
    }
  }

  ${medium`
  ${props =>
    props.left
      ? "left: 0; margin-left: 10px; margin-top: -10px; top: 50%;"
      : null}
  ${props =>
    props.right
      ? "right: 0; margin-right: 98px; margin-top: -10px; top: 50%;"
      : null}
  } `}
`;

export const ArrowText = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  position: absolute;
  top: ${props =>
    props.direction === "up" || props.direction === "down" ? "-180" : "-260"}px;
  height: ${props => (props.length % 2 === 1 ? "50vh" : "70vh")};
  height: ${props => (props.length % 2 === 1 ? "50vh" : "70vh")};
  ${props => (props.direction === "left" ? "right: 8px;" : null)}
  ${props => (props.direction === "up" ? "left: -30px;" : null)}
  ${props => (props.direction === "down" ? "left: 94px;" : null)}
  ${props => (props.direction === "right" ? "left: 92px;" : null)}
  font-size: ${fontsize.tiny};

  ${medium`
  ${props => (props.direction === "left" ? "right: -24px;" : null)}
  ${props => (props.direction === "right" ? "left: 64px;" : null)}
  `}
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
`;

export const SectionMainTitle = styled.h1`
  position: absolute;
  font-family: Triumph Wheels;
  font-weight: 500;
  font-size: 7em;
  color: #fee;
  text-shadow: 0 -40px 100px, 0 0 2px, 0 0 1em #ff4444, 0 0 0.5em #ff4444,
    0 0 0.1em #ff4444, 0 10px 3px #000;
  > span {
    animation: ${blink} linear infinite 4s;
  }

  @media screen and (max-width: 900px) {
    visibility: hidden;
  }

  ${medium`
    top: 42px;
    font-size: 6em;
    right: -520px;
    width: 540px;
  `} ${large`
    top: 30px;
    right: -620px;
    width: 640px;
  `};
`;

export const SectionMainDescription = styled.body`
  padding-top: 20px;
  font-weight: 20;
  width: 100%;
  line-height: 30px;
  font-family: Monserrat;

  ${small`
    font-size: ${fontsize.small};
  `}
  ${medium`
    font-size: ${fontsize.medium};
  `}
  ${large`
    font-size: ${fontsize.large};
  `}
`;

export const SectionTitle = styled.h1`
  font-size: ${fontsize.extralarge};
  width: 50%;
`;

export const SectionDescription = styled.h2`
  width: 50%;
`;

export const IconContainer = styled.div`
  height: ${props => (props.height ? props.height : 80)}px;
  width: ${props => (props.width ? props.width : 80)}px;
  position: absolute;
  left: 50%;
  margin-left: ${props => (props.width ? "-46%" : "-80px")};
  margin-top: ${props => (props.height ? -props.height + 36 : -80)}px;
  top: 0;

  ${small`
height: 50px;
width: 50px;
position: absolute;
left: 0;
margin-left: -44px;
margin-top: -25px;
top: 50%;
`};
`;

export const Icon = styled.img`
  position: absolute;
  height: ${props => (props.height ? props.height : 80)}px;
  width: ${props => (props.width ? props.width : 80)}px;
  background: white;

  ${small`
height: 55px;
width: 55px;
`};
`;

export const SectionItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

  ${medium`
  > div {
  width: calc( ( 100% - ${spacing.double} ) / 2 );
  }
  > div:nth-child(2n) {
  margin-left: ${spacing.double};
  }
  `};

  ${large`
  > div {
    width: calc( ( 100% - ${spacing.double} ) / 2 );
  }
  > div:nth-child(2n) {
    margin-left: ${spacing.double};
  }
`};
`;

export const Item = styled.div`
  padding: 5px;
`;

export const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;

  ${medium`
  margin-top: 14px;
`};
`;

export const Social = styled.li`
  height: 100%;
  width: 70px;
  list-style: none;
  margin: 0 40px;

  > a {
    fill: #343434;
    &:hover {
      fill: black;
    }
  }

  ${medium`
  margin: 0 1%;
  `};
`;
