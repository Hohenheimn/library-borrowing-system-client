"use client";

import React from "react";


import Button from "@/components/Button";
import Modal from "@/components/Modal";


import TodoForm, { TodoFormValueType } from "../BookForm";
import TodoItem from "../BookItem";


const Book = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState<TodoFormValueType>({
    id: undefined,
    name: "",
    description: "",
    deadline: "",
    status: "",
  });
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

export default Book;
