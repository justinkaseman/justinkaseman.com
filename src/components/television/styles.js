import { css, keyframes } from "styled-components";
import styled from "styled-components";

/* 
Adapted from:

Copyright (c) 2020 by Roque Ribeiro (https://codepen.io/roqueribeiro/pen/GZNgzY)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

const crtImage = keyframes`
    0% {
        transform: translateY(-1px);
    }

    100% {
        transform: translateY(0px);
    }
`;

const crtPixels = keyframes`
    0% {
        transform: translateY(-3px);
    }

    100% {
        transform: translateY(0px);
    }
`;

const noise = keyframes`
    0% {
        background-position: 0px 1000px;
    }

    50% {
        background-position: -900px;
    }

    100% {
        background-position: 100px 0px;
    }
`;

const noiseeffect = keyframes`
    0% {
        top: -20%;
        opacity: 0;
    }

    20% {
        opacity: 0;
    }

    50% {
        opacity: 0.8;
    }

    80% {
        opacity: 0;
    }

    100% {
        top: 100%;
        opacity: 0;
    }
`;

const scrollLeft = keyframes`
    from   { 
        transform: translateX(0%); 		
    }
    to { 
        transform: translateX(-100%); 
    }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;

  @media screen and (min-width: 1400px) {
    justify-content: center;
  }

  @media screen and (max-width: 900px) {
    justify-content: center;
  }
`;

export const Tv = styled.div`
  position: absolute;
  width: 908px;
  height: 504px;
  background: #333;
  background-image: url(data:image/png;base64,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);
  padding: 20px;
  border-radius: 8px;
  border-bottom: 4px #222 solid;
  //   box-shadow: inset 0 -220px 200px rgba(0, 0, 0, 0.5),
  //     50px 2px 20px rgba(0, 0, 0, 0.4), -50px 2px 20px rgba(0, 0, 0, 0.4);
  -moz-transform: scale(1.13);
  -ms-transform: scale(1.13);
  -o-transform: scale(1.13);
  -webkit-transform: scale(1.13);
  transform: scale(1.13);
  z-index: 600;

  @media screen and (max-width: 1400px) {
    margin-left: 5%;
  }

  @media screen and (max-width: 1200px) {
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    -o-transform: scale(1);
    -webkit-transform: scale(1);
    transform: scale(1);
    margin-left: 1%;
  }

  @media screen and (max-width: 1000px) {
    width: 710px;
    height: 605px;
  }

  @media screen and (max-width: 800px) {
    -moz-transform: scale(0.85);
    -ms-transform: scale(0.85);
    -o-transform: scale(0.85);
    -webkit-transform: scale(0.85);
    transform: scale(0.85);
    margin-left: 5%;
  }
`;

export const Screen = styled.div`
  position: relative;
  display: inline-block;
  padding: 30px;
  border-radius: 8px;
  background: #444;
  border: 3px #aaa solid;
  box-shadow: 0 10px 8px rgba(0, 0, 0, 0.4);
  vertical-align: top;

  &:before {
    content: " ";
    position: absolute;
    top: 0;
    left: 0;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    border-style: solid;
    border-width: 80px 90px 77px 90px;
    border-color: rgba(0, 0, 0, 0.4) rgba(0, 0, 0, 0.2) rgba(0, 0, 0, 0)
      rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  &:after {
    content: " ";
    position: absolute;
    top: 0;
    left: 0;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    background: radial-gradient(rgba(0, 0, 0, 0.7) 50%, transparent 100%),
      linear-gradient(rgba(0, 0, 0, 0.1) 10%, transparent);
    z-index: 2;
  }
`;

export const Speaker = styled.div`
  position: absolute;
  width: 200px;
  height: 230px;
  top: 20px;
  right: 20px;
  padding: 10px;
  box-sizing: border-box;

  &:before {
    content: " ";
    position: absolute;
    top: 0%;
    left: 15px;
    right: 0%;
    bottom: 0%;
    background: repeating-linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.1) 0px,
      rgba(0, 0, 0, 0.2) 5px,
      rgba(0, 0, 0, 0.2) 6px,
      rgba(0, 0, 0, 0) 5px,
      rgba(0, 0, 0, 0.6) 10px
    );
    border-radius: 20px;
    border: 2px #111 solid;
    box-shadow: 0 1px 3px rgba(255, 255, 255, 0.5),
      0 4px 15px rgba(0, 0, 0, 0.6);
    z-index: 2;
  }

  &:after {
    content: " ";
    position: absolute;
    height: 180px;
    left: 50px;
    right: 38px;
    bottom: 26px;
    background: #222;
    border-radius: 100% / 100%;
    box-shadow: inset 0 1px rgba(0, 0, 0, 1);
    opacity: 0.1;
    z-index: 1;
  }

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

export const Volume = styled.div`
  position: absolute;
  width: 180px;
  height: 40px;
  right: 20px;
  bottom: 88px;
  border-radius: 4px;
  box-shadow: inset 2px 2px rgba(255, 255, 255, 0.1),
    inset -2px -2px rgba(0, 0, 0, 0.3), 0 1px 1px rgba(255, 255, 255, 0.2),
    0 4px 10px rgba(0, 0, 0, 0.4);
  border: 2px #000 solid;

  &:after {
    content: " Volume ";
    position: absolute;
    font-family: Arial;
    font-size: 10px;
    color: #ccc;
    width: 100px;
    height: 5px;
    top: 18px;
    left: 100px;
    bottom: 30px;
    line-height: 5px;
    text-indent: 12px;
    overflow: visible;
  }

  @media screen and (max-width: 1000px) {
    bottom: 34px;
    right: 270px;
  }
`;

export const ChannelUp = styled.div`
  position: absolute;
  width: 180px;
  height: 40px;
  right: 20px;
  bottom: 190px;
  border-radius: 4px;
  box-shadow: inset 2px 2px rgba(255, 255, 255, 0.1),
    inset -2px -2px rgba(0, 0, 0, 0.3), 0 1px 1px rgba(255, 255, 255, 0.2),
    0 4px 10px rgba(0, 0, 0, 0.4);
  border: 2px #000 solid;

  &:after {
    content: " Channel Up ";
    position: absolute;
    font-family: Arial;
    font-size: 10px;
    color: #ccc;
    width: 100px;
    height: 5px;
    top: 18px;
    left: 92px;
    bottom: 30px;
    line-height: 5px;
    text-indent: 12px;
    overflow: visible;
  }

  @media screen and (max-width: 1000px) {
    bottom: 10px;
    right: 50px;
  }
`;

export const ChannelDown = styled.div`
  position: absolute;
  width: 180px;
  height: 40px;
  right: 20px;
  bottom: 140px;
  border-radius: 4px;
  box-shadow: inset 2px 2px rgba(255, 255, 255, 0.1),
    inset -2px -2px rgba(0, 0, 0, 0.3), 0 1px 1px rgba(255, 255, 255, 0.2),
    0 4px 10px rgba(0, 0, 0, 0.4);
  border: 2px #000 solid;

  &:after {
    content: " Channel Down ";
    position: absolute;
    font-family: Arial;
    font-size: 10px;
    color: #ccc;
    width: 100px;
    height: 5px;
    top: 18px;
    left: 84px;
    bottom: 30px;
    line-height: 5px;
    text-indent: 12px;
    overflow: visible;
  }

  @media screen and (max-width: 1000px) {
    bottom: 60px;
    right: 50px;
  }
`;

export const Input = styled.input`
  -webkit-appearance: none;
  position: absolute;
  width: 37%;
  left: 7%;
  box-sizing: border-box;
  background: none;
  margin: 18px 0;
  outline: none;

  &:focus {
    outline: none;
  }

  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 5px;
    cursor: pointer;
    box-shadow: 1px 1px 1px rgba(255, 255, 255, 0.2);
    background: #000;
    border-radius: 1.3px;
  }

  &::-webkit-slider-thumb {
    height: 25px;
    width: 10px;
    border-radius: 2px;
    background-color: #444;
    background-image: linear-gradient(rgba(255, 255, 255, 0.1), transparent);
    box-shadow: inset 1px 1px 1px rgba(255, 255, 255, 0.2),
      1px 1px 6px rgba(0, 0, 0, 1);
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -10px;
  }
`;

export const Power = styled.div`
  position: absolute;
  width: 180px;
  height: 60px;
  right: 20px;
  bottom: 15px;
  border-radius: 4px;
  box-shadow: inset 2px 2px rgba(255, 255, 255, 0.1),
    inset -2px -2px rgba(0, 0, 0, 0.3), 0 1px 1px rgba(255, 255, 255, 0.2),
    0 4px 10px rgba(0, 0, 0, 0.4);
  border: 2px #000 solid;

  &:after {
    content: " Power ";
    position: absolute;
    font-family: Arial;
    font-size: 10px;
    color: #ccc;
    width: 5px;
    height: 5px;
    top: 18px;
    left: 100px;
    bottom: 30px;
    background: ${props => (props.power ? "#7cfc00" : "#2aa52a")};
    box-shadow: ${props =>
      props.power ? "0 0 10px #7cfc00, 0 0 5px #7cfc00" : "none"};
    border: ${props => (props.power ? "1px #7cfc00 solid" : "1px #111 solid")};
    border-radius: 50%;
    line-height: 5px;
    text-indent: 12px;
    text-shadow: 0 1px #000;
    white-space: nowrap;
  }

  &:before {
    content: " Standby ";
    position: absolute;
    font-family: Arial;
    font-size: 10px;
    color: #ccc;
    width: 5px;
    height: 5px;
    top: 38px;
    left: 100px;
    bottom: 30px;
    background: ${props => (props.power ? "#a52a2a" : "#fc0000")};
    box-shadow: ${props =>
      props.power ? "none" : "0 0 10px #fc0000, 0 0 5px #fc0000"};
    border: ${props => (props.power ? "1px #111 solid" : "1px #fc0000 solid")};
    border-radius: 50%;
    line-height: 5px;
    text-indent: 12px;
    text-shadow: 0 1px #000;
    white-space: nowrap;
  }

  @media screen and (max-width: 1000px) {
    bottom: 24px;
    left: 40px;
  }
`;

export const Button = styled.button`
  position: relative;
  width: 70px;
  height: 40px;
  top: 10px;
  left: 10px;
  background-color: #333;
  background-image: linear-gradient(rgba(255, 255, 255, 0.05), transparent);
  border-radius: 4px;
  box-shadow: inset 1px 1px rgba(255, 255, 255, 0.1),
    inset 1px 1px rgba(255, 255, 255, 0.1), inset -1px -1px rgba(0, 0, 0, 0.3),
    0 1px 1px rgba(255, 255, 255, 0.2);
  border: 2px #000 solid;
  cursor: pointer;
  outline: none;

  &:active {
    background-color: #292929;
    box-shadow: inset 1px 1px rgba(30, 30, 30, 1),
      inset 1px 1px rgba(30, 30, 30, 0), inset -1px -1px rgba(30, 30, 30, 0),
      0 1px 1px rgba(30, 30, 30, 0);
  }
`;

export const ButtonChannel = styled.button`
  position: relative;
  width: 70px;
  height: 20px;
  top: 10px;
  left: 10px;
  background-color: #333;
  background-image: linear-gradient(rgba(255, 255, 255, 0.05), transparent);
  border-radius: 4px;
  box-shadow: inset 1px 1px rgba(255, 255, 255, 0.1),
    inset 1px 1px rgba(255, 255, 255, 0.1), inset -1px -1px rgba(0, 0, 0, 0.3),
    0 1px 1px rgba(255, 255, 255, 0.2);
  border: 2px #000 solid;
  cursor: pointer;
  outline: none;

  &:active {
    background-color: #292929;
    box-shadow: inset 1px 1px rgba(30, 30, 30, 1),
      inset 1px 1px rgba(30, 30, 30, 0), inset -1px -1px rgba(30, 30, 30, 0),
      0 1px 1px rgba(30, 30, 30, 0);
  }
`;

export const Footer = styled.div`
  position: absolute;
  height: 15px;
  bottom: -19px;
  left: 15px;
  right: 15px;
  background: #222;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  box-shadow: inset 0 5px 5px rgba(0, 0, 0, 0.8), 0 10px 25px rgba(0, 0, 0, 0.3);
  border-bottom: 3px #000 solid;
  z-index: -1;
`;

export const ErrorNoise = styled.div`
  position: relative;
  width: 600px;
  height: 400px;
  overflow: hidden;
  border-radius: 5% / 50%;
  z-index: 3;
`;

export const ErrorEffect = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50% / 5%;
  background: #111;
  background-image: ${props =>
    props.power
      ? "url(data:image/png;base64,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)"
      : "none"};
  background-size: 80%;
  will-change: background-position;
  overflow: hidden;

  ${props =>
    props.power
      ? css`
          animation: ${noise} 200ms infinite linear;
          -moz-animation: ${noise} 200ms infinite linear;
          -o-animation: ${noise} 200ms infinite linear;
          -webkit-animation: ${noise} 200ms infinite linear;
        `
      : css``};

  &:before {
    ${props =>
      props.power
        ? css`
            content: " ";
            position: absolute;
            width: 100%;
            height: 20%;
            background: rgba(255, 255, 255, 0.2);
            will-change: top, opactity;
            -moz-animation: ${noiseeffect} 4000ms infinite linear;
            -o-animation: ${noiseeffect} 4000ms infinite linear;
            -webkit-animation: ${noiseeffect} 4000ms infinite linear;
            animation: ${noiseeffect} 4000ms infinite linear;
            border-radius: 50% / 5%;
          `
        : css``};
  }

  &:after {
    content: " ";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    ${props =>
      props.power
        ? css``
        : css`
            background: radial-gradient(transparent 50%, rgba(0, 0, 0, 0.8)),
              linear-gradient(rgba(255, 255, 255, 0.4) 10%, transparent);
          `};

    box-shadow: inset 0 5px 25px rgba(255, 255, 255, 0.2),
      inset 5px 0 15px rgba(255, 255, 255, 0.2),
      inset -5px 0 15px rgba(255, 255, 255, 0.1), 0 0 10px rgba(0, 0, 0, 1),
      inset 0 200px 5px rgba(255, 255, 255, 0.05);
    border-radius: 50% / 5%;
  }
`;

export const OldFilter = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: transparent;
  // background-image:
  background-repeat: no-repeat;
  background-position: 40px 20px;
  background-size: 100%;
  border-radius: 50% / 5%;
  -webkit-filter: grayscale(1) brightness(1.2) contrast(1.5);
  will-change: transform;
  -moz-animation: ${crtImage} 20ms alternate infinite;
  -o-animation: ${crtImage} 20ms alternate infinite;
  -webkit-animation: ${crtImage} 20ms alternate infinite;
  animation: ${crtImage} 20ms alternate infinite;
  opacity: 0.9;

  &:after {
    content: " ";
    position: absolute;
    width: 100%;
    height: 100%;
    background: repeating-linear-gradient(0, #fff, #fff 2px, transparent 4px);
    opacity: 0.2;
    border-radius: 50% / 5%;
    will-change: transform;
    -moz-animation: ${crtPixels} 20ms alternate infinite;
    -o-animation: ${crtPixels} 20ms alternate infinite;
    -webkit-animation: ${crtPixels} 20ms alternate infinite;
    animation: ${crtPixels} 20ms alternate infinite;
  }
`;

export const Title = styled.div`
  position: absolute;
  height: 26px;
  top: 22px;
  left: 30px;
  background: black;
  color: white;
  padding: 2px 10px;
  font-family: "Press Start 2P", cursive;
  font-size: 10px;
`;

export const ScrollTextContainer = styled.div`
  position: absolute;
  top: 22px;
  left: 300px;
  width: 250px;
  background: black;
  color: white;
  padding: 2px 10px;
  overflow: hidden;
  white-space: nowrap;
  font-family: "Press Start 2P", cursive;
  font-size: 10px;
`;

export const ScrollText = styled.div`
  display: inline-block;
  animation: ${scrollLeft} 14s linear infinite;
`;

export const Subtitles = styled.div`
  position: absolute;
  height: 46px;
  bottom: 10px;
  left: 60px;
  background: black;
  color: white;
  padding: 2px 10px;
  font-family: "Press Start 2P", cursive;
  font-size: 10px;

  * {
    font-family: "Press Start 2P", cursive;
    font-size: 10px;
  }

  .Typewriter {
    width: 450px;
  }
`;

export const CTA = styled.button`
  position: absolute;
  font-family: "Press Start 2P", cursive;
  border: 4px solid black;
  font-size: 10px;
  top: 300px;
  left: 460px;
  background: #b00000;
  padding: 2px 10px;
  z-index: 99;
  outline: none;
  cursor: pointer;

  &:active {
    background-color: darkred;
    box-shadow: inset 1px 1px rgba(30, 30, 30, 1),
      inset 1px 1px rgba(30, 30, 30, 0), inset -1px -1px rgba(30, 30, 30, 0),
      0 1px 1px rgba(30, 30, 30, 0);
  }

  a {
    color: white;
  }
`;

export const Video = styled.video`
  position: absolute;
  top: 0;
  height: 98%;
  margintop: 5px;
  zindex: -1px;
`;
