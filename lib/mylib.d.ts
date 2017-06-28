
declare let mylib: MyLib.Foo;
export = mylib

declare namespace MyLib {
  export interface Foo {
    doSomething():string;
  }
}