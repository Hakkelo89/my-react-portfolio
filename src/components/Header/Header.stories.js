import React from "react";

import Header from ".";

export default {
  title: "Components/Header",
  component: Header,
};

export const Header1 = (props) => <Header {...props} />;
export const Header2 = (props) => <MyComponentName {...props} />;

Header1.args = {
  /** props here if any for story 1 see sample below:
    propName: value
  */
};

Header2.args = {
  /** props here if any for story 2 see sample below:
    propName: value
  */
};
