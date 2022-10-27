import TaskList from "./TaskList";
import Home from "./Home";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasklist" element={<TaskList />} />
        </Routes>
      </BrowserRouter>

      <Outlet />
    </>
  );
}

export default App;
