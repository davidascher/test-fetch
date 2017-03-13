import React from 'react';
import App from './App';
import { mount } from "enzyme";

it('displays the returned data', (done) => {
  fetch.mockResponseOnce(JSON.stringify({current_user_url: '12345' }))
  let wrap = mount(<App/>)
  console.log("Before timeout", wrap.debug())
  setTimeout(() => {
    console.log("After timeout", wrap.debug())
    expect(wrap.find("strong").length).toEqual(1)
    expect(wrap.find("strong").text()).toEqual("12345XXX")
    done()
  }, 0)
});
