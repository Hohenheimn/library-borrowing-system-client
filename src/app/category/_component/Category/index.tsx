"use client";

import React from "react";


import Button from "@/components/Button";
import Modal from "@/components/Modal";


import { useFetch } from "../../../../../util/api";
import TodoForm, { TodoFormValueType } from "../CategoryForm";
import TodoItem from "../CategoryItem";


const Category = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState<TodoFormValueType>({
    id: undefined,
    name: "",
    description: "",
    deadline: "",
    status: "",
  });

  const { data, isLoading } = useFetch(["category-list"], "/api/category");
  return (
    <>
      <section className=" w-full space-y-5">
        <Button appearance="primary" onClick={() => setShowModal(true)}>
          Add Task
        </Button>

        <ul className=" w-full">
          <TodoItem
            setSelectedItem={setSelectedItem}
            setModalOpen={setShowModal}
            todo={{
              id: undefined,
              name: "asdas",
              description: "asd",
              deadline: "asd",
              status: "pending",
            }}
          />
        </ul>
      </section>

      <Modal
        onClose={() => {
          setShowModal(false);
        }}
        show={showModal}
        width={"narrow"}
      >
        <TodoForm setModal={setShowModal} defaultValues={selectedItem} />
      </Modal>
    </>
  );
};

export default Category;
