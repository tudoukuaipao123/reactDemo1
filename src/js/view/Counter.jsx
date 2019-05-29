import '../../style/counter'
import React, { Component } from 'react';
import * as action from '../action';
import ProviderBox from '../ProviderBox';
class Counter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="counter-contain">
        <div className="caption-name">{this.props.caption}</div>
        <button onClick={this.props.onDecrement} className="counter-decrement">-</button>
        <button onClick={this.props.onIncrement} className="counter-increment">+</button>
        <div className="counter-total">total: {this.props.value}</div>
      </div>
    )
  }
}

class CounterContain extends  Component {
  constructor(props, context) {
    super(props, context);
    this.state = this.getOwnState();
  }

  getOwnState = () => {
    return {
      value: this.context.store.getState()[this.props.caption]
    }
  }

  onIncrement = () => {
    this.context.store.dispatch(action.increment(this.props.caption));
  }

  onDecrement = () => {
    this.context.store.dispatch(action.decrement(this.props.caption));
  }

  onUpdate = () => {
    this.setState(this.getOwnState());
  }

  componentDidMount() {
    this.context.store.subscribe(this.onUpdate);
  }

  componentWillUnmount() {
    this.context.store.unsubscribe(this.onUpdate)
  }

  render() {
    const { caption } = this.props;
    return (
      <Counter
        caption={caption} 
        onIncrement={this.onIncrement}
        onDecrement={this.onDecrement}
        value={this.state.value}
      />
    )
    
  }
}

CounterContain.contextType = ProviderBox;

export default CounterContain;