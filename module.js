/*
this approach lets us decide what variables/methods we want
to keep private (e.g. myGrades) and what variables/methods
we want to expose by putting them in the return statement (e.g. average & failing).
 */
const myGradesCalculate = (function () {
    // Keep this variable private inside this closure scope
    var myGrades = [93, 95, 88, 0, 55, 91];
    var average = function() {
        var total = myGrades.reduce(function(accumulator, item) {
            return accumulator + item;
        }, 0);

        return'Your average grade is ' + total / myGrades.length + '.';
    };
    var failing = function() {
        var failingGrades = myGrades.filter(function(item) {
            return item < 70;
        });
        return 'You failed ' + failingGrades.length + ' times.';
    };
    var privateFunction = function() {
        console.log('Shhhh, this is private!');
    }
    // Explicitly reveal public pointers to the private functions
    // that we want to reveal publicly
    return {
        avg: average,
        fail: failing
    }
})();

myGradesCalculate.fail(); // 'You failed 2 times.'
myGradesCalculate.avg(); // 'Your average grade is 70.33333333333333.'
