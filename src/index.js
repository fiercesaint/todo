import React from 'react';
import ReactDOM from 'react-dom';

<<<<<<< HEAD
import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list';
=======
const TodoList = () => {
    const items = ['Learn React', 'Drink Coffee'];
    return (
        <ul>
            <li>{ items[0] }</li>
            <li>{ items[1] }</li>
        </ul>
    );
}

const AppHeader = () => {
    return <h1>My ToDo List!</h1>;
} 

const SearchPanel = () => {
    const searchText = "Type here to search";
    return <input placeholder={ searchText } />;
}
>>>>>>> a07b2d63d3cc43890a059193438c8cba2e260d9f

const App = () => {
    return (
        <div>
            <AppHeader />
            <SearchPanel />
            <TodoList />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));