import React from "react";
import { Button } from "./ui/button";
import useDesigner from "./hooks/useDesigner";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { FormElements } from "./FormElements";
import { PreviewIcon } from "@/constants/icons";

const PreviewDialogBtn = () => {
  const { elements } = useDesigner();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="gap-2">
          <PreviewIcon className="w-6 h-6" />
          Preview
        </Button>
      </DialogTrigger>
      <DialogContent className="w-screen h-screen max-h-screen max-w-full flex flex-col flex-grow p-0 gap-0">
        <div className="px-4 py-2 border-b">
          <p className="text-lg font-bold text-muted-foreground">
            Form preview
          </p>
          <p className="text-sm text-muted-foreground">
            This is how your form will look like to your users
          </p>
        </div>
        <div className="bg-accent flex flex-col flex-grow items-center justify-center bg-[url(/paper.svg)] dark:bg-[url(/dark-paper.svg)] overflow-y-auto py-4">
          <div className="flex flex-col gap-4 flex-grow bg-background h-full w-full rounded-2xl p-8 overflow-y-auto max-w-[620px]">
            {elements.map((element) => {
              const FormComponent = FormElements[element.type].formComponent;

              return (
                <FormComponent key={element.id} elementInstance={element} />
              );
            })}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PreviewDialogBtn;
