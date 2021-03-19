const Discord = require('discord.js');

exports.run = (client, message, params) => {
  const embed = new Discord.MessageEmbed()
  .setDescription('')
  .setColor(0x00ffff)
  .addField("**》 Yapımcım 《**", `<@353477524061290506>`)
  .setImage('https://cdn.discordapp.com/attachments/792774065039212564/795716638615273522/standard_2.gif')

 
  return message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yapımcım'],
  permLevel: 0
};

exports.help = {
  name: 'yapımcım',
  description: 'Developed by Victory',
  usage: 'yapımcım'
}
