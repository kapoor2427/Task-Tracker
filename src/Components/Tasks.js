import Task from "./Task";

const Tasks = ({ tasks, deleteTask, setReminderToggle }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          setReminderToggle={setReminderToggle}
        />
      ))}
    </>
  );
};

export default Tasks;
