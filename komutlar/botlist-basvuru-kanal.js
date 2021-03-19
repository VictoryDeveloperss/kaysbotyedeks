const Discord = require('discord.js');
const client = new Discord.Client();
const db = require('quick.db');
module.exports.run = async (client, message, args) => {
  if(message.author.id !== message.guild.owner.user.id) return message.reply('<:ReddetmekPng:813007408314056755> Bu komutu kullanabilmek için **Sunucu Sahibi** olmalısın!')
  let prefix = "d!"
  let kanal = message.mentions.channels.first();
    if (!kanal) {
      message.channel.send(`<:ReddetmekPng:813007408314056755> Bir kanal etiketlemelisin!`);
      return;
    }
 db.set(`westrabasvuruyapılacakkanal_${message.guild.id}`, kanal.id);
  message.channel.send(`<a:tik:813007245440319499> Başvuru yapılacak kanal başarıyla ${kanal} olarak ayarlandı!`)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'başvuru-yapılacak-kanal-ayarla', 
  description: "Sunucuya eklenen botu reddeder.",
  usage: 'botreddet <bot ismi> - <sebep>'
};