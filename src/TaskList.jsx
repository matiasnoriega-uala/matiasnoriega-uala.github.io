import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ts from "./assets/tasks";
import Task from "./Task";

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [task, setTask] = useState(null);

  useEffect(() => {
    setTasks(ts);
  }, []);
  const handleForm = (event) => {
    event.preventDefault();

    const newTask = {
      id: tasks.length + 1,
      title: title,
      desc: description,
    };
    setTasks(tasks.concat(newTask));
  };
  return (
    <>
      <h1>Tasklist</h1>
      <form onSubmit={handleForm}>
        <input
          type="text"
          name="title"
          onChange={(event) => setTitle(event.target.value)}
        />
        <label htmlFor="title">Titulo</label>
        <br />
        <textarea
          name="desc"
          onChange={(event) => setDescription(event.target.value)}
        />
        <label htmlFor="desc">Descripción</label>
        <br />
        <input type="submit" value="Cargar" />
      </form>
      <h2>Lista de Tareas</h2>
      {tasks.map((t, i) => {
        return (
          <button
            key={i}
            onClick={() => {
              setTask(t);
            }}
          >
            {t.title}
          </button>
        );
      })}

      {task ? (
        <>
          <h2>Tarea</h2>
          <Task task={task} />
        </>
      ) : (
        <></>
      )}
      <hr />
      <Link to="/">Volver</Link>
    </>
  );
}

export default TaskList;
