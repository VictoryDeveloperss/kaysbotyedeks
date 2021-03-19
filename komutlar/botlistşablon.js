const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

  
const yardım = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle(`Botlist Şablon: https://discord.new/Y9SfEhGvgW7U`)
.setTimestamp()
message.channel.send(yardım)
  
   
  
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: "botlistşablon",
  description: 'yardım kodu.',
  usage: 'yardım'
};  //Plasmic Code・xKqntyZ_
