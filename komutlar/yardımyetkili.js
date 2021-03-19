const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

  
const yardım = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle(`${client.user.username} - Yetkili Komutları`)
.setDescription(`
**\`Yetkili\`**
» \`${prefix}ban \`: **Belirtilen Kullanıcıyı Sunucudan Yasaklar**
» \`${prefix}kick \`: **Belirtilen Kullanıcıyı Sunucudan Atar**
» \`${prefix}unban \`: **Belirtilen İD Deki Kişinin Sunucudan Yasağını Kaldırır**
» \`${prefix}temizle/sil \`: **Belirtilen Miktarda Mesajı Siler**
» \`${prefix}sohbet-aç/kapat\`: **Sohbet Aç/Kapat**
» \`${prefix}ban-say\`: **Sunucudakı Banlanan Üye Sayısını Gösterir**
» \`${prefix}oylama\`: **Sunucuda Oylama Yapmanızı Sağlar**
» \`${prefix}nuke\`: **Komutu Yazdığnıız Kanalı Siler Ve Tekrardan Kurar**
» \`${prefix}say\`: **Sunucudaki Üye Sayısı , Bot Sayısı Gibi Şeyler Gösterir**`)

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
  name: "yetkili",
  description: 'yardım kodu.',
  usage: 'yardım'
};  //Plasmic Code・xKqntyZ_
