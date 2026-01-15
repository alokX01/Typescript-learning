import React from "react";
import { Card, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Delete } from "lucide-react";

type todoListProps = {
  items: {
    id: string;
    text: string;
  }[];
  onRemoveTodo:(todoId: string) =>void;
};

const TodoList: React.FC<todoListProps> = (props) => {
  return (
    <div className="my-5 space-y-3">
      {props.items.map((todo) => (
        <Card key={todo.id}>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>{todo.text}</CardTitle>

            <Button onClick={()=>props.onRemoveTodo(todo.id)} variant="destructive" size="icon">
              <Delete className="h-4 w-4" />
            </Button>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
};

export default TodoList;
