# Demo repo to show problem

`yarn`

`yarn start`

the component does a `fetch` in its `componentWillMount` call, which causes the state to change, which causes the render function to return something different.  In particular, in that case the rendered component does not have an `h2`, but does have a `strong` element.

`yarn test`

The tests corresponding to the initial state of the component pass, the one corresponding to the post-fetch state don't.

Q: how do I test the component after fetching?


