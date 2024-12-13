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
    // The symbols "=" and "*" are sombe of the avilable mathematical operators.
    // The number "2" is just a literal value because it stands alone.
    // The semicolon ";" is used at the end of statements.
````

The previous statement tells the computer to retrieve the value of `b`, multiply it by `2`, and store the result inside `a`. In other words, **programs** 
are collections of **statements** to perform tasks.

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
