import { Counter } from "../index/Counter";
import "./index.css";

export { Page };

function Page() {
  return (
    <>
      <h1>About</h1>
      <p>A colored page.</p>
      Interactive. <Counter />
    </>
  );
}
