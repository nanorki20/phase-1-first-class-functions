

function receivesAFunction(callbackFunction){
    callbackFunction();
}

function returnsANamedFunction() {
    
    const functionName = (a,b) => a + b;
    return functionName;
}
function returnsAnAnonymousFunction() {
    return function() {
        console.log('Anonymous function')
    }
}