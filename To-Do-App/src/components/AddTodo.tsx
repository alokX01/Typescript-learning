import { useState, type ChangeEvent, type FormEvent } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

type AddTodoProps = {
  onAddTodo: (text: string) => void;
};

const AddTodo = (props: AddTodoProps) => {
  const [text, setText] = useState<string>("");

  const changeEventHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    props.onAddTodo(text);
    setText("");
  };

  return (
    <form onSubmit={submitHandler} className="flex items-center gap-5">
      <Input
        type="text"
        placeholder="Write a new ToDo..."
        className="w-fit"
        value={text}
        onChange={changeEventHandler}
      />
      <Button type="submit">Add Todo</Button>
    </form>
  );
};

export default AddTodo;
    