const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

  
const yardım = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle(`${client.user.username} - Eğlence Komutları`)
.setDescription(`
**\`Eğlence\`**
» \`${prefix}boğazla\`: **Etiketlediğiniz Kişiyi Boğazlar**
» \`${prefix}soygun-yap\`: **Soygun Yapıyonuz İşte**
» \`${prefix}çıkma-teklifi-et\`: **Çıkma Teklifi Ediyonuz Fln İşte (Denemeyin Kız Neden Kendin Söylemedin Diyebilir**)
» \`${prefix}kasaaç\`: **Csgo Skinleri Fln Çıkar**`)

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
  name: "eğlence",
  description: 'yardım kodu.',
  usage: 'yardım'
};  //Plasmic Code・xKqntyZ_
