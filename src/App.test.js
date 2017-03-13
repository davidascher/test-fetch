import React from 'react';
import App from './App';
import { shallow } from "enzyme";

it('renders without crashing', () => {
  fetch.mockResponseOnce(JSON.stringify({current_user_url: '12345' }))
  shallow(<App/>)
});

it('has one h2', () => {
  fetch.mockResponseOnce(JSON.stringify({current_user_url: '12345' }))
  let wrap = shallow(<App/>)
  expect(wrap.find("h2").length).toEqual(1)
});

it('displays the returned data', () => {
  fetch.mockResponseOnce(JSON.stringify({current_user_url: '12345' }))
  let wrap = shallow(<App/>)

  // if i uncomment this line, then the test passes, but that 
  // is bypassing the fetch->state update, which I'd like to test.

  // wrap.setState({'current_user_url': '12345'})
  console.log(wrap.debug())
  expect(wrap.find("strong").length).toEqual(1)
  expect(wrap.find("strong").text()).toEqual("12345")
});
