import ChildWithBtn from "./ChildWithBtn";
import App from './index';

describe('test component functionality', () => {
  test('check initial Item state', () => {

    const child = new ChildWithBtn({})
    const spy = jest.spyOn(child, 'srvReq');
    spy.mockReturnValue(null);
    window.addEventListener = jest.fn(() => {});
    child.componentDidMount();

    expect(window.addEventListener).toHaveBeenCalled()
  });
});
