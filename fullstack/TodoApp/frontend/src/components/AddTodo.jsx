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
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

export default function AddTodo({ handleAddTodo }) {
  const [todoData, setTodoData] = useState({
    title: "",
    description: "",
  });
  return (
    <Card className="w-full max-w-sm bg-blue-200-100 shadow-sm">
      <CardHeader>
        <CardTitle>Add Todo</CardTitle>
        <CardDescription>
          Enter your daily tasks below to add to your list
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="title">Title</Label>
              <Input
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
                value={todoData.description}
                onChange={(e) =>
                  setTodoData({ ...todoData, description: e.target.value })
                }
                id="description"
                placeholder="Enter your todo description"
                rows={3}
              />
            </div>
            <div className="grid gap-2"></div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button
          type="submit"
          className="w-full text-white cursor-pointer"
          onClick={() => handleAddTodo(todoData)}
        >
          Add Todo
        </Button>
      </CardFooter>
    </Card>
  );
}
