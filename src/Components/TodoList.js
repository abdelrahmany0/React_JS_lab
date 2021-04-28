import { Component } from 'react';
import '../Styles/TodoList.css';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                { name: "task1" ,isCompleted: false}
            ],
            input: "",
        }
    }
    setInput = (e)=>{
        this.setState({input:e.target.value})
    }
    addTask = (e)=>{
        const todoItem = { name: this.state.input, isCompleted: false }
        const joined = this.state.todos.concat(todoItem)
        this.setState({todos: joined, input: ""})
    }
    taskCompleted = (e) => {
        const items = [...this.state.todos];
        const item = items.find(item => item.name === e)
        item.isCompleted = true
        this.setState({todos: items})
    }
    taskNotCompleted = (e) => {
        const items = [...this.state.todos];
        const item = this.state.todos.find(item => item.name === e)
        item.isCompleted = false
        this.setState({todos: items})
    }
    render () {
        return(
            <div className="w-50 center-text p-4 rounded-lg main">
                <h3>Todo List</h3>
                {
                    this.state.todos.map((item) => {
                        return(
                            <div className={"container my-4 alert alert-" + ( item.isCompleted? "success" : "primary") }
                                 key={item.name} role="alert"
                            >{ item.name }
                                <div>
                                </div>
                                <div className="float-right">
                                    <button className="btn btn-success"
                                            onClick={()=>this.taskCompleted(item.name)}>Completed</button>
                                    <button className="btn btn-danger ml-1"
                                            onClick={()=>this.taskNotCompleted(item.name)}>Not Completed</button>
                                </div>
                            </div>
                        )
                    })
                }
                <label>Task:</label>
                <input value={this.state.input}
                       type="text" placeholder="Enter Task Name"
                       className="form-control w-50 d-inline m-2" onChange={this.setInput} />
                <button className="btn btn-primary d-inline" onClick={this.addTask}>Add</button>
            </div>
        );
    }
}

export default TodoList;