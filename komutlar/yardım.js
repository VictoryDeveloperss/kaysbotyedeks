const discord = require('discord.js');
exports.run = async(client, message, args) => {
    const embed = new discord.MessageEmbed()
    .setTitle('Yardım menüm!')
    .addField('<a:dogdance:821044661812330506> .kullanıcı', 'Kullanıcı Komutların Menüsü', true)
    .addField('<a:cark:821043258917781515> .ayarlamalı', 'Ayarlamalı Komutların Menüsü', true)
    .addField('<a:ordek:821044947566067803> .botlist', 'Botlist Komutların Menüsü', true)
    .addField('<a:ucus:821043534207385671> .eğlence', 'Eğlence Komutların Menüsü', true)
    .addField('<a:ban:821043531052482602> .güvenlik', 'Güvenlik Komutların Menüsü', true)
    .addField('<a:tik:813007245440319499> .yetkili', 'Yetkili Komutların Menüsü', true)
    .addField('<a:kaysmiyav:821045145654132836> .şablon', 'Şablon Komutların Menüsü', true)
    .addField('<a:duyuru:813099940703109150> .yenilik', 'Yenilikleri Gösterir (Yakında)', true)
    .addField('<a:an:813007217669701632> .aboneyardım', 'Abone Sisteminin Menüsü', true)

message.channel.send(embed)
};
exports.conf = {
enabled: true,
guildOnly: false,
permLevel: 0,
aliases: ['help']



};
exports.help = {
name: "yardım"
};