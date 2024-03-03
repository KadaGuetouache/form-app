import { FormElements } from "./FormElements";
import SideBarBtnElement from "./SideBarBtnElement";

const DesignerSideBar = () => {
  return (
    <aside className="w-[400px] max-w-[400px] flex flex-col flex-grow gap-2 border-l-2 border-muted p-4 bg-background overflow-y-auto h-full">
      Elements
      <SideBarBtnElement formElement={FormElements.TextField} />
    </aside>
  );
};

export default DesignerSideBar;
