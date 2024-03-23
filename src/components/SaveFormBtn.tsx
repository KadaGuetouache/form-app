import React, { useTransition } from "react";
import { Button } from "./ui/button";
import useDesigner from "./hooks/useDesigner";
import { UpdateFormContent } from "@/actions/form";
import { toast } from "./ui/use-toast";
import { SaveIcon, SpinnerIcon } from "@/constants/icons";

const SaveFormBtn = ({ id }: { id: number }) => {
  const { elements } = useDesigner();
  const [loading, startTransition] = useTransition();

  const updateFormContent = async () => {
    try {
      const jsonElement = JSON.stringify(elements);
      await UpdateFormContent(id, jsonElement);
      toast({
        title: "Success",
        description: "Your form has been saved",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong!",
        variant: "destructive",
      });
    }
  };

  return (
    <Button
      variant="outline"
      className="gap-2"
      disabled={loading}
      onClick={() => startTransition(updateFormContent)}
    >
      <SaveIcon className="w-6 h-6" />
      Save
      {loading && <SpinnerIcon className="animate-spin" />}
    </Button>
  );
};

export default SaveFormBtn;
