function userAge(age){
    if (age>=18){
        return `Your age is ${age}. You are allowed to vote during Election`
    ;}
    else{
        return `Your age is ${age}. You are not allowed to vote during Election`
    }
;}
console.log(userAge(20));
