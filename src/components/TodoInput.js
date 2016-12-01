import React, { Component } from 'react';


class TodoInput extends Component {

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
        <input
          type="text"
          placeholder="wathever Todo"
          value={this.state.inputText}
          onChange={this.handleChange.bind(this)}
        />
        <button>Submit</button>
      </div>
    )
  }
}

export default TodoInput;
