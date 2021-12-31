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
};

const themes = {
  light: {
    body: "#fff",
    text: "#0a192f",
    link: "",
    linkHighLight: "",
    bigHeading: "",
    smallHeading: "",
    mixins,
  },
  dark: {
    body: "#0a192f",
    text: "#fff",
    link: "",
    linkHighLight: "",
    bigHeading: "",
    smallHeading: "",
    mixins,
  },
};

export default themes;
