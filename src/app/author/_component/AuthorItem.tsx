import React from "react";


import Button from "@/components/Button";


import { TodoFormValueType } from "./AuthorForm";


type PropsType = {
  setSelectedItem: Function;
  setModalOpen: Function;
  todo: TodoFormValueType;
};

const AuthorItem = ({ setSelectedItem, setModalOpen, todo }: PropsType) => {
  return (
    <li className="w-full flex justify-between items-center bg-white rounded-xl shadow-lg p-5">
      <div>
        <h3>{todo?.name}</h3>
        <p>
          {todo?.deadline} - {todo?.status}
        </p>
      </div>
      <div className=" flex gap-5">
        <Button appearance="default">Delete</Button>
        <Button
          appearance="primary"
          onClick={() => {
            setModalOpen(true);
            setSelectedItem(todo);
          }}
        >
          Modify
        </Button>
      </div>
    </li>
  );
};

export default AuthorItem;
