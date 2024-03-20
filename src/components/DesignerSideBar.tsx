import React from "react";
import useDesigner from "./hooks/useDesigner";
import FormElementsSideBar from "./FormElementsSideBar";
import PropertiesFromSideBar from "./PropertiesFromSideBar";

const DesignerSideBar = () => {
  const { selectedElement } = useDesigner();
  return (
    <div className="w-[400px] max-w-[400px] flex flex-col flex-grow gap-2 border-l-2 border-muted p-4 bg-background overflow-y-auto h-full">
      {!selectedElement && <FormElementsSideBar />}
      {selectedElement && <PropertiesFromSideBar />}
    </div>
  );
};

export default DesignerSideBar;
