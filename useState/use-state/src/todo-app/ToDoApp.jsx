import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './ToDoApp.module.css';

export function TodoApp() {
    const [tasks, setTasks] = useState([]);

    const addTask = () => {
        setTasks(prevTasks => [
            ...prevTasks,
            {
                id: uuidv4(),
                title: `Новая задача`,
                completed: false,
            },
        ]);
    };

    return (
        <div className={styles.todoApp}>
            <button className={styles.addButton} onClick={addTask}>Добавить задачу</button>
            <ul className={styles.taskList}>
                {tasks.map(task => (
                    <li key={task.id} className={styles.taskItem}>{`${task.title} ${task.id}`}</li>
                ))}
            </ul>
        </div>
    );
}