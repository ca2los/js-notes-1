# Chapter 1 
Into programming is quick overview of a programing introduction to JavaScript based on the famous "You don't know JS" book series.

## Code
The **program**, also referred as *source code* or just *code*, is a set of instructions to tell the computer what tasks to perform. 
The **computer language** is the rules for valid format and combinations, also known as *syntax*.

### Statements
In the **computer language** *(also known as syntax)* the statements are groups of words, numbers, and operator that performs specific tasks.
````javascript
    a = b * 2;
    // The letters "a" and "b" are variables. Variables are empty boxes or symbolic placeholders for values of any type.
    // The symbols "=" and "*" are some of the avilable mathematical operators.
    // The number "2" is just a literal value because it stands alone.
    // The semicolon ";" is used at the end of statements.
````
The previous statement tells the computer to retrieve the value of `b`, multiply it by `2`, and store the result inside `a`. In other words, 
**programs** are collections of **statements** to perform tasks.

### Expressions
Statements are made of one or more expressions, which are variables or numbers combined with operators.
````javascript
    a = b * 2;
    // The number "2" is literal value expression.
    // The letter "b" is a variable expression.
    // The "b * 2" is an arithmenticaal expression (multiplication).
    // The "a = b * 2;" is an assignment expression becuase the value of "b * 2" will be assigned to "a".
````
When a statement is not stored inside a variable then it's called ***expression statement***.
````javascript
    b * 2;
    // The result of "b * 2" will not be stored in a new variable.
    // The expression statement is not useful.
````

### Executing a Program
Everytime the program is executed, the collection of statements are interpreted or compiled by the computer to understand the code. 
- Interpreting the code: The language is translated from top to bottom, line by line, everytime the program is run.
- Compiling the code: The language is translated ahead of time so when the program runs later, the code is ready to go.

### Output
The output is the value you print to the user interface.
```javascript
    var a = 40;
    b = a * 2;
    console.log(b);
    // The output in the browser's consoles is "80".
```
### Input
The input is the value typed by the user to the console.
````javascript
    age = prompt("Tell me you age:");
    console.log(age);
    // The prompt function is a pop-up message that will retieve the value typed by the user.
````

## Operators
To perform actions between variables and values it's necessary to use operators. 

- Assignment `=` is used to retrieve the values.
- Compound assignment `=+`, `=-`, `=*`, and `=/` are used to shorten mathematical expressions like `a=+1;` is similar to `a=a+1;` 
- Mathematical operators are `+`, `-`, `*`, and `/`.
- Comparison operators are `<` for "less than", `>` for "greater than", `<=` for "less than or loose equal", and `>=` for "more than or loose equal".
- Equality operator are `==` for "loose equal", `===` for "strict equal", `!=` for "loose not equal", and `!==` for "strict not equal".
- Increment operator `++` and decrement operator `--`.
- Logical operators are `||` for "or", and `&&` for "and".
- Object property is `.` and it's used to access properties inside object values like `obj.a` or `obj["a"]`.
