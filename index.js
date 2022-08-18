function saturdayFun(string ="roller-skate" ){
    return `This Saturday, I want to ${string}!`
}// code your solution here
function mondayWork (string = 'go to the office'){
    return `This Monday, I will ${string}.`
}

function wrapAdjective(adjective = "*"){
    return function(compliment ="special"){
        return `You are ${adjective}${compliment}${adjective}!`
    }
}
wrapAdjective('%')("a dedicated programmer ")