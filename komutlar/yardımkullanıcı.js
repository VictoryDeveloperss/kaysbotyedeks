const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

  
const yardım = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle(`${client.user.username} - Kullanıcı Komutları`)
.setDescription(`
**\`Kullanıcı\`**
» \`${prefix}avatar \`: **Etiketlediğiniz Kişinin Avatarını Gösterir**
» \`${prefix}davet \`: **Botun Davet Linkini Gösterir**
» \`${prefix}istatistik \`: **Botun Durumunu Gösterir**
» \`${prefix}yapımcım \`: **Botun Yapımcısını Gösterir**`)

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
  name: "kullanıcı",
  description: 'yardım kodu.',
  usage: 'yardım'
};  //Plasmic Code・xKqntyZ_
