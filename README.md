# logts #

Just a `console.log()` with a `(new Date()).toISOString()` timestamp.

## Synopsis ##

```js
console.log('Hello, %s!', 'World')
// -> 'Hello, World!'

var logts = require('logts')
logts('Hello, %s!', 'World')
// -> '2015-05-11T02:23:49.108Z - Hello, World!'
```

There is also the ability to send it's output to info, error, warn and trace:

```js
logts.log('File opened : %s', '/tmp/blah-1234.txt')
logts.info('Some info: %d green bottles', 10)
logts.error(err)
logts.warn('Something went wrong: %s', 'unknown command')
logts.trace('Trying port %d', 8080)
```

Note: the timestamp is only added if the first argument to the above functions is a string. If it is not a string, then
the arguments are pass as-is to `console.{log,info,error,warn,trace}`.

## Author ##

Written by [Andrew Chilton](http://chilts.org/):

* [Twitter](https://twitter.com/andychilton)
* [GitHub](https://github.com/chilts/)

## License ##

MIT - http://chilts.mit-license.org/2015/

(Ends)
