import { css, keyframes } from "styled-components";

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
  extralarge: "3em",
  large: "2.2em",
  medium: "1.7em",
  small: "1em",
  extrasmall: "0.6em",
  tiny: "0.4em",
};

// Media Queries

const small = (...args) => css`
  @media screen and (min-width: 230px) {
    ${css(...args)};
  }
`;
const medium = (...args) => css`
  @media screen and (min-width: 641px) {
    ${css(...args)};
  }
`;
const large = (...args) => css`
  @media screen and (min-width: 1201px) {
    ${css(...args)};
  }
`;

// Colors

// const orangered = "#EB613D";
// const blue = "#0000ff";
// const black = "#282B2E";
const white = "#ffffff";
// const grey = "#BBC0C6";

// Animations

// const easeOutCubic = "cubic-bezier(0.215, 0.610, 0.355, 1.000)";

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

/* 
TEMPLATES
*/

export const Layout = styled.div`
  line-height: 1.6;
  position: relative;
`;

export const Wrapper = styled.div`
  min-height: 100vh;
  width: 100vw;
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
  width: calc(100% + 2px);
  height: calc(100% + 2px);
  position: absolute;
  top: 0px;
  left: -1px;
  z-index: -1;

  svg {
    height: 100%;
    width: 100%;
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

export const NavigationModal = styled.nav`
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

export const NavigationMap = styled.nav`
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
  height: 17px;
  width: 66px;
  position: absolute;
  cursor: pointer;
  z-index: 999;
  font-family: Sullivan Regular;
  transition: color 0.4s;
  font-size: 110px;

  &:hover {
    color: black;
  }

  ${props =>
    props.up &&
    `top: 0;
    margin-top: 88px;
    margin-left: -32px;
    left: 50%;
    transform: rotate(90deg);`}
  ${props =>
    props.left &&
    `left: 0;
    margin-left: 26px;
    margin-top: -12px;
    top: 50%;`}
  ${props =>
    props.down &&
    `bottom: 0;
    margin-bottom: 84px;
    margin-left: -32px;
    left: 50%;
    transform: rotate(90deg);`}
  ${props =>
    props.right &&
    `right: 0;
    margin-right: 26px;
    margin-bottom: -5px;
    bottom: 50%;`}

   ${props =>
     props.right || props.down
       ? `&:after {
        z-index: -1;
        content: "→";
        font-family: Sullivan Fill;
        position: absolute;
        top: 0;
        left: 0;
        color: ${white};
        font-size: 110px;
  }`
       : `&:after {
        z-index: -1;
        content: "←";
        font-family: Sullivan Fill;
        position: absolute;
        top: 0;
        left: 0;
        color: ${white};
        font-size: 110px;
  }`}
`;

export const ArrowText = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  position: absolute;
  top: ${props =>
    props.direction === "up" || props.direction === "down" ? "-180" : "-260"}px;
  height: ${props => (props.length % 2 === 1 ? "380px" : "540px")};
  ${props => props.direction === "left" && "right: 56px;"}
  ${props => props.direction === "up" && "left: -34px;"}
  ${props => props.direction === "down" && "left: 76px;"}
  ${props => props.direction === "right" && "left: 60px;"}
  font-size: 54px;
`;

// Section

export const SectionContainer = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;
  height: 100%;

  ${small`
    padding: 10px 10px 10px 10px;
  `} ${medium`
    padding: 20px 100px 20px 100px;
    min-height: 100vh;
  `} ${large`
    padding: 40px 150px 40px 150px;
    min-height: 100vh;
  `};
`;

export const SectionContainerMain = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;
  height: 100%;

  ${small`
    padding: 20px 10px 10px 10px;
  `}
  ${medium`
    padding: 70px 100px 20px 100px;
    min-height: 100vh;
  `}
  ${large`
    padding: 120px 150px 40px 150px;
    min-height: 100vh;
  `};
`;

export const SectionContents = styled.section`
  position: relative;
  z-index: 5;
  background: ${white};
  box-shadow: 8px 8px rgba(0, 0, 0, 0.15);
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

export const SectionHeader = styled.header`
  background: ${white};
`;

