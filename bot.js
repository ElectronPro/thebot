const Discord = require('discord.js');
const Client = new Discord.Client();

Client.on('ready', () =>{

console.log("ready for action");

})

Client.on('message', message=>{

if(message.content ===  "hi"){
message.channel.send('hello User')

   }


})




Client.login(process.env.BOT_TOKEN);


