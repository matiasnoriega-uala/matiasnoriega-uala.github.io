import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import TaskTitle from "./TaskTitle";
import TaskDescription from "./TaskDescription";
import "./task.css";

function Task({ task }) {
  return (
    <div className="task">
      <TaskTitle title={task.title} />
      <TaskDescription desc={task.desc} />
      <hr />
      <Link to="/">Volver</Link>
    </div>
  );
}

export default Task;
