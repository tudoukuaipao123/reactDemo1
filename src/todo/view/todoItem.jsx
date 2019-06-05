/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';

class TodoItem extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <li
        style={{
          textDecoration: this.props.completed ? 'line-through' : 'none'
        }}
        className="todo-item"
      >
        <input className="todo-toggle"
          onClick={this.props.onToggle}
          type="checkbox"
          checked={this.props.completed}
          readOnly
        />
        <span className="todo-text">{this.props.textValue}</span>
        <button className="todo-remove" onClick={this.props.onRemove}>X</button>
      </li>
    )
  }
}

export default connect()(TodoItem);