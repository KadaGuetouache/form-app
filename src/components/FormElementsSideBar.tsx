import React from "react";
import SideBarBtnElement from "./SideBarBtnElement";
import { FormElements } from "./FormElements";

const FormElementSideBar = () => {
  return (
    <div>
      Elements
      <SideBarBtnElement formElement={FormElements.TextField} />
    </div>
  );
};

export default FormElementSideBar;
