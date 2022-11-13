// Closures store references to the outer function’s variables;
// they do not store the actual value.  
//
// Closures get more interesting when the value of
// the outer function’s variable changes before the closure
// is called. And this powerful feature can be harnessed in
// creative ways, such as this private variables


function celebrityID () {
    let celebrityID = 999;
    // We are returning an object with some inner functions
    // All the inner functions have access to the outer function's variables
    return {
        getID: function ()  {
            // This inner function will return the UPDATED celebrityID variable
            // It will return the current value of celebrityID, even after the changeTheID function changes it
            return celebrityID;
        },

        setID: function (theNewID)  {
            // This inner function will change the outer function's variable anytime
            celebrityID = theNewID;
        }
    }
}

let mjID = celebrityID (); // At this juncture, the celebrityID outer function has returned.
mjID.getID(); // 999
mjID.setID(567); // Changes the outer function's variable
mjID.getID(); // 567: It returns the updated celebrityId variable 


