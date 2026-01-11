function TaskItem({ task, onDelete, onToggle }) {
  return (
    <li className={`task ${task.completed ? "completed" : ""}`}>
      <label>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />
        <span>{task.text}</span>
      </label>

      <button onClick={() => onDelete(task.id)}>✕</button>
    </li>
  );
}

export default TaskItem;
