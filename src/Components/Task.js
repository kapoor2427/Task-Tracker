import { FaTimes } from "react-icons/fa";

const Task = ({ task, deleteTask, setReminderToggle }) => {
  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => setReminderToggle(task.id)}
    >
      <h3>
        {task.name}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => deleteTask(task.id)}
        />
      </h3>
      <p>{task.time}</p>
    </div>
  );
};

export default Task;
