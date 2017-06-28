var mylib = require('../lib/mylib.js')

mylib.doSomething();
mylib._retval = 'another';
mylib.doSomething();
