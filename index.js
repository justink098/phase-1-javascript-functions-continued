function saturdayFun(string ="roller-skate" ){
    return `This Saturday, I want to ${string}!`
}// code your solution here
function mondayWork (string = 'go to the office'){
    return `This Monday, I will ${string}.`
}
function wrapAdjective(){
    let result = wrapAdjective('*')
    let rest = result("a hard worker")
    rest = function(){
        return console.log(`You are ${rest}`)
    }
}