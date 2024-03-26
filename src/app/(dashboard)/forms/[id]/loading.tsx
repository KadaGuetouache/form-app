import { SpinnerIcon } from "@/constants/icons";
import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <SpinnerIcon className="animate-spin h-12 w-12" />
    </div>
  );
};

export default Loading;
