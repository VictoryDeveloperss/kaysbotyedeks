const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

  
const yardım = new Discord.MessageEmbed()
.setColor('YELLOW')
.setTitle(`${client.user.username} - Abone Komutları`)
.setDescription(`**\`Abone sistemi ayarlama!\`**
» \`${prefix}abonekanal-ayarla\`: **Abone rolünün verileceği kanalı ayarlar.**
» \`${prefix}abonerol-ayarla\`: **Verilecek abone rolünü ayarlarsınız.**
» \`${prefix}aboneyetkilisi-ayarla\`: **Abone rolü verecek yetkiliyi ayarlarsınız.**

**\`Diğer abone komutları!\`**
» \`${prefix}abone-stats\`: **Etiketlediğinkz kişinin abone rolü verme sayısını gösterir.**
» \`${prefix}abonesayı-sıfırla\`: **Belirtilen kişinin abone rolü verme sayısını sıfırlar.**
» \`${prefix}abonesistem-kapat\`: **Abone rolü sistemini sıfırlar, ve kapatır.**

**\`Abone nasıl verilir?\`**
» \`${prefix}abone <etiket>\`: **Etiketlediğiniz kişiye abone rolü verir.**`)

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
  name: "aboneyardım",
  description: 'yardım kodu.',
  usage: 'aboneyardım'
};  //ukqzn