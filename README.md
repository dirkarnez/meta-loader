meta-loader
===========
A webpack loader to achieve transpile-time metaprogramming.

### TODO
- [ ] Seamless bridge to TypeScript
  - [ ] .d.ts generation
- [ ] operator overloading, syntactic sugar, short-hand, intentional, declarative programming (much like a DSL?)
  - safe-programming
    - static libraries
      - number-safe
        - `0.1 + 0.2` should be `0.3`, not `0.30000000000000004`
          - [ericelliott/moneysafe: Convenient, safe money calculations in JS](https://github.com/ericelliott/moneysafe)
      - markdown or any other markup languages as syntactic sugar
      - compile-time wrapper
      - transpile-time types
      - `matrixA + matrixB = matrixC`
    - polyfills
    - transpile-time code elimination
      - Build variant
- [ ] As a test-case like constraint in code
  - Much like an assertion
  - However, different to test cases, test cases simulates user action and check the outcomes, constraints statically check if program flow is robust
- [ ] transpile-time evaluation
- [ ] reduce overhead (inline functions, compile-time wrapper, etc...)
  - **erase functions / lambdas / closures**
  - refer to the optimizations the V8 engine does
    - [High Performance JS in V8 - YouTube](https://www.youtube.com/watch?v=YqOhBezMx1o)
- [ ] Never try to do spaghetti code pattern
  - treat `.metajs` and normal `.js` separately
  - ultimate goal is to move all `.js` code to `.metajs`
  
### Reference
- [ExPixel/vscode-eval: VSCode extension to evaluate selected text.](https://github.com/ExPixel/vscode-eval)
- [eval - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=Stormspirit.eval)
- [List of languages that compile to JS · jashkenas/coffeescript Wiki](https://github.com/jashkenas/coffeescript/wiki/list-of-languages-that-compile-to-js)
