const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];


let threeLanguages = users.filter(function (n){
    return n.languages.length >= 3;
});
console.log(threeLanguages)

let usersEmail = users.map(function (n){
    return n.email;
})
console.log(usersEmail)

let totalUserExperience = users.reduce((total, user) => {
    return total + user.yearsOfExperience;
}, 0)
console.log(totalUserExperience)

let averageUserExperience = totalUserExperience / users.length;

console.log(averageUserExperience)

let longestEmail = users.reduce((first, second) => {
    if (first.email.length > second.email.length){
        return first
    }else{
        return second
    }
}).email

console.log(longestEmail)

let userNames = users.reduce((first, second) => {
    return [...first, second.name]
}, []).join(", ")
console.log(userNames)