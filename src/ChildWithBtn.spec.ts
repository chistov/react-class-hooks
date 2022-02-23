import ChildWithBtn from "./ChildWithBtn";
import {create} from 'react-test-renderer';
import App from './index';

describe('test component functionality', () => {
  test('check initial event subscription', () => {
    const child = new ChildWithBtn({})
    const spy = jest.spyOn(child, 'srvReq');
    spy.mockReturnValue(null);
    window.addEventListener = jest.fn(() => {});
    child.componentDidMount();

    expect(window.addEventListener).toHaveBeenCalled()
  });

  test('handle key down', () => {
    const child = new ChildWithBtn({})
    const spy = jest.spyOn(child, 'srvReq');
    spy.mockReturnValue(null);
    console.log = jest.fn(() => {});
    child.handleKeyDown(new KeyboardEvent('down'));

    expect(console.log).toHaveBeenCalled()
  });
});
