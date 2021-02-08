meta-loader
===========
A webpack loader to achieve transpile-time metaprogramming.

### TODO
- [ ] operator overloading, syntactic sugar (much like a DSL?)
  - `matrixA + matrixB = matrixC`
- [ ] transpile-time evaluation
- [ ] safe-programming (number-safe)
  - `0.1 + 0.2` should be `0.3`, not `0.30000000000000004`
    - [ericelliott/moneysafe: Convenient, safe money calculations in JS](https://github.com/ericelliott/moneysafe)
    - compile-time wrapper
- [ ] reduce overhead (inline functions, compile-time wrapper, etc...)

### Reference
- [ExPixel/vscode-eval: VSCode extension to evaluate selected text.](https://github.com/ExPixel/vscode-eval)
- [eval - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=Stormspirit.eval)
- [List of languages that compile to JS · jashkenas/coffeescript Wiki](https://github.com/jashkenas/coffeescript/wiki/list-of-languages-that-compile-to-js)
