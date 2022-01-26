// Code your solutions in this file

/* for Loop structure
    for ([initialization]; [condition]; [iteration]) {
    [loop body]
    }
Initialization = Typically used to initialize a counter variable.
Condition = Expression evaluated before each pass through loop. If expression evaluates to true, loop body statements are executed. 
    If expression evaluates to false, loop exits.
Iteration = Expression executed at end of each iteration. Typically, this involves incrementing or decrementing a counter, 
    bringing loop ever closer to completion.
Loop body = Code that runs on each pass through the loop.
*/
/*
In index.js, build a function named writeCards() that accepts two arguments: an array of string names, and an event name. 
Create a for loop with a counter that starts at 0 and increments at the end of each loop. 
The for loop should stop once it has iterated over the length of the array.
*/
const arrHoldingMessages = [];

function writeCards(names, event) {
    for (let i = 0; i < names.length; i++) {
        arrHoldingMessages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
        debugger;
    }
    return arrHoldingMessages;
};

/* while Loop structure
while ([condition]) {
    [loop body]
}
Condition = Expression evaluated before each pass through loop. If expression evaluates to true, loop body statements are executed. 
    If expression evaluates to false, loop exits.
Loop body = Code that runs on each pass through the loop.
*/
function countDown(int) {
    let i = 10;
    while (i >= 0) {
        console.log(i);
        i--
    };
    return int;
}