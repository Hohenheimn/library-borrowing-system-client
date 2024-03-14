"use client";
import React from "react";
import { useForm } from "react-hook-form";


import Button from "@/components/Button";
import ControllerField from "@/components/ControllerInput";


import { usePost, useRemove } from "../../../../util/api";


type Props = {
  defaultValues: TodoFormValueType;
  setModal: Function;
};

export type TodoFormValueType = {
  id?: string;
  name: string;
  description: string;
  deadline: string;
  status: string;
};

function CategoryForm({ defaultValues, setModal }: Props) {
  console.log(defaultValues);
  const id = defaultValues?.id;
  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm<any>({
    defaultValues: defaultValues,
  });

  const successDelete = () => {
    setModal(false);
    alert("succes");
  };
  const success = () => {
    setModal(false);
    alert("succes");
  };
  const error = (error: any) => {
    alert(error);
  };

  const { isLoading: DeleteLoading, mutate: Delete } = useRemove(
    successDelete,
    error,
    "/api/todos",
    "todo-list"
  );

  const { isLoading, mutate } = usePost(
    success,
    error,
    "/api/author",
    defaultValues?.id ? defaultValues?.id : false,
    "author-list"
  );

  const SubmitHandler = (data: any) => {
    // mutate(data);
  };

  return (
    <div>
      <p>{id ? "Update" : "Create"} - Author</p>
      <form onSubmit={handleSubmit(SubmitHandler)} className=" space-y-2">
        <ControllerField
          control={control}
          errors={errors}
          rules={{ required: "required" }}
          name={"name"}
          label={"Name"}
          type={"text"}
        />

        <div className=" flex justify-end items-center">
          {defaultValues?.id && (
            <Button
              appearance={"primary"}
              loading={DeleteLoading}
              onClick={() => Delete(defaultValues?.id)}
            >
              Delete
            </Button>
          )}
          <Button type="submit" appearance={"primary"} loading={isLoading}>
            Save
          </Button>
        </div>
      </form>
    </div>
  );
}

export default CategoryForm;
