import React, { Component } from "react";
import PropTypes from "prop-types";
import { css } from "../../emotion";
import { heading, text } from "../../styles/typography";

class PageHeader extends Component {
  render() {
    const { theme, title, superTitle, editLink } = this.props;

    const styles = {
      outerHeader: {
        boxSizing: "border-box",
        position: "relative",
        height: theme.pageHeadingHeight,
        background: theme.pageHeadingBackground
      },
      innerHeader: {
        position: "absolute",
        bottom: 21,
        left: 21,
        "@media (min-width: 1000px)": {
          left: 42
        }
      },
      superTitle: {
        ...heading(theme, 1),
        color: theme.pageHeadingTextColor,
        opacity: 0.6,
        margin: 0
      },
      title: {
        ...heading(theme, 4),
        color: theme.pageHeadingTextColor,
        margin: 0
      },
      edit: {
        ...text(theme),
        color: "white",
        fontSize: "10px",
        borderRadius: "4px",
        border: "1px solid white",
        padding: "5px 16px",
        verticalAlign: "middle",
        marginLeft: "16px",
        opacity: "0.5",
        cursor: "pointer",
        textDecoration: "none",
        transition: "opacity 0.1s linear",
        ":hover": {
          opacity: 1
        }
      }
    };

    return (
      <div className={css(styles.outerHeader)}>
        <div className={css(styles.innerHeader)}>
          <h2 className={css(styles.superTitle)}>{superTitle}</h2>
          <h1 className={css(styles.title)}>
            {title}
            {editLink && (
              <a href={editLink} className={css(styles.edit)}>
                Edit This Page
              </a>
            )}
          </h1>
        </div>
      </div>
    );
  }
}

PageHeader.propTypes = {
  theme: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  superTitle: PropTypes.string.isRequired
};

export default PageHeader;
