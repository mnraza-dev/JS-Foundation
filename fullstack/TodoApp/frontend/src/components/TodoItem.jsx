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

export default function TodoItem() {
  return (
    <Card className={"bg-amber-300 shadow-sm"}>
      <CardHeader>
        <CardTitle className={"text-fuchsia-950"}>Todo Item</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className={"text-fuchsia-950"}>
          Lorem ipsum dolor sit amere corporis minus earum. Illo, quae!
        </CardDescription>
      </CardContent>
      <CardFooter className={"justify-end gap-2"}>
        <Button className="rounded-full" size={"icon"} variant={""}>
          <PencilIcon className="w-4 h-4" />
        </Button>
        <Button className="rounded-full" size={"icon"} variant={"destructive"}>
          <Trash2 className="w-4 h-4 text-gray-100" />
        </Button>
      </CardFooter>
    </Card>
  );
}
