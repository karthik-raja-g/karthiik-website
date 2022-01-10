import { css } from "styled-components";
const mixins = {
  flexCenter: css`
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  flexCenterCol: css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  `,
  flexExpand: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
  flexExpandCol: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
  `,
  fancyList: css`
    list-style: none;
    li {
      position: relative;
      padding-left: 30px;
      &:before {
        content: "▹";
        position: absolute;
        left: 0;
      }
    }
  `,
    inlineLink: css`
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    position: relative;
    transition: var(--transition);
    color: var(--green);
    &:hover,
    &:focus,
    &:active {
      color: var(--green);
      outline: 0;
      &:after {
        width: 100%;
      }
      & > * {
        color: var(--green) !important;
        transition: var(--transition);
      }
    }
    &:after {
      content: '';
      display: block;
      width: 10%;
      height: 1px;
      position: relative;
      bottom: 0.37em;
      background-color: var(--green);
      transition: var(--transition);
      opacity: 0.5;
    }
  `,
};
const themes = {
  light: {
    body: "#fff",
    text: "#0a192f",
    link: "red",
    highlight: "red",
    bigHeading: "",
    smallHeading: "",
    mixins,
  },
  dark: {
    body: "#0a192f",
    text: "#fff",
    link: "#64ffda",
    highlight: "#64ffda",
    bigHeading: "",
    smallHeading: "",
    mixins,
  },
};

export default themes;
