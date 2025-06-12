import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "./ui/textarea";
import { useState, useEffect } from "react";

export default function AddTodo({ handleAddTodo, handleUpdateTodo, editingTodo, setEditingTodo }) {
  const [todoData, setTodoData] = useState({
    title: "",
    description: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (editingTodo) {
      setTodoData({
        title: editingTodo.title,
        description: editingTodo.description,
      });
    }
  }, [editingTodo]);

  const handleSubmit = async () => {
    setIsLoading(true);
    if (editingTodo) {
      await handleUpdateTodo(todoData);
    } else {
      await handleAddTodo(todoData);
    }
    setTodoData({ title: "", description: "" });
    setIsLoading(false);
  };

  const handleCancel = () => {
    setEditingTodo(null);
    setTodoData({ title: "", description: "" });
  };

  return (
    <Card className="w-full shadow-2xl  max-w-sm bg-gradient-to-tl text-white from-green-400 to-blue-900 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className={" text-white font-bold text-2xl"}>
          {editingTodo ? "Edit Todo" : "Add Todo"}
        </CardTitle>
        <CardDescription className={" text-white font-thin italic"}>
          {editingTodo ? "Update your task below" : "Enter your daily tasks below to add to your list"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="title">Title</Label>
              <Input
                className={` bg-white text-black ${
                  todoData.title === ""
                    ? "border-red-500"
                    : "border-green-500 focus:border-green-500"
                }`}
                value={todoData.title}
                onChange={(e) =>
                  setTodoData({ ...todoData, title: e.target.value })
                }
                id="title"
                type="text"
                placeholder="Enter your todo"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                className={` bg-white text-black ${
                  todoData.description === ""
                    ? "border-red-500"
                    : "border-green-500 focus:border-green-500"
                }`}
                value={todoData.description}
                onChange={(e) =>
                  setTodoData({ ...todoData, description: e.target.value })
                }
                id="description"
                placeholder="Enter your todo description"
                rows={3}
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button
          variant="outline"
          disabled={todoData.title === "" || todoData.description === ""}
          type="submit"
          className={` w-full text-fuchsia-900  ${
            todoData.title === "" || todoData.description === ""
              ? "bg-gray-100 cursor-no-drop hover:bg-gray-200"
              : "bg-amber-500 hover:bg-amber-600 cursor-pointer"
          }`}
          onClick={handleSubmit}
        >
          {isLoading ? (editingTodo ? "Updating..." : "Adding...") : (editingTodo ? "Update Todo" : "Add Todo")}
        </Button>
        {editingTodo && (
          <Button
            variant="outline"
            type="button"
            className="w-full bg-gray-200 hover:bg-gray-300 text-fuchsia-900"
            onClick={handleCancel}
          >
            Cancel
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
