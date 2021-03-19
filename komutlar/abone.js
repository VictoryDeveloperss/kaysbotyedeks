const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async (client, message, args) => {
  
  const ukqzn = await db.fetch(`abonek_${message.guild.id}`)
  
  if(ukqzn == null) return message.channel.send('');
  if (message.channel.id !== ukqzn) return message.channel.send(`Bu Komutu Sadece <#${ukqzn}> Kanalında Kullanabilirsiniz!`);
  if (ukqzn == true) return; 
  if (ukqzn == false) return message.channel.send(`Bu Sunucuda Abone Sistemi Aktif Edilmemiş.`);
  
 if(!message.member.roles.cache.has(db.fetch(`aboneyetkilisi_${message.guild.id}`))) {
    return message.channel.send("Bu Komutu Kullanabilmek İçin Gerekli Yetkiye Sahip Değilsin <a:hayir:708652921675317318> !");
 }
  let user = message.mentions.members.first()
   if (!user) return message.reply('Kime Rol Verceğimi Yazmadın <a:hayir:708652921675317318> !').catch(console.error);
   if (user.roles.cache.has(db.fetch(`abonerolü_${message.guild.id}`))) return message.channel.send("Bu Kullanıcıda Zaten Abone Rolü Var <a:hayir:708652921675317318> !")
  user.roles.add(db.fetch(`abonerolü_${message.guild.id}`))
  const embed = new Discord.MessageEmbed()
  .setColor('RED')
  .setTimestamp()
  .setFooter('Kays (AB) Tarafından Abone Rolü Verildi. ')
  .addField(`Abone Rolü Alan Kullanıcı;`, `${user}`,true)
  .addField(`Abone Rolü Veren Yetkili;`,`${message.author}`,true)
      message.channel.send(embed)
  db.add(`aboneistatistik${message.author.id}.${message.guild.id}`, 1)
}//ukqzn

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['a']
};

exports.help = {
  name: "abone",
  description: "Abone Rolü Verir!",
  usage: "abone"
};