# querystring[js]

> querystringjs follow the HTTP RFC.


<p align="center">
    <img src ="./doc/img/logo.jpeg" />
</p>




## ABOUT

> https://developer.mozilla.org/en-US/docs/Web/API/URL/searchParams not follow HTTP RFC

The goal of project is extract the query string param from `window.location.search` native JavaScript code.
The code was necessary to be developed because when was tryied to use [searchParams](https://developer.mozilla.org/en-US/docs/Web/API/URL/searchParams) we can look that it is not respecting some required rules.

### EXAMPLE
``` javascript
// https://example.com/?name=Jonathan%20Smith&age=18

// EXAMPLE FROM MDN
// https://developer.mozilla.org/en-US/docs/Web/API/URL/searchParams

let params = (new URL(document.location)).searchParams;
let name = params.get('name'); // is the string "Jonathan Smith".
let age = parseInt(params.get('age')); // is the number 18
```

> **NOTE:** If you repeat the param like: `https://example.com/?name=Jonathan&name=Junior%20Smith&age=18` the JavaScript API return just the first value.


To fix and follow the HTTP RFC Protocol, we return a list of param when repeated.




## ABOUT

Using `querystring[js]` the global variable will ne configured:

```javascript
window.querystringjs; // will be fullfiled after insert the JavaScript code

// value configured to
// https://example.com/?name=Jonathan&name=Junior%20Smith&age=18
// {
//     'name':['Jonathan', 'Junior'],
//     'age': ['18']
// }
````


## REFERENCES

- https://developer.mozilla.org/en-US/docs/Web/API/URL/searchParams
- https://tools.ietf.org/html/rfc3986




## AUTOR

> [contribuidores](./CONTRIBUTING.md)
