import { Component } from "react";
import icon from './icon.png';

export class ToDoList extends Component {
  state = {
    userInput: "",
    listToDo: []
  }

  onFormSubmit(e) {
    e.preventDefault();
  }

  onChangeEvent(e) {
    this.setState({userInput: e})
  }

  addItem(input) {
    if (input === '') {
      alert("Please enter an item")
    } else {
      let listArray = this.state.listToDo;
      listArray.push(input);
      this.setState({listToDo: listArray, userInput: ""})
    } 
  }

  crossedWord(event) {
    const li = event.target;
    li.classList.toggle('crossed');
  }

  deleteItem() {
    let listArray = this.state.listToDo;
    listArray = [];
    this.setState({listToDo: listArray});
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <div className="container">
            <input type="text" placeholder="What would you like to do?" onChange={(e) => {this.onChangeEvent(e.target.value)}} value={this.state.userInput} />
          </div>

          <div className="container">
            <button onClick = {() => this.addItem(this.state.userInput)} className="btn add">Add</button>
          </div>

          <ul>
            {this.state.listToDo.map((item, index) => (<li onClick={this.crossedWord} key={index}><img src={icon} width="40px" alt="Icon"></img>{item}</li>))}
          </ul>

          <div className="container">
            <button onClick = {() => this.deleteItem()} className="btn delete">Delete</button>
          </div>

        </form>

      </div>
    )
  }
}