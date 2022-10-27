import { useParams } from "react-router-dom";
import tasks from "./assets/tasks";
import { Link } from "react-router-dom";
import TaskTitle from "./TaskTitle";
import TaskDescription from "./TaskDescription";
import "./task.css";

function Task() {
  const params = useParams();
  const task = tasks.find((t) => {
    return t.id == params.id;
  });

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
