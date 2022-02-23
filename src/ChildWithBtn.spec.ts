import * as React from "react";
import renderer from 'react-test-renderer';
import userEvent from '@testing-library/user-event';
import {render, screen} from '@testing-library/react'
import ChildWithBtn from "./ChildWithBtn";
import App from './index';
const ReactTestRenderer = require('react-test-renderer');


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
