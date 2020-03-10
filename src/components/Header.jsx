import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "components/Link"
import styled from "@emotion/styled"
import colors from "styles/colors"
import dimensions from "styles/dimensions"
import Logo from "components/_ui/Logo"

const HeaderContainer = styled("header")`
  padding-top: 3.75em;
  padding-bottom: 3em;

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    padding: 2em 0 1em 0;
  }
`

const HeaderContent = styled("nav")`
  grid-column: 2 / -2;

  display: flex;
  justify-content: space-between;

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    svg {
      height: 100px;
    }
  }
`

const HeaderLinks = styled("div")`
  display: flex;
  flex-direction: row;
  align-items: center;

  .icon-social {
    font-size: 1.3em;
  }

  a:not(:last-child) {
    margin-right: 2em;
  }

  a {
    color: currentColor;
    text-decoration: none;
    border-bottom: 3px solid transparent;
    font-weight: 600;
    text-transform: uppercase;
    font-size: 0.95em;
    letter-spacing: 0.5px;
    height: 100%;
    padding-bottom: 1.25em;
    padding-top: 0.25em;
    display: block;
    position: relative;

    &:after {
      content: "";
      display: block;
      position: absolute;
      width: 97%;
      height: 1px;
      bottom: 80px;
      // margin-right: -9px;
      background: ${colors.grey900};
      visibility: hidden;
      transform-origin: left;
      transform: scale(0);
      transition: 0.25s ease-out;
    }

    &:hover {
      &:after {
        visibility: visible;
        transform: scale(1);
      }
    }

    &.Link--is-active {
      &:after {
        visibility: visible;
        transform: scale(1);
      }
    }
  }
`

const Header = () => (
  <HeaderContainer className="main-grid">
    <HeaderContent>
      <Link to="/">
        <Logo />
      </Link>
      <HeaderLinks>
        <AnchorLink to="/#anchor-about-section" title="About Mel">
          <span>About</span>
        </AnchorLink>
        <Link activeClassName="Link--is-active" to="/work">
          <span>Work</span>
        </Link>
        <Link activeClassName="Link--is-active" to="/blog">
          <span>Blog</span>
        </Link>
        <AnchorLink to="/#anchor-contact-form" title="Email">
          <span>
            <FontAwesomeIcon icon="paper-plane" />
          </span>
        </AnchorLink>
        <Link href="https://twitter.com/_moodybones">
          <span>
            <FontAwesomeIcon
              className="icon-social"
              icon={["fab", "twitter"]}
            />
          </span>
        </Link>
        <Link href="https://github.com/MoodyBones">
          <span>
            <FontAwesomeIcon className="icon-social" icon={["fab", "github"]} />
          </span>
        </Link>
      </HeaderLinks>
    </HeaderContent>
  </HeaderContainer>
)

export default Header
