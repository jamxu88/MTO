const Discord = require("discord.js");
const client = new Discord.Client();
client.on("ready", () => {
  console.log("Meme Team Operator");
});
client.on("message",(message) => {
 if(message.content.contains === "<@408064561611276290>") {
   message.channel.send("https://cdn.discordapp.com/attachments/516393595285143553/550822391903944764/Screenshot_1057.png")
  }
});
client.login(process.env.BOT_TOKEN);
