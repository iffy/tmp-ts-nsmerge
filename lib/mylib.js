let foo = new Foo()
module.exports = foo


class Foo {
  let _retval = 'something'
  doSomething() {
    return this._retval;
  }
  
}