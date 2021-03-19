const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
  let aboneyetkilisi = message.mentions.roles.first()
  if (!aboneyetkilisi) return message.channel.send('Abone rolü verecek olan yetkili rolünü etiketlersen, yardımcı olacağım.')
   
  db.set(`aboneyetkilisi_${message.guild.id}`, aboneyetkilisi.id)
  message.channel.send(`Abone rolü verecek yetkili rolü başarıyla ayarlandı! ;<a:tik:813007245440319499>   **${aboneyetkilisi}**`)
 };

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 3,
  kategori:"yetkili"
};

exports.help = {
 name: 'aboneyetkilisi-ayarla',
 description: 'kayıt Olunca Verilecek rolü ayarlarsınız',
 usage: 'kayıt-rol <@rol>'
};