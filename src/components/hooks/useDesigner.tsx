"use client";

import { useContext } from "react";
import { DesignerContext } from "../context/DesignerContext";

const useDesigner = () => {
  const context = useContext(DesignerContext);

  if (!context) {
    throw new Error("UseDesigner must be used within a DesignerContext");
  }
  return context;
};

export default useDesigner;
