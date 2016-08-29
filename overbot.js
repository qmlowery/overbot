var request = require('request');
var Discord = require('discord.js');
var env = require('env.js');

var mybot = new Discord.Client();
var msg = '';
console.log("Overbot initiated.")

mybot.on("message", function(message) {
    if(message.content === "ping") {
    	request('https://api.lootbox.eu/pc/us/FlyingAces-1488/profile', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    msg = body;
    mybot.reply(message, msg);// Show the HTML for the Google homepage. 
  }
})
        //mybot.reply(message, msg);
    }
});


mybot.loginWithToken(process.env.LOGIN_TOKEN);