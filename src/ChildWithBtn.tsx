import * as React from 'react'
import {Button} from "./stories/Button";

interface IProps {
  test?: number;
}

interface IState {
  inputValue: number;
  items: number[]
}

interface IItem {
  value: number;
}

export default class ChildWithBtn extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      inputValue: 0,
      items: []
    };
  }

  handleKeyDown($event: KeyboardEvent) {
    console.log('key pressed: ', $event);
  }

  srvReq() {
    const arr = require('/src/assets/data.json').array;
    arr.forEach((item:IItem) => this.setState((prev) => ({
      items: [...prev.items, item.value]
    })) )
  }

  componentDidMount() {
    this.srvReq();
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  shouldComponentUpdate(nextProps:Readonly<IProps>) {
    return nextProps.test ? true: false;
  }

  componentDidUpdate(prevProps: Readonly<IProps>){
    if(this.props.test !== prevProps) {
      console.log('componentDidUpdate items: ', this.state.items);
      this.srvReq();
    }
  }

  onClick() {
    console.log('Btn clicked: ', this.state.inputValue);
    this.setState((prev) => ({
      inputValue: prev.inputValue + 1
    }))
  }

  render(): JSX.Element {
    return (
      <div>
        <h1>Child component</h1>
        <h4>input value: {this.state.inputValue}</h4>
        <Button label='Click me to increment value' onClick={() => this.onClick()}></Button>
        <ul>
          {this.state.items.map(v => <li key={v}>'value: ' + {v} </li>)}
        </ul>
      </div>
    )
  }
}
