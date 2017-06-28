# Problem

- I'm trying to add type definitions to a library.
- I can **only** change `.d.ts` files (not any of the `.js` files)
- The tests for the library use private properties that we don't included in the published definition.
- But we want the test files to be run through the TypeScript compiler (hence the `--checkJs` and `--allowJs` in [`tsconfig.json`](./tsconfig.json))
- I'd like to include properties accessed for testing in a separate testing-only type declaration file (`test/index.d.ts`).

But in the current state, I get the following error:

```
$ tsc
test/test.js(4,7): error TS2339: Property '_retval' does not exist on type 'Foo'.
```

What can I change in the `.d.ts` files to get this to compile?