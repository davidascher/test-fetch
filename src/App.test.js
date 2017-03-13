import React from 'react';
import App from './App';
import { shallow } from "enzyme";

it('renders without crashing', () => {
  shallow(<App/>)
});

it('has one h2', () => {
  let wrap = shallow(<App/>)
  expect(wrap.find("h2").length).toEqual(1)
});

it('displays the github URL', () => {
  let wrap = shallow(<App/>)
  expect(wrap.find("strong").length).toEqual(1)
  expect(wrap.find("strong").text()).toEqual("https://api.github.com/user")
});
