const Discord = require('discord.js');
const client = new Discord.Client();
const db = require('quick.db');
module.exports.run = async (client, message, args) => {
  if(message.author.id !== message.guild.owner.user.id) return message.reply('<:ReddetmekPng:813007408314056755>  Bu komutu kullanabilmek için **Sunucu Sahibi** olmalısın!')
  let prefix = "d!"
 db.delete(`westrabotlistyetkilirol_${message.guild.id}`);
  message.channel.send(`<a:tik:813007245440319499> Botlist yetkilisi rolü başarıyla sıfırlandı!`)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'botlist-yetkili-rol-sıfırla', 
  description: "Sunucuya eklenen botu reddeder.",
  usage: 'botreddet <bot ismi> - <sebep>'
};