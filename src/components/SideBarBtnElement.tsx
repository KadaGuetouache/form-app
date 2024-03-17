import React from "react";
import { FormElement } from "./FormElements";
import { Button } from "./ui/button";
import { useDraggable } from "@dnd-kit/core";
import { cn } from "@/lib/utils";

const SideBarBtnElement = ({ formElement }: { formElement: FormElement }) => {
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
    id: `designer-btn-${formElement.type}`,
    data: {
      type: formElement.type,
      isDesignerBtnElement: true,
    },
  });

  const { label, icon: Icon } = formElement.designerBtnElement;
  return (
    <Button
      ref={setNodeRef}
      variant={"outline"}
      className={cn(
        "flex flex-col gap-2 cursor-grab w-[120px] h-[120px]",
        isDragging && "ring-2 ring-primary",
      )}
      {...attributes}
      {...listeners}
    >
      <Icon className="w-8 h-8 text-primary cursor-grab" />
      <p className="text-xs">{label}</p>
    </Button>
  );
};

export const SideBarBtnElementDragOverlay = ({
  formElement,
}: {
  formElement: FormElement;
}) => {
  const { label, icon: Icon } = formElement.designerBtnElement;
  return (
    <Button
      variant={"outline"}
      className="flex flex-col gap-2 cursor-grab w-[120px] h-[120px]"
    >
      <Icon className="w-8 h-8 text-primary cursor-grab" />
      <p className="text-xs">{label}</p>
    </Button>
  );
};

export default SideBarBtnElement;
