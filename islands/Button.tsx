/** @jsx h */
import { h } from "preact";
import type { ComponentChild } from "preact";
import { tw } from "@twind";

type ButtonProps = {
  children: ComponentChild;
  disabled?: boolean;
  onClick?: () => void;
};

export default function Button({
  children,
  disabled = false,
  onClick,
}: ButtonProps) {
  const btn = tw`px-3 py-2 bg-pink-600 text-white hover:bg-pink-700`;

  return (
    <button class={btn} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
