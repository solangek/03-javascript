/*
 this examples shows you how to wrap your code and avoid polluting the global scope.

 The  anonymous function has its own evaluation environment or “closure”,
 and then we immediately evaluate it.

 This lets us hide variables from the parent (global) namespace.

 Note that the parenthesis around the anonymous function are required,
 because statements that begin with the keyword function are always
 considered to be function declarations.
 
 Hint: avoid doing this while you are debugging, because the stack trace 
    will not contain the name of your function and line number.
 */

(function () {
    // We keep these variables private inside this closure scope

    const myGrades = [93, 95, 45, 0, 70, 91];

    const average = function() {
        var total = myGrades.reduce(function(accumulator, item) {
            return accumulator + item}, 0);

        return 'Your average grade is ' + total / myGrades.length + '.';
    }

    const failing = function(){
        var failingGrades = myGrades.filter(function(item) {
            return item < 55;});

        return 'You failed ' + failingGrades.length + ' times.';
    }

    console.log(failing());


})();

// ‘You failed 2 times.’


