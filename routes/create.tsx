/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

import { Handlers, PageProps } from "$fresh/server.ts";

import Button from "../islands/Button.tsx";
import Input from "../islands/Input.tsx";
import Label from "../islands/Label.tsx";

export const handler: Handlers = {
  POST(req, ctx) {
    console.log(ctx);
    return new Response("jey");
  },
};

export default function Create() {
  return (
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
      <h1 class={tw`text-3xl text-center`}>
        Welcome to <span class={tw`text-pink-600 font-italic`}>Key Race</span>.
      </h1>
      <p class={tw`text-center`}>
        A clone of <span class={tw`text-pink-600`}>TypeRacer</span> by Jenesh.
      </p>

      <form
        class={tw`py-6 flex flex-col max-w-screen-sm mx-auto items-center`}
        method="post"
      >
        <Label htmlFor="name" textAlign="center">
          Enter your name
        </Label>
        <Input id="name" name="name" textAlign="center" required />
        <Button>Submit</Button>
      </form>
    </div>
  );
}
