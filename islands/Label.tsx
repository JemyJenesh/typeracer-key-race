/** @jsx h */
import { h } from "preact";
import type { ComponentChild } from "preact";
import { tw } from "@twind";

type LabelProps = {
  textAlign?: "left" | "center" | "right";
  children: ComponentChild;
  htmlFor?: string;
};

export default function Label({
  textAlign = "left",
  children,
  htmlFor,
}: LabelProps) {
  return (
    <label class={tw`mb-3 text(gray-700 ${textAlign})`} htmlFor={htmlFor}>
      {children}
    </label>
  );
}
