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

function BookForm({ defaultValues, setModal }: Props) {
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
    "/api/todos",
    defaultValues?.id ? defaultValues?.id : false,
    "todo-list"
  );

  const SubmitHandler = (data: any) => {
    delete data.deleted_at;
    delete data.user_id;
    console.log(data);
    // mutate(data);
  };

  return (
    <div>
      <p>{id ? "Update" : "Create"} - Todo</p>
      <form onSubmit={handleSubmit(SubmitHandler)} className=" space-y-2">
        <ControllerField
          control={control}
          errors={errors}
          rules={{ required: "required" }}
          name={"name"}
          label={"Name"}
          type={"text"}
        />
        <ControllerField
          control={control}
          errors={errors}
          name={"description"}
          rules={{ required: "required" }}
          label={"Description"}
          type={"textarea"}
        />
        <ControllerField
          control={control}
          errors={errors}
          name={"deadline"}
          rules={{ required: "required" }}
          label={"Deadline"}
          type={"date"}
        />
        <ControllerField
          control={control}
          errors={errors}
          name={"status"}
          rules={{ required: "required" }}
          label={"Status"}
          type={"radio"}
          radioOptions={[
            {
              label: "Pending",
              value: "pending",
            },
            {
              label: "Done",
              value: "done",
            },
            {
              label: "Failed Todo",
              value: "failed",
            },
          ]}
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

export default BookForm;
