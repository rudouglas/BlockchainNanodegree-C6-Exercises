
var ExerciseC6A = artifacts.require("ExerciseC6A");

var Config = async function(accounts) {
    
    // These test addresses are useful when you need to add
    // multiple users in test scripts
    let testAddresses = [
        "0xfe6b8b7230892737cda8aa3434383727cde22ae1",
        "0x3249b37f3529d3133d225b86c2baa632df7f91aa",
        "0x5cfc34ef8523a0b48160ded983403b5af01a35bf",
        "0xfa0c17d3c5b69c459d13277bb7fc874218a93ca4",
        "0x3ad139130d3b9d06444c69f80cee116820edb1fe",
        "0x35cf0692f72b504b3bdd61ec78a6d4247b9f60d2",
        "0x67a9f35a48e5d38a5c648e80dd27fdeb9992589b",
        "0xbe90e385249d48221a5f487bc068c5ce72cc1371",
        "0x93eb803869c3c75e1ec223d9f0fc7f0625165fd0"
    ];


    let owner = accounts[0];
    let exerciseC6A = await ExerciseC6A.new();
    
    return {
        owner: owner,
        testAddresses: testAddresses,
        exerciseC6A: exerciseC6A
    }
}

module.exports = {
    Config: Config
};