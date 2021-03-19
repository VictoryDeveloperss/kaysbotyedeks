const Discord = require('discord.js');
const ndb = require('quick.db');
 
exports.run = async(client, message, args) => {
  if (!args[0]) return message.channel.send(`Lütfen bir seçenek belirt! (aç/kapat)`)
  if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(' Bu komutu kullanmak için **MESAJLARI YÖNET** yetkisine sahip olmalısın!')
 
  if (args[0] === 'aç') {
    
    ndb.set(`dmhgbb_${message.guild.id}`, 'aktif')
    message.channel.send(`**Dm Hoşgeldin Görüşürüz Mesajı Açıldı <a:tik:813007245440319499>**!`)
 
  }
  
  if (args[0] === 'kapat') {
    
    ndb.set(`dmhgbb_${message.guild.id}`, 'deaktif')
    message.channel.send(`**Dm Hoşgeldin Görüşürüz Mesajı Kapatıldı <a:tik:813007245440319499>**!`)

  }
 
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};
 
exports.help = {
  name: 'dm-hgbb'
};