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
  large: "1.9em",
  medium: "1.7em",
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

export const Arrow = styled.nav`
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
      color: ${white};
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
        color: ${white};
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
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;

  ${small`
    padding: 10px 10px 10px 10px;
  `}
  ${medium`
    padding: 20px 100px 20px 100px;
    min-height: 100vh;
  `}
  ${large`
    padding: 40px 150px 40px 150px;
    min-height: 100vh;
  `}
`;

export const SectionContents = styled.section`
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

export const SectionHeader = styled.header`
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
  pointer-events: none;

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
    background: grey;
  }

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

export const SectionMainDescription = styled.p`
  margin-top: 60px;
  font-weight: 20;
  width: 100%;
  line-height: 30px;
  font-family: "Federo Regular";

  ${small`
    padding: 20px 40px;
    font-size: ${fontsize.medium};
  `}
  ${medium`
    font-size: ${fontsize.medium};
    margin-top: 30px;
  `}
  ${large`
    font-size: ${fontsize.large};
  `}
`;

export const SectionTitle = styled.h1`
  ${small`
    font-size: ${fontsize.medium};
  `}
  ${medium`
    font-size: ${fontsize.large};
  `}
  ${large`
    font-size: ${fontsize.extralarge};
  `}
`;

export const SectionDescription = styled.h2``;

export const IconContainer = styled.div`
  height: ${props => (props.height ? props.height : 77)}px;
  width: ${props => (props.width ? props.width : 77)}px;
  position: absolute;
  left: 50%;
  margin-left: ${props => (props.width ? "-46%" : "-52%")};
  margin-top: ${props => (props.height ? -props.height + 36 : 40)}px;
  top: 0;

  ${small`
    height: ${props => (props.height ? props.height - 80 : 50)}px;
    width: ${props => (props.width ? props.width - 80 : 50)}px; 
    position: absolute;
    left: 0;
    margin-left: -46px;
    margin-top: ${props => (props.height ? "-50px" : "-25px")};
    top: 50%;
  `};
`;

export const Icon = styled.img`
  position: absolute;
  height: ${props => (props.height ? props.height : 80)}px;
  width: ${props => (props.width ? props.width : 80)}px;
  background: ${white};
  pointer-events: none;

  ${small`
  height: ${props => (props.height ? 90 : 55)}px;
  width: ${props => (props.width ? 88 : 55)}px;
  `};
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
  border-radius: 10%;
  margin-bottom: 20px;

  ${medium`
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
  `};
`;

export const ItemIconAlt = styled.h2`
  font-family: Triumph Wheels;
  font-size: 2.4rem;
  margin-right: 10px;

  ${medium`
  font-size: 1.6rem;
  margin-bottom: 10px;
  `};
`;

export const ItemTitle = styled.h3`
  padding: 10px;

  ${medium`
  font-size: 1em;
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
    fill: #343434;
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
