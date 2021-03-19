const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

  
const yardım = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle(`${client.user.username} - Botlist Komutları`)
.setDescription(`
**\`Botlist\`**
» \`${prefix}başvuru-yapılacak-kanal-ayarla\`: **Botların ekleneceği kanalı belirler**
» \`${prefix}başvuru-yapılacak-kanal-sıfırla \`: **Bot ekleme kanalını sıfırlar**
» \`${prefix}başvuru-gidecek-kanal-ayarla  \`: **Başvuru log kanalını belirler (Botun bilgileri ve 0 perm davet linki bulunur)**
» \`${prefix}başvuru-gidecek-kanal-sıfırla \`: **Başvuru log kanalını sıfırlar**
» \`${prefix}başvuru-log-kanal-ayarla  \`: **Botların sıraya alınacağı kanalı belirler(Onay red gibi işlemler bu kanalda gerçekleşir)**
» \`${prefix}başvuru-log-kanal-sıfırla \`: **Bot log kanalını sıfırlar**
» \`${prefix}botlist-yetkili-rol-ayarla  \`: **Başvurulara Bakacak Yetkilinin Rolünü Ayarlar**
» \`${prefix}botlist-yetkili-rol-sıfırla \`: **Başvurulara Bakacak Yetkilinin Rolünü Sıfırlar**
» \`${prefix}botonayla \`: **.onayla sahipID botID**
» \`${prefix}reddet \`: **.reddet sahipID botID sebep**`)

.setThumbnail("https://cdn.discordapp.com/attachments/785821149580754954/786124655085748264/766653460988428308.gif")
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
  name: "botlist",
  description: 'yardım kodu.',
  usage: 'yardım'
};  //Plasmic Code・xKqntyZ_
