const fs = require('fs')
const question = require('./question')

fs.writeFileSync("questions.json", JSON.stringify({ questions: []}))

const questionsJson = JSON.parse(fs.readFileSync("questions.json"))
console.log(questionsJson);
// console.log(questions);
// console.log(questionsJson);
questionsJson.questions.push(question())
// console.log(questionsJson);
fs.writeFileSync("questions.json", JSON.stringify(questionsJson))