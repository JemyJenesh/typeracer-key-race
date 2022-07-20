/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

type InputProps = {
  disabled?: boolean;
  id?: string;
  readOnly?: boolean;
  textAlign?: "left" | "center" | "right";
  type?: "text" | "password" | "number";
};

export default function Input({
  disabled = false,
  id,
  readOnly = false,
  textAlign = "left",
  type = "text",
}: InputProps) {
  const input = tw`p-2 mb-3 border(2 gray-300 focus:pink-600) bg(gray-50 hover:white focus:white) text(lg ${textAlign}) focus:outline-none`;

  return (
    <input
      class={input}
      disabled={disabled}
      id={id}
      readOnly={readOnly}
      type={type}
    />
  );
}
