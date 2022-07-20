/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Link from "../islands/Link.tsx";

export default function Home() {
  return (
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
      <h1 class={tw`text-3xl text-center`}>
        Welcome to <span class={tw`text-pink-600 font-italic`}>Key Race</span>.
      </h1>
      <p class={tw`text-center`}>
        A clone of <span class={tw`text-pink-600`}>TypeRacer</span> by Jenesh.
      </p>

      <div class={tw`flex justify-center my-4 gap-4`}>
        <Link to="/create">Create race</Link>
        <Link to="/join">Join race</Link>
      </div>
    </div>
  );
}