export const SectionMainTitle = styled.h1`
  position: absolute;
  font-family: Triumph Wheels, Arial;
  font-weight: 500;
  color: #fee;
  text-shadow: 0 -40px 100px, 0 0 2px, 0 0 1em #ff4444, 0 0 0.5em #ff4444,
    0 0 0.1em #ff4444, 0 10px 3px #000;
  pointer-events: none;
  top: -90px;
  font-size: 95px;
  width: 70%;
  left: 180px;

  &:after {
    position: absolute;
    z-index: -10;
    content: "";
    font-family: Sullivan Fill;
    top: 40px;
    left: 0;
    height: 40%;
    width: 100%;
    color: ${white};
    background: #afafaf;
    box-sizing: content-box;
    opacity: 0.7;
  }

  > span {
    animation: ${blink} linear infinite 4s;
  }

  @media screen and (max-width: 900px) {
    visibility: hidden;
  }

  ${large`
    font-size: 115px;
    top: -100px;
  `};
`;

export const SectionMainDescription = styled.p`
  margin-top: 60px;
  font-weight: 20;
  width: 100%;
  line-height: 30px;
  font-family: "Federo Regular";
  font-size: ${fontsize.medium};
  text-align: center;

  ${small`
    padding: 20px 40px;
  `} ${medium`
    margin-top: 30px;
  `};
`;

export const SectionTitle = styled.h1`
  ${small`
    font-size: ${fontsize.medium};
  `}
  ${medium`
    font-size: ${fontsize.medium};
  `}
  ${large`
    font-size: ${fontsize.large};
  `}
`;

export const SectionDescription = styled.h2``;

export const IconContainer = styled.div`
  height: ${props => (props.height ? props.height : 22)}px;
  width: ${props => (props.width ? props.width : 22)}px;
  position: absolute;
  left: 35%;
  margin-top: -80px;

  ${medium`
  height: ${props => (props.height ? props.height : 72)}px;
  width: ${props => (props.width ? props.width : 72)}px;
  position: absolute;
  left: -8%;
  top: 4%;
`}

  @media screen and (min-width: 900px) {
    height: ${props => (props.height ? props.height : 72)}px;
    width: ${props => (props.width ? props.width : 72)}px;
    position: absolute;
    left: 5%;
    top: -10%;
  }
`;

export const SectionItems = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

  ${medium`
  > div {
  width: 100%;
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
  padding: 10px;
  transition: all .2s ease-in-out;

  &:hover {
    transform: scale(1.05);
    }
  }
`;

export const ItemIcon = styled.img`
  width: 70px;
  height: 70px;
  margin-right: 10px;
  border-radius: 50%;
  margin-bottom: 20px;

  ${medium`
  width: 50px;
  height: 50px;
  margin-bottom: 20px;
  `};
`;

export const ItemIconAlt = styled.h2`
  font-family: Triumph Wheels;
  font-size: 2.4rem;
  margin-right: 10px;

  ${medium`
  font-size: 2rem;
  `};
`;

export const ItemTitle = styled.h3`
  padding: 10px;

  ${medium`
  font-size: 1.2em;
  `};
`;

export const ItemDescription = styled.p`
  margin: 0 5%;
  font-family: Lucida Sans Unicode, Lucida Grande, sans-serif;

  ${medium`
  margin: 0 20px;
  font-size: 1.2em;
  `};
  ${large`
  min-height: 100px;
  `};
`;

export const SectionBody = styled.article`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 10px;
`;

export const SocialLinks = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 10px;

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
    fill: #4e4e4e;
    &:hover {
      fill: black;
    }
  }

  ${small`
  margin: 0 10px;
`};

  ${medium`
  margin: 0 1%;
  `};
`;

export const MapNavigationButton = styled.button`
  box-shadow: 4px 4px rgba(0, 0, 0, 0.15);
  -webkit-box-shadow: 4px 4px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 4px 4px rgba(0, 0, 0, 0.15);
  cursor: pointer;

  &:active {
    background: rgba(0, 0, 0, 0.15);
    -webkit-box-shadow: inset 0px 0px 5px #c1c1c1;
    -moz-box-shadow: inset 0px 0px 5px #c1c1c1;
    box-shadow: inset 0px 0px 5px #c1c1c1;
    outline: none;
  }
  &:focus {
    outline: none;
  }
`;
