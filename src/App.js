import { useState } from "react";

import "./styles.css";
import Header from "./Components/Header";
import Tasks from "./Components/Tasks";

export default function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: "Physician Appointment",
      time: "16th Oct at 5:00 pm",
      reminder: true
    },
    {
      id: 2,
      name: "Dentist Appointment",
      time: "19th Oct at 3:00 pm",
      reminder: true
    },
    {
      id: 3,
      name: "Therapist Appointment",
      time: "16th Oct at 2:00 pm",
      reminder: false
    }
  ]);

  // delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // set Reminder
  const setReminderToggle = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header title="Task Tracker" />
      {tasks.length === 0 ? (
        <p>No Task to Display</p>
      ) : (
        <Tasks
          tasks={tasks}
          deleteTask={deleteTask}
          setReminderToggle={setReminderToggle}
        />
      )}
    </div>
  );
}
