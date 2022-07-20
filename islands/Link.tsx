/** @jsx h */
import { h } from "preact";
import type { ComponentChild } from "preact";
import { tw } from "@twind";

type LinkProps = {
  children: ComponentChild;
  to: string;
};

export default function Link({ children, to }: LinkProps) {
  const btn = tw`px-3 py-2 bg-pink-600 text-white hover:bg-pink-700`;

  return (
    <a class={btn} href={to}>
      {children}
    </a>
  );
}
