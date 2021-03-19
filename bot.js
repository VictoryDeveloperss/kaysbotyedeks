const Discord = require('discord.js');
const qdb = require('quick.db');
const db = require('quick.db');
const virus = require('quick.db');
const roldb = require('quick.db');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk')
const { Client, Util } = require('discord.js');
const fs = require('fs');
const express = require('express');
require('./util/eventLoader.js')(client);
const app = express();
const ms = require('ms');
//////////////////////////////////////////////////
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping tamamdır.");
  response.sendStatus(200);
});
//////////////////////////////////////////////////
var prefix = ayarlar.prefix;

const log = message => {
    console.log(`${message}`);
};
//////////////////////////////////////////////////
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar', (err, files) => {
    if (err) console.error(err);
    log(`Toplamda ${files.length} Adet Komut Yüklenecek.`);
    files.forEach(f => {
        let props = require(`./komutlar/${f}`);
        log(`${props.help.name} Adlı Komut Başarıyla Yüklendi.`);
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });
    });
});
//////////////////////////////////////////////////
client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};
//////////////////////////////////////////////////
client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./komutlar/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};
//////////////////////////////////////////////////
client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};
//////////////////////////////////////////////////
client.elevation = message => {
    if (!message.guild) {
        return;
    }
    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === ayarlar.sahip) permlvl = 4;
    return permlvl;
};
//////////////////////////////////////////////////
client.login(process.env.token);
//////////////////////////////////////////////////

/////-------------| KOMUTLAR |-------------\\\\\\

  // İsim Reklam Koruma
  client.on('guildMemberAdd', youthanasia => {
    if (db.has(`isimreklamkoruma.${youthanasia.guild.id}`) && youthanasia.user.username.toLowerCase().replace(/ /g, '').includes('discord.gg')) {
      youthanasia.send('İsminde reklam içerikli bir şey olabileceğinden dolayı seni yasakladım.').catch(err => console.warn('Bir kişiyi reklam içerikli isimden banladım ancak o kişiye mesaj yollayamadım.'));
      youthanasia.ban({ reason: 'Reklam içerikli kullanıcı adı.' });
    };
  });

  client.on('guildMemberUpdate', (rifleman, youthanasia) => {
    if (db.has(`isimreklamkoruma.${youthanasia.guild.id}`) && youthanasia.displayName.toLowerCase().replace(/ /g, '').includes('discord.gg')) {
      youthanasia.send('İsminde reklam içerikli bir şey olabileceğinden dolayı seni yasakladım.').catch(err => console.warn('Bir kişiyi reklam içerikli isimden banladım ancak o kişiye mesaj yollayamadım.'));
      youthanasia.ban({ reason: 'Reklam içerikli kullanıcı adı.' });
    };
  });

/////////////////SAYAC

client.on("message", async message => {
  if (!message.guild) return;

  if (db.has(`sayac_${message.guild.id}`) === true) {
    if (db.fetch(`sayac_${message.guild.id}`) <= message.guild.members.cache.size) {
      const embed = new Discord.MessageEmbed()
        .setTitle(`Tebrikler ${message.guild.name}!`)
        .setDescription(`Başarıyla \`${db.fetch(`sayac_${message.guild.id}`)}\` kullanıcıya ulaştık! Sayaç sıfırlandı!`)
        .setColor("RANDOM");
      message.channel.send(embed);
      message.guild.owner.send(embed);
      db.delete(`sayac_${message.guild.id}`);
    }
  }
});
client.on("guildMemberRemove", async member => {
  const channel = db.fetch(`sKanal_${member.guild.id}`);
  if (db.has(`sayac_${member.guild.id}`) == false) return;
  if (db.has(`sKanal_${member.guild.id}`) == false) return;

    member.guild.channels.cache.get(channel).send(`<a:cikis:813022562345943080>**${member.user.tag}** Sunucudan ayrıldı! \`${db.fetch(`sayac_${member.guild.id}`)}\` üye olmamıza son \`${db.fetch(`sayac_${member.guild.id}`) - member.guild.memberCount}\` üye kaldı!`);
});
client.on("guildMemberAdd", async member => {
  const channel = db.fetch(`sKanal_${member.guild.id}`);
  if (db.has(`sayac_${member.guild.id}`) == false) return;
  if (db.has(`sKanal_${member.guild.id}`) == false) return;

    member.guild.channels.cache.get(channel).send(`<a:giris:813022555345649665>**${member.user.tag}** Sunucuya Katıldı ! \`${db.fetch(`sayac_${member.guild.id}`)}\` üye olmamıza son \`${db.fetch(`sayac_${member.guild.id}`) - member.guild.memberCount}\` üye kaldı!`);
});

