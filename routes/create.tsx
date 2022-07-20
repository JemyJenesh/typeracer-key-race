/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Button from "../islands/Button.tsx";
import Input from "../islands/Input.tsx";
import Label from "../islands/Label.tsx";

export default function Home() {
  return (
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
      <h1 class={tw`text-3xl text-center`}>
        Welcome to <span class={tw`text-pink-600 font-italic`}>Key Race</span>.
      </h1>
      <p class={tw`text-center`}>
        A clone of <span class={tw`text-pink-600`}>TypeRacer</span> by Jenesh.
      </p>

      <form class={tw`py-6 flex flex-col max-w-screen-sm mx-auto items-center`}>
        <Label htmlFor="name" textAlign="center">
          Enter your name
        </Label>
        <Input id="name" textAlign="center" />
        <Button>Submit</Button>
      </form>
    </div>
  );
}
