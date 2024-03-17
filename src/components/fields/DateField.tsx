import { MdDateRange } from "react-icons/md";
import {
  ElementsType,
  FormElement,
  FormElementInstance,
} from "../FormElements";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

const type: ElementsType = "DateField";

const extraAttributes = {
  label: "Date Field",
  helperText: "Date YMD",
  required: false,
  placeHolder: "Value here ...",
};

export const DateFieldFormElement: FormElement = {
  type,
  designerComponent: DesignerComponent,
  formComponent: () => <div>form component</div>,
  propertiesComponent: () => <div>propertes component</div>,
  construct: (id: string) => ({
    id,
    type,
    extraAttributes: {
      label: "Date Field",
      helperText: "Date YMD",
      required: false,
      placeHolder: "Value here ...",
    },
  }),
  designerBtnElement: {
    icon: MdDateRange,
    label: "Date Field",
  },
};

type CustomInstance = FormElementInstance & {
  extraAttributes: typeof extraAttributes;
};

function DesignerComponent({
  elementInstance,
}: {
  elementInstance: FormElementInstance;
}) {
  const element = elementInstance as CustomInstance;
  const { label, required, placeholder, helperText } = element.extraAttributes;
  return (
    <div className="flex flex-col gap-2 w-full">
      <Label>
        {label}
        {required && "*"}
      </Label>
      <Input type="date" placeholder={placeholder} />
      {helperText && (
        <p className="text-muted-foreground text-[0.8rem]">{helperText}</p>
      )}
    </div>
  );
}
