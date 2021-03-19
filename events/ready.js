const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
module.exports = client => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Aktif, Komutlar yüklendi!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} ismi ile giriş yapıldı!`);
  client.user.setStatus("WATCHİNG");
   var oyun = [
        "💪 Öneri Yapmak İçin | .öneri !",
        "💪 Botlist Sistemi | .botlist !",  
        "💡 .davet | Botumuzu ekleyin",
        "👨 Sizler İçin Güncellemeler Alıyorum Komutlara Cevap Veremeyebilirim!",
        "🌍 20 Sunucuda Hizmet!"
    ];
    setInterval(function() {
        var random = Math.floor(Math.random()*(oyun.length-0+1)+0);
        client.user.setActivity(oyun[random], "https://rapp");
        }, 2 * 2500);
} //victorykodladıamk