///////////////////////////// SAYAC

///////////////SA-AS

client.on("message", async msg => {

  let saas = await db.fetch(`saas_${msg.guild.id}`);

  if (saas == 'kapali') return;

  if (saas == 'acik') {

  if (msg.content.toLowerCase() === 'sa') {

    msg.reply('**Aleyküm Selam Hoşgeldinn** <a:dance:813007232395378729>');

  }

  }

});
/////////////////SA-AS

///////////////////otorol

client.on("guildMemberAdd", member => {
  let rol = db.fetch(`autoRole_${member.guild.id}`);
if (!rol) return;
  let kanal = db.fetch(`autoRoleChannel_${member.guild.id}`);
  if (!kanal) return;

  member.roles.add(member.guild.roles.cache.get(rol));
  let embed = new Discord.MessageEmbed()
    .setDescription(
      "> <a:giris:813022555345649665> **Sunucuya yeni katılan** **" +
        member.user.username +
        "** **Kullanıcısına** <@&" +
        rol +
"> **Rolü verildi** <a:tik:813007245440319499>"
    )
    .setColor("RANDOM"); //.setFooter(`<@member.id>`)
  member.guild.channels.cache.get(kanal).send(embed);
});

///////////////////////////

////////////mod log


///////////// mod log

//hüü
client.on("guildCreate", async guild => {
 guild.owner.send("!!!Bu bir reklam değildir!!! \n\n Selamün aleyküm, Değerli kullanıcımız; \nSahibi olduğunuz sunucunuza eklendiğim için bu mesajı atıyorum. \n \nBotumuzun tüm sistemlerini görmek ve destek almak için; https://discord.gg/Drfb9MUzu6 \n\nmesaj sadece sunucu yöneticilerine gönderilir");
});
client.on("guildDelete", async guild => {
  guild.owner.send("Selamün aleyküm, Değerli kullanıcımız \n\n Botumuzu sunucudan atma nedeninizi destek sunucumuzdan bildirmenizi rica ediyoruz.\nHatamız varsa bilelim ki düzeltelim. https://discord.gg/Drfb9MUzu6 \n\nmesaj sadece sunucu sahibine gönderilir");
});
//hüüü
//////////////////////////////////////////////////////////////7
client.on("message", msg => {
var dm = client.channels.cache.get("818092724820770816")
if(msg.channel.type === "dm") {
if(msg.author.id === client.user.id) return;
const botdm = new Discord.MessageEmbed()
.setTitle(`🔔 Yeni Bir Mesajım Var`)
.setTimestamp()
.setColor("RED")
.setThumbnail(`${msg.author.avatarURL()}`)
.addField("Gönderen", msg.author.tag)
.addField("Gönderen ID", msg.author.id)
.addField("Gönderilen Mesaj", msg.content)

dm.send(botdm)

}
if(msg.channel.bot) return;
});
///////////////////////////////////////////
client.on("message", msg => {
let db = require('quick.db')
 let e = db.fetch(`reklamengel_${msg.guild.id}`)
if(e === "aktif"){  
      const reklam = [".com", ".net", ".xyz", ".tk", ".pw", ".io", ".me", ".gg", "www.", "https", "http", ".gl", ".org", ".com.tr", ".biz", "net", ".rf.gd", ".az", ".party", "discord.gg",];
        if (reklam.some(word => msg.content.includes(word))) {
          try {
            if (!msg.member.hasPermission("BAN_MEMBERS")) {
                  msg.delete();
                         const batusuyar = new Discord.MessageEmbed()
.setColor('RED')
.setTitle("Reklam Engel Filtresi")
.setDescription(`Sunucuda Reklam Engel Filtresi Açık Reklam Yapamazsın <@${msg.authorid}>`)
                         
    
                    return msg.channel.send(batusuyar).then(msg => msg.delete(3000));
   
 
  msg.delete(3000);                              
 
            }              
          } catch(err) {
            console.log(err);
          }
        }}
else return;
    });
