

import moment from "moment-timezone"
import fs from "fs"
import chalk from 'chalk'
import ms from "parse-ms"
import speed from "performance-now"
import {runtime,kyun} from "../lib/myfunc.js" 
const timeWib = moment().tz('Asia/Jakarta').format('HH:mm:ss')
const timeWit= moment().tz('Asia/Makassar').format('HH:mm:ss')
const timeWita = moment().tz('Asia/Jayapura').format('HH:mm:ss')
moment.tz.setDefault("Asia/Jakarta").locale("id");

//Total fitur by Official Dittaz
const totalFitur = () =>{
var mytext = fs.readFileSync("./message/case.js").toString()
var numUpper = (mytext.match(/case '/g) || []).length;
return numUpper
}

const timestampp = speed();
const latensi = speed() - timestampp
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001) 

let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)

let dot = new Date(new Date + 3600000)
const dateIslamic = Intl.DateTimeFormat("id" + '-TN-u-ca-islamic', {day: 'numeric',month: 'long',year: 'numeric'}).format(dot)

let yes = "*「 _Error_ 」* ❌"
let no =""
let { userXp, userLeveling } = (await import('../lib/user.js'))

const feat = (q) => {
let status = false
Object.keys(db.data.listerror).forEach((i) => {
if (db.data.listerror[i].cmd === q) {
status = true
}
})
return status
}

const app = `⭓.`
const apz = `❍┈┈`
const Last = `└──···☉`

export const allmenu = async (isPremium,thisHit, publik, sender, prefix, pushname,userLevel) => {
return`
⩽⩾︎ *Nama:* ${pushname}
⩽⩾︎ *Nomor:* wa.me/${sender.split("@")[0]}
⩽⩾︎ *Islamic* : ${dateIslamic}
⩽⩾︎ *Status:* ${isPremium ? 'Premium user':'Free user'}
⩽⩾︎ *Total User* : ${Object.keys(db.data.users).length}
⩽⩾︎ *Speed Bot:* ${latensi.toFixed(4)} Second
⩽⩾︎ *Level Saat Ini:* ${userLevel}
⩽⩾︎ *Limit Tersisa:* ${isPremium ? 'Unlimited' : `${db.data.users[sender].limit}`} limit
  𓆝 𓆟 𓆞 𓆝 𓆟
`+readmore+`
ᴛɪᴅᴀᴋ ᴀᴅᴀ ᴋᴇʙᴇʀʜᴀsɪʟᴀɴ ʏᴀɴɢ ᴅᴀᴛᴀɴɢ sᴇᴄᴀʀᴀ ɪɴsᴛᴀɴ, ᴛᴇᴛᴀᴘɪ sᴇᴛɪᴀᴘ ʟᴀɴɢᴋᴀʜ ᴋᴇᴄɪʟ ᴍᴇɴᴜᴊᴜ ᴛᴜᴊᴜᴀɴᴍᴜ ᴀᴅᴀʟᴀʜ ᴋᴇᴍᴀᴊᴜᴀɴ ʏᴀɴɢ ʙᴇʀᴀʀᴛɪ

⭓.allmenu

➲ Beri Jeda Yah Kak ^ω^
➲ Bot Dalam Masa Pengembangan
`}

