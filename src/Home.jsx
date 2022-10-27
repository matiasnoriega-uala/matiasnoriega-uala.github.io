import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <br />
      <br />
      <Link to="/tasklist">Ir a TaskList</Link>
    </>
  );
}
