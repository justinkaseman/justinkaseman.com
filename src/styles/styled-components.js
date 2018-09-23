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

export const BackgroundContainer = styled.div`
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

/* 
COMPONENTS
*/

export const NavigationModal = styled.div`
  background: brown;
  position: fixed;
  height: 60px;
  width: 60px;
  ${small`
    bottom: 3%;
    left: 6%;
  `}
  ${medium`
    right: 3%;
    bottom: 50vh;
  `}
  ${large`
    right: 3%;
    bottom: 50vh;
  `}
`;

export const SectionContainer = styled.div`
  background: grey;
  height: 80%;
`;

export const SectionContents = styled.div`
  background: grey;
  height: 80%;
`;

export const SectionHeader = styled.div`
  background: grey;
  height: 80%;
`;

export const SectionItems = styled.div`
  background: grey;
  height: 80%;
`;
