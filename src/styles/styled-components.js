import { injectGlobal, css, keyframes } from "styled-components";

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

injectGlobal`
  
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

export const NavigationModal = styled.div`
  display: flex;
  position: fixed;
  z-index: 10;
  bottom: 2%;
  left: 1%;

  // ${small`
  //   justify-content: space-evenly;
  //   bottom: 3%;
  //   left: 6%;
  // `}
  // ${medium`
  //   right: 0;
  //   bottom: 50vh;
  //   flex-direction: column;
  // `}
  // ${large`
  //   right: 2%;
  //   bottom: 50vh;
  //   flex-direction: column;
  // `}
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
  border: none;
  box-shadow: 4px 4px rgba(0, 0, 0, 0.15);

  // ${medium`
  // order: 1;
  // `} ${large`
  // order: 1;
  // `};
`;

export const NavigationSubButton = styled.button`
  height: 60px;
  width: 60px;
  border: none;
  box-shadow: 4px 4px rgba(0, 0, 0, 0.15);
`;

export const SectionContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  position: relative;
${small`
padding: 10px 10px 10px 10px;
`}
${medium`
padding: 20px 80px 20px 80px;
min-height: 100vh;
`}
${large`
padding: 40px 120px 40px 120px;
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

export const Item = styled.div``;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Test = styled.p`
  transition: transform 300ms ease-in-out;
`;