export const fitur = async ( limitCount, isPremium,thisHit, publik, sender, prefix, pushname) => {
const data = global.db.data.others['newinfo']
const info = data ? data.info : ""
const block = await conn.fetchBlocklist()
const timeInfo = data ? clockString(new Date - data.lastinfo)  : "tidak ada"
return`
  ∧,,,,,,∧       
  („• ֊ •„)
✦┈O┈┈O┈ *ɪ ɴ ғ ᴏ - ʙ ᴏ ᴛ ᴢ* ┈✦
│⩽⩾︎ ʀᴜɴɪɴɢ ᴏɴ :  ${runWith}
│⩽⩾︎ ᴍᴏᴅᴇ : ${publik ? "Public" : "Self"}
│⩽⩾︎ ʜɪᴛ ᴛᴏᴅᴀʏ : ${thisHit  == undefined? "0" : thisHit.toLocaleString()}
│⩽⩾︎ ᴛᴏᴛᴀʟ ғᴇᴀᴛᴜʀᴇ : ${totalFitur()}
│⩽⩾︎ ᴛᴏᴛᴀʟ ᴇʀʀᴏʀ: ${db.data.listerror.length}
│⩽⩾︎ ᴛᴏᴛᴀʟ ᴜsᴇʀ : ${Object.keys(db.data.users).length}
│⩽⩾︎ ᴜsᴇʀ ʙᴀɴɴᴇᴅ : ${db.data.banned.length}
│⩽⩾︎ ᴜsᴇʀ ʙʟᴏᴄᴋᴇᴅ : ${block.length}
│⩽⩾︎ ᴜsᴇʀ ᴘʀᴇᴍɪᴜᴍ : ${db.data.premium.length}
│⩽⩾︎ ᴄᴍᴅ ʙʟᴏᴄᴋᴇᴅ : ${db.data.blockcmd.length} 
꒰⚘݄꒱₊_______________________˓˓ ⍥⃝⃝ ˒˒···
      𓆝 𓆟 𓆞 𓆝 𓆟
╭୧⍤⃝─┈◦• *ɪ ɴ ғ ᴏ - ᴛ ɪ ᴍ ᴇ* ˓˓ ⍥⃝⃝ ˒˒
│⩽⩾︎  ${week}, ${calender} 
│⩽⩾︎  ${timeWib} WIB 
│⩽⩾︎  ${dateIslamic}
꒰⚘݄꒱₊_______________________˓˓ ⍥⃝⃝ ˒˒···
      𓆝 𓆟 𓆞 𓆝 𓆟
╭୧⍤⃝─┈◦• *ɪ ɴ ғ ᴏ - ᴜ ᴘ ᴅ ᴀ ᴛ ᴇ* ˓˓ ⍥⃝⃝ ˒˒
│⩽⩾︎  ${info}
│⩽⩾︎  di update ${timeInfo} yang lalu
꒰⚘݄꒱₊_______________________˓˓ ⍥⃝⃝ ˒˒···
`+readmore+`

❍┈┈「 *MENU MENU* 」
╎╭──────────┈◦•◦❥•◦
╎│•⭓.totalfitur
╎│•⭓.runtime
╎│•⭓.speed
╎│•⭓.ping
╎│•⭓.gcbot
╎│•⭓.script
╎│•⭓.dashboard
╎│•⭓.owner
╎│•⭓.rules
╎│•⭓.donasi
╎꒰⚘݄꒱₊___________________୧⍤⃝💐
❍┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✦
❍┈┈「 *MENU DOWNLOAD* 」
╎╭──────────┈◦•◦❥•◦
╎│•⭓.play
╎│•⭓.ytmp3
╎│•⭓.ytmp4
╎│•⭓.ytsearch
╎│•⭓.tiktok
╎│•⭓.ttaudio
╎│•⭓.ttsearch
╎│•⭓.instagram
╎│•⭓.remini
╎│•⭓.txt2img
╎│•⭓.jadianime
╎│•⭓.mediafire
╎│•⭓.gdrive
╎꒰⚘݄꒱₊___________________୧⍤⃝💐
❍┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✦
❍┈┈「 *MENU CONVERT* 」
╎╭──────────┈◦•◦❥•◦
╎│•⭓.tovideo
╎│•⭓.toptv
╎│•⭓.tomp3
╎│•⭓.tovn
╎│•⭓.toimg
╎│•⭓.togif
╎│•⭓.terbalik
╎│•⭓.bass
╎│•⭓.blown
╎│•⭓.deep
╎│•⭓.earrape
╎│•⭓.fast
╎│•⭓.fat
╎│•⭓.nightcore
╎│•⭓.reverse
╎│•⭓.robot
╎│•⭓.slow
╎│•⭓.moth
╎│•⭓.tupai
╎꒰⚘݄꒱₊___________________୧⍤⃝💐
❍┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✦
❍┈┈「 *MENU STICKER* 」
╎╭──────────┈◦•◦❥•◦
╎│•⭓.sticker
╎│•⭓.smeme
╎│•⭓.swm
╎│•⭓.ttp
╎│•⭓.attp
╎│•⭓.qc
╎│•⭓.emojimix
╎│•⭓.mukelu
╎│•⭓.gurastick
╎│•⭓.lovestick
╎│•⭓.dogestick
╎│•⭓.paimon
╎│•⭓.patrick
╎│•⭓.cry
╎│•⭓.kill
╎│•⭓.hug
╎│•⭓.pat
╎│•⭓.lick
╎│•⭓.kiss
╎│•⭓.bite
╎│•⭓.yeet
╎│•⭓.bully
╎│•⭓.bonk
╎│•⭓.wink
╎│•⭓.poke
╎│•⭓.nom
╎│•⭓.slap
╎│•⭓.smile
╎│•⭓.wave
╎│•⭓.awoo
╎│•⭓.blush
╎│•⭓.smug
╎│•⭓.glomp
╎│•⭓.happy
╎│•⭓.dance
╎│•⭓.cringe
╎│•⭓.cuddle
╎│•⭓.highfive
╎│•⭓.handhold
╎꒰⚘݄꒱₊___________________୧⍤⃝💐
❍┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✦
❍┈┈「 *TOOLS & SEARCH* 」
╎╭──────────┈◦•◦❥•◦
╎│•⭓.tourl
╎│•⭓.cut30
╎│•⭓.tinyurl
╎│•⭓.lirik
╎│•⭓.get
╎│•⭓.infocuaca
╎│•⭓.ssweb
╎│•⭓.kalkulator
╎│•⭓.translate
╎│•⭓.infogempa
╎│•⭓.updategempa
╎│•⭓.pinterest
╎│•⭓.jarak
╎│•⭓.goggle
╎│•⭓.brainly
╎꒰⚘݄꒱₊___________________୧⍤⃝💐
❍┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✦
❍┈┈「 *MENU AI* 」
╎╭──────────┈◦•◦❥•◦
╎│•⭓.ai
╎│•⭓.miku
╎│•⭓.luffy
╎│•⭓.robin
╎꒰⚘݄꒱₊___________________୧⍤⃝💐
❍┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✦
❍┈┈「 *MENU GROUP* 」
╎╭──────────┈◦•◦❥•◦
╎│•⭓.public
╎│•⭓.self
╎│•⭓.ban
╎│•⭓.unban
╎│•⭓.listban
╎│•⭓.banchat
╎│•⭓.unbanchat
╎│•⭓.gc ( options )
╎│•⭓.on ( options )
╎│•⭓.banstik
╎│•⭓.unbanstik
╎│•⭓.profi
╎│•⭓.infogc
╎│•⭓.topbalance
╎│•⭓.afk
╎│•⭓.opentime
╎│•⭓.closetime
╎│•⭓.add
╎│•⭓.kick
╎│•⭓.kickme
╎│•⭓.addkick
╎│•⭓.delkick
╎│•⭓.listkick
╎│•⭓.demote
╎│•⭓.promote
╎│•⭓.hidetag
╎│•⭓.givesaldo
╎│•⭓.givelimit
╎│•⭓.kurangsaldo
╎│•⭓.kuranglimit
╎│•⭓.setppgc
╎│•⭓.delppgc
╎│•⭓.setnamegc
╎│•⭓.setdesc
╎│•⭓.ceksider
╎│•⭓.cekasalmember
╎│•⭓.listonline
╎│•⭓.tagall
╎│•⭓.del
╎│•⭓.tagme
╎│•⭓.getppgc
╎│•⭓.getpp
╎│•⭓.getname
╎│•⭓.intro
╎꒰⚘݄꒱₊___________________୧⍤⃝💐
❍┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✦
❍┈┈「 *MENU FUN* 」
╎╭──────────┈◦•◦❥•◦
╎│•⭓.bisakah
╎│•⭓.bagaimanakah
╎│•⭓.apakah
╎│•⭓.kapankah
╎│•⭓.cekwatak
╎│•⭓.cekhobby
╎│•⭓.cekmemek
╎│•⭓.cekkontol
╎│•⭓.cebelapaimutciaku
╎│•⭓.tiktokghea
╎│•⭓.tiktokpanrika
╎│•⭓.tiktokbocil
╎│•⭓.tiktokkayes
╎│•⭓.cosplayangel
╎│•⭓.videogalau
╎│•⭓.wibuvid
╎│•⭓.chinese
╎│•⭓.hijab
╎│•⭓.indo
╎│•⭓.japanese
╎│•⭓.korean
╎│•⭓.malaysia
╎│•⭓.randomgirl
╎│•⭓.randomboy
╎│•⭓.thailand
╎│•⭓.vietnam
╎│•⭓.hentaivid
╎│•⭓.jjmeryani
╎│•⭓.bucinserti
╎│•⭓.pacarsertifikat
╎│•⭓.tololsertifikat
╎│•⭓.genjot
╎│•⭓.nenen
╎│•⭓.perkosa
╎│•⭓.curhat
╎│•⭓.paptt
╎│•⭓.jadian
╎│•⭓.jodohku
╎│•⭓.caridoi
╎꒰⚘݄꒱₊___________________୧⍤⃝💐
❍┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✦
❍┈┈「 *MENU PRIMBON* 」
╎╭──────────┈◦•◦❥•◦
╎│•⭓.artinama
╎│•⭓.artimimpi
╎│•⭓.kecocokanpasangan
╎│•⭓.ramalancinta
╎│•⭓.kecocokannama
╎│•⭓.jadiannikah
╎│•⭓.sifatusaha
╎│•⭓.rezeki
╎│•⭓.pekerjaan
╎│•⭓.nasib
╎│•⭓.penyakit
╎│•⭓.artitarot
╎│•⭓.fengshui
╎│•⭓.haribaik
╎│•⭓.harisangar
╎│•⭓.harisial
╎│•⭓.harinaga
╎│•⭓.peruntungan
╎│•⭓.weton
╎│•⭓.karakter
╎│•⭓.masasubur
╎│•⭓.zodiak
╎꒰⚘݄꒱₊___________________୧⍤⃝💐
❍┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✦
❍┈┈「 *MENU EPHOTO* 」
╎╭──────────┈◦•◦❥•◦
╎│•⭓.writetext
╎│•⭓.advancedglow
╎│•⭓.typographytext
╎│•⭓.pixelglitch
╎│•⭓.neonglitch
╎│•⭓.flagtext
╎│•⭓.flag3dtext
╎│•⭓.deletingtext
╎│•⭓.blackpinkstyle
╎│•⭓.glowingtext
╎│•⭓.underwatertext
╎│•⭓.logomaker
╎│•⭓.cartoonstyle
╎│•⭓.papercutstyle
╎│•⭓.watercolortext
╎│•⭓.effectclouds
╎│•⭓.blackpinklogo
╎│•⭓.gradienttext
╎│•⭓.summerbeach
╎│•⭓.luxurygold
╎│•⭓.glitchtext
╎│•⭓.multicoloredneon
╎│•⭓.sandsummer
╎│•⭓.galaxywallpaper
╎│•⭓.1917style
╎│•⭓.makingneon
╎│•⭓.royaltext
╎│•⭓.freecreate
╎│•⭓.galaxystyle
╎│•⭓.lighteffects
╎│•⭓.shadow
╎│•⭓.cup
╎│•⭓.cup1
╎│•⭓.romance
╎│•⭓.smoke
╎│•⭓.burnpaper
╎│•⭓.lovemessage
╎│•⭓.undergrass
╎│•⭓.love
╎│•⭓.coffe
╎│•⭓.woodheart
╎│•⭓.woodenboard
╎│•⭓.summer3d
╎│•⭓.wolfmetal
╎│•⭓.nature3d
╎│•⭓.underwater
╎│•⭓.golderrose
╎│•⭓.summernature
╎│•⭓.letterleaves
╎│•⭓.glowingneon
╎│•⭓.fallleaves
╎│•⭓.flamming
╎│•⭓.harrypotter
╎│•⭓.carvedwood
╎꒰⚘݄꒱₊___________________୧⍤⃝💐
❍┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✦
❍┈┈「 *MENU TEXTPRO* 」
╎╭──────────┈◦•◦❥•◦
╎│•⭓.flaming1
╎│•⭓.flaming2
╎│•⭓.flaming3
╎│•⭓.flaming4
╎│•⭓.flaming5
╎│•⭓.flaming6
╎│•⭓.pornhub
╎│•⭓.glitch
╎│•⭓.avenger
╎│•⭓.space
╎│•⭓.ninjalogo
╎│•⭓.marvelstudio
╎│•⭓.lionlogo
╎│•⭓.wolflogo
╎│•⭓.steel3d
╎│•⭓.wallgravity
╎│•⭓.blackpink
╎│•⭓.neon
╎│•⭓.greenneon
╎│•⭓.advanceglow
╎│•⭓.futureneon
╎│•⭓.sandwriting
╎│•⭓.sandsummer
╎│•⭓.sandengraved
╎│•⭓.metaldark
╎│•⭓.neonlight
╎│•⭓.holographic
╎│•⭓.text1917
╎│•⭓.minion
╎│•⭓.deluxesilver
╎│•⭓.newyearcard
╎│•⭓.bloodfrosted
╎│•⭓.halloween
╎│•⭓.jokerlogo
╎│•⭓.fireworksparkle
╎│•⭓.natureleaves
╎│•⭓.bokeh
╎│•⭓.toxic
╎│•⭓.strawberry
╎│•⭓.bok3d
╎│•⭓.breakwall
╎│•⭓.icecold
╎│•⭓.luxury
╎│•⭓.cloud
╎│•⭓.summersand
╎│•⭓.horrorblood
╎│•⭓.thunder
╎꒰⚘݄꒱₊___________________୧⍤⃝💐
❍┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✦
❍┈┈「 *ANONYMOUS* 」
╎╭──────────┈◦•◦❥•◦
╎│•⭓.confes
╎│•⭓.menfes
╎꒰⚘݄꒱₊___________________୧⍤⃝💐
❍┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✦
❍┈┈「 *MENU ANIME* 」
╎╭──────────┈◦•◦❥•◦
╎│•⭓.anime
╎│•⭓.randomanime
╎│•⭓.naotomori
╎│•⭓.loli
╎│•⭓.cosplay
╎│•⭓.husbu
╎│•⭓.milf
╎│•⭓.wallml
╎꒰⚘݄꒱₊___________________୧⍤⃝💐
❍┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✦
❍┈┈「 *MENU ISLAMIC* 」
╎╭──────────┈◦•◦❥•◦
╎│•⭓.kisahnabi
╎│•⭓.alquran
╎│•⭓.alquranaudio
╎│•⭓.asmaulhusna
╎│•⭓.islamic
╎│•⭓.jadwalsholat
╎│•⭓.surah
╎│•⭓.listsurah
╎│•⭓.getsurah
╎│•⭓.alkitab [ kristen ]
╎꒰⚘݄꒱₊___________________୧⍤⃝💐
❍┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✦
❍┈┈「 *MENU RANDOM* 」
╎╭──────────┈◦•◦❥•◦
╎│•⭓.cyberspace
╎│•⭓.mountain
╎│•⭓.programming
╎│•⭓.technology
╎│•⭓.memeindo
╎│•⭓.pantun
╎│•⭓.motivasi
╎│•⭓.katabijak
╎│•⭓.dilanquote
╎│•⭓.cogan
╎│•⭓.cecan
╎│•⭓.hacker
╎│•⭓.pubg
╎│•⭓.boneka
╎│•⭓.art
╎│•⭓.awoo
╎│•⭓.exo
╎│•⭓.elf
╎│•⭓.estetic
╎│•⭓.wallnime
╎│•⭓.quotesimage
╎꒰⚘݄꒱₊___________________୧⍤⃝💐
❍┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✦
❍┈┈「 *MENU GAME* 」
╎╭──────────┈◦•◦❥•◦
╎│•⭓.math
╎│•⭓.susunkata
╎│•⭓.caklontong
╎│•⭓.family100
╎│•⭓.tebaklirik
╎│•⭓.siapaaku
╎│•⭓.tekateki
╎│•⭓.tebakkata
╎│•⭓.tebaktebakan
╎│•⭓.tebakgambar
╎│•⭓.tebakbendera
╎│•⭓.suit
╎│•⭓.claim
╎꒰⚘݄꒱₊___________________୧⍤⃝💐
❍┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✦
❍┈┈「 *MENU STORAGE* 」
╎╭──────────┈◦•◦❥•◦
╎│•⭓.addrespon
╎│•⭓.listrespon
╎│•⭓.delrespon
╎│•⭓.addvn
╎│•⭓.listvn
╎│•⭓.delvn
╎│•⭓.addstik
╎│•⭓.liststik
╎│•⭓.delstik
╎│•⭓.getallstik
╎꒰⚘݄꒱₊___________________୧⍤⃝💐
❍┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✦
❍┈┈「 *SETTINGS* 」
╎╭──────────┈◦•◦❥•◦
╎│•⭓.addcmdlimit
╎│•⭓.delcmdlimit
╎│•⭓.listcmdlimit
╎│•⭓.addcmdprem
╎│•⭓.listcmdprem
╎│•⭓.delsmdprem
╎│•⭓.addcmdowner
╎│•⭓.delcmdowner
╎│•⭓.listcmdowner
╎│•⭓.addprem
╎│•⭓.listprem
╎│•⭓.delprem
╎│•⭓.cekprem
╎│•⭓.addowner
╎│•⭓.delowner
╎│•⭓.listowner
╎│•⭓.blockcmd
╎│•⭓.unblockcmd
╎│•⭓.listblockcmd
╎│•⭓.setppbot
╎│•⭓.setbiobot
╎│•⭓.setnamebot
╎│•⭓.setimgreply
╎│•⭓.setvideo
╎│•⭓.setthumb
╎│•⭓.clearban
╎│•⭓.clearhit
╎│•⭓.clearlevel
╎│•⭓.clearallerror
╎│•⭓.clearalluser
╎꒰⚘݄꒱₊___________________୧⍤⃝💐
❍┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✦
❍┈┈「 *MENU OWNER* 」
╎╭──────────┈◦•◦❥•◦
╎│•⭓.delsesi
╎│•⭓.delsampah
╎│•⭓.getsesi
╎│•⭓.restart
╎│•⭓.bc
╎│•⭓.bcgc
╎│•⭓.listgc
╎│•⭓.listpc
╎│•⭓.join
╎│•⭓.out
╎│•⭓.getfile
╎│•⭓.getcase
╎│•⭓.getfolder
╎│•⭓.block
╎│•⭓.unblock
╎│•⭓.listblock
╎│•⭓.addsewa
╎│•⭓.delsewa
╎│•⭓.ceksewa
╎│•⭓.listsewa
╎│•⭓.banwa
╎│•⭓.unbanwa
╎│•⭓.joincall
╎│•⭓.sendpol
╎│•⭓.spamchat
╎│•⭓.buggc
╎│•⭓.call
╎│•⭓.$
╎│•⭓.>
╎꒰⚘݄꒱₊___________________୧⍤⃝💐
❍┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✦
「 _*Thanks To*_ 」
• Baileys
• Irfan Hariyanto
• Dittaz
• Nina Kawai
• Resta Gamteng :v
• Zeeone Ofc
• Yudha Perdana
• Yogi PW
• Decode Denpa
• Fernazer
• X - Dev Team
• XChillDs & Yuzu
• Dika Ardnt
`+'𝘗𝘰𝘸𝘦𝘳𝘦𝘥 𝘉𝘺 𝘕𝘰𝘥𝘦𝘫𝘴'
}




