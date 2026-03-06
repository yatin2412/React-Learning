import React, { useEffect, useState } from 'react';

const Todo = () => {
  const [list, setList] = useState([]);
  const [value, setValue] = useState("");
  const [editValue, setEditValue] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [clearAllVisible, setClearAllVisible] = useState(false);

  const handleChange = (e) => {
    if (editingId) {
      setEditValue(e.target.value);
    } else {
      setValue(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) return;

    const itemToAppend = {
      id: Date.now(),
      name: value,
      checked: false
    };
    setList(prev => [...prev, itemToAppend]);
    setValue("");
  };

  const handleDelete = (id) => {
    setList(prev => prev.filter(item => item.id !== id))
    setEditingId('');
    setEditValue('');
  };

  const handleChecked = (e, id) => {
    const checkeds = e.target.checked;
    setList(items => items.map(item =>
      item.id === id ? { ...item, checked: checkeds } : item
    ));
  };

  const handleEditClicked = (name, id) => {
    setEditingId(id);
    setEditValue(name);
  };

  const handleChangedItem = (name, id) => {
    if (!name.trim()) return;

    setList(prev => prev.map(todoTask =>
      todoTask.id === id ? { ...todoTask, name } : todoTask
    ));
    setEditingId('');
    setEditValue('');
  };

  const handleClearCompleted = () => {
    setList(list.filter(item => !item.checked));
  };
  
  const hasCompleted = list.some(item => item.checked)

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder='Enter Todo Task'
        onChange={handleChange}
        value={value}
      />
      <button type='submit'>Add Item</button>
      <ul>
        {list.map(item => (
          <li key={item.id}>
            {editingId !== item.id && (
              <span
                style={{ textDecoration: item.checked ? "line-through" : "none" }}
                onClick={() => handleEditClicked(item.name, item.id)}
              >
                {item.name}
              </span>
            )}
            {editingId === item.id && (
              <>
                <input value={editValue} onChange={handleChange} />
                <button type="button" onClick={() => handleChangedItem(editValue, item.id)}>Save</button>
                <button type="button" onClick={() => { setEditValue(""); setEditingId(''); }}>Cancel</button>
              </>
            )}
            {editingId !== item.id && (
              <>
                <input
                  type='checkbox'
                  checked={item.checked}
                  onChange={(e) => handleChecked(e, item.id)}
                />
                <button type="button" onClick={() => handleDelete(item.id)}>Delete Item</button>
              </>
            )}
          </li>
        ))}
      </ul>
      {hasCompleted && (
        <button type="button" onClick={handleClearCompleted}>Clear All Completed</button>
      )}
    </form>
  );
};

export default Todo;