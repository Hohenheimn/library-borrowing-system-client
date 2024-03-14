"use client";
import { useRef } from "react";
import { Controller, FieldValues, RegisterOptions } from "react-hook-form";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

type Props = {
  control: any;
  errors: any;
  name: string;
  rules?: Omit<
    RegisterOptions<FieldValues, string>,
    "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
  >;
  label: string;
  type:
    | "select"
    | "text"
    | "file"
    | "checkbox"
    | "number"
    | "radio"
    | "password"
    | "tel"
    | "email"
    | "textarea"
    | "date";
  selectOptions?: string[] | number[];
  radioOptions?: {
    label: string;
    value: any;
  }[];
};

const inputStyle =
  "border border-textGray bg-transparent text-fontColor rounded-md px-2 py-2 h-16 outline-none w-full";

function ControllerField(props: Props) {
  const {
    control,
    errors,
    name,
    label,
    rules,
    type,
    selectOptions,
    radioOptions,
  } = props;
  const selectRef = useRef<HTMLSelectElement>(null);

  const onClickSelectContainer = () => {
    selectRef.current?.click();
  };

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field }) => (
        <aside className="flex flex-col">
          <label htmlFor={name} className=" text-fontColor text-[.9rem] mb-1">
            {label}
          </label>
          {type !== "select" &&
            type !== "textarea" &&
            type !== "radio" &&
            type !== "checkbox" && (
              <input
                id={name}
                type={type}
                //   placeholder={placeholder}
                {...field}
                className={inputStyle + "appearance-none"}
              />
            )}
          {type === "checkbox" && (
            <div className="w-full">
              <input
                id={name}
                type={type}
                //   placeholder={placeholder}
                {...field}
                checked={field.value}
              />
            </div>
          )}
          {type === "textarea" && (
            <textarea
              id={name}
              //   placeholder={placeholder}
              {...field}
              rows={10}
              className={
                "border border-textGray rounded-md bg-transparent text-fontColor px-2 py-2 outline-none w-full"
              }
            ></textarea>
          )}
          {type === "select" && selectOptions && (
            <div className="relative flex items-center">
              <MdOutlineKeyboardArrowDown
                onClick={onClickSelectContainer}
                className={`text-textColor w-7 h-7 absolute right-3`}
              />

              <select
                id={name}
                {...field}
                defaultValue={selectOptions[0]}
                className={`${inputStyle} appearance-none relative`}
                ref={selectRef}
              >
                {selectOptions?.map((item, index) => (
                  <option key={index} value={item} className=" bg-secondary">
                    {item}
                  </option>
                ))}
              </select>
            </div>
          )}
          {type === "radio" && (
            <ul className=" space-y-2">
              {radioOptions?.map((item, index) => (
                <li
                  key={index}
                  className=" flex items-center justify-start gap-2"
                >
                  <input
                    id={name + item.label}
                    type={type}
                    value={item.value}
                    onChange={() => {}}
                    checked={field.value === item.value}
                    onClick={() => field.onChange(item.value)}
                  />
                  <label htmlFor={name + item.label}>{item.label}</label>
                </li>
              ))}
            </ul>
          )}
          {errors[name]?.message && (
            <span className=" text-[.9rem] text-[#dd0000]">
              {errors[name]?.message}
            </span>
          )}
        </aside>
      )}
    />
  );
}

export default ControllerField;
