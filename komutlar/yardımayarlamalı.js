const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

  
const yardım = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle(`${client.user.username} - Ayarlamalı Komutları`)
.setDescription(`
**\`Ayarlamalı\`**
» \`${prefix}sayaç\`: **Sayaç Sistemini Gösterir**
» \`${prefix}otorol\`: **Sunucuya Yeni Gelen Üyeye Oto Rol Verir**
» \`${prefix}sa-as\`: **Oto sa-ası ayarlarsınız**
» \`${prefix}mod-log\`: **Sunucuda Olanları Rahatça Görebilirsiniz**
» \`${prefix}yavaş-mod\`: **Yazı Kanalına Yavaş Mod Eklersiniz**
» \`${prefix}dm-hgbb\`: **Sunucuya Gelen Veya Çıkan Kullanıcıya Dm'den Mesaj atar**`)

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
  name: "ayarlamalı",
  description: 'yardım kodu.',
  usage: 'yardım'
};  //Plasmic Code・xKqntyZ_
