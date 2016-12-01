import React, { Component } from 'react';


class TodoList extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      inputText: 'initial Text'
    }
  }

  handleChange(event) {
    this.setState({
      inputText: event.taget.value
    })
  }

  render(){
    return (
      <div>
        This is the todolist
      </div>
    )
  }
}

export default TodoList;
