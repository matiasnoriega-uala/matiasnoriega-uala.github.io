import TaskList from "./TaskList";
import Task from "./Task";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TaskList />} />
          <Route path="task/:id" element={<Task />} />
        </Routes>
      </BrowserRouter>

      <Outlet />
    </>
  );
}

export default App;
