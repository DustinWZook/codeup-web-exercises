function getLastCommit(userName){fetch(`https://api.github.com/users/${userName}/events/public`, {headers: {'Authorization': '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'}})
    .then(response => response.json())
    .then(users => {
        // console.log(users[0].created_at)
        let fullDate = users[0].created_at
        let simpleDate = fullDate.substring(0,10)
        console.log(simpleDate)
        return
    }).catch(error => console.log(error))
}
getLastCommit("dustinwzook")

function wait(num){
    return new Promise((resolve) => setTimeout(resolve, num))
}
wait(1000).then(() => console.log(`you'll see this after 1 second`));
wait(3000).then(() => console.log(`you'll see this after 3 seconds`));