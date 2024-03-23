import React from "react";
import useDesigner from "./hooks/useDesigner";
import { FormElements } from "./FormElements";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { CloseIcon } from "@/constants/icons";

const PropertiesFromSideBar = () => {
  const { selectedElement, setSelectedElement } = useDesigner();

  if (!selectedElement) return null;

  const PropertiesForm =
    FormElements[selectedElement?.type].propertiesComponent;

  return (
    <div className="flex flex-col p-2">
      <div className="flex justify-between items-center">
        <p className="text-sm text-foreground/70">Element properties</p>
        <Button
          size="icon"
          variant="ghost"
          onClick={() => setSelectedElement(null)}
        >
          <CloseIcon className="w-4 h-4" />
        </Button>
      </div>
      <Separator className="mb-4" />
      <PropertiesForm elementInstance={selectedElement} />
    </div>
  );
};

export default PropertiesFromSideBar;