//////////////////////////////////////////////////////////////////////
client.on("guildMemberAdd",  member =>{
  const gereksiz = db.fetch(`dmhgbb_${member.guild.id}`);
  if (gereksiz === "aktif") {
  const hg = new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setTitle(member.guild.name + '\n Sunucusuna Hoşgeldin!')
  .setDescription(`Umarım sunucumuzda eğlenirsin! İyi vakit geçirmen dileği ile...`)
  .setFooter('Hoşgeldin')
  .setTimestamp()
  member.send(hg)
}else if (gereksiz === "deaktif") {
}
if (!gereksiz) return;
});
client.on("guildMemberRemove",  member =>{
  const gereksiz = db.fetch(`dmhgbb_${member.guild.id}`);
  if (gereksiz === "aktif") {
  const hg = new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setTitle(member.guild.name + '\n Görüşürüz!')
  .setDescription(`Umarım bizimle vakit geçirirken mutlu olmuşsundur!`)
  .setFooter('Görüşürüz')
  .setTimestamp()
  member.send(hg)
}else if (gereksiz === "deaktif") {
}
if (!gereksiz) return;
});
/////////////////////////////////////////////////////////////////////////////////////////////
client.on('guildDelete', guild => {

let plasmic = new Discord.MessageEmbed()

.setColor("RANDOM")
.setTitle(" Bot Kicklendi ")
.addField("Sunucu Adı:", guild.name)
.addField("Sunucu sahibi", guild.owner)
.addField("Sunucu Sahibi'nin ID'si", guild.ownerID)
.addField("Sunucunun Kurulu Olduğu Bölge:", guild.region)
.addField("Sunucudaki Kişi Sayısı:", guild.memberCount)

   client.channels.cache.get('818092724820770816').send(plasmic);
 
});

//--------------------------------------------------------//

client.on('guildCreate', guild => {

let plasmicc = new Discord.MessageEmbed()

.setColor("RANDOM")
.setTitle(" Bot Eklendi ")
.addField("Sunucu Adı:", guild.name)
.addField("Sunucu sahibi", guild.owner)
.addField("Sunucu Sahibi'nin ID'si", guild.ownerID)
.addField("Sunucunun Kurulu Olduğu Bölge:", guild.region)
.addField("Sunucudaki Kişi Sayısı:", guild.memberCount)

   client.channels.cache.get('818092724820770816').send(plasmicc);

}); //Plasmic Code・xKqntyZ_

////////////////////////////////////////////////////

client.on("messageUpdate", msg => {
  const i = db.fetch(`${msg.guild.id}.motion`);
  if (i) {
 const motion = [
      "oç",
      "amk",
      "ananı sikiyim",
      "piç",
      "orospu çocuğu",
      "orospu",
      "kahbe",
      "kahpe",
      "ebeni sikim",
      "anneni sikeyim",
      "göt",
      "o.ç",
      "annen"
    ];
    if (motion.some(motion => msg.content.includes(motion))) {
      try {
        if (!msg.member.hasPermission("BAN_MEMBERS")) {
          msg.delete();

          return msg
            .reply(
              `${msg.author.tag}, **Hey Dostdum Bu Sunucuda Küfür Söylemek Yasak!** :YanpSnennleGif:`
            )
            .then(msg => msg.delete(3000));
        }
      } catch (err) {
        console.log(err);
      }
    }
}
  if (!i) return;
});
/////////////////////////////
client.on('ready', () => {

client.channels.cache.get('821416700540485702').join()
})