import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Trash2 } from "lucide-react";
import { PencilIcon } from "lucide-react";

export default function TodoItem({ todo, deleteTodo }) {
  return (
    <Card
      className={
        "backdrop-blur-sm w-full max-w-xs shadow-2xl bg-gradient-to-br from-amber-200 to-blue-300 hover:shadow-2xl hover:scale-105 hover:transition-all hover:duration-300 "
      }
    >
      <CardHeader>
        <CardTitle className={"text-fuchsia-950"}>{todo.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className={"text-fuchsia-950"}>
          {todo.description}
        </CardDescription>
      </CardContent>
      <CardFooter className={"justify-end gap-2"}>
        <Button
          onClick={() => handleEdit(todo._id)}
          className="rounded-full"
          size={"icon"}
          variant={""}
        >
          <PencilIcon className="w-4 h-4" />
        </Button>
        <Button
          onClick={() => deleteTodo(todo._id)}
          className="rounded-full cursor-pointer"
          size={"icon"}
          variant={"destructive"}
        >
          <Trash2 className="w-4 h-4 text-gray-100" />
        </Button>
      </CardFooter>
    </Card>
  );
}
