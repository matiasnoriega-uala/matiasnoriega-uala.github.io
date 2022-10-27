import { Link } from "react-router-dom";
import tasks from "./assets/tasks";

function TaskList() {
  return (
    <>
      <h1>Tasklist</h1>
      <ul>
        {tasks.map((t, i) => {
          return (
            <>
              <Link to={`task/${t.id}`} key={i}>
                {t.title}
              </Link>
              <br />
            </>
          );
        })}
      </ul>
    </>
  );
}

export default TaskList;
