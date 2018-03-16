import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";

import GatsbyIcon from "../../images/svg-icons/gatsby.svg";

const styles = theme => ({
  stack: {
    display: "none",
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      display: "block",
      position: "absolute",
      left: 0,
      bottom: 0,
      width: "100%",
      padding: "1em 2em"
    }
  },
  box: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap"
  },
  link: {
    display: "inline-block"
  },
  svg: {
    width: "22px",
    height: "22px"
  },
  header: {
    textAlign: "center",
    fontSize: ".85em",
    letterSpacing: ".3em",
    margin: "1em",
    fontWeight: 300,
    display: "inline-block"
  },
  gatsbyLink: {
    display: "inline-block",
    top: "0.3em",
    position: "relative"
  }
});

const StackIcons = props => {
  const { classes } = props;

  return (
    <div className={classes.stack}>
      <h5 className={classes.header}>powerd by</h5>
      <a
        href="https://www.gatsbyjs.org/"
        key="gatsby"
        className={classes.gatsbyLink}
        target="_blank"
        rel="noopener noreferrer"
        title="gatsby"
      >
        <GatsbyIcon className={classes.svg} />
      </a>
      <h5 className={classes.header}>theme by</h5>
      <a
        href="https://github.com/greglobinski/gatsby-starter-personal-blog/"
        key="greglobinski"
        className={classes.link}
        target="_blank"
        rel="noopener noreferrer"
        title="greglobinski"
      >
        greglobinski
      </a>
    </div>
  );
};

StackIcons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default injectSheet(styles)(StackIcons);
