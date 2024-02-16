// import React, { useState } from 'react'

// export default function Homepage() {
//   return (
//     <div className="ToDo">
//         <h1 >TO DO LIST</h1>
//         <div className='ToDoBox'>
//         <div className="Title">
//             <h4>Title</h4>
//             <input type="text"className='TitleInput' placeholder='Whats the title'></input>
//         </div>
//         <div className="Description">
//             <h4>Description</h4>
//             <input type="text" className='DescriptionInput' placeholder="Whats the Description"></input>
//         </div>
//         <div className="Button" type="button">
//             <button>Add</button>
//         </div>      
//         </div>
//         <div className='buttons'>
//           <button type="button" className={`iscompletescreen ${iscompletescreen===false && 'active'}`} onClick={()=>setIscompletescreen(false)}>TODO</button>
//           <button type="button" className={`iscompletescreen ${iscompletescreen===true && 'active'}`} onClick={()=>setIscompletescreen(true)}>Completed</button>
//         </div>
//         <div className="todo-list">
//           <div className="todo-list-item">
//             <h2>Task1</h2>
//             <p>Description</p>
//             <button className="del_but"type="button">del</button>
//             <button className="clear_but"type="button">clear</button>
//           </div>
//         </div>
//     </div>
//   )
// }
import React, { useState } from 'react';

function TodoApp() {
  // State variables for input fields and tasks
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tasks, setTasks] = useState([]);
  const [isCompleteScreen, setIsCompleteScreen] = useState(false);

  // Event handlers for input changes
  const handleTitleChange = (event) => setTitle(event.target.value);
  const handleDescriptionChange = (event) => setDescription(event.target.value);

  // Function to add a new task
  const addTask = () => {
    if (title.trim() !== '') {
      const newTask = { title, description, completed: false };
      setTasks([...tasks, newTask]);
      setTitle('');
      setDescription('');
    }
  };
  
  // Function to toggle completion status of a task
  const toggleComplete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  // Function to delete a task
  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className="ToDo">
      {/* Header and input fields for new tasks */}
      <h1>TO DO LIST</h1>
      <div className="ToDoBox">
        <div className="Title">
          <h4>Title</h4>
          <input
            type="text"
            className="TitleInput"
            placeholder="What's the title"
            value={title}
            onChange={handleTitleChange}
          />
        </div>
        <div className="Description">
          <h4>Description</h4>
          <input
            type="text"
            className="DescriptionInput"
            placeholder="What's the description"
            value={description}
            onChange={handleDescriptionChange}
          />
        </div>
        <div className="Button" type="button">
          <button onClick={addTask}>Add</button>
        </div>
      </div>

      {/* Buttons for switching between "TODO" and "Completed" views */}
      <div className="buttons">
        <button
          type="button"
          className={`iscompletescreen ${!isCompleteScreen && 'active'}`}
          onClick={() => setIsCompleteScreen(false)}
        >
          TODO
        </button>
        <button
          type="button"
          className={`iscompletescreen ${isCompleteScreen && 'active'}`}
          onClick={() => setIsCompleteScreen(true)}
        >
          Completed
        </button>
      </div>

      {/* Render ToDo list dynamically */}
      <div className="todo-list">
        {tasks.map((task, index) => (
          <div
            key={index}
            className={`todo-list-item ${task.completed && 'completed'}`}
            style={{ display: isCompleteScreen === task.completed ? 'flex' : 'none' }}
          >
            <h2>{task.title}</h2>
            <p>{task.description}</p>
            <button className="del_but" type="button" onClick={() => deleteTask(index)}>
              Del
            </button>
            <button
              className="clear_but"
              type="button"
              onClick={() => toggleComplete(index)}
            >
              {task.completed ? 'Undo' : 'Complete'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoApp;
