/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import HomeLinks from "../islands/HomeLinks.tsx";

export default function Home() {
  return (
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
      <h1 class={tw`text-3xl text-center`}>
        Welcome to <span class={tw`text-pink-600 font-italic`}>Key Race</span>.
      </h1>
      <p class={tw`text-center`}>
        A clone of <span class={tw`text-pink-600`}>TypeRacer</span> by Jenesh.
      </p>

      <HomeLinks />
    </div>
  );
}
