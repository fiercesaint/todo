import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';

import './app.css';

export default class App extends Component {
  
  maxId = 100;
  
  state = {
    todoData : [
      { label: 'Drink Coffee', important: false, id: 1 },
      { label: 'Learn React', important: true, id: 2 },
      { label: 'Have some fun', important: false, id: 3 }
    ]
  }

  deleteItem = (id) => {
    this.setState(({todoData}) => {
      const idx = todoData.findIndex((el) => el.id === id);
      
      const newTododata = [
        ...todoData.slice(0, idx),
        ...todoData.slice(idx+1)
      ];

      return {
        todoData: newTododata
      };

    });
  }

  addItem = (label) => {
    const newItem = {
      label,
      important: false,
      id: this.maxId++
    };

    this.setState(({todoData}) => {
     
      const newTodoData = [...todoData, newItem];
      return {
        todoData: newTodoData
      }
    })
    console.log(label);
  }

  render() {
    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3} />
        
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>

        <TodoList 
          todos={this.state.todoData} 
          onDeleted={this.deleteItem}/>

        <ItemAddForm 
          onAdded={this.addItem} />
      </div>
    );
  }
}
