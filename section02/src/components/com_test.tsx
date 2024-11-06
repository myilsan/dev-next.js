import React from "react";
import { BookData } from "@/types";
export default function Com_test(props: BookData) {
  return (
    <main>
      <div>com_test </div>
      <div>{props.title} </div>
    </main>
  );
}
