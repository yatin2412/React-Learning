import React, { useState } from "react";

type Task = {
  id: number;
  title: string;
  content: string;
};

type FormState = {
  title: string;
  content: string;
};

const TaskManager = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [editingId, setEditingId] = useState<number | null>(null);

  const [form, setForm] = useState<FormState>({
    title: "",
    content: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setForm({
      title: "",
      content: "",
    });
    setEditingId(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.title.trim() || !form.content.trim()) {
      alert("Some values are empty");
      return;
    }

    if (editingId !== null) {
      setTasks((prev) =>
        prev.map((task) =>
          task.id === editingId
            ? { ...task, title: form.title, content: form.content }
            : task,
        ),
      );
    } else {
      const newTask: Task = {
        id: Date.now(),
        title: form.title,
        content: form.content,
      };

      setTasks((prev) => [...prev, newTask]);
    }

    resetForm();
  };

  const handleEdit = (task: Task) => {
    setEditingId(task.id);

    setForm({
      title: task.title,
      content: task.content,
    });
  };

  const handleDelete = (id: number) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Title"
        />

        <input
          name="content"
          value={form.content}
          onChange={handleChange}
          placeholder="Content"
        />

        <button type="submit">
          {editingId !== null ? "Update Task" : "Add Task"}
        </button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Content</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.title}</td>
              <td>{task.content}</td>

              <td>
                <button onClick={() => handleEdit(task)}>Edit</button>
                <button onClick={() => handleDelete(task.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TaskManager;
