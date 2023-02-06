import { Component } from "react";

export class Input extends Component {
  
  onChangeEvent = (e) => {
console.log(e.target.value)
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted!")
  }

  render() {
    return <form onSubmit={this.handleSubmit}>
        <input type="text"
        onChange={this.onChangeEvent}/>
      </form>
  }
}