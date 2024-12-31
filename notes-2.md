# SCOPES & CLOSURES

## Scope
The scope is the rules for storing variables and find them at a later time.

### Compiler Theory
Compilation is when the program undergoes before it's even executed. The concepts are:
- Tokenizing: Breaking up the code into tokens, sometimes "blank spaces" are included. For example `var a = 2;` where `var`, `a`, `=`, `2`, and `;` are individual tokens.
- Parsing: Is about taking the array of tokens and separate them by `variable declaration` (var), `identifier` (a), `assignment expression` (=), and `numeric literal` (2).
- Code Generation: It takes the **abstract syntax tree** and process the code into machine instructions.

JavaScript takes the code and process it milliseconds before it's executed. 

### Understanding Code

The conversation about the process is between the *Engine*, *Compiler*, and *Scope*.