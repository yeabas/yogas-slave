const botconfig = require("./botconfig.json");
const Discord = require("discord.js");


const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);


bot.user.setActivity("youtube", {type: "WATCHING"});
bot.user.setStatus("dnd")

//bot.user.setStatus("Coding Myself");
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd  = messageArray[0];
  let args = messageArray.slice(1);

  if(cmd === `${prefix}warn`){
  if(!message.member.roles.has("526568676132913152")) return message.channel.send("You cannot use this command because you don't have the correct role.")


    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("Couldnt find user.");
    let reason = args.join(" ").slice(22);

  let reportEmbed = new Discord.RichEmbed()
   .setDescription("Reports")
   .setColor("#4286f4")
   .addField("Reported User", `${rUser} with ID: ${rUser.id}`)
   .addField("Reported By", `${message.author} with ID: ${message.author.id}`)
   .addField("Channel", message.channel)
   .addField("Time", message.createdAt)
   .addField("Reason", reason);
   let reportchannels = message.guild.channels.find(`name`, "reports");
   if(!reportchannels) return message.channel.send("Couldn't find reports channel.");


   message.delete().catch(O_o=>{});
   reportchannels.send(reportEmbed);

let embed = new Discord.RichEmbed()
.setDescription("Reports")
.setColor("#4286f4")
 .addField("Reported User", `${rUser} with ID: ${rUser.id}`)
   message.channel.send(embed)

    return;
  }



 if (cmd === `${prefix}serverinfo`){

   let sicon = message.guild.iconURL;
   let serverembed = new Discord.RichEmbed()
   .setDescription("Server Information")
   .setColor("#4286f4")
   .setThumbnail(sicon)
   .addField("Server Name", message.guild.name)
   .addField("Created On", message.guild.createdAt)
   .addField("You Joined", message.member.joinedAt)
   .addField("Total Members", message.guild.memberCount);

   return message.channel.send(serverembed);

   if(cmd === `${prefix}test`);
    return message.channel.send("Your test worked!")
  }

  if(cmd === `${prefix}botinfo`){
      let bicon = bot.user.displayAvatarURL;
      let botembed =  new Discord.RichEmbed()
      .setDescription("Bot Information")
      .setColor("#f4d942")
      .setThumbnail(bicon)
      .addField("Bot Name", bot.user.username)
      .addField("Created On", bot.user.createdAt);

      return message.channel.send(botembed);

    }

});





bot.login(botconfig.token);


process.env.BOT_TOKEN);
