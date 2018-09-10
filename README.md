# get-param
Safely retrieve the request parameters from an incoming HTTP request

## Success Scenario
```js
const { get } = require('get-param');

// Some middleware
(req, res, next) => {
  const param = get(req, 'myParam');

  // Example 1: Query Parameter
  // req = { query: { myParam: 'this is my query param' }};
  param === 'this is my query param'

  // Example 2: Body Parameter
  // req = { body: { myParam: 'this is my body param' }};
  param === 'this is my body param'

  // Example 3: Duplicate Parameter, defaults to body
  // req = { body: { myParam: 'this is my body param' }, query: { myParam: 'this is my query param' }};
  param === 'this is my body param'
}
```

## Error Scenarios
```js
const { get } = require('get-param');

// Some middleware
(req, res, next) => {
  const param = get(req, 'myParam');

  // Example 1: Parameter not defined
  // req = { query: { someOtherParam: 'this is my query param' }};
  param === false

  // Example 2: req not passed
  // req = undefined or null
  param === false
}