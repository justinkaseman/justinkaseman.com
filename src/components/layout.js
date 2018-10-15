// import React from "react";
// import PropTypes from "prop-types";
// import posed from "react-pose";
// import Helmet from "react-helmet";
// import { StaticQuery, graphql } from "gatsby";

// import Navigation from "../components/navigation.js";
// import { GlobalStyle } from "../styles/styled-components.js";
// import "../styles/layout.css";

// const Transition = posed.div({
//   enter: {
//     opacity: 1,
//   },
//   exit: {
//     opacity: 0,
//   },
// });

// const Layout = ({ children }) => (
//   <StaticQuery
//     query={graphql`
//       query SiteTitleQuery {
//         site {
//           siteMetadata {
//             title
//           }
//         }
//       }
//     `}
//     render={data => (
//       <>
//         <Helmet
//           title={data.site.siteMetadata.title}
//           meta={[
//             { name: "description", content: "Sample" },
//             { name: "keywords", content: "sample, something" },
//           ]}
//         >
//           <html lang="en" />
//         </Helmet>
//         <Transition>{children}</Transition>
//         <Navigation />
//         <GlobalStyle />
//       </>
//     )}
//   />
// );

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// };

// export default Layout;

import React from "react";
import Helmet from "react-helmet";

import Navigation from "./navigation";
import { GlobalStyle } from "../styles/styled-components";

import "../styles/layout.css";

const Layout = props => (
  <div>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: `description`, content: `Sample` },
        { name: `keywords`, content: `sample, something` },
      ]}
    />
    {props.children}
  </div>
);

export default Layout;

/*     <Navigation />
<GlobalStyle /> */

// import React from "react";
// import PropTypes from "prop-types";
// import Helmet from "react-helmet";
// import { StaticQuery, graphql } from "gatsby";

// import PageTransition from "./PageTransition";
// import "../styles/layout.css";

// const Layout = ({ element, props }) => (
//   <React.Fragment>
//     <StaticQuery
//       query={graphql`
//         query SiteTitleQuery {
//           site {
//             siteMetadata {
//               title
//             }
//           }
//         }
//       `}
//       render={data => (
//         <>
//           <Helmet
//             title={data.site.siteMetadata.title}
//             meta={[
//               { name: "description", content: "Sample" },
//               { name: "keywords", content: "sample, something" },
//             ]}
//           >
//             <html lang="en" />
//           </Helmet>
//         </>
//       )}
//     />
//     <div>
//       <PageTransition {...props}>{element}</PageTransition>
//     </div>
//   </React.Fragment>
// );

// Layout.propTypes = {
//   element: PropTypes.node.isRequired,
// };

// export default Layout;
