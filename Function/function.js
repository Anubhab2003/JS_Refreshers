function LoginUserMessage(username){
    if(username===undefined){
        console.log("Please provide a username");
        return;
    }

    return `${username} has logged in`;
}
console.log(LoginUserMessage());