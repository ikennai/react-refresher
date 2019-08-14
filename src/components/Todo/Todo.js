import React, { Component } from 'react';
import uuidv4 from 'uuidv4';

// Styles
import './Todo.css';

// Component Imports
import List from './List';

class Todo extends Component {
    constructor() {
        super();

        // Initial state
        this.state = {
            items: [],
            task: ``
        };
    }

    componentDidMount() {
        // Setting default tasks
        const state = JSON.parse(localStorage.getItem('todoState') || JSON.stringify({
            items: []
        }));

        // Create local storage object
        localStorage.setItem('todoState', JSON.stringify(state));

        this.setState({ ...state });
    }

    handleOnChange = e => {
        const { target: { value } } = e;

        // Update our task state with the input value
        this.setState({
            task: value
        });
    }

    handleOnSubmit = e => {
        // Prevent default to avoid the actual form submit
        e.preventDefault();

        // Once submitted, we reset the task value and push
        // the new task to the items array.
        if (this.state.task.trim() !== '') {
            const updatedItems = [
                ...this.state.items,
                {
                    id: uuidv4(),
                    task: this.state.task,
                    complete: false
                }
            ];

            // Save new item to local storage
            localStorage.setItem('todoState', JSON.stringify({ items: updatedItems }));

            // Update state
            this.setState({
                task: '',
                items: [...updatedItems]
            });
        }
    }

    markAsCompleted = id => {
        // Finding the task by id...
        const foundTask = this.state.items.find(task => task.id === id);

        // Updating the completed status...
        foundTask.completed = true;

        // Updating the state with the new updated task...
        this.setState({
            items: [
                ...this.state.items
            ]
        });

        // Save new item to local storage
        localStorage.setItem('todoState', JSON.stringify({ items: this.state.items }));
    }

    removeTask = id => {
        // Filtering the tasks by removing the specific task id...
        const filteredTasks = this.state.items.filter(task => task.id !== id);

        // Updating items state...
        this.setState({
            items: filteredTasks
        });

        // Update local state storage
        localStorage.setItem('todoState', JSON.stringify({ items: this.state.items }));
    }

    render() {
        return (
            <div className="Todo">
                <h1>New Task:</h1>

                <form onSubmit={this.handleOnSubmit}>
                    <input
                        value={this.state.task}
                        onChange={this.handleOnChange}
                    />
                </form>

                <List
                    items={this.state.items}
                    markAsCompleted={this.markAsCompleted}
                    removeTask={this.removeTask}
                />
            </div>
        );
    }
}

export default Todo;