import React from "react";
import posed, { PoseGroup } from "react-pose";

const timeout = 1000;

class Transition extends React.PureComponent {
  render() {
    const { children, location } = this.props;

    const RoutesContainer = posed.div({
      enter: { delay: timeout, delayChildren: timeout },
      exit: { delay: timeout, delayChildren: timeout },
    });

    // To enable page transitions on mount / initial load,
    // use the prop `animateOnMount={true}` on `PoseGroup`.
    return <RoutesContainer key={location.key}>{children}</RoutesContainer>;
  }
}

export default Transition;
// {items.map(({ id }) => <Item id={id} />)}

// import React from "react";
// import posed, { PoseGroup } from "react-pose";
// import Layout from "./src/components/layout";

// export const replaceComponentRenderer = ({ props, ...other }) => {
//   const { component } = props.pageResources;
//   const state = props.location.state
//     ? props.location.state.direction
//     : "undefined";
//   const state2 = props.location.state
//     ? props.location.state.previous
//     : "undefined";
//   const DirectionLookupTable = {
//     up: {
//       y: "-100%",
//       x: "0",
//     },
//     right: {
//       y: "0",
//       x: "100%",
//     },
//     down: {
//       y: "100%",
//       x: "0",
//     },
//     left: {
//       y: "0",
//       x: "-100%",
//     },
//     undefined: {
//       y: "0",
//       x: "0",
//     },
//   };
//   console.log(props.location.state);
//   const Transition = posed.div({
//     // pre: {
//     //   y: "-100%",
//     //   // x: DirectionLookupTable[state].x,
//     //   x: 0,
//     // },
//     enter: {
//       y: 0,
//       x: 0,
//       opacity: 1,
//       transition: {
//         ease: "easeOut",
//         duration: 1400,
//       },
//     },
//     exit: {
//       y: ({ exit }) => DirectionLookupTable[exit].y,
//       x: ({ exit }) => DirectionLookupTable[exit].x,
//     },
//   });
//   return (
//     <Layout>
//       <PoseGroup animateOnMount>
//         <Transition key={props.location.key}>
//           {React.createElement(component, ...props)}
//         </Transition>
//       </PoseGroup>
//     </Layout>
//   );
// };
