/** @jsx h */
import { h } from "preact";
import { useEffect, useState } from "preact/hooks";
import { tw } from "@twind";

import Link from "./Link.tsx";

// type HomeProps = {
//   textAlign?: "left" | "center" | "right";
//   children: ComponentChild;
//   htmlFor?: string;
// };

export default function HomeLink() {
  const [player, setPlayer] = useState(null);
  const createLink = player ? "/game" : "/create";

  useEffect(() => {
    setPlayer(JSON.parse(localStorage.getItem("player") ?? "null"));
  }, []);

  return (
    <div class={tw`flex justify-center my-4 gap-4`}>
      <Link to={createLink}>Create race</Link>
      <Link to="/join">Join race</Link>
    </div>
  );
}
