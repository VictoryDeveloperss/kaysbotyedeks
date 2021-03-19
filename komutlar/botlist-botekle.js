const Discord = require('discord.js');
const db = require('quick.db');


module.exports.run = async (client, message, args) => {
  let kanal = await db.fetch(`westrabasvuruyapılacakkanal_${message.guild.id}`);
  let kanal2 = await db.fetch(`westrabasvurugidecekkanal_${message.guild.id}`);
  let kanal3 = await db.fetch(`westralogkanal_${message.guild.id}`);
  let westrabasvuruyapılacakkanal = await db.fetch(`westrabasvuruyapılacakkanal_${message.guild.id}`, kanal.id);
  let westrabasvurugidecekkanal = await db.fetch(`westrabasvurugidecekkanal_${message.guild.id}`, kanal2.id);
let westralogkanal = await db.fetch(`westralogkanal_${message.guild.id}`, kanal3.id);

	let botid = args[0]
	let prefix = args[1]
  let onaylımı = args[2]
  let basvuru = westrabasvurugidecekkanal
	let kanald = westrabasvuruyapılacakkanal 
  let log = westralogkanal 
	
  if (message.channel.id !== kanald) return message.channel.send(`<:ReddetmekPng:813007408314056755> Bu komutu sadece <#${kanald}> kanalında kullanabilirsin.`).then(x => x.delete({timeout: 3000}))
	if (message.channel.id == kanald) {
  if (!botid) return message.channel.send(`<:ReddetmekPng:813007408314056755> Botunun ID'sini yazmalısın.`).then(x => x.delete({timeout: 3000}))
  if (!prefix) return message.channel.send(`<:ReddetmekPng:813007408314056755> Botunun prefixini yazmalısın.`).then(x => x.delete({timeout: 3000}))
  if (!onaylımı) return message.channel.send(`<:ReddetmekPng:813007408314056755> Botunun DBL onaylı olup olmadığını yazmalısın.`).then(x => x.delete({timeout: 3000}))
  message.delete()
  const embed = new Discord.MessageEmbed()
  .setColor("Yellow")
  .setDescription(`**Yeni Bot Başvurusu!**

  **Bot Sahibi :**   \`${message.author.tag}\`    ${message.author}   
  
  **Bot Sahibi ID :** \`${message.author.id}\`

  **Bot ID :** \`${botid}\`

  **Prefix :** \`${prefix}\`

  **Bot Onaylı mı ? : ** \`${onaylımı}\`
  **Bot Davet Link :**[Ekle](https://discordapp.com/oauth2/authorize?client_id=${botid}&scope=bot&permissions=0)

 `)
  client.channels.cache.get(basvuru).send(embed)
    const westrabumbeyyyy = new Discord.MessageEmbed()
    .setColor(`BLUE`)
    .setFooter(`Kays Bot`)
    .setTimestamp()
    .setDescription(`<a:yukleniyor:813007247830810624> ${message.author} adlı kullanıcının <@${botid}> adlı botu sıraya eklendi. Botu onaylanmayı bekliyor.`)
  client.channels.cache.get(log).send(westrabumbeyyyy)
  message.channel.send(`<a:yukleniyor:813007247830810624> Bot ekleme isteğiniz alındı.`).then(x => x.delete({timeout: 3000}))
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'botekle', 
  description: "Sunucuya eklenen botu reddeder.",
  usage: 'botreddet <bot ismi> - <sebep>'
};