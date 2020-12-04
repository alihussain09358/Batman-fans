const chalk = require('chalk');
const log = console.log;
var readlineSync = require('readline-sync');
log(chalk.italic.white.bgMagenta(' Lets see how much you know BATMAN '));

var userName = readlineSync.question('May I have your name? ');
log(chalk.green('Welcome ')+chalk.italic(userName+" ")+chalk.italic.black.bgWhite(' Batman Begins!!! '));
log(chalk.italic.red('Answer "yes" or "no", only in small letters'));
var score = 0;
var highestScore = [5,4];
function play(ques,ans){
  var userAnswer = readlineSync.question(ques);
  if(userAnswer==ans){
    score++;
    log(chalk.green('You are right'));
    log(chalk.green('You score is '+score));
  }else{
    score--;
    log(chalk.red('you are wrong'));
    log(chalk.red('You score is '+score));
  }
}

var questions = [{
  question:"Do batman have superpowers ? ",
  answer:"no"
},{
  question:"Can batman fly ? ",
  answer:"no"
},{
question:"Is batman rich ? ",
  answer:"yes"
},{
  question:"Do batman know martial arts ? ",
  answer:"yes"
},{
  question:"Is batman intelligent ? ",
  answer:"yes"
},
{
 question:"Can batmobile go fly? ",
  answer:"yes" 
}
]
for(i=0;i<questions.length;i++){
  var currentQues = questions[i];
  play(currentQues.question,currentQues.answer); 
}
for(i=0;i<highestScore.length;i++){
  if(score > highestScore[i])
  log(chalk.green.bold('Congrats!!! you scored maximum than previous players'))
  break;
}