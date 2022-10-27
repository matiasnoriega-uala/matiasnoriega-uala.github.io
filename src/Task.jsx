import TaskTitle from "./TaskTitle";
import TaskDescription from "./TaskDescription";
import "./task.css";

function Task({ task }) {
  return (
    <div className="task">
      <TaskTitle title={task.title} />
      <TaskDescription desc={task.desc} />
    </div>
  );
}

export default Task;
