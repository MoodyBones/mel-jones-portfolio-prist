import css from "@emotion/css"
import dimensions from "styles/dimensions"
import colors from "styles/colors"

const typeStyles = css`
  h1,
  h2,
  h3 {
    font-family: "Montserrat", sans-serif;
  }

  h1 {
    font-size: 2em;
    line-height: 1.45;
    font-weight: 500;
    color: ${colors.grey700};
    letter-spacing: -0.5px;

    @media (max-width: ${dimensions.maxwidthTablet}px) {
      font-size: 1.75em;
    }

    @media (max-width: ${dimensions.maxwidthMobile}px) {
      font-size: 1.5em;
    }
  }

  h2 {
    margin-bottom: 2rem;
    font-size: 1.9em;
    line-height: 1.1;
  }

  h3 {
    line-height: 1.2;
    font-size: 1.4em;
  }

  h5 {
    margin-bottom: 1.45rem;
    font-weight: 500;
    line-height: 20px;
    font-size: 0.95em;
  }

  h6 {
    font-size: 0.9em;
    font-weight: 600;
    margin: 0;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  p {
    line-height: 1.9;
  }

  a {
    &:hover {
      cursor: pointer;
    }
  }
`

export default typeStyles
