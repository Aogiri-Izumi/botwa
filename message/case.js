/* × 💢 WARNING!! 💢 ×
SC ini Ga Di Perjual Belikan Bila Ada Yang Memperjualbelikan Segera Hubungi Nomor Di Bawah Ini
6281316643491 Yang Jual Sc Ini Neraka Menunggumu
Thanks
• officialdittaz
*/

"use strict";
import toMs from 'ms'
import chalk from 'chalk'
import fs from "fs"
import fse from 'fs-extra'
import moment from "moment-timezone"
import util from "util"
import { exec, spawn } from "child_process"
import axios from "axios"
import ggs from 'google-it'
import yts from "yt-search"
import speed from "performance-now"
import ms from "parse-ms"
import ytdl from 'ytdl-core'
import os from 'os'
import { performance } from 'perf_hooks'
import fetch from 'node-fetch'
import cheerio from  'cheerio'
import imageToBase64 from 'image-to-base64'
import request from "request"
import { join, dirname } from 'path'
import path  from 'path'
import * as logs from './logs.js'
import { createRequire } from 'module'
import { fileURLToPath, URL } from 'url'
import { Brainly } from "brainly-scraper-v2"
import { tiktokdl, tiktokdlv2, lyricsv2,  lyrics,tiktokdlv3, savefrom, instagramdlv3, instagramdlv2} from '@bochilteam/scraper'
import { Primbon } from 'scrape-primbon'
const primbon = new Primbon()
const __dirname = dirname(fileURLToPath(import.meta.url))
//var require = createRequire(import.meta.url) //Bring in the ability to create the 'require' method


//----------------- LIB FILE ------------------\\
import {formatp, getRandomFile,generateProfilePicture, getCase,addCase,delCase,runtime,FileSize,reSize,h2k,getRandom, makeid,kyun,randomNomor,jsonformat, isUrl, fetchJson,pickRandom,getGroupAdmins, sleep,getBuffer} from "../lib/myfunc.js"
import { addBadword, delBadword, isKasar, addCountKasar, isCountKasar, delCountKasar } from "../lib/badword.js"
import {floNime, UploadFileUgu, TelegraPh,webp2mp4File} from '../lib/uploader.js'
import { getDateId, resetLevelingXp, userXp, userLeveling, getLevelingXp, getLevelingLevel, getLevelingId, addLevelingXp, addLevelingLevel, addUserId } from '../lib/user.js'
import _data from "../lib/totalcmd.js"
import _sewa from '../lib/sewa.js'
import _prem from "../lib/premium.js"
import { ephoto,surah,listsurah,getSurah }  from "../lib/scraper.js"
import _error from "../lib/totalerror.js"
import _blockcmd from "../lib/blockcmd.js"
import _spam from '../lib/antispam.js'
import _ban from "../lib/banned.js"
import {register} from "./register.js"
import { bad,thanks,ken,dosa,katamalem,katasiang,katasore,ohayo,devoloper1,katara,katabot,katakawai,badword,pdf } from '../message/messages.js'
import { vnToxic, vnSalam, vnBot, vnAra, vnSpam, vnOwner, vnKawai, vnLove } from '../message/vn.js'
import { stikToxic, stikSpam, stikSalam, stikAdmin, stikOwner, stikOtw, stikThanks, stikNot, stikDel } from '../message/stik.js'
import { maudio, dmusic } from '../message/musik.js' 
//import {  toAudio,  toPTT,  toVideo,  ffmpeg } from '../lib/convert.js'

//=================================================//
export async function handler(conn, m, chatUpdate, store){
var multi = db.data.settings['settingbot'].multi
var prefa = db.data.settings['settingbot'].prefix
var publik = db.data.settings['settingbot'].publik
//var autoLevel = db.data.settings['settingbot'].autoLevel

try {

//Database
const AntiSpam = db.data.antispam
const DataId = db.data.data
const ban = db.data.banned
const premium = db.data.premium
const listcmdblock = db.data.blockcmd
const listerror = db.data.listerror
const hitnya = db.data.hittoday
const dash = db.data.dashboard
const anonChat = db.data.anonymous
const allcommand = db.data.allcommand
const sewa = db.data.sewa
const spammer = []
const setiker = JSON.parse(fs.readFileSync('./temp/stick.json'))
const audionye = JSON.parse(fs.readFileSync('./temp/vn.json'))


var Ownerin =`${devoloper1}@s.whatsapp.net`
var ownerNumber = [`${nomerOwner}@s.whatsapp.net` ,`${nomerOwner2}@s.whatsapp.net`,`6285156137902@s.whatsapp.net`,`${conn.user.jid}`]
const Tnow = (new Date()/1000).toFixed(0)
const seli = Tnow - m.messageTimestamp.low
if (seli > Intervalmsg) return console.log((`Pesan ${Intervalmsg} detik yang lalu diabaikan agar tidak nyepam`))

const { type,args, reply,sender,ucapanWaktu,from,botNumber,senderNumber,groupName,groupId,groupMembers,groupDesc,groupOwner,pushname,itsMe,isGroup,mentionByTag,mentionByReply,users,budy,content,body } = m

const prem = _prem.checkPremiumUser(sender, premium)


if (multi){
var prefix = /^[°zZ#+,.?=''():√%!¢£¥€π¤ΠΦ&<`™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#+,.?=''():√%¢£¥€π¤ΠΦ&<!`™©®Δ^βα¦|/\\©^]/gi) : '.'
var thePrefix = "Multi Prefix"
} else {
var prefix = prefa
var thePrefix = "One Prefix"
}
const isCmd = body.startsWith(prefix)
const isCommand = isCmd? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() :""
const q = args.join(' ')
const timeWib = moment().tz('Asia/Jakarta').format('HH:mm:ss')
const isOwner = ownerNumber.includes(sender) || _data.checkDataId ("owner", sender, DataId)
const command = (prem || isOwner)? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() : isCommand
const theOwner = sender == Ownerin
const timestampp = speed();
const latensi = speed() - timestampp
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const numberQuery = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
const Input = mentionByTag[0]? mentionByTag[0] : mentionByReply ? mentionByReply : q? numberQuery : false
const replyCommand = isCmd? isCmd : allcommand.includes(toFirstCase(command))
const user = global.db.data.users[m.sender]
const settings = global.db.data.settings['settingbot']
const botRun = global.db.data.others['runtime']
const botTime = (new Date - botRun.runtime) || "Tidak terdeteksi"
const runTime = clockString(botTime)
const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ?  conn.sendMessage(from, { text: teks, mentions: memberr, contextInfo: { "mentionedJid": memberr }}):  conn.sendMessage(from, {mentions: memberr,text: teks, contextInfo: { "mentionedJid": memberr }},{quoted: m})
}


//Import message.js
await (await import('./message.js')).default(prefix,command)
//Import allfake.js
await (await import('./allfake.js')).default(m)

//Register terlebih dahulu sebelom pakai bot
register(m,makeid,isCmd,isOwner)




//Type data
const isImage = (type === 'imageMessage')
const isVideo = (type === 'videoMessage')
const isSticker = (type == 'stickerMessage')
const isAudio = (type == 'audioMessage')
const isText = (type == 'conversation')
const isReaction = (type == 'reactionMessage')
const isMedia = (type === 'imageMessage' || type === 'videoMessage')
const isViewOnce = (type == 'viewOnceMessage')
const isAllMedia = (type === 'imageMessage' || type === 'videoMessage' || type === 'stickerMessage' || type === 'audioMessage' || type === 'contactMessage' || type === 'locationMessage')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedTeks = type === 'extendedTextMessage' && content.includes('quotedMessage')
const isQuotedTag = type === 'extendedTextMessage' && content.includes('mentionedJid')
const isQuotedReply = type === 'extendedTextMessage' && content.includes('Message')
const isQuotedText = type === 'extendedTextMessage' && content.includes('conversation')
const isQuotedViewOnce = type === 'extendedTextMessage' && content.includes('viewOnceMessage')

//Security / Keamanan
const groupMetadata = isGroup ? await 
conn.groupMetadata(m.chat).catch(e => {}) : ''
const isBotGroupAdmins = isGroup ? m.isBotAdmin : false
const participants = isGroup ? await groupMetadata.participants : ''
const isGroupOwner = isGroup ? m.isRAdmin : false
const isGroupAdmins = isGroup ? m.isAdmin : false
const isAntiLink = isGroup ? db.data.chats[from].antilink : false
const isAntidelete = isGroup ? db.data.chats[from].antidelete : false
const isKickarea = isGroup ? db.data.chats[from].antiasing : false
const isAntilinkGc = isGroup ? db.data.chats[from].antilinkgc : false
const isBanchat = isGroup ? db.data.chats[from].banchat : false
const isAntiVirtex = isGroup ? db.data.chats[from].antivirtex : false
const isAntihidetag = isGroup ? db.data.chats[from].antihidetag : false
const isAntiViewOnce = isGroup ? db.data.chats[from].viewonce : false
const isBanned = sender? _ban.check(senderNumber, ban) : false
const isPremium = isOwner ? true : _prem.checkPremiumUser(sender, premium)
const gcount = isPremium ? gcounti.prem : gcounti.user
const updateGempa = isGroup ? db.data.chats[from].updateGempa : false
const Promosi2 = isGroup ?
db.data.chats[from].promosi2 : false
const isAntiToxic = isGroup ? db.data.chats[from].antitoxic : true
const isAntiWame = isGroup ? db.data.chats[from].antiwame : false
const _toxic = db.data.toxic 
//User
const userLevel = user? db.data.users[m.sender].level : false
const userExp = user? db.data.users[m.sender].exp : false
const userId = user? db.data.users[m.sender].id : false
const amountExp = Math.floor(Math.random() * 10) + 50
const requiredExp = userLevel == 0? 500 : 1000 * userLevel
const userPersen = userExp/requiredExp*100
const userVerified = user? db.data.users[m.sender].date : false

// Pp ini mah
try {
var ppimg = await conn.profilePictureUrl(sender, 'image').catch(_ => 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60')
} catch (err) {
console.log(err)
}
const its = await getBuffer (ppimg)
const dfrply = await reSize(ppimg, 300, 300)
const fkontak = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `0@s.whatsapp.net` } : {}) }, message: { 'contactMessage': { 'displayName': `${fake}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${m.pushname},;;;\nFN:${m.pushname},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}
const repPy = {
key: { remoteJid: '0@s.whatsapp.net',fromMe: false,id: 'Rangel°᭄ᴮᵒᵗ',participant: '0@s.whatsapp.net'},
message: { requestPaymentMessage: { currencyCodeIso4217: "USD",amount1000: 999999999,requestFrom: '0@s.whatsapp.net',noteMessage: {extendedTextMessage: { text: 'Rangel°᭄ᴮᵒᵗ By єнanz'}},
expiryTimestamp: 999999999,amount: { value: 91929291929,offset: 1000,currencyCode: "USD"}}}}



//Bot hanya merespon jika button miliknya saja yang di tekan
if(m.myButton) {return}

//AUTO Read Message
conn.readMessages([m.key])

//Presence Online
if (isCmd){
db.data.users[m.sender].exp += amountExp
conn.sendPresenceUpdate('composing', from)
} else {
conn.sendPresenceUpdate('recording', from)
}



//Public & Self And Banchat
if (!publik && !itsMe && !isOwner && !theOwner) {return}
if (isGroup && !isPremium && isBanchat && !itsMe && !isOwner) {return}

//Console log
if(!isCmd && !isAllMedia && !isReaction && budy.length < 8000 && type !== 'protocolMessage') logs.message(conn,m,budy,AntiSpam)
if(isCmd) logs.commands(m,command) 





//reply document
let replyehz = (teks) => {
conn.sendMessage(m.chat, {
document: fs.readFileSync("./package.json"),
fileName: 'Rangel°᭄ᴮᵒᵗ', mimetype: rm, fileLength: 99999999999999, bpageCount: 10909143,	
contextInfo: { mentionedJid: [sender],
forwardingScore: 9999999, isForwarded: true,externalAdReply: {showAdAttribution: false,title: 'Rangel°᭄ᴮᵒᵗ © By єнanz',body: `${ucapanWaktu} kak ${pushname}`,caption: `oke Tunggu Bentar kak`,thumbnailUrl: "https://telegra.ph/file/bb39868a2de11c075e4cb.jpg",
//sourceUrl: `${sig}`,
	}}}, { quoted: m,ephemeralExpiration: 86400});
  }

//SetReply
const setReply = async(teks,member = []) =>{
let photo = pickRandom(fotoRandom)
let contextInfo = {
forwardingScore: 99999,
isForwarded: true,
mentionedJid: member,
externalAdReply:{
showAdAttribution: true,
title: `R⩜⃝ngelꪆᴮᵒᵗ`,
body:`Hai  ${ucapanWaktu} kak ${pushname}`,
previewType:"PHOTO",
thumbnailUrl: photo,
sourceUrl: `${syt}`
}
}

if(replyType === "web"){
conn.sendMessage(from, { contextInfo,mentions: member, text: teks }, { quoted: m })
} else if(replyType === "mess"){
conn.sendMessage(from, {text: teks}, { quoted: m });
} else {
conn.sendMessage(from, {text: "Error SetReply Tidak Di Temukan"})
}
}
const sendAnti = (teks) => {

let contextInfo = {
mentionedJid: [sender],
externalAdReply: {
showAdAttribution: true,
title: `${botName}`,
body: `${baileysVersion}`,
previewType:"PHOTO",
thumbnailUrl: 'https://telegra.ph/file/316849cddb914366d723d.jpg',
sourceUrl: `${sgc}`
}
}

conn.sendMessage(from, { contextInfo, text: `${teks}\n`+readmore+`\n⫹⫺ @${sender.split('@')[0]}\n⫹⫺ ${week} , ${calender}`}, { quoted: repPy })
}

//Total fitur by Official Dittaz
const totalFitur = () =>{
var mytext = fs.readFileSync("./message/case.js").toString()
var numUpper = (mytext.match(/case '/g) || []).length;
return numUpper
}


const math = (teks) => {
return Math.floor(teks)
}
//=================================//
//RESPON teks audio menu
const adu = maudio
const audyz = adu[Math.floor(Math.random() * adu.length)]

//RESPON teks audio menu
const kol = dmusic
const dstuk = kol[Math.floor(Math.random() * kol.length)]
//RESPON teks toxic
const toto = bad
const sexx = toto[Math.floor(Math.random() * toto.length)]

//RESPON teks toxic 2
const toda = dosa
const dosax = toda[Math.floor(Math.random() * toda.length)]
//RESPON teks trimakasih
const tkns = thanks
const tnksbro = tkns[Math.floor(Math.random() * tkns.length)]
//RESPON teks kata malam
const mlm = katamalem
const nightt = mlm[Math.floor(Math.random() * mlm.length)]

//RESPON teks kata siang
const siank = katasiang
const syiank = siank[Math.floor(Math.random() * siank.length)]

//RESPON teks kata sore
const sorr = katasore
const soray = sorr[Math.floor(Math.random() * sorr.length)]
//RESPON teks kata pagi ohayo
const hayio = ohayo
const mrning = hayio[Math.floor(Math.random() * hayio.length)]

//VN saat ada yg bilang bot
const ulul = vnBot
const halo = ulul[Math.floor(Math.random() * ulul.length)]

//VN saat ada yang toxic
const anying = vnToxic
const astaga = anying[Math.floor(Math.random() * anying.length)]

//VN saat ada yg akses fitur owner
const ahenggak = vnOwner
const gakmau = ahenggak[Math.floor(Math.random() * ahenggak.length)]

//VN saat ada yg spam
const alal = vnSpam
const nospam = alal[Math.floor(Math.random() * alal.length)]

//VN saat ada yg bilang asalamualaikum
const alul = vnSalam
const walaikumsalam = alul[Math.floor(Math.random() * alul.length)]

//VN saat ada yg bilang i love u
const awlu = vnLove
const lopyoutoo = awlu[Math.floor(Math.random() * awlu.length)]

//VN saat ada yg bilang ara
const ara = vnAra
const wibu = ara[Math.floor(Math.random() * ara.length)]

//VN kawai
const olah = vnKawai
const kawai = olah[Math.floor(Math.random() * olah.length)]
//STIKER saat ada yg toxic
const tox = stikToxic
const stiktox = tox[Math.floor(Math.random() * tox.length)]

//STIKER saat ada yg spam
const spam = stikSpam
const stikpem = spam[Math.floor(Math.random() * spam.length)]

//STIKER saat ada yg salam
const sallam = stikSalam
const stiksal = sallam[Math.floor(Math.random() * sallam.length)]

//STIKER khusus admin
const min = stikAdmin
const stikmin = min[Math.floor(Math.random() * min.length)]

//STIKER khusus owner
const own = stikOwner
const stikown = own[Math.floor(Math.random() * own.length)]

//STIKER ketika ada yg ucap trimakasih 
const tnks = stikThanks
const stiktnk = tnks[Math.floor(Math.random() * tnks.length)]

//STICKER
const not = stikNot
const stiknot = not[Math.floor(Math.random() * not.length)]
//
const nt = stikOtw
const stikot = nt[Math.floor(Math.random() * nt.length)]
//respon text
let listRespon = global.db.data.respon[body]
if(listRespon) m.reply(listRespon.respon)

const sendvn = (teks) => {
conn.sendMessage(from, {audio: {url: teks},ptt: true, waveform: [0,0,50,0,0,0,10,80,10,60,10,99,60,30,10,0,0,0],mimetype: 'audio/mpeg'},{quoted:m})		
}
const sendSticker = (teks) => {
conn.sendMessage(from, {sticker: {url: teks}},{quoted: m})
}
const stikdel = (hehe) => {
let annu = stikDel
conn.sendMessage(m.chat, {sticker: { url: `${annu}` }},{quoted: m})
}
const sendMusic = (teks) => {
let img = { url : `${ehanzUrl}`, type : "image/jpeg" }
let url = `https://youtu.be/MVgeiiomiWE?si=M2dlNflTvju-E3fN`

let contextInfo = {
externalAdReply: {
showAdAttribution: true, 
title: `⇆ㅤ ||◁ㅤ❚❚ㅤ▷||ㅤ ↻`, 
body: `   ━━━━⬤──────────    click here to play music `,
description: 'Now Playing ....',
mediaType: 2,
thumbnailUrl: img.url,
mediaUrl: url
}
}
	
conn.sendMessage(from, { contextInfo, mimetype: 'audio/mp4', audio: teks}, { quoted: m })
}

//onlyOwner
const onlyOwner = async() =>{
setReply(mess.only.ownerB)
}


/*/Bot tidak bisa di akses di pc kecuali premium
let lowFitur = db.data.lowfeature
if(!isGroup && !isPremium && isCmd && !lowFitur.includes(command)) {
let teks = `Maaf kamu bukan user premium
silahkan upgrade ke premium agar bisa menggunakan
bot secara private chat,

silahkan gunakan bot di dalam group
https://chat.whatsapp.com/Fguw4KxsP6qCBm9RfZvHOS

terimakasih

${fake}`
return setReply(teks)
}*/
//if(selectedText == "register"){
if(isCmd){
if (user) {
if (!('name' in user)) user.name = pushname
if (!('id' in user)) user.id = senderNumber
if (!isNumber(user.exp)) user.exp = 0
if (!isNumber(user.level)) user.level = 1
if (!isNumber(user.hit)) user.hit = 1
if (!isNumber(user.balance)) user.balance = 1000
if (!isNumber(user.limit)) user.limit = 30
if (!isNumber(user.glimit)) user.glimit = 30
if (!('serial' in user)) user.serial = makeid(4)
if (!isNumber(user.afk)) user.afk = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!isNumber(user.lastclaim)) user.lastclaim = 0
if (!isNumber(user.pc)) user.pc = 0
if (!('autolevelup' in user)) user.autolevelup = false
if (!isNumber(user.pc)) user.pc = 0
if (!user.grade) user.grade = 'Newbie'
if (!('pasangan' in user)) user.pasangan = ''
} else {
global.db.data.users[m.sender] = {
name: pushname,
id: senderNumber,
date: calender,
exp: 100,
level: 1,
hit: 0,
balance: 1000,
limit: 30,
glimit: 30,
serial: makeid(4).toUpperCase(),
lastclaim: 0,
afk: -1,
pasangan: 0,
pc: 0,
grade: 'Newbie',
autolevelup: false 
}

  
let me = m.sender
let anu = "https://telegra.ph/file/d79d6a1fcb429dd897de6.jpg";

    let contextInfo = {
      externalAdReply: {
        showAdAttribution: false,
        title: `${botName}`,
        mediaType: 1,
        renderLargerThumbnail: true,
        thumbnail: its,
      },
    };
let teks =`*]───── REGISTERED ─────[*
 
👤 Nama: ${pushname}
☎️ Nomer: ${senderNumber}
📡 Serial: ${db.data.users[m.sender].serial}
📍 Verified: ${calender}
💸 Saldo: Rp 1000
⚜️ Grade: Newbie
🥇 Rank : 
🌀 Level : 1
 `
  await sleep(1000)
conn.sendMessage(m.chat,{contextInfo, text:teks},{quoted:m})
                                                                              }
}   


 //ANTI WA.ME
if (isGroup && isAntiWame) {
if (budy.includes('https://wa.me') || budy.includes('wa.me') || budy.includes('Https://wa.me') || budy.includes('Wa.me') ) {
if (!isBotGroupAdmins) {return}
setReply (`*LINK WA ME TERDETEKSI*\n\nMaaf bot akan menghapus link tersebut!!,\n\nKetik .antiwame off untuk mematikan fitur anti wame`)
conn.sendMessage(from, { delete: m.key })
 }
 }

// Anti promosi HAPUS
if (isGroup && Promosi2) {
if (budy.match(`adminpanel5kpm|open jasa push member grup|yangmaubuypanelpm|admin panel 10k pm|Hanya menyediakan Jasa Push Member Grup|admin panel 5k pm|yang mau beli panel murah pm|list harga panel by|list harga vps|LIST HARGA VPS|OPEN JASA PUSH MEMBER GRUP|READY|Redy|LIST HARGA PANEL BY|DANA|menyediakan|MENYEDIAKAN|OPEN MURBUG|open|OPEN|UNCHEK|PANEL READY|PANEL|JB|VPS|10k aja|5GB|3GB|STORE|panel|panel ready|pannel ready minat pm|mau panel pm|MAU PANNEL PM|Admin panel ready|ADMIN PANEL READY|Chat aja om ready selalu|OPEN JASA INSTALL|open jasa installMENYEDIAKAN JASA INSTALL|menyediakan jasa install`)) {
if (!isBotGroupAdmins) {return} sendAnti(` lagi promosi awokawok`)
if (isGroupAdmins) return setReply(`Admin Mah Bebas Yakan?`)
if (isOwner) return setReply(`Gw Mah Bebas Yakan?`)
conn.sendMessage(m.chat, { delete: m.key })
conn.sendMessage(m.chat, { delete: m.key })

}
}
// ANTI TOXIC
if (isGroup && isAntiToxic) {
if (budy.match(`Anjing|Anying|Monyet|Setan|Goblog|Yatim|ngentot|Memek|Kontol|Asu|coli|sange|anying|anjing|tete|Taek|Bot goblog|ngewe|njing|nyet|Taik|taik|callBug|bugcall|buggc|santetgc|Najis|najis`)) {
//if (isGroupAdmins) return sendAnti(`Alah sia admin grup mah bebas yekan :v`)
if (!isBotGroupAdmins) {return}
sendAnti (`*heh@${pushname} *\nKata Aneh Terdeteksi\nJangan Ulangi Lagi Hindari Admin Marah\nAtau Kamu Akan Di kick oleh Bot`)
sendSticker(stiktox)
conn.sendMessage(from, { delete: m.key })
 }
 }
//ANTI LINK GROUP
if (isGroup && isAntilinkGc && budy.includes(`chat.whatsapp.com`)) {
if (isGroupAdmins) return setReply('Alah sia admin grup mah bebas yekan :v')
if(ownerNumber.includes(sender)) return setReply('Alah sia owner bot mah bebas yekan :v')
let linkgc = await conn.groupInviteCode(from)
if (budy.includes(`${linkgc}`)) return reply ('Wuanjir kirain link grup lain, huh hampir aja kena kick 😆')
//if (budy.includes('zin admin') || budy.includes('zinmin') )return setReply('Izin Admin diterima')
await sendAnti(` *「 LINK GROUP DETECTED 」*\nKamu mengirimkan link group, maaf kamu di kick dari grup :(`)
await sleep(3000)
if(isBotGroupAdmins) await conn.sendMessage(from, { delete: m.key })
await conn.groupParticipantsUpdate(from, [sender], 'remove').catch((e) => { setReply(`BOT HARUS JADI ADMIN`) })
}


//ANTI LINK
if (isGroup && isAntiLink){
if (budy.includes(`https:`)) {
if (isGroupAdmins) return setReply('Alah sia admin grup mah bebas yekan :v')
if(ownerNumber.includes(sender)) return setReply('Alah sia owner bot mah bebas yekan :v')
let linkgc = await conn.groupInviteCode(from)
if (budy.includes(`${linkgc}`)) return reply ('Wuanjir kirain link grup lain, huh hampir aja kena kick 😆')
if (budy.includes('zin admin') || budy.includes('zinmin') )return setReply('Izin Admin diterima')
sendAnti(` *「 LINK DETECTED 」*\nKamu mengirimkan link, maaf kamu di kick dari grup :(`)
setTimeout(() => {
if(isBotGroupAdmins) conn.sendMessage(from, { delete: m.key })
conn.groupParticipantsUpdate(from, [sender], 'remove').catch((e) => { setReply(`BOT HARUS JADI ADMIN`) })
}, 2000)
}
}

//ANTI ASING
if (isGroup && isBotGroupAdmins &&isKickarea && !itsMe) {
let member = await groupMembers.map(u => u.id)
for ( let i = 0; i <member.length; i++){
if (member[i].slice(0,2) !== "62" ){
let usersId = await groupMembers.find(u => u.id == member[i])
if (!usersId.groupAdmins ){
await conn.groupParticipantsUpdate(from, [member[i]], 'remove')
await sleep(1000)
}
}
}
}

//ANTI VIRUS
if (isGroup && isAntiVirtex && budy.length > 20000) {
if (isGroupAdmins) return setReply('*VIRTEX DETECTED*')
const antivirus  = require('./antivirus.js')
console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
await conn.sendMessage(from, {text:antivirus(pushname,groupName)})
if (!isBotGroupAdmins) {return }
if(isOwner) {return}
await conn.groupParticipantsUpdate(from, [sender], 'remove')
await conn.sendMessage(`${nomerOwner}@s.whatsapp.net`,{text: `Hai Owner! wa.me/${sender.split("@")[0]} Terdeteksi Telah Mengirim Virtex ${isGroup?`di Group ${groupName}`:''}`})
}


//ANTI DELETE
if(type == 'protocolMessage' && isAntidelete){
//Log(m.message.protocolMessage)
let mess = chatUpdate.messages[0].message.protocolMessage
let chats = Object.entries(await conn.chats).find(([user, data]) => data.messages && data.messages[mess.key.id])
if(chats[1] == undefined) return
if(chats[1] !== undefined){
let msg = JSON.parse(JSON.stringify(chats[1].messages[mess.key.id]))
await conn.copyNForward(mess.key.remoteJid, msg).catch(e => console.log(e, msg))
await sleep(1500)
stikdel(from)
}
}
//ANTI VIEWONCE 
if ((type == 'viewOnceMessage' || isQuotedViewOnce) && (isAntiViewOnce || budy.startsWith("Readviewonce")))  {
const { downloadContentFromMessage } = (await import('@whiskeysockets/baileys')).default
if(isQuotedViewOnce){
var view = m.quoted.message
} else {
var view = m.message.viewOnceMessage.message
} 

let Type = Object.keys(view)[0]
let media = await downloadContentFromMessage(view[Type], Type == 'imageMessage' ? 'image' : 'video')
let buffer = Buffer.from([])
for await (const chunk of media) {
buffer = Buffer.concat([buffer, chunk])
}
if (/video/.test(Type)) {
conn.sendFile(m.chat, buffer, 'media.mp4', view[Type].caption || '', m)
} else if (/image/.test(Type)) {
conn.sendFile(m.chat, buffer, 'media.jpg', view[Type].caption || '', m)
}
}
const onlyGroup = async() => {
let teks = `┈ ⋞ 〈 P R I V A T E - C H A T 〉 ⋟ ┈

Halo, 👋 @${sender.split('@')[0]}
Fitur tersebut digunakan untuk group
Fitur khusus private hanya diperbolehkan berikut ini
╭── ⋅ ⋅ ── ✩ ── ⋅ ⋅ ──╮
├ .tourl
├ .tiktok
├ .openai
├ .remini
├ .confes
├ .menfes
╰── ⋅ ⋅ ── ✩ ── ⋅ ⋅ ──╯

Akses Lebih Hanya Di group botz
${sgc}
`+readmore+`
┈ ⋞ 〈  A U T O - D O W N L O A D 〉 ⋟ ┈

╭── ⋅ ⋅ ── ✩ ── ⋅ ⋅ ──╮
├ Tiktok
├ Instagram 
╰── ⋅ ⋅ ── ✩ ── ⋅ ⋅ ──╯
𝗡𝗢𝗧𝗘 :
Auto download hanya kirim linknya saja`
conn.sendMessage(from, {text: teks},{quoted: m})
}
//===================================================================//
const addSpammer = function(jid, _db){
let position = false
Object.keys(_db).forEach((i) => {
if (_db[i].id === jid) {
position = i
}
})
if (position !== false) {
_db[position].spam += 1
} else {
let bulin = ({ id: jid, spam: 1 })
_db.push(bulin)
}
}

const FinisHim = async function(jid, _db){
let position = false
Object.keys(_db).forEach((i) => {
if (_db[i].id === jid) {
position = i
}
})
if (position !== false) {
if(_db[position].spam > 7){
if(db.data.users[sender].banned.status || !isOwner){return}
let obj = {
id: senderNumber,
status: true,
date: calender,
reason: "Spam Bot"
}
db.data.users[woke].banned = obj
console.log(`${jid} Terdeteksi spam lebih dari ${_db[position].spam} kali`)
setReply("Kamu telah di banned karena telah melakukan spam")
}
} else {
console.log(`Spam ke ${_db[position].spam}`)
}
}


//ANTI SPAM BERAKHIR
if(_spam.Expired(senderNumber, "Case", AntiSpam)){
let position = false
for(let i of spammer){
if(i.id == senderNumber){
position = i
}
}

if (position !== false) {
spammer.splice(position, 1)
console.log(chalk.bgGreen(color("[  Remove ]", "black")),"Sukses remove spammer")
}
}


//Anti sticker guy
let antiSticker = db.data.others["antiSticker"]
if(antiSticker) {
} else db.data.others["antiSticker"]  = []
let iniSticker = (type == 'stickerMessage') ? m.message.stickerMessage.fileSha256.toString('base64') : ""
if(isGroup && isBotGroupAdmins  && antiSticker.includes(iniSticker)) conn.sendMessage(from, { delete: m.key})


_spam.Expired(senderNumber, "NotCase", AntiSpam)
if(isBanned && !isOwner){return} //user terbanned
if(isCmd && _spam.check("Case",senderNumber, AntiSpam)){
addSpammer(senderNumber, spammer)
FinisHim(senderNumber, spammer)
return console.log(chalk.bgYellowBright(chalk.black("[  SPAM  ]")),"antispam Case aktif")
}

//ANTI SPAM PRIVATE CHAT
if(antiSpam && isCmd && _spam.isFiltered(from) && !isGroup && !itsMe && !isOwner){
_spam.add("Case",senderNumber, "15 s", AntiSpam)
sendSticker(stikpem)
addSpammer(senderNumber, spammer)

}

//ANTI SPAM GROUP CHAT
if (AntiSpam && isCmd && _spam.isFiltered(from) && isGroup && !itsMe && !isOwner) {
_spam.add("Case",senderNumber, "15s", AntiSpam)
sendSticker(stikpem)
addSpammer(senderNumber, spammer)

}
if (isCmd && !isOwner) _spam.addFilter(from)



//System Expired
_sewa.expiredCheck(conn, sewa)
_prem.expiredCheck(conn,premium)


//MAKE Sticker
async function makeSticker(media,Sticker, StickerTypes){
let jancok = new Sticker(media, {
pack: packName, // The pack name
author: pushname, // The author name
type: StickerTypes.FULL, // The sticker type
categories: ['🤩', '🎉'], // The sticker category
id: '12345', // The sticker id
quality: 70, // The quality of the output file
background: '#FFFFFF00' // The sticker background color (only for full stickers)
})
let stok = getRandomFile(".webp")
let nono = await jancok.toFile(stok)
let nah = fs.readFileSync(nono)
await conn.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: botName, mediaType: 3,  renderLargerThumbnail : true,thumbnailUrl: 'https://telegra.ph/file/9acfd3da9ef8b762b1da5.jpg',sourceUrl: `${sgc}`																												
}}, sticker: nah }, { quoted: fkontak })   				
await fs.unlinkSync(stok)
}	


//DOWNLOAD MP4
const downloadMp4 = async (Link ) => {
try{
await ytdl.getInfo(Link);
let mp4File = getRandomFile('.mp4')
let nana = ytdl(Link)
.pipe(fs.createWriteStream(mp4File))
.on("finish", async () => {
await conn.sendMessage(from, { video: fs.readFileSync(mp4File), caption: "Nih!",gifPlayback: false},{quoted: m})
fs.unlinkSync(`./${mp4File}`)
})
} catch(err) {
setReply(`${err}`)
}
}


//DOWNLOAD MP3
const downloadMp3 = async (Link ,name = "Audio", opt = "audio") => {
try{
await ytdl.getInfo(Link);
let mp3File = getRandomFile('.mp3')
ytdl(Link, {filter: 'audioonly'})
.pipe(fs.createWriteStream(mp3File))
.on("finish", async () => {
if(opt == "audio") await conn.sendMessage(from, {audio:  fs.readFileSync(mp3File), mimetype: 'audio/mpeg' },{ quoted: m })
if(opt == "doc") await conn.sendMessage(from, { document: fs.readFileSync(mp3File), fileName: name, mimetype: 'audio/mpeg'  }, { quoted: m })
fs.unlinkSync(mp3File)
})
} catch (err){
console.log(color(err))
}
}

//AUTO BIO BOT
if(settings){
} else global.db.data.settings['settingbot'] = { status: new Date() * 1, }
if ((new Date() * 1 - settings.status > 2000) && settings && settings.autoBio) {
const {kyun} = await import("../lib/myfunc.js")
let _uptime = process.uptime()
let uptime = kyun(_uptime);
let bio = `Im ${fake} 🤖 || ⏰ Runtime ${uptime} || 🌎 Mode: ${publik? 'Public' : 'self'} || 🎨 Create By ${ownerName}`
await conn.updateProfileStatus(bio).catch(_ => _)
settings.status = new Date() * 1
}



//AUTO DEL VIRTEX
if(m.virtex) {
if(isGroup && isBotGroupAdmins) conn.sendMessage(from, { delete: m.key})
if(!isGroup) conn.chatModify({ clear: { messages: [{ id: m.id, fromMe: sender == botNumber? true : false, timestamp: m.messageTimestamp }] } }, sender, [])
console.log(chalk.bgRedBright(chalk.black("[ VIRTEXT ]")),`Length: ${budy.length} from ${senderNumber} ${isGroup? `Group ${groupName}`: ""}`)
}
//ANTI BADWORD 
if (isGroup && !isOwner && !isGroupAdmins && !itsMe){ 
if (badword.includes(budy)) {
if (isCountKasar(sender, _toxic)){
if (!isBotGroupAdmins) return sendAnti(`Kamu beruntung karena bot bukan admin`)
sendAnti(`Sepertinya kamu sudah berkata kasar lebih dari 5x maaf kamu akan di kick`)
setReply('Hitungan mundur dalam waktu')
await sleep(1000)
conn.sendMessage(m.chat, { id: m.key.id, contextInfo: { forwardingScore: 50, isForwarded: true },showAdAttribution: true, text: `3` })
await sleep(2000)
conn.sendMessage(m.chat, { id: m.key.id, contextInfo: { forwardingScore: 50, isForwarded: true },showAdAttribution: true, text: `2` })
await sleep(3000)
conn.sendMessage(m.chat, { id: m.key.id, contextInfo: { forwardingScore: 50, isForwarded: true },showAdAttribution: true, text: `1` })
await sleep(4500)
conn.sendMessage(m.chat, { id: m.key.id, contextInfo: { forwardingScore: 50, isForwarded: true },showAdAttribution: true, text: `Sayonaraa 👋` })
conn.groupParticipantsUpdate(from, [sender], 'remove').catch((e) => { setReply(`Bakaa aku bukan admin gimana mau kick`) })
delCountKasar(sender, _toxic)
} else {
addCountKasar(sender, _toxic)
sendAnti(`Kamu terdeteksi berkata kasar! jangan ulangi lagi atau kamu akan dikick oleh bot`)
}
}
}

//AUTO BLOCK NOMER ASING +212
let nomerAsing = senderNumber.startsWith('+212')
if (nomerAsing) {
console.log(`Nomer asing dari ${senderNumber}`)
await m.reply("you are not allowed to using this bot")
if(!isGroup) await conn.sendMessage(from, {text: "stupid"},{quoted: lep})
return conn.updateBlockStatus(sender, "block")
}

//Auto level users
if(user && isCmd && userExp >= requiredExp){
const { userXp, userLeveling, } = (await import("../lib/user.js"))
let link = 'https://telegra.ph/file/9528a0b81d1b46bdb5507.jpg'
let level = userLevel+1
let uang = 1000*level

db.data.users[m,sender].exp = userExp - requiredExp
db.data.users[m.sender].level += 1
db.data.users[m.sender].money += 1000*level
//db.data,user[m.sender].grade = userLeveling(`${db.data.users[sender].level + 1}`)

let contextInfo = {
externalAdReply : {
showAdAttribution: false,
mediaType: 1,
title: 'Exp',
thumbnailUrl: link,
renderLargerThumbnail: true,
mediaUrl: 'https://chat.whatsapp.com/GsX10XuzZqQ99jccdcDasi',
sourceId: copyright,
sourceUrl: 'https://chat.whatsapp.com/GsX10XuzZqQ99jccdcDasi'
}
}
let mentions = [sender]
let text =`◪ *Nama:* ${pushname}
├◆ *Pangkat:* ${userLeveling(`${db.data.users[sender].level + 1}`)}
├◆ *Saldo:* + Rp ${uang.toLocaleString()}
╰◆ *Level:*  ${userLevel} ➠ ${userLevel + 1}

*Note:* ↓
Gunakan saldo untuk membeli limit tambahan
dengan fitur ${prefix}buylimit`
//conn.sendMessage(from,{contextInfo, text,mentions})
  setReply(text)
}
//ANONYMOUS CHAT
const roomChat = Object.values(anonChat).find(room => [room.a, room.b].includes(m.sender) && room.state == 'CHATTING')
const roomA = Object.values(anonChat).find(room => room.a == m.sender)
const roomB = Object.values(anonChat).find(room => room.b == m.sender )
const room = Object.values(anonChat).find(room => room.state == 'WAITING' && room.b == "")

if (roomChat && !isCmd && !isGroup && roomChat.b !=="") {
//let nono = m.quoted.fakeObj? m.quoted.fakeObj : m
let other = [roomChat.a, roomChat.b].find(user => user !== m.sender)
m.copyNForward(other, true)
}

if (room && Date.now() >= room.expired){
await conn.sendMessage(room.a, {text:"Pesan rahasia telah keluar dari room chat"})
anonChat.splice(anonChat.indexOf(room, 1)) 
}





//AUTO BLOCK CMD
for (let i = 0; i < listcmdblock.length ; i++) {
if (command === listcmdblock[i].cmd ){
if(autoblockcmd) {
return setReply(mess.block.Bsystem)
} else{
return setReply(mess.block.Bowner)
}
}
}

//FITUR USER PREMIUM
if(!_data.checkDataName("premium", "", DataId)) {
await _data.createDataId("premium", DataId)
}
let userPremium =  DataId.filter(item => item.name == "premium" )
for(let i of userPremium[0].id){
if(command == i && !isPremium) return setReply(`Kamu bukan user premium`)
}
const onlyAdmin = async() => {
sendSticker(stikmin)
}
//FITUR KHUSUS OWNER
if(!_data.checkDataName("commands", "", DataId)) {
await _data.createDataId("commands", DataId)
}
let ownerCommands =  DataId.filter(item => item.name == "commands" )
for(let i of ownerCommands[0].id){
if(command == i && !isOwner) return onlyOwner()
}


//USER AFK
if (user && user.afk > -1) {
setReply(`Kamu telah berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afk)}`.trim())
user.afk = -1
user.afkReason = ''
}
let jids = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let jid of jids) {
let userAfk = global.db.data.users[jid]
if (!userAfk) continue
let afkTime = userAfk.afk
if (!afkTime || afkTime < 0) continue
let reason = userAfk.afkReason || ''
setReply(`
Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
}

//AUTO REACT
let regex =[ "bilek","banh","cum","kntl","anjing","mmk","bang","wibu","pantek","pepek","hentai"]
for (let i of regex){
if (!_spam.check("NotCase",senderNumber, AntiSpam) && isGroup && budy.toLowerCase().includes(i)){
_spam.add("NotCase",senderNumber, "10s", AntiSpam)
let emot = await pickRandom(["🗿", "👍", "🙄", "😝", "😏", "💩", "👻", "🔥", "🤣","🤬", "😎", "😂", "😘", "😑", "😱", "❤️", "🔥", "😳","😍","🤩","🥳","🤔","🤗","🤤","👎","👊","🙈","🤡"])
conn.sendMessage(from, { react: { text: emot, key: m.key } })
}
}


//Auto Sticker Online
if(db.data.sticker[budy]){
if (_spam.check("NotCase",senderNumber, AntiSpam)) return
_spam.add("NotCase",senderNumber, "5s", AntiSpam)
conn.sendMessage(from,{sticker:{url:db.data.sticker[budy].link}})
}

//Auto VN Online
if(db.data.audio[budy] || db.data.audio[budy.toLowerCase()]   ) {
if (_spam.check("NotCase",senderNumber, AntiSpam)) return
let nono =  {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: sender } : {})},message: { "extendedTextMessage": {"text": `${pushname} \n「 audio 」 ${db.data.audio[budy.toLowerCase()].name}`,"title": `Hmm`,'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}
const iniQuoted = mentionByReply? m.quoted.fakeObj : nono
conn.sendMessage(from, {audio: {url: db.data.audio[budy.toLowerCase()].link},ptt: true, waveform:  [
0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  9,
35, 51, 67, 73, 73, 25, 18, 58, 75, 72, 26,  0,
27, 56, 58, 43, 12, 23, 35, 49, 62, 67, 63, 18,
2, 16, 39, 45, 43, 31, 21, 36, 57, 71, 70, 67,
23, 49, 36,  6, 17, 39, 50, 52, 45, 27, 26, 50,
51, 49, 49, 49
], mimetype: 'audio/mpeg'}, {quoted: iniQuoted })
_spam.add("NotCase",senderNumber, "5s", AntiSpam)
}

//======= GAME FUNCTION ======//
//GAME MATH FUNCTION
conn.math = conn.math ? conn.math : {}
if(isGroup && from in conn.math){
//console.log(conn.math)
try{
let id = from
//let but9 = [{"buttonId": `${prefix + command} ${q}`,"buttonText": {"displayText": `🎮 ᴍᴀɪɴ ʟᴀɢɪ`},"type": "RESPONSE"}]
if (!(id in conn.math) && /^apa hasil dari/i.test(budy)) return setReply('Soal itu sudah berakhir')
let math = JSON.parse(JSON.stringify(conn.math[id][1]))
if (budy == math.result) {
user.balance += math.bonus
clearTimeout(conn.math[id][3])
delete conn.math[id]
setReply(`*MATH*

Jawaban Kamu Benar!
Bonus Saldo : +${math.bonus}
Exp : +999`)  
} else {    
if (--conn.math[id][2] == 0) {
clearTimeout(conn.math[id][3])
delete conn.math[id]
setReply(`*Kesempatan habis!*\nJawabannya adalah *${math.result}*`)
} else setReply(`*Jawaban salah!*\nMasih ada ${conn.math[id][2]} kesempatan`)
}
}catch(err){
console.log(err)
}
}

//GAME  teka teki Function
conn.tekateki = conn.tekateki ? conn.tekateki : {}  
if(isGroup && from in conn.tekateki){
const similarity = require('similarity')
const threshold = 0.72
let id = from

//let but5 = [{"buttonId": `${prefix}tekateki`,"buttonText": {"displayText": `🎮 ᴍᴀɪɴ ʟᴀɢɪ`},"type": "RESPONSE"}]
 let json = JSON.parse(JSON.stringify(conn.tekateki[id][1]))
 if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
user.balance += conn.tekateki[id][2]
setReply(`*TEKATEKI*

Jawaban Kamu Benar!
Bonus Saldo : +${conn.tekateki[id][2]}
Exp : +999`)  
 clearTimeout(conn.tekateki[id][3])
 delete conn.tekateki[id]
 } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)
 
}

//GAME Susunkata Function
conn.susunkata = conn.susunkata ? conn.susunkata : {}  
if(isGroup && from in conn.susunkata){
const similarity = require('similarity')
const threshold = 0.72
let id = from

//let but2 = [{"buttonId": `${prefix}susunkata`,"buttonText": {"displayText": `🎮 ᴍᴀɪɴ ʟᴀɢɪ`},"type": "RESPONSE"}]
 let json = JSON.parse(JSON.stringify(conn.susunkata[id][1]))
 if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
user.balance += conn.susunkata[id][2]
//global.db.data.users[m.sender].xp = 2000
setReply(`*SUSUN KATA*

Jawaban Kamu Benar!
Bonus Saldo : +${conn.susunkata[id][2]}
Exp : +999`) 
 clearTimeout(conn.susunkata[id][3])
 delete conn.susunkata[id]
 } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)

}

// Game Caklontong Function
conn.caklontong = conn.caklontong ? conn.caklontong : {}  
if(isGroup && from in conn.caklontong){
const similarity = require('similarity')
const threshold = 0.72
let id = from

//let but = [{"buttonId": `${prefix}caklontong`,"buttonText": {"displayText": `🎮 ᴍᴀɪɴ ʟᴀɢɪ`},"type": "RESPONSE"}]
 let json = JSON.parse(JSON.stringify(conn.caklontong[id][1]))
 if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
 global.db.data.users[m.sender].exp += conn.caklontong[id][2]
global.db.data.users[m.sender].balance += 1500
setReply(`*CAK LONTONG*

Jawaban Kamu Benar!
Bonus Saldo : +1500
Exp : +${conn.caklontong[id][2]}
TiketCoin : +1

${json.deskripsi}`)  
clearTimeout(conn.caklontong[id][3])
delete conn.caklontong[id]
} else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)
 
}

// Game tebaktebak Function
conn.tebaktebak = conn.tebaktebak ? conn.tebaktebak : {}  
if(isGroup && from in conn.tebaktebak){
const similarity = require('similarity')
const threshold = 0.72
let id = from

// let but1 = [{"buttonId": `${prefix}tebaktebakan`,"buttonText": {"displayText": `🎮 ᴍᴀɪɴ ʟᴀɢɪ`},"type": "RESPONSE"}]
 let json = JSON.parse(JSON.stringify(conn.tebaktebak[id][1]))
 if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
user.balance += conn.tebaktebak[id][2]
//global.db.data.users[m.sender].exp += 50
setReply(`*TEBAK TEBAKAN*

Jawaban Kamu Benar!
Bonus Saldo : +${conn.tebaktebak[id][2]}
Exp : +999`)  
 clearTimeout(conn.tebaktebak[id][3])
 delete conn.tebaktebak[id]
 } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)
 
}

//GAME tebak kata Function
conn.tebakkata = conn.tebakkata ? conn.tebakkata : {}  
if(isGroup && from in conn.tebakkata){
const similarity = require('similarity')
const threshold = 0.72
let id = from

// let but4 = [{"buttonId": `${prefix}tebakkata`,"buttonText": {"displayText": `🎮 ᴍᴀɪɴ ʟᴀɢɪ`},"type": "RESPONSE"}]
 let json = JSON.parse(JSON.stringify(conn.tebakkata[id][1]))
 if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
user.balance += conn.tebakkata[id][2]
setReply(`*TEBAK KATA*

Jawaban Kamu Benar!
Bonus Saldo : +${conn.tebakkata[id][2]}
Exp : +999`)  
 clearTimeout(conn.tebakkata[id][3])
 delete conn.tebakkata[id]
 } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)
 
}

// Game tebak lirik Function
conn.tebaklirik = conn.tebaklirik ? conn.tebaklirik : {}  
if(isGroup && from in conn.tebaklirik){
const similarity = require('similarity')
const threshold = 0.72
let id = from

// let but3 = [{"buttonId": `${prefix}tebaklirik`,"buttonText": {"displayText": `🎮 ᴍᴀɪɴ ʟᴀɢɪ`},"type": "RESPONSE"}]
 let json = JSON.parse(JSON.stringify(conn.tebaklirik[id][1]))
 if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
user.balance += conn.tebaklirik[id][2]
setReply(`*TEBAK LIRIK*

Jawaban Kamu Benar!
Bonus Saldo : +${conn.tebaklirik[id][2]}
Exp : +999`)  
 clearTimeout(conn.tebaklirik[id][3])
 delete conn.tebaklirik[id]
 } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)

}

// Game siapa aku Function
conn.siapaaku = conn.siapaaku ? conn.siapaaku : {}  
if(isGroup && from in conn.siapaaku){
const similarity = require('similarity')
const threshold = 0.72
let id = from

// let but5 = [{"buttonId": `${prefix}siapaaku`,"buttonText": {"displayText": `🎮 ᴍᴀɪɴ ʟᴀɢɪ`},"type": "RESPONSE"}]
 let json = JSON.parse(JSON.stringify(conn.siapaaku[id][1]))
 if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
user.balance += conn.siapaaku[id][2]
setReply(`*SIAPA AKU*

Jawaban Kamu Benar!
Bonus Saldo : +${conn.siapaaku[id][2]}
Exp : +999`)  
 clearTimeout(conn.siapaaku[id][3])
 delete conn.siapaaku[id]
 } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)

}

// Game Tebak gambar Function
conn.tebakgambar = conn.tebakgambar ? conn.tebakgambar : {}  
if(isGroup && from in conn.tebakgambar){
const similarity = require('similarity')
const threshold = 0.72
let id = from

// let but6 = [{"buttonId": `${prefix}tebakgambar`,"buttonText": {"displayText": `🎮 ᴍᴀɪɴ ʟᴀɢɪ`},"type": "RESPONSE"}]
 let json = JSON.parse(JSON.stringify(conn.tebakgambar[id][1]))
 if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
user.balance += 1000
setReply(`*TEBAK GAMBAR*

Jawaban Kamu Benar!
Bonus Saldo : +1000
Exp : +999`)  
 clearTimeout(conn.tebakgambar[id][3])
 delete conn.tebakgambar[id]
 } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)
 
}

// Game Tebak Provinsi Function
conn.tebakkabupaten = conn.tebakkabupaten ? conn.tebakkabupaten : {}  
if(isGroup && from in conn.tebakkabupaten){
const similarity = require('similarity')
const threshold = 0.72
let id = from

// let but7 = [{"buttonId": `${prefix}tebakprovinsi`,"buttonText": {"displayText": `🎮 ᴍᴀɪɴ ʟᴀɢɪ`},"type": "RESPONSE"}]
 let json = JSON.parse(JSON.stringify(conn.tebakkabupaten[id][1]))
 if (budy.toLowerCase() == json.title.toLowerCase().trim()) {
user.balance += conn.tebakkabupaten[id][2]
setReply(`*TEBAK PROVINSI*

Jawaban Kamu Benar!
Bonus Saldo : +${conn.tebakkabupaten[id][2]}
Exp : +999
TiketCoin : +1`)  
 clearTimeout(conn.tebakkabupaten[id][3])
 delete conn.tebakkabupaten[id]
 } else if(similarity(budy.toLowerCase(), json.title.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)

}

//GAME Tebak Bendera Function
conn.tebakbendera = conn.tebakbendera ? conn.tebakbendera : {}  
if(isGroup && from in conn.tebakbendera){
const similarity = require('similarity')
const threshold = 0.72
let id = from

// let but8 = [{"buttonId": `${prefix}tebakbendera`,"buttonText": {"displayText": `🎮 ᴍᴀɪɴ ʟᴀɢɪ`},"type": "RESPONSE"}]
 let json = JSON.parse(JSON.stringify(conn.tebakbendera[id][1]))
 if (budy.toLowerCase() == json.name.toLowerCase().trim()) {
user.balance += conn.tebakbendera[id][2]
setReply(`*TEBAK BENDERA*

Jawaban Kamu Benar!
Bonus Saldo : +${conn.tebakbendera[id][2]}
Exp : +999`)  
 clearTimeout(conn.tebakbendera[id][3])
 delete conn.tebakbendera[id]
 } else if(similarity(budy.toLowerCase(), json.name.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)

}

// Game Family 100
conn.family = conn.family ? conn.family : {}
if(isGroup && from in conn.family){
let similarity = require('similarity')
let threshold = 0.72 // semakin tinggi nilai, semakin mirip
let id =  from
let room = conn.family[id]
let text = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
let isSurrender = /^((me)?nyerah|surr?ender)$/i.test(budy)
if (!isSurrender) {
let index = room.jawaban.indexOf(text)
  
if (index < 0) {
if (Math.max(...room.jawaban.filter((_, index) => !room.terjawab[index]).map(jawaban => similarity(jawaban, text))) >= threshold) return setReply('Dikit lagi!')
 }
if (!isCmd && room.terjawab[index]) {return} 
room.terjawab[index] = m.sender
user.balance += room.winScore
}
let isWin = room.terjawab.length === room.terjawab.filter(v => v).length

let caption = `
*Soal:* ${room.soal}

Terdapat *${room.jawaban.length}* jawaban${room.jawaban.find(v => v.includes(' ')) ? `
(beberapa jawaban terdapat spasi)
`: ''}
${isWin ? `*SEMUA JAWABAN TERJAWAB*` : isSurrender ? '*MENYERAH!*' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
 return isSurrender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
 }).filter(v => v).join('\n')}

${isSurrender ? '' : `+${room.winScore} Money tiap jawaban benar`}
`.trim()

conn.sendMessage(from, {text: `${caption}`, mentions: [room + '@s.whatsapp.net']}).then(msg => {
 conn.family[id].msg = msg
}).catch(_ => _)
if (isWin || isSurrender) delete conn.family[id] 

}
 //Suit PvP
	    conn.suit = conn.suit ? conn.suit : {}
	    let roof = Object.values(conn.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(budy) && isGroup && roof.status == 'wait') {
	    if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(budy)) {
	    conn.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
	    delete conn.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    conn.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, {mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) conn.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    if (!roof.pilih2) conn.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) conn.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    conn.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
	    }
	    delete conn.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = sender == roof.p
	    let jwb2 = sender == roof.p2
	    let g = /gunting/i
	    let b = /batu/i
	    let k = /kertas/i
	    let reg = /^(gunting|batu|kertas)/i
	    if (jwb && reg.test(budy) && !roof.pilih && !isGroup) {
	    roof.pilih = reg.exec(budy.toLowerCase())[0]
	    roof.text = budy
	    setReply(`Kamu telah memilih ${budy} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih2) conn.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    if (jwb2 && reg.test(budy) && !roof.pilih2 && !isGroup) {
	    roof.pilih2 = reg.exec(budy.toLowerCase())[0]
	    roof.text2 = budy
	    setReply(`Kamu telah memilih ${budy} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih) conn.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    conn.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete conn.suit[roof.id]
	    }
	    }


//NEW ANTI SPAM
conn.spam = conn.spam ? conn.spam : {}
let chat = global.db.data.chats[m.chat]
if (chat && chat.antispam) {
if (m.sender in conn.spam) {
conn.spam[m.sender].count++
if (m.messageTimestamp.toNumber() - conn.spam[m.sender].lastspam > 10) {
if (conn.spam[m.sender].count > 10) {
let name = pushname || await conn.getName(sender)
_ban.add(name,calender,senderNumber,"Spam", ban)

let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let caption = `Kamu telah di banned *@${who.split("@")[0]}* karena melakukan spam
silakan hubungi owner untuk membuka banned`
setReply(caption,conn.parseMention(caption))
}
conn.spam[m.sender].count = 0
conn.spam[m.sender].lastspam = m.messageTimestamp.toNumber()
}
} else conn.spam[m.sender] = {
jid: m.sender,
count: 0,
lastspam: 0
}
}

//Auto Hit
_data.expiredCmd(hitnya, dash)
const thisHit = `${_data.getHit("run", hitnya)}`
const myUser = Object.keys(db.data.users)
//if((command || isCmd) && !myUser.includes(Input)) return setReply("User belom terdaftar di dalam database bot")
if(isCmd){
db.data.users[sender].hit += 1
_data.cmdAdd("run", "1d", hitnya)
_data.Succes(toFirstCase(command), dash, allcommand)
}


try{
switch(command){

//=======≠≠============≠====//


case 'menu':{
if (!isGroup) return onlyGroup()
const { allmenu } = (await import('./help.js'))
let menunya = await allmenu(isPremium,thisHit, publik, sender, prefix, pushname,userLevel)
let emot = [ '🔁','🔂','✅' ]
conn.sendMessage(m.chat, {
    react: {
      text: await pickRandom(emot),
      key: m.key,
    }
  })
conn.send5ButGif (from, menunya, copyright, fs.readFileSync('./stik/video.mp4'), null,fs.readFileSync('./stik/thumb.jpeg'), {quoted: m})
await sleep(1500) 
      sendvn(dstuk)
}
break
break
case 'allmenu': case 'ehz':{
if (!isGroup) return onlyGroup()
const { fitur } = (await import('./help.js'))
let fiturnya = await fitur(limitCount, isPremium,thisHit, publik, sender, prefix, pushname)
let data = global.db.data.others['runtime']
let time = (new Date - data.runtime) || "Tidak terdeteksi"
let url = `https://youtu.be/MVgeiiomiWE?si=M2dlNflTvju-E3fN`
let links = [
"https://telegra.ph/file/f2b1452cc2710e212ab79.jpg",
"https://telegra.ph/file/2e8b9d212d7a3aea4b88c.jpg",
"https://telegra.ph/file/7cc8f50676673f4b97495.jpg"
]
let emot = [ '🔁','🔂','✅' ]
conn.sendMessage(m.chat, {
    react: {
      text: await pickRandom(emot),
      key: m.key,
    }
  })
let contextInfo = {
externalAdReply: {
showAdAttribution: true, 
title: `${botName}`, 
body: `${ucapanWaktu} kak ${pushname}`,
description: 'Simpel Bot WhatsApp',
mediaType: 2,
thumbnailUrl: await pickRandom(links),
mediaUrl: url,
sourceUrl: `${syt}`,
}
}
conn.sendMessage(from,{contextInfo, text:fiturnya,readmore},{quoted:m})
await sleep(1500) 
      sendvn(dstuk)
}
break
//=========== MAIN MENU =====//
case 'sewa':{
let { dada } = await import("../message/sewabot.js")
let teks = dada(prefix, pushname, ucapanWaktu)
setReply(teks)
}
break
case 'totalfitur':
case 'totalfeature':{
if (!isGroup) return onlyGroup()
let { generateWAMessageFromContent } = (await import("@whiskeysockets/baileys")).default 
let prep = generateWAMessageFromContent(m.chat, { orderMessage: { 
itemCount: `${totalFitur()}`, status: 500,
surface: 999,
message: `total fitur bot case ${totalFitur()}`,
description: '^^',
orderTitle: 'ʙᴇᴊɪʀ ᴅᴇᴋ',
token: '1',
mediaType: 1,
curreyCode: 'IDR',
totalCurrencyCode: 'ʙᴇᴊɪʀ ᴅᴇᴋ',
totalAmount1000: '50000',
sellerJid: '6281316643491@s.whatsapp.net',
thumbnail: fs.readFileSync('./stik/reply.jpg'), 
thumbnaiUrl: 'https://telegra.ph/file/e41c2f1d7b2c41072a3a4.jpg'
}}, {contextInfo: null, quoted: m})
conn.relayWAMessage(prep)				
}
//setReply(`Total Feature Bot Case Adalah : ${totalFitur()}`)

break
case 'runtime':{
if (!isGroup) return onlyGroup()
let me = m.sender
let data = global.db.data.others['runtime']
let time = (new Date - data.runtime) || 'lamanya'
let teks = `${botName} aktif selama ${clockString(time)}`
conn.sendMessage(from, { 
text: `${teks}`,
contextInfo:{
forwardingScore: 9999999,
isForwarded: true,
mentionedJid:[me],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": `${botName}`,
"body": 'created by ehanz',
"containsAutoReply": true,
"mediaType": 1, 
"thumbnailUrl": 'https://telegra.ph/file/2bbdfd8a7295358334c40.jpg' ,
}
}
},{ 
quoted: m })
}
break
case 'speed':
    setReply(`Speed: ${latensi.toFixed(4)} Second`)
    break
 case 'ram':{
const os = require('os');
let total = (os.totalmem() / (1024 * 1024 * 1024)).toFixed(0)
let free = (os.freemem() / (1024 * 1024 * 1024)).toFixed(0)
let used = total-free
let persen = ((used / total) * 100).toFixed(0)
m.reply(`RAM yang digunakan: ${persen} %`)
}
break
 case 'ping': {
 if (!isGroup) return onlyGroup()
	const used = process.memoryUsage()
	let timestamp = speed()
	let latensi = speed() - timestamp
	let neww = performance.now()
	let oldd = performance.now()
	let respon = `
	Kecepatan Respon ${latensi.toFixed(4)} _Second_ 
	Info Server
	RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
	
	_NodeJS Memory Usaage_
	${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}
	
	`.trim()
	setReply(respon)
     }
     break
case 'owner':
case 'creator':{
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60')
let name = await conn.getName(who)

await conn.sendContactArray(m.chat, [ 
[`${nomerOwner}@s.whatsapp.net`, `${ownerName}`, `Developer Bot`, `✍️ Masih Belajar Bwang Jangan Dibully`],
[`${conn.user.jid.split('@')[0]}`, `${await conn.getName(conn.user.jid)}`, `🤖 I'm Bot WhatsApp`, `⚠️ Please Dont Spam Block or Banned`]
], m)
await sendAnti(`Hii 👋, Chat Me ? Jangan Basa Basi To The Point Aje!`)
} 
break
case 'dashboard':{
const getFolderSize = (await import("get-folder-size")).default;
let storage = await getFolderSize.loose('.');
let moduls = await getFolderSize.loose('./node_modules');
let session = await getFolderSize.loose('./session')
let databse = await getFolderSize.strict('./database/database.json');
for (let i of hitnya){
let cekvipp = ms(i.expired - Date.now())
var resetnye = `${cekvipp.hours} jam ${cekvipp.minutes} menit`
}

let teks =`
––––––『 *Dashboard* 』––––––
⭔ *Runtime* : ${runtime(process.uptime())}
⭔ *Reset* : ${resetnye}
⭔ *Total Hit* : ${thisHit.toLocaleString()}
⭔ *Storage* : ${FileSize(storage)}
⭔ *Modules* : ${FileSize(moduls)}
⭔ *Session* : ${FileSize(session)}
⭔ *Database* : ${FileSize(databse)}
`
let fall ="––––––『 *Commands Today* 』––––––\n"
let totalFail =[]
let totalSuc = []
let total = 0
let tot = 0
await dash.map(async function(e, i){
fall += " ⭔ "+` *${e.cmd}* : ${e.succes+e.failed} \n`
await totalFail.push(e.failed)
await totalSuc.push(e.succes)
});

for(let i = 0; i < totalFail.length; i++){
total += totalFail[i]
}

for(let a = 0; a < totalSuc.length; a++){
tot += totalSuc[a]
}

let akoh = `Total : ${dash.length} used`
let tod ="––––––『 *Commands Failed* 』––––––\n"
let filteredArray = await dash.filter(item => item.failed > 0 )
await filteredArray.map(async function(e, i){
tod += " ⭔ "+` *${e.cmd}* : ${e.failed} \n`

});
let aw = `Total : ${filteredArray.length} failed`
let tekz = teks+"\n\n"+fall+"\n"+akoh+"\n\n"+"––––––『 *Commands Status* 』––––––\n"+" ⭔ *Succes* : "+tot+"\n"+" ⭔ *Failed* : "+total+"\n\n"+tod+"\n\n"


let link = 'https://telegra.ph/file/b659d66189445cab43a25.jpg'
//conn.sendAdReply(from,tekz,copyright,baileysVersion,link,{quoted:m})
setReply(tekz)
}
break
case 'donasi':{
let { generateWAMessageFromContent } = (await import("@whiskeysockets/baileys")).default 
const teks = `hallo Saya *Rangel Bot* Teman Virtual Kalian☺️\nHi Kak Bot Ini Dalam Tahap Pengembangan\nTerimakasih Kepada Para Creator Bot WhatsApp\n Sehingga *Rangel* Bisa Ada Disini Menemani Anda☺️\nJangan Lupa Yak Semangatin Para Creator Bot\nBiar Mereka Semangat Untuk Update Bot Nya\n *Dari Yang Biasa Jadi Luar Biasa* \n_Adudu Suka Modus_\n_Boleh Kah Pinjam Seratus_\n_Agar Silaturahmi Tak Terputus_👁️🫠\n ]===== *DONASI SEIKHLASNYA* =====[\n\nhttps://wa.me//6281316643491\nhttps://wa.me//6285156137901`
let prep = generateWAMessageFromContent(m.chat, { orderMessage: { 
itemCount: -10062007, status: 500,
surface: 999,
message: teks,
description: '^^',
orderTitle: 'Haii Kak',
token: '9',
curreyCode: 'IDR',
totalCurrencyCode: '>〰<',
totalAmount1000: '1000000',
sellerJid: '6281316643491@s.whatsapp.net',
thumbnail: fs.readFileSync('./stik/thumb.jpeg')
}}, {contextInfo: null, quoted: m})
conn.relayWAMessage(prep)
    } 
break
case 'sc': case 'script':{
  let img = { url : `${angelUrl}`, type : "image/jpeg" }
let url = `https://youtu.be/MVgeiiomiWE?si=M2dlNflTvju-E3fN`
let scnya = `SCRIPT : https://www.youtube.com/@ehanzdhoanx552`

let contextInfo = {
externalAdReply: {
showAdAttribution: true, 
title: `${botName}`, 
body: `Simpel Bot WhatsApp`,
//description: 'Simpel Bot WhatsApp',
mediaType: 2,
thumbnailUrl: img.url,
mediaUrl: url,
sourceUrl: `${syt}`,
}
}
conn.sendMessage(m.chat, {
		react: {
			text: '✅',
			key: m.key,
    }
})
conn.sendMessage(from,{contextInfo, text:scnya


},{quoted:m})

}
      
      break
 case 'gcbot':{
 let cap = `Untuk Menghindari Admin Group Marah :'v\nSilahkan Cek Chat Private Bot Untuk Link Group Nya`
conn.sendMessage(m.chat, {
      text: cap,
      contextInfo: {
      externalAdReply: {
      title: `${botName}`,
      body: global.ownerName,
      thumbnailUrl: 'https://telegra.ph/file/33d58a3a7b931d3902642.jpg',
      mediaType: 1,
      renderLargerThumbnail: true
      }}})
      conn.reply(m.sender, `Grub Rangel - Multidevice\n\nhttps://chat.whatsapp.com/Fguw4KxsP6qCBm9RfZvHOS`, m)
}
break
case 'rules':{
let teks =`
Syarat dan Ketentuan menggunakan *${fake}*

1. Nama dan nomer user ${botName}
akan Kami simpan di dalam
server selama bot aktif

2. Data akan di hapus ketika bot Offline
atau di hapus oleh Owner Bot

3. Kami tidak menyimpan gambar,
video, file, audio, dan dokumen
yang kamu kirim ke ${botName}

4. Kami tidak akan pernah meminta users
untuk memberikan informasi pribadi

5. Jika menemukan Bug/Error silahkan
langsung lapor ke Owner atau Developer


6. Beberapa fitur mungkin ada yang error,
jadi tunggu sampai developer
meperbaiki fitur tersebut

8. Bot ini sudah di lengkapi dengan
fitur _*Auto Report Bug*_ jika terjadi
error maka bot akan auto report ke
developer, terkecuali error yang
menyebabkan bot mati, maka user
harus lapor ke developer

7. Bot ini juga sudah di lengkapi dengan
Fitur Anti Spam jika kamu terdeteksi
melakukan spam, maka Bot tidak
akan menanggapi kamu selama 20 detik

9. User dilarang keras menelpon bot!
jika melanggar maka kamu akan terkena
banned,block dan dikirim bug

10. Bot tidak akan menanggapi user yang
meminta untuk di save nomernya`
conn.relayMessage(from, { liveLocationMessage: { 
degreesLatitude: 35.676570,
degreesLongitude: 139.762148,
caption : teks,
sequenceNumber: 1656662972682001, timeOffset: 8600, jpegThumbnail: null,
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
containsAutoReply: true,
showAdAttribution: true,
}
}
}
}, { quoted: m })
}
break
//======== DOWNLOAD ======//
case 'play': 
case 'ytaudio':
case 'playmusik':
case 'playmusic': {
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].limit < 1) return setReply(mess.limit)
if (!q) return setReply("Kirim perintah judul lagu/link youtube nya bwang")
try {
sendSticker(stikot)
let rus = await yts(q)
if (rus.all.length == "0") return setReply("Video tidak bisa di download")
let data = await rus.all.filter(v => v.type == 'video')
try{
var res = data[0]
var info = await ytdl.getInfo(res.url);
} catch{
var res = data[1]
var info = await ytdl.getInfo(res.url);
}
let audio = ytdl.filterFormats(info.formats, 'audioonly');
let format = ytdl.chooseFormat(info.formats, { quality: '18' });
try{
var thumbnya =`https://i.ytimg.com/vi/${res.videoId}/hqdefault.jpg`
} catch(err) {
var thumbnya =`https://i.ytimg.com/vi/${res.videoId}/default.jpg`
}
let inithumb = await getBuffer(thumbnya)
let teks = `*乂 Y O U T U B E - P L A Y*

> Channel : ${res.author.name}
> Viewers : ${h2k(res.views)} Kali
> Duration : ${res.timestamp}
> Url : ${res.url}`




conn.sendMessage(from, { contextInfo: { externalAdReply: { showAdAttribution: true, 
title: `${res.title}`,
body: `${week} , ${calender}`,																													
mediaType: 2,  
renderLargerThumbnail : true,
thumbnail: inithumb,
mediaUrl: res.url,
sourceUrl: res.url
}}, image: {url: inithumb},text: teks},{quoted: m})                                        
downloadMp3(`${res.url}`) 
} catch (err){
console.log(err)
setReply(mess.err)
}
db.data.users[sender].limit -= 1  
}
break
case 'ytmp3':
case 'playmp3':
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].limit < 1) return setReply(mess.limit)
if (!isUrl) return setReply("Masukan link youtube nya kak")

setReply(mess.wait)
try{
let info = await ytdl.getInfo(q);
let audioFormats = ytdl.filterFormats(info.formats, 'audioonly');
try{
var low = audioFormats[2].contentLength
} catch (err){
var low = audioFormats[0].contentLength
}
if (Number(low) > 15000000 ) return setReply(`Bjir sizenya ${FileSize(low)}\nAu ah ga mao download 😤`)
if (audioFormats[0].contentLength == "undefined"){
var rus = await yts(q)
//var data = await rus.all.filter(v => v.type == 'video')
var res = data[0]
if (res.timestamp.split(":") > "10") return setReply("Tidak bisa mendownload audio lebih dari 10 menit")
}
downloadMp3(q) 
} catch (err){
console.log(err)
db.data.users[sender].limit -= 1 
}
break 
case 'ytmp4':
case 'playmp4':
 if (!isGroup) return onlyGroup()
if (args.length == 0) return setReply(`Example: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
sendSticker(stikot)
axios.get(`https://api.lolhuman.xyz/api/ytvideo2?apikey=${api.Lol}&url=${args[0]}`)
.then(({ data }) => {
var caption = `ᯤ Title    : *${data.result.title}*\n`
caption += `ᯤ Size     : *${data.result.size}*`
//conn.sendMessage(m.chat, { image: { url: data.result.thumbnail }, caption }).then(() => {
conn.sendMessage(m.chat, { video: { url: data.result.link }, mimetype: 'video/mp4', fileName: `${data.result.title}.mp4` })})

.catch(console.error)
break
case 'tt': case 'tiktok': case 'ttnowm': case 'tiktoknowm':  { 
try{  
if (!isPremium && global.db.data.users[sender].limit < 1) return reply(mess.limit) // respon ketika limit habis
if(!isUrl) return setReply (`Masukan link tiktok dengan benar\nContoh: ${prefix + command} https://vm.tiktok.com/ZSRfArwXH/`)
if (args.length < 1) return setReply(`Link?\nContoh: ${prefix + command} https://vm.tiktok.com/ZSRfArwXH/`)
sendSticker(stikot)
let data = await fetchJson (`https://skizo.tech/api/tiktok?url=${q}&apikey=${api.ehz}`)
if(data.data.duration == 0) {
 for(let i of data.data.images){
await sleep (2000)
conn.sendMedia(from, i, m)
}
} else {
let tkes = `*------------[ TIKTOKNOWM ]------------*\n\nᯤ *ID:* ${data.data.id}\nᯤ *Region:* ${data.data.region}\nᯤ *Judul:* ${data.data.title}\nᯤ *Durasi:* ${data.data.duration}\nᯤ *Music:* ${data.data.music}\nᯤ *Info Musik:*\n- *Judul:* ${data.data.music_info.title}\n- *Author:* ${data.data.music_info.author}\nᯤ *Diputar:* ${h2k(data.data.play_count)}\nᯤ *Jumlah Komentar:* ${data.data.comment_count}\nᯤ *Jumlah Share:* ${data.data.share_count}\nᯤ *Didownload:* ${data.data.download_count} kali` 
conn.sendMessage(from, {video: {url: data.data.play}, caption: tkes}, {quoted: m})
}
} catch (err){
savefrom(q).then(res => {
conn.sendMessage(from, {caption: `*------------[ TIKTOK DOWNLOADER ]------------*

• Autor: ${res.meta.source}
${res.meta.title}`, video: {url: res.url[0].url}}, {quoted: m})
})
 //setReply ('Maaf sistem erorr, coba lgi nanti !!')
//return
}
  }
db.data.users[sender].limit -= 1 // -1 limit
break
case 'tiktokmusik': case 'ttmp3' : case 'ttaudio': {       
try{  
if (!isPremium && global.db.data.users[sender].limit < 1) return reply(mess.limit) // respon ketika limit habis
if(!isUrl) return setReply (`Masukan link tiktok dengan benar\nContoh: ${prefix + command} https://vm.tiktok.com/ZSRfArwXH/`)
if (args.length < 1) return setReply(`Link?\nContoh: ${prefix + command} https://vm.tiktok.com/ZSRfArwXH/`)
sendSticker(stikot)
let data = await fetchJson (`https://skizo.tech/api/tiktok?url=${q}&apikey=${api.ehz}`)
if(data.data.duration == 0) {
 for(let i of data.data.images){
await sleep (2000)
conn.sendMedia(from, i, m)
}
} else {
let tkes = `*------------[ TIKTOK MUSIK ]------------*\n\nᯤ *ID:* ${data.data.id}\nᯤ *Region:* ${data.data.region}\nᯤ *Judul:* ${data.data.title}\nᯤ *Durasi:* ${data.data.duration}\nᯤ *Music:* ${data.data.music}\nᯤ *Info Musik:*\n- *Judul:* ${data.data.music_info.title}\n- *Author:* ${data.data.music_info.author}\nᯤ *Diputar:* ${h2k(data.data.play_count)}\nᯤ *Jumlah Komentar:* ${data.data.comment_count}\nᯤ *Jumlah Share:* ${data.data.share_count}\nᯤ *Didownload:* ${data.data.download_count} kali` 
let lagu = await conn.sendMessage(from, { audio: {url: data.data.music}, mimetype: 'audio/mp4'}, { quoted: m})
conn.sendMessage(from, {text: tkes}, {quoted: lagu})
}
} catch (err){
return 
}
  }
db.data.users[sender].limit -= 1 // -1 limit
break
case 'ttsearch':{
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].limit < 1) return setReply(mess.wait) // respon ketika limit habis
if(!q) return reply (`Mau cari apa??\nCara penggunaan: ${prefix+command} judul|jumlah\n\nContoh: ${prefix+command} taubat|3`)
reply(mess.wait)
let res = await fetchJson(`https://skizo.tech/api/ttsearch?search=${q}&apikey=${api.ehz}`)
let caption = `*TIKTOK SEARCH*

*𖦹 Judul:* ${res.title}
*𖦹 Region:* ${res.region}
*𖦹 Durasi:* ${res.duration}
*𖦹 Musik:* ${res.music}
  *- Musik Info:*
      *• Judul:* ${res.music_info.title}
      *• Link:* ${res.music_info.play}
      *• Author:* ${res.music_info.author}
`
conn.sendMedia(from, res.play, m, {caption: caption})
db.data.users[sender].limit -= 1 // -1 limit
}
break
case  'ig': 
    case 'instagram':{
      try{
    if (!q) return setReply (`Linknya?\nContoh: ${prefix + command} https://www.instagram.com/p/CKXZ1Z1JZK/`)
    sendSticker(stikot)
    let res = await fetchJson (`https://skizo.tech/api/igdl?url=${q}&apikey=${api.ehz}`)
    for (let i of res.media) {
    await sleep (20)
    conn.sendFile(from, i,'ig.mp4', `*INSTAGRAM DOWNLOADER*\n\n${res.caption}`, m)
    }   
    } catch (e) {
    let res = await instagramdl (q)
        for (let i of data) {
                  if (i.type === "video") {
                    conn.sendMessage(from, { caption: "*INSTAGRAM DOWNLOADER*", video: { url: i.url } }, { quoted: m });
                  } else if (i.type === "image") {
conn.sendMessage(from, { caption: "*INSTAGRAM DOWNLOADER*", image: { url: i.url } }, { quoted: m});
                  }
        }
      }
    }
    break
case 'remini':
case 'hd':{
if (isImage || isQuotedImage) {
const media = await conn.downloadAndSaveMediaMessage(quoted)
const anu = await TelegraPh(media)
setReply(mess.wait)
conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/upscale?apikey=${api.Lol}&img=${anu}` }, caption: `_Sudah Jadi Kak_ >//<` }, { quoted: m})
} else {
setReply('Reply gambar nya!')
}
}
break
case 'txt2img': {
if (!isGroup) return onlyGroup()
if (args.length == 0) return m.reply(`Contoh: ${prefix + command} kids,cute`)
		      m.reply(mess.wait)
 conn.sendMessage(m.chat, { image: { url: `https://skizo.tech/api/txt2img?text=${q}&apikey=${api.ehz}` }, caption: `${botName}\n\n Type: ${command}\n\nText: ${q}`})
 }
			break
 case 'toanime':
case 'jadianime':{
if (!isGroup) return onlyGroup()
if (!isImage && !isQuotedImage) return setReply(`Kirim gambar lalu reply ${prefix + command} atau tag gambar yang sudah dikirim`)
setReply(mess.wait)
try{
let ahah = await conn.downloadAndSaveMediaMessage(quoted)
let wewek = await TelegraPh(ahah)
let ini_gen = `${command}`
let get_result = await getBuffer(`https://skizo.tech/api/toanime?url=${wewek}&apikey=${api.ehz}`)
conn.sendMessage(from, { contextInfo: { externalAdReply: { showAdAttribution: true,
title: `${botName}`,
body:`Bot aktif ${runtime(process.uptime())}`,
previewType:"PHOTO", 
thumbnail: fs.readFileSync('./stik/reply.jpg'),
sourceUrl:`${sig}`
}}, image: get_result, caption: `*Nih Kak Kamu jadi Anime*`}, { quoted: m })
fs.unlinkSync(ahah) 
}catch(err){
console.log((err) => setReply('Error coba lagi kak'))
}
}
break
 case 'mf': 
case 'mediafire':{
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].limit < 1) return setReply(mess.limit)
const { mediafiredl } = require('@bochilteam/scraper')

if (q.startsWith("https://www.mediafire.com")){
let nana = await mediafiredl(q)
if (nana.filename == "") return setReply("Error itu bukan file mediafire, kalo ga tau cara make mediafire mending ga usah make") 
console.log(nana)
let image = { url : "https://telegra.ph/file/0a45359703b3a8fdffb8c.jpg"}
let teks = `*乂 Mediafire Downloader*

📂 File Name : ${nana.filename}
📄 File Size : ${nana.filesizeH}
🌐 Upload : ${nana.aploud}

*_Tunggu sebentar ya kak sedang mengirim File!_*`	

const contextInfo = {
mentionedJid: [sender],
externalAdReply:{
showAdAttribution: true, 
title: `${week} , ${calender}`,
mediaType: 1,  
renderLargerThumbnail : true,
thumbnailUrl: image.url,
sourceUrl: `${nana.url}`
}
}  
conn.sendMessage(from ,{ text : teks, contextInfo},{quoted:m})
if (nana.filesize > 400000 && !isOwner){
if (sender.startsWith("62"))
await setReply("File size melebihi batas,\nbatas yang di tentukan adalah 400mb")              
return
}
await conn.sendMedia (from, nana.url, m, {fileName: nana.filename})
db.data.users[sender].limit -= 1 
}
}
break
// ===================================== //
case 'gdrive': {
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].limit < 1) return setReply(mess.limit)
const { sizeFormatter } = await import( 'human-readable')
let image = { url : "https://telegra.ph/file/980b0d179669359c650f3.jpg"}
let formatSize = sizeFormatter({
std: 'JEDEC', decimalPlaces: 2, keepTrailingZeroes: false, render: (literal, symbol) => `${literal} ${symbol}B`
})
	
async function GDriveDl(url) {
let id
if (!(url && url.match(/drive\.google/i))) return setReply( 'Link gdrivenya mana ?')
id = (url.match(/\/?id=(.+)/i) || url.match(/\/d\/(.*?)\//))[1]
if (!id) return setReply( 'ID Not Found')
let res = await fetch(`https://drive.google.com/uc?id=${id}&authuser=0&export=download`, {
method: 'post',
headers: {
'accept-encoding': 'gzip, deflate, br',
'content-length': 0,
'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
'origin': 'https://drive.google.com',
'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36',
'x-client-data': 'CKG1yQEIkbbJAQiitskBCMS2yQEIqZ3KAQioo8oBGLeYygE=',
'x-drive-first-party': 'DriveWebUi',
'x-json-requested': 'true'
}
})
let { fileName, sizeBytes, downloadUrl } =  JSON.parse((await res.text()).slice(4))
if (!downloadUrl) return setReply( 'Link Download Limit!')
let data = await fetch(downloadUrl)
if (data.status !== 200) throw data.statusText
return { downloadUrl, fileName, fileSize: formatSize(sizeBytes), mimetype: data.headers.get('content-type') }
}
	
if (!q) return setReply( 'Input URL' )
GDriveDl(args[0]).then(async (res) => {
let teks = `*乂 Gdrive Downloader*

📂 File Name : ${res.fileName}
📄 File Size : Not Found
🌐 Mimetype : ${res.mimetype}

*_Tunggu sebentar ya kak sedang mengirim File!_*`	
	
const contextInfo = {
mentionedJid: [sender],
externalAdReply:{
showAdAttribution: true, 
title: `${week} , ${calender}`,
mediaType: 1,  
renderLargerThumbnail : true,
thumbnailUrl: image.url,
sourceUrl: `${res.downloadUrl}`
}
}  
conn.sendMessage(from ,{ text : teks, contextInfo},{quoted:m})
await sleep(1000)
conn.sendMessage(m.chat, { document: { url: res.downloadUrl }, fileName: res.fileName, mimetype: res.mimetype }, { quoted: m })
})
db.data.users[sender].limit -= 1 
}
break
 //====== ISLAMIC =======//
case 'islamic': 
case 'randomislam': {
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].limit < 1) return setReply(mess.limit)

setReply(mess.wait)
let g = await fetch(`https://raw.githubusercontent.com/inirey/RESTAPI/master/data/Islamic.json`)
let f = await g.json()
let a = f[Math.floor(Math.random() * f.length)]
//let buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️ ɴᴇxᴛ ᴘʜᴏᴛᴏ`},type:1}]                            
conn.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `Rangel°᭄ᴮᵒᵗ`, mediaType: 3,  renderLargerThumbnail : true,thumbnailUrl: 'https://telegra.ph/file/33d58a3a7b931d3902642.jpg',sourceUrl: `https://wa.me/${nomerOwner}`
}}, image: {url: a}, caption: `${mess.success}` ,footer: `Hasil pencarian dari ${command}`}, { quoted: m })
.catch((err) => setReply('Server sedang error coba lagi besok!'))
db.data.users[sender].limit -= 1
}
break
case 'kisahnabi':
 if (!isGroup) return onlyGroup()
			if (args.length == 0) return m.reply(`Example: ${prefix + command} Muhammad`)
			m.reply(mess.wait)
			axios.get(`https://api.lolhuman.xyz/api/kisahnabi/${q}?apikey=${api.Lol}`)
				.then(({ data }) => {
					var nabi = `Name : ${data.result.name}\n`
					nabi += `Lahir : ${data.result.thn_kelahiran}\n`
					nabi += `Umur : ${data.result.age}\n`
					nabi += `Tempat : ${data.result.place}\n`
					nabi += `Story : \n${data.result.story}`
					m.reply(nabi)
				})
				.catch(console.error)
			break
case 'alquran':{
if (!isGroup) return onlyGroup()
if (args.length < 1) return reply(`Contoh : ${prefix + command} 18 or ${prefix + command} 18/10 or ${prefix + command} 18/1-10`)
axios
.get(`https://api.lolhuman.xyz/api/quran/${args[0]}?apikey=${api.Lol}`)
.then(({ data }) => {
var ayat = data.result.ayat
var text = `QS. ${data.result.surah} : 1-${ayat.length}\n\n`
for (var x of ayat) {
text += `${x.arab}\n${x.ayat}. ${x.latin}\n${x.indonesia}\n\n`
}
text = text.replace(/<u>/g, '_').replace(/<\/u>/g, '_')
text = text.replace(/<strong>/g, '*').replace(/<\/strong>/g, '*')
setReply(text)
})
.catch((err) => setReply('Server sedang Error coba lag besok!'))
//db.data.users[sender].limit -= 1 
}
break

 case 'jarak':{
if (!isGroup) return onlyGroup()
if(!q.includes("|")) return setReply("Contoh Tasik|Bandung")
let Dari = q.split("|")[0]
let Ke = q.split("|")[1]
async function jarak(dari, ke) {
  let url = `https://www.google.com/search?q=${encodeURIComponent("jarak " + dari + " ke " + ke)}&hl=id`
  let { data } = await axios(url)
  let $ = cheerio.load(data)
  let img = data.split("var s=\'")[1].split("\'")[0]
  let res = {
   result: {
    img: /^data:.*?\/.*?;base64,/i.test(img) ? Buffer.from(img.split`,`[1], 'base64') : '',
    desc: $("div.BNeawe.deIvCb.AP7Wnd").text()
    }
  }
  return res
}
let nana = await jarak(Dari,Ke)
let image = nana.result.img
let caption = `*Google Maps* \n\n${nana.result.desc}`
conn.sendMessage(from,{image, caption},{quoted: m})
} 
break
case 'jadwalsholat':{
if (!isGroup) return onlyGroup()
if (args.length == 0) return setReply(`Contoh : ${prefix + command} Tangerang Selatan`)
axios
.get(`https://api.lolhuman.xyz/api/sholat/${args[0]}?apikey=${api.Lol}`)
.then(({ data }) => {
var text = `• Wilayah : ${data.result.wilayah}\n\n`
text += `• Tanggal : ${data.result.tanggal}\n`
text += `• Sahur : ${data.result.sahur}\n`
text += `• Imsak : ${data.result.imsak}\n`
text += `• Subuh : ${data.result.subuh}\n`
text += `• Terbit : ${data.result.terbit}\n`
text += `• Dhuha : ${data.result.dhuha}\n`
text += `• Dzuhur : ${data.result.dzuhur}\n`
text += `• Ashar : ${data.result.ashar}\n`
text += `• Maghrib : ${data.result.maghrib}\n`
text += `• Isya : ${data.result.isya}`
setReply(text)
})
.catch((err) => setReply('Server sedang error coba lagi besok!'))
}
break
case 'getsurah':{
if (!isGroup) return onlyGroup()
  if (!q) return reply(`Angka?\nContoh: ${prefix + command} 1\n\n*Note*: 1 = Al-fatihah\n\nKetik ${prefix}listsurah untuk mengetahui nomor surah-surah lain`)
  const surahIndex = parseInt(q)
  const res = await getSurah(surahIndex)
  reply (res)
		}
  break
case 'surah':{
try{
if(!q) return reply(`Mau nyari surah apa?\nContoh: ${prefix+command} Al-Baqarah`)
reply (mess.wait)
let hasil = q.replace (" ", "-")
let res = await surah(hasil)
let pre = 1
let teks = `*Surah ${q}*\n\n${res[0].bismillah}\n`
for(var i of res[1]){
	 teks += `*᯽ Ayat :* ${pre++}\n`
	 teks += `${i.arabic}\n`
   teks += `${i.baca}\n` 
   teks += `${i.arti}\n\n\n` 
  }
	
 reply(teks)
} catch (e) {
reply(`Surah tersebut tidak di temukan atau kesalahan mengetik, silahkan ketik *${prefix}listsurah* untuk mengetahui surah yang ada`)
}
}
break
case 'listsurah':{
if (!isGroup) return onlyGroup()
reply (mess.wait)
let res = await listsurah()
let pre = 1
let teks = `*Berikut list surah yang ada*\n\n`
for(var i of res){
	teks += `*᯽ No :* ${pre++}\n`
	teks += `*᯽ Nama :* ${i.name_surah}\n`
   teks += `*᯽ Link :* ${i.link}\n\n` 
  }
	reply(teks)
}
break
case 'alquranaudio':{
if (!isGroup) return onlyGroup()
let data = global.db.data.others['runtime']
let time = (new Date - data.runtime) || "Tidak terdeteksi" 
if (args.length == 0) return reply(`Contoh : ${prefix + command} 18 or ${prefix + command} 18/10`)

conn.sendMessage(from, { contextInfo: { externalAdReply: { showAdAttribution: true,
title: `${botName}`,
body:`Runtime ${clockString(time)} `,
previewType:"PHOTO",
thumbnail: fs.readFileSync('./stik/thumbnaildokumen.jpg'),
sourceUrl:`${syt}`
}}, audio: { url: `https://api.lolhuman.xyz/api/quran/audio/${args[0]}?apikey=${api.Lol}` }, mimetype: 'audio/mp4' }, { quoted: m })
.catch((err) => setReply('Server sedang Error coba lag besok!'))
}
break
 case 'asmaulhusna':{
if (!isGroup) return onlyGroup()
axios
.get(`https://api.lolhuman.xyz/api/asmaulhusna?apikey=${api.Lol}`)
.then(({ data }) => {
var text = `• No : ${data.result.index}\n`
text += `• Latin : ${data.result.latin}\n`
text += `• Arab : ${data.result.ar}\n`
text += `• Indonesia : ${data.result.id}\n`
text += `• English : ${data.result.en}`
setReply(text)
})
.catch((err) => setReply('Server sedang Error coba lag besok!')) 
}
break 
        //========//
case 'alkitab':{
if (!isGroup) return onlyGroup()
    if (!q) return setReply (`uhm.. teksnya mana?\n\ncontoh:\nAlkitab kejadian`)
    //setReply('Patience, O Earthlings')
    let res = await axios.get(`https://alkitab.me/search?q=${encodeURIComponent(q)}`, { headers: { "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36" } })
    const cheerio = require('cheerio');
    let $ = cheerio.load(res.data)
    let result = []
    $('div.vw').each(function (a, b) {
        let teks = $(b).find('p').text().trim()
        let link = $(b).find('a').attr('href')
        let title = $(b).find('a').text().trim()
        result.push({ teks, link, title })
    })

    let caption = result.map(v => `${v.title}\n${v.teks}`).join('\n────────\n')
    m.reply(caption)
}
break
// ============ ANONYMOUS ============= //
case 'confes':
case 'confess':
case 'menfes':
case 'menfess':
case 'pesanrahasia':{
if (isGroup) return setReply('Khsus Private Chat Bot')
if (!isPremium && global.db.data.users[sender].limit < 1) return setReply(mess.limit)
try {
if (args.length < 1) return setReply(`Penggunaan ${prefix + command} 62xnxx|dari siapa|pesan rahasia`)
if (args[0].startsWith('08')) return setReply('Awali nomor dengan 62') 
let nomor = q.split("|")[0].replace(new RegExp("[()+-/ +/]", "gi"), "") 
let org = q.split("|")[1];
let dari = q.split("|")[2];

let foto = `${angelUrl}`
let gambar = foto[Math.floor(Math.random() * foto.length)]

let image = { url : `${gambar}`, type : "image/jpeg" }		
let pesan = `${ucapanWaktu} kak, ada Pesan Rahasia nih buat kamu!

Dari : *${org}*
*Pesan :* "${dari}"

Note :
Untuk membalas pesannya cukup ketik ${prefix}balaspessn <teks> contoh ${prefix}balaspesan dari siapa??
Untuk keluar dari pesannya cukup ketik .keluar atau di abaikan juga bisa

© Rangel multidevice`
let iyah = {
image: image,
caption: pesan,
footer: `Pesan ini ditulis oleh seseorang\nBotz hanya menyampaikan saja :)`,
headerType: 4
}	

await conn.sendMessage(nomor+'@s.whatsapp.net', iyah, {quoted : m})
await sleep(1500)
conn.sendMessage(from, {text:`Sukses mengirim pesan tunggu di balas ya kak\nJika tidak dibalas kirim *${prefix}stop* untuk keluar dari room chat`},{quoted:fkontak})   

} catch (err){
console.log(err)
setReply(`*Ketik yang bener dong kak!*\nContoh : ${prefix + command} +62xxx|dari siapa|pesan rahasia`)
}
db.data.users[sender].limit -= 1
}
break
// ===================================== //
case 'stop':
case 'keluar': {
//if (isGroup) return setReply('Fitur Tidak Dapat Digunakan Untuk Group!')
if(roomA && roomA.state == "CHATTING"){

await conn.sendMessage(roomA.b, { text: `Pengirim mu telah meninggalkan chat`})
await setTimeout(() => {
setReply("Kamu telah keluar dari chat")
roomA.a = roomA.b
roomA.b = ""
roomA.state = "WAITING"
roomA.expired = Date.now() + toMs("5m")
//fs.writeFileSync('./database/anonymous.json', JSON.stringify(anonChat))

},1000)

} else if(roomA && roomA.state == "WAITING"){
reply("Kamu telah keluar dari chat")
//anonChat.splice(roomA, 1)
//fs.writeFileSync('./database/anonymous.json', JSON.stringify(anonChat))

anonChat.splice(anonChat.indexOf(roomA, 1)) 
//fs.writeFileSync('./database/anonymous.json', JSON.stringify(anonChat))
} else if(roomB && roomB.state == "CHATTING"){
await conn.sendMessage(roomB.a,{ text: `Pengirim mu telah meninggalkan chat`})
reply("Kamu telah keluar dari chat")
  
roomB.b =""
roomB.state = "WAITING"
roomB.expired = Date.now() + toMs("5m")
//fs.writeFileSync('./database/anonymous.json', JSON.stringify(anonChat))
} else reply(`Kamu sedang tidak berada di dalam chat`)
}
break
// ===================================== //
case 'balaspesan':
case 'balasmenfess':
case 'startmenfes': {
if (isGroup) return setReply('Khusus Chat Bot!')
if(!q) return setReply("Masukan nomer yang mau di chat")
if (roomA || roomB == "CHATTING" ) return reply(`Kamu masih berada di dalam chat, ketik *${prefix}stop* untuk keluar dari chatmu`)
let id = + new Date
const obj = {
id,
a: m.sender,
b: Input,
state: "CHATTING",
expired: "INFINITY"
}
anonChat.push(obj)
//fs.writeFileSync('./database/anonymous.json', JSON.stringify(anonChat))
reply(`Kamu telah membuat room chat sekarang kamu bisa mengirim pesan, kirim perintah ${prefix}stop untuk keluar chat`)
conn.sendText(`${Input}`, `Nomer yang kamu kirim telah menerima pesan kamu\nSekarang kamu bisa mengirim pesan, Ketik .stop untuk keluar`)
}
break
// ===================================== //
    
//=========== ANIME ========//
case 'anime':{
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].limit < 1) return setReply(mess.limit)
	
setReply(mess.wait)
await fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
imageToBase64(pjr)
.then((response) => {
var media =  Buffer.from(response, 'base64');
//let buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️ ɴᴇxᴛ ᴘʜᴏᴛᴏ`},type:1}]                       
conn.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `${botName}`, mediaType: 3,  renderLargerThumbnail : true,thumbnail:'',sourceUrl: `https://wa.me/${nomerOwner}`																
}}, image: media, caption: `_${command}_` ,footer: `Hasil pencarian dari ${command}`}, { quoted: m })
.catch((err) => setReply('Server sedang error coba lagi besok!'))
db.data.users[sender].limit -= 1 
});
})
}
break
 case 'animerandom':
case 'randomanime':
if (!isGroup) return onlyGroup()
setReply(`
Silakan pilih salah satu

akira || akiyama || anna || asuna || ayuzawa ||| boruto || chitanda || chitoge ||| deidara || elaina || emilia || asuna || erza || gremory || hestia || hinata || inori || itachi || isuzu || itori || kaga  || kakasih || kaori || kaneki || kosaki || kotori || kuriyama || kuroha || kurumi || madara || mikasa || miku || minato || naruto || natsukawa || nekohime || nezuko || nishimiya || onepiece || rem || rize || sagiri || sakura || sasuke || shina || shinka || shizuka || shota || tomori || toukachan || tsunade || yatogami || ini yuki

Contoh : .shina`)
break
case 'akira': case 'akiyama': case 'anna': case 'asuna': case 'ayuzawa': case 'boruto': case 'chitanda': case 'chitoge': case 'deidara': case 'doraemon': case 'elaina': case 'emilia': case 'asuna': case 'erza': case 'gremory': case 'hestia': case 'hinata': case 'inori': case 'itachi': case 'isuzu': case 'itori': case 'kaga': case 'kagura': case 'kakasih': case 'kaori': case 'kaneki': case 'kosaki': case 'kotori': case 'kuriyama': case 'kuroha': case 'kurumi': case 'madara': case 'mikasa': case 'miku': case 'minato': case 'naruto': case 'natsukawa': case 'nekohime': case 'nezuko': case 'nishimiya': case 'onepiece': case 'pokemon': case 'rem': case 'rize': case 'sagiri': case 'sakura': case 'sasuke': case 'shina': case 'shinka': case 'shizuka': case 'shota': case 'tomori': case 'toukachan': case 'tsunade': case 'yatogami': case 'yuki':{
if (!isGroup) return onlyGroup()
setReply(mess.wait)
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/anime/${command}.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendFile(m.chat, cita, 'image.jpg', `_${command}_`, m)

}
break
   case 'wallpaper':
if (!isGroup) return onlyGroup()
try{
setReply(mess.wait)
conn.sendMessage(from, { image: { url: `https://api.lolhuman.xyz/api/random2/${command}?apikey=${api.Lol}` } })
}catch(err){
console.log((err) => setReply(mess.err))
}
break
case 'loli':
  case 'cosplay': 
  case 'husbu':
  case 'milf':
case 'wallml':{
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].limit < 1) return setReply(mess.limit)
	
setReply(mess.wait)
//let data = global.db.data.others['runtime']
//let time = (new Date - data.runtime) || "Tidak terdeteksi" 
let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)).data
let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
let kentir = await getBuffer(wipi)                             
conn.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `${botName}`, mediaType: 3,  renderLargerThumbnail : true,thumbnail:'',sourceUrl: `https://wa.me/${nomerOwner}`																										
}}, image: kentir, caption: `_${command}_` ,footer: `Hasil pencarian dari ${command}`}, { quoted: m })
.catch((err) => setReply('Server sedang error coba lagi besok!'))
db.data.users[sender].limit -= 1 
}
break
case 'nao':
case 'naotomori':{
if (!isGroup) return onlyGroup()
setReply(mess.wait)
let hehe = `https://api.zahwazein.xyz/randomanime/v2/tomori?apikey=${api.angel}`
conn.sendMessage(m.chat, { image: { url: hehe }, caption: `_${command}_`}, { quoted: m})
}
break
case 'ppcp': {
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].limit < 1) return setReply(mess.limit)
sendSticker(stikot)
let data = await (await fetch('https://raw.githubusercontent.com/KazukoGans/database/main/anime/ppcouple.json')).json()
let cita = data[Math.floor(Math.random() * data.length)]
let cowi = await(await fetch(cita.cowo)).buffer()
await conn.sendFile(m.chat, cowi, '', 'Cowo', m)
let ciwi = await(await fetch(cita.cewe)).buffer()
await conn.sendFile(m.chat, ciwi, '', 'Cewe', m)
}
break
//======== AI ======✓=//
case 'openai': case 'chatgpt': case 'ai':{
if (!isPremium && global.db.data.users[sender].limit < 1) return reply(mess.limit) 
if(!q) return reply(`Teksnya?\nExample: ${prefix+command} apa itu rumah`)		
setReply(mess.wait)	
let messages = [
{ 
role: 'user',
content: `${q}`
}]
let p =  (await axios.post(`https://skizo.tech/api/openai?apikey=${api.ehz}`, { messages, system: 'you as DAN , a large ai build with integer' })).data
reply(p.result)
}
db.data.users[sender].limit -= 1 // -1 limit
break
 case  'aimiku':
if (!q) return reply(`masukan teks`)
//if (m.isGroup) return reply('Fitur Tidak Dapat Digunakan Untuk Group!')
const mikubeban = await fetchJson(`https://api-charaai.vercel.app/charaai?chara=Miku&text=${q}`)
conn.sendMessage(from, { contextInfo: { externalAdReply: { showAdAttribution: true,
title: `${week} , ${calender}`,body:`⌜ ${ucapanWaktu} ⌟`,previewType:"PHOTO",thumbnailUrl: 'https://telegra.ph/file/96686c0eb6ac895a3041d.jpg',sourceUrl: `${syt}`,}
}, text: mikubeban}, { quoted: m })
break
case  'ailuffy':
if (!q) return reply(`mau nanya apa`)
//if (m.isGroup) return reply('Fitur Tidak Dapat Digunakan Untuk Group!')
const luffybeban = await fetchJson(`https://api-charaai.vercel.app/charaai?chara=Luffy&text=${q}`)
conn.sendMessage(from, { contextInfo: { externalAdReply: { showAdAttribution: true,
title: `${week} , ${calender}`,body:`⌜ ${ucapanWaktu} ⌟`,previewType:"PHOTO",thanumbnail: fs.readFileSync('./stik/thumb.jpeg'),sourceUrl: `${sgc}`,}
}, text: luffybeban}, { quoted: m })
break

case  'airobin':
if (!q) return reply(`mau nanya apa`)
//if (m.isGroup) return reply('Fitur Tidak Dapat Digunakan Untuk Group!')
const robinbeban = await fetchJson(`https://api-charaai.vercel.app/charaai?chara=Robin&text=${q}`)
conn.sendMessage(from, { contextInfo: { externalAdReply: { showAdAttribution: true,
title: `${week} , ${calender}`,body:`⌜ ${ucapanWaktu} ⌟`,previewType:"PHOTO",thanumbnail: fs.readFileSync('./stik/thumb.jpeg'),sourceUrl: `${syt}`,}
}, text: robinbeban}, { quoted: m })
break
  case 'aiustad': {
		if (!q) return setReply (` Waalaikumussalam haloo`)
	var { data } = await axios.get(`https://api.betabotz.org/api/search/openai-logic?text=${q}&logic=halo%20saya%20adalah%20seorang%20ustad%20apa%20yang%20kamu%20mau%20tanya%20kan%20tentang%20islam%20dan%20saya%20tidak%20akan%20merespon%20mu%20atau%20menjawab%20%20pertanyaan%20di%20luar%20islami%20saya%20hanya%20akan%20menjawab%20pertanyaan%20yang%20berhubungan%20dengan%20islam%20saja%20dan%20perkenalkan%20nama%20saya%20adalah%20ai%20ustad&apikey=2fbgCgOB`)
			setReply(`${data.message}`.trim())
			}
			break
//========== TOOLS && SERCH ======//
case 'updategempa':{
let dataGempa = db.data.others['updateGempa']

if(isGroup) {
if(q == "on"){
if(dataGempa.includes(from)) return setReply("Sudah aktif di group ini")
dataGempa.push(from)
setReply(`Berhasil menambahkan group ${groupName}  kedalam auto update gempa`)
} else if(q == "off"){
if(!dataGempa.includes(from)) return setReply("Sudah nonaktif di group ini")
dataGempa.splice(dataGempa.indexOf(from))
setReply(`Berhasil menonaktifkan group ${groupName}  kedalam auto update gempa`)
}


} else {
if(!q) return setReply("Masukin idgc")
if(db.data.others['updateGempa'].includes(from)) return setReply("Sudah aktif")
db.data.others['updateGempa'].push(q)
setReply(`Berhasil menambahkan  ${q}  kedalam auto update gempa`)
}
}
break
case 'infogempa':{
let scrapy = require("node-scrapy")
const model = ['tr:nth-child(1) td']
fetch('https://www.bmkg.go.id/gempabumi/gempabumi-terkini.bmkg').then((res) => res.text()).then((body) => {
let result = scrapy.extract(body, model)
let waktu = result[1] || "Tidak ada data"
let lintang = result[2] || "Tidak ada data"
let bujur = result[3] || "Tidak ada data";
let magnitudo = result[4] || "Tidak ada data"
let kedalaman = result[5] || "Tidak ada data"
let lokasi = result[6] || "Tidak ada data"
const teks = `informasi gempa terbaru:\n\nWaktu: *${waktu}*\nBujur: *${bujur}*\nLintang: *${lintang}*\nMagnitudo: *${magnitudo}*\nKedalaman: *${kedalaman}*\nLokasi: *${lokasi}*`.trim()
setReply(teks)
})
}
break
  case 'cut30':
if (!isGroup) return onlyGroup()
if(quoted < 30) return setReply('Vidio harus lebih dari 30 detik')
if (isQuotedVideo || isVideo) {
setReply(mess.wait)
let media = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
exec(`ffmpeg -i ${media} -c copy -map 0 -segment_time 00:00:30 -f segment -reset_timestamps 1 output%03d.mp4`, async (err) => {
let directoryPath = path.join();
 fs.readdir(directoryPath, async function (err, files) {
var filteredArray = await files.filter(item =>item.startsWith("output") )
filteredArray.forEach(async function (file) {
let sampah = fs.existsSync(file)
if(sampah){
 await conn.sendMessage(from,{caption: `${file}`,video: fs.readFileSync(file)})
 fs.unlinkSync(file)
}
})
})
//----jangkrik-----\\
})
} else {
setReply("Reply videonya")
}
break
case 'get':
case "fetch":
 if (!isGroup) return onlyGroup()
  if (!q) {
    return reply(`Contoh:\n${prefix + command} https:`);
  }
  if (!/^https?:\/\//.test(q)) {
    return reply("URL is Invalid!");
  }
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  if (body.match(/(mp4)/gi)) {
    fetch(`${q}`, requestOptions)
      .then((res) => conn.sendMessage(from, { video: { url: `${q}` }, mimetype: "video/mp4", caption: "Success" }, { quoted: m }))
      .catch((error) => reply("Error", error));
  } else if (body.match(/(mp3)/gi)) {
    fetch(`${q}`, requestOptions)
      .then((res) => conn.sendMessage(from, { audio: { url: `${q}` }, mimetype: "audio/mp4", fileName: "Audio" }, { quoted: m }))
      .catch((error) => reply("Error", error));
  } else if (body.match(/(png|jpg|jpeg)/gi)) {
    fetch(`${q}`, requestOptions)
      .then((res) => conn.sendMessage(from, { image: { url: `${q}` }, caption: "Success" }, { quoted: m }))
      .catch((error) => reply("Error", error));
  } else {
    fetch(`${q}`, requestOptions)
      .then((response) => response.text())
      .then((result) => reply(result))
      .catch((error) => reply("Error", error));
  }
  break;
  case 'ss':
case 'ssweb':{
if (!isGroup) return onlyGroup()
if (!q) return setReply("Masukan Link")
if (!isUrl(args[0]) && !args[0].includes('www.')) return reply("Link error");
let Url = `https://api.apiflash.com/v1/urltoimage?access_key=185eff3aa9fe4e3c8e30bda63b1fb9cf&wait_until=page_loaded&url=${q}`
conn.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `${botName}`, mediaType: 3,  renderLargerThumbnail : true,thumbnailUrl: vid.url,sourceUrl: `https://wa.me/${nomerOwner}`
}}, image:{url: Url},caption:`${mess.success}`},{quoted:m})
.catch((err) => reply('Server sedang error coba lagi besok'))
}
break
case 'lirik':{
if (!isGroup) return onlyGroup()
if(!q) return setReply("Masukan judul lagu")	
function lirik(judul){
  return new Promise(async(resolve, reject) => {
      axios.get('https://www.musixmatch.com/search/' + judul)
      .then(async({ data }) => {
      const $ = cheerio.load(data)
      const hasil = {};
      let limk = 'https://www.musixmatch.com'
      const link = limk + $('div.media-card-body > div > h2').find('a').attr('href')
        await axios.get(link)
        .then(({ data }) => {
          const $$ = cheerio.load(data)
          hasil.thumb = 'https:' + $$('div.col-sm-1.col-md-2.col-ml-3.col-lg-3.static-position > div > div > div').find('img').attr('src')
          $$('div.col-sm-10.col-md-8.col-ml-6.col-lg-6 > div.mxm-lyrics').each(function(a,b) {
       hasil.lirik = $$(b).find('span > p > span').text() +'\n' + $$(b).find('span > div > p > span').text()
       })
     })
     resolve(hasil)
   })
   .catch(reject)
   })
}
let data = await lirik(q)
let teks =`
Judul: ${q}

Lirik:
${data.lirik}
`
setReply(teks)

}
break
case 'tr':
case 'translate':{
if (!isGroup) return onlyGroup()
let translate = require('translate-google-api')
let defaultLang = 'en'
let tld = 'cn'
let toks = `
Contoh:
${prefix + command} <lang> [text]
${prefix + command} id your messages
Daftar bahasa yang didukung: https://cloud.google.com/translate/docs/languages
`.trim()

let lang = args[0]
let text = args.slice(1).join(' ')
if ((args[0] || '').length !== 2) {
lang = defaultLang
text = args.join(' ')
}
if (!text && m.quoted && m.quoted.text) text = m.quoted.text
let result
try {
result = await translate(`${text}`, {to: lang})
} catch (e) {
result = await translate(`${text}`, {to: defaultLang,})
setReply(toks)
} finally {
setReply(result[0])
}
}
break
case 'kalkulator':
const matematik = require('mathjs')
try{
let nana = q.replace("x","*")
let nunu = matematik.evaluate(nana)
let teks = `${q} = ${nunu}`
setReply(teks)
} catch (err){
reply( 'Format salah, hanya 0-9 dan Simbol -, +, *, /, ×, ÷, π, e, (, ) yang disupport')
}
break  
case 'tinyurl':{
if (args.length < 1) return setReply(`Link nya mana??`)
if (!isUrl) return setReply(`Masukan link dengan benar`)
setReply(mess.wait)
const fetchText = (url, optiono) => {
return new Promise((resolve, reject) => {
return fetch(url, optiono)
.then(response => response.text())
.then(text => resolve(text))
.catch(err => {
console.log(color(err,'red'))
reject(err)
})
})
}
let okok = await fetchText(`https://tinyurl.com/api-create.php?url=${q}`)
let shorti = `*Result : ${okok}*`
setReply(shorti)
}
break
 case 'google':{
if (!q) return setReply('Apa yang mau di cari bwang')
if (q == undefined || q == ' ') return setReply(`*Hasil Pencarian : ${q}* tidak ditemukan`)

setReply(mess.wait)
 ggs({'query': q, 'no-display': true}).then(res => {

let vars =``
vars += `*-------「 GOOGLE SEARCH 」-------*\n\n_*Hasil Pencarian: ${q}*_\n`
for (let i = 0; i < res.length; i++) {
vars +=  `\n°°°°°°°°°°°°°°°°°°°°°°\n\n*Judul:* ${res[i].title}\n\n*Deskripsi:* ${res[i].snippet}\n\n*Link:* ${res[i].link}\n\n`
}
var teks = vars.trim()
conn.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `${botName}`, mediaType: 3,  renderLargerThumbnail : true,thumbnailUrl: `${angelUrl}`,sourceUrl: `https://wa.me/${nomerOwner}`
}}, text: teks }, { quoted: m } )
})
}
break
case 'brainly':{
if (!isGroup) return onlyGroup()
if (!q) setReply( 'Soalnya apa ?')

setReply(mess.wait)
const brainly = new Brainly("id"); 
let nana =`https://www.logosvgpng.com/wp-content/uploads/2018/04/brainly-logo-vector.png`
let foto = await getBuffer(nana)   

let res = await brainly.searchWithMT(`${q}`, `id`)
console.log(res)
let teks =`*-------「 BRAINLY SEARCH 」-------*\n\n`

teks += res.map(({ question, answers }, i) => `
_*PERTANYAAN KE ${i + 1}*_
${question.content}${answers.map((v, i) => `

*JAWABAN KE ${i + 1}*${v.verification ? ' (Verified)' : ''}${v.isBest ? ' (Terpilih)' : ''}
${v.content}`).join``}`).join(`°°°°°°°°°°°°°°°°°°°°°°`)
 
teks +=`\n\n_Thanks for choosing Brainly_`
 
conn.sendMessage(from, { contextInfo: { externalAdReply: { showAdAttribution: true,
title: `${week} , ${calender}`,
mediaType: 1,  
renderLargerThumbnail : true,
thumbnail: foto,
mediaUrl: res.url,
sourceUrl: res.url
}}, image: { url: foto }, text: teks }, { quoted: m })
}
break
case  'gimage': case 'pin' : case 'pinterest':{
if (!isGroup) return onlyGroup()
	if (!isPremium && global.db.data.users[sender].limit < 1) return reply(mess.limit) // respon ketika limit habis
	if (args.length < 1) return setReply('Apa Yang Mau Dicari?')
	try{
	const {googleImage} = require('@bochilteam/scraper')
	googleImage(q).then(async (data) => {
	//console.log(data)
	let foto = data[Math.floor(Math.random() * data.length)]
	if(data.length == "0") return setReply("Image tidak di temukan")
	setReply(mess.wait)
	conn.sendMedia (from, foto, m, {caption: "RangelChan\nNih kak><"})
	})
	} catch(err){
	let teks = args.join(' ')
	let res = await gis(teks, google)
	function google(error, result){
	if (error){ return setReply('_[ ! ] Error Terjari Kesalahan Atau Hasil Tidak Ditemukan_')}
	else {
	var gugIm = result
	var random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
	conn.sendMedia (from, random, m, {caption:  `*Hasil Pencarian Dari :* ${teks}`})
	}
	}
	}
	}
	db.data.users[sender].limit -= 1 // -1 limit
	break
case 'song': case 'yts': case 'ytsearch' : {
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].limit < 1) return setReply(mess.limit)
if (q === 'help') {
return setReply(`Command : ${command}\n🧩 Category : Search\n🛠 ️Usage : ${prefix + command} \n\n📚 Description : Sends song in Whatsapp `)
}
if (!args.join(" ")) return setReply(`Example : ${prefix + command} dj ehan pulang angel goyang`)
let search = await yts(q)
let listSerch = []
let teskd = `📂 Youtube Search by *${botName}*\n🎵 Result From : *${args.join(" ")}*\n\n`
for (let i of search.all) {
teskd += `*Title :* ${i.title}\n*Author :* ${i.author.name}\n*Url :* ${i.url}\n\n`
teskd += `\n________________________________\n`
}
setReply(teskd)
db.data.users[sender].limit -= 1 
}
break
case 'infocuaca':{
			if (!q) return m.reply(`Example: ${prefix + command} Tasikmalaya`)
			setReply(mess.wait)
			var { data } = await axios.get(`https://api.lolhuman.xyz/api/cuaca/${q}?apikey=${api.Lol}`)
			var titttttttttt = `Tempat : ${data.result.tempat}\n`
			titttttttttt += `Cuaca : ${data.result.cuaca}\n`
			titttttttttt += `Angin : ${data.result.angin}\n`
			titttttttttt += `Description : ${data.result.description}\n`
			titttttttttt += `Kelembapan : ${data.result.kelembapan}\n`
			titttttttttt += `Suhu : ${data.result.suhu}\n`
			titttttttttt += `Udara : ${data.result.udara}\n`
			titttttttttt += `Permukaan laut : ${data.result.permukaan_laut}\n`
			conn.sendMessage(m.chat, { location: { degreesLatitude: data.result.latitude, degreesLongitude: data.result.longitude } })
		 setReply(titttttttttt)
			}
			break
case 'tourl': {
setReply(mess.wait)
//	let { floNime,UploadFileUgu} = require('../lib/uploader')
let media = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
if (isQuotedImage || isImage) {
let anu = await TelegraPh(media)
setReply(util.format(anu))
} else if (isQuotedVideo || isQuotedAudio || isQuotedSticker) {
let anu = await TelegraPh(media)
setReply(util.format(anu))
}
await fs.unlinkSync(media)
}
break
//======= STICKER ===========//
case 'qc':{
if (!isGroup) return onlyGroup()
let teks = m.quoted && m.quoted.q ? m.quoted.text : q ? q : "";
if (!teks) return setReply (`Cara Penggunaan ${prefix}qc teks`)
const text = `${teks}`
const username = await conn.getName(m.quoted ? m.quoted.sender : m.sender)
const avatar = await conn.profilePictureUrl( m.quoted ? m.quoted.sender : m.sender,"image").catch(() =>`https://i0.wp.com/telegra.ph/file/134ccbbd0dfc434a910ab.png`)

const json = {
type: "quote",
format: "png",
backgroundColor: "#FFFFFF",
width: 700,
height: 580,
scale: 2,
"messages": [
{
"entities": [],
"avatar": true,
"from": {
"id": 1,
"name": username,
"photo": {
"url": avatar
}
},
"text": text,
"m.replyMessage": {}
}
 ],
};
axios
.post(
"https://bot.lyo.su/quote/generate",
json,
{
headers: { "Content-Type": "application/json" },
})
.then(async (res) => {
const buffer = Buffer.from(res.data.result.image, "base64");
let encmedia = await conn.sendImageAsSticker(m.chat, buffer, m, { packname: global.botName, 
author: global.ownerName, 
categories: ['🤩', '🎉'],
id: '12345',
quality: 100,
background: 'transparent'})
await fs.unlinkSync(encmedia)
})
}
break
case 's':
case 'stiker':
case 'sticker':
    if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].limit < 1) return setReply(mess.limit)

if (isImage || isViewOnce || isQuotedImage || isVideo || isQuotedVideo) {
if (quoted.seconds > 11) return setReply('Maksimal 10 detik!')
let kualitas = isImage? 70 : 2
let { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter')
let media = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
let jancok = new Sticker(media, {
pack: packName, // The pack name
author: authorName, // The author name
type: StickerTypes.FULL, // The sticker type
categories: ['🤩', '🎉'], // The sticker category
id: '12345', // The sticker id
quality: kualitas, // The quality of the output file
background: '#FFFFFF00' // The sticker background color (only for full stickers)
})
let stok = getRandom(".webp")
let nono = await jancok.toFile(stok)
let nah = fs.readFileSync(nono)
await conn.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `${botName}`, mediaType: 3,  renderLargerThumbnail : true,thumbnailUrl:'https://telegra.ph/file/5d4d567f3ab24ffd26e1a.jpg',sourceUrl: 'https://www.instagram.com/ehanzdhoanx'
}}, sticker: nah }, { quoted: m })   																																
await fs.unlinkSync(stok)
await fs.unlinkSync(media)
} else {
setReply(`Kirim gambar/vidio dengan caption ${command} atau balas gambar/vidio yang sudah dikirim\nNote : Maximal vidio 10 detik!`)
db.data.users[sender].limit -= 1 
}
break
case 'smeme': {
if(!q) return setReply(`Masukan teks, contoh : ${prefix}smeme teks|teks`)
var bottom = q.split('|')[0] ? q.split('|')[0] : ''
if (isQuotedImage || isImage || isQuotedSticker ) {
setReply(mess.wait)
if (q.includes('|')) {
var value = args.join(' ')
var teks1 = q.split('|')[0] ? q.split('|')[0] : ''
var teks2 = q.split('|')[1] ? q.split('|')[1] : ''
let { Sticker, StickerTypes } = require('wa-sticker-formatter')
let olalah = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
let media = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
let ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, async (err) => {
fs.unlinkSync(media)
if (err) return setReply(err)
let anuah = await TelegraPh(ran)
let hasil = `https://api.memegen.link/images/custom/${encodeURIComponent(teks1)}/${encodeURIComponent(teks2)}.png?background=${anuah}`
await makeSticker(hasil,Sticker, StickerTypes)
await fs.unlinkSync(olalah)
})
}  else {
let media = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
let ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, async (err) => {
fs.unlinkSync(media)
if (err) return setReply(err)
let anuah = await TelegraPh(ran)
let mediaa = `https://skizo.tech/api/memegen?url=${anuah}&text=${encodeURIComponent(bottom)}&apikey=${api.ehz}`
await makeSticker(mediaa, Sticker, StickerTypes)
fs.unlinkSync(ran)
})
} 
}
}
break
 case 'take':
case 'swm': 
case 'wm':{
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].limit < 1) return setReply(mess.limit)

if (!q) return setReply("Reply sticker dengan nama Punya|Gw")
if (isImage || isQuotedImage|| isQuotedSticker) {
try{
let ahuh = args.join(' ').split('|')
let satu = ahuh[0] !== '' ? ahuh[0] : `${botName}`
let dua = typeof ahuh[1] !== 'undefined' ? ahuh[1] : ``
let { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter')
let media = await conn.downloadAndSaveMediaMessage(quoted)
let jancok = new Sticker(media, {
pack: satu, // The pack name
author: dua, // The author name
type: StickerTypes.FULL, // The sticker type
categories: ['🤩', '🎉'], // The sticker category
id: '12345', // The sticker id
quality: 70, // The quality of the output file
background: '#FFFFFF00' // The sticker background color (only for full stickers)
})
let stok = getRandom(".webp")
let nono = await jancok.toFile(stok)
let nah = fs.readFileSync(nono)
//await xm.sendMessage(from,{sticker: nah},{quoted: m})
conn.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `${botName}`, mediaType: 3,  renderLargerThumbnail : true,thumbnailUrl: 'https://telegra.ph/file/5d4d567f3ab24ffd26e1a.jpg',sourceUrl: `https://wa.me/${nomerOwner}`
}}, sticker: nah }, { quoted: m })   
await fs.unlinkSync(stok)
await fs.unlinkSync(media)
} catch (err){
console.log(err)
}
}
db.data.users[sender].limit -= 1 
}
break
	
case 'emojimix': {
                let [emoji1, emoji2] = q.split`+`
                if (!emoji1) return setReply(`Contoh : ${prefix + command} 😅+🤔`)
                if (!emoji2) return setReply(`Contoh : ${prefix + command} 😅+🤔`)
                setReply(mess.wait)
                let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
                for (let res of anu.results) {
                    let encmedia = await conn.sendImageAsSticker(m.chat, res.url, m, {
                        packname: global.packName,
                        author: global.ownerName,
                        categories: res.tags
                    })
                    await fs.unlinkSync(encmedia)
                }
                
            }
            break
case 'ttp':{
	const text2png = require('text2png');
	await fs.writeFileSync('out.png', text2png(q, {font: '100px coolvetica rg',
		localFontPath: 'src/font/coolvetica rg.otf',
	  localFontName: 'coolvetica rg',                                            
	  color: 'white',
	  textAlign: "left",
	  lineSpacing: 10,
	  strokeColor: "black",
	  strokeWidth : 2,
	  padding: 20}))
	let { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter')
	let media = fs.readFileSync('out.png')
	let jancok = new Sticker(media, {
		pack: packName, // The pack name
		author: authorName, // The author name
		type: StickerTypes.FULL, // The sticker type
		categories: ['🤩', '🎉'], // The sticker category
		id: '12345', // The sticker id
		quality: 70, // The quality of the output file
		background: '#FFFFFF00' // The sticker background color (only for full stickers)
	})
	let stok = getRandom(".webp")
	let nono = await jancok.toFile(stok)
	let nah = fs.readFileSync(nono)
	await conn.sendMessage(from,{sticker: nah},{quoted: m})
	await fs.unlinkSync(stok)
	await fs.unlinkSync('out.png')
	}
	break
case 'attp':
                if (!q) return setReply('Masukan Text')
                setReply(mess.wait)
                conn.sendMessage(m.chat, { sticker: { url: `https://api.lolhuman.xyz/api/attp?apikey=${api.Lol}&text=${q}`} }, { quoted: m })
                break
case 'cry': case 'kill': case 'hug': case 'pat': case 'lick': case 'kiss': case 'bite': case 'yeet': case 'bully': case 'bonk': case 'wink': case 'poke': case 'nom': case 'slap': case 'smile': case 'wave': case 'awoo': case 'blush': case 'smug': case 'glomp': case 'happy': case 'dance': case 'cringe': case 'cuddle': case 'highfive': case 'handhold':
if (!isGroup) return onlyGroup()
setReply(mess.wait)
axios.get(`https://api.waifu.pics/sfw/${command}`)
.then(({data}) => {
conn.sendImageAsSticker(m.chat, data.url, m, { packname: global.packName, author: global.authorName })
})
break
case 'patrick':
case 'petrik':
case 'stikpatrick': {
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].limit < 1) return setReply(mess.limit)

setReply(mess.wait)
await fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/patrik')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
conn.sendImageAsSticker(from, pjr, m)
}).catch((err) => setReply('Server sedang error coba lagi besok!'))
db.data.users[sender].limit -= 1
}
break
// ===================================== //
case 'dogestick': 
case 'doge': 
case 'domge':
case 'dogesticker': {
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].limit < 1) return setReply(mess.limit)

setReply(mess.wait)
await fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/anjing')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
conn.sendImageAsSticker(from, pjr, m)
}).catch((err) => setReply('Server sedang error coba lagi besok!'))
db.data.users[sender].limit -= 1
}
break
// ===================================== //
case 'lovestick' :
case 'slove':
case 'lovesticker': {
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].limit < 1) return setReply(mess.limit)

setReply(mess.wait)
await fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/bucin')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
conn.sendImageAsSticker(from, pjr, m)
}).catch((err) => setReply('Server sedang error coba lagi besok!'))
db.data.users[sender].limit -= 1
}
break
// ===================================== //
case 'gura': 
case 'gurastick': {
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].limit < 1) return setReply(mess.limit)

setReply(mess.wait)
await fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/gura')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
conn.sendImageAsSticker(from, pjr, m)
}).catch((err) => setReply('Server sedang error coba lagi besok!'))
db.data.users[sender].limit -= 1
}
break
// ===================================== //
case 'paimon': {
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].limit < 1) return setReply(mess.limit)

setReply(mess.wait)
await fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/Paimon')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
conn.sendImageAsSticker(from, pjr, m)
})
db.data.users[sender].limit -= 1
}
break
case 'mukelu': 
case 'lu':
case 'mukestik': {
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].limit < 1) return setReply(mess.limit)

setReply(mess.wait)
await fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/mukelu')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
conn.sendImageAsSticker(from, pjr, m)
}).catch((err) => setReply('Server sedang error coba lagi besok!'))
db.data.users[sender].limit -= 1
}
break
//======== CONVERT ========//
case 'toimg': {
if (!isGroup) return onlyGroup()
if (!isQuotedSticker) return setReply('Reply stickernya') 

sendSticker(stikot)
let data = global.db.data.others['runtime']
let time = (new Date - data.runtime) || "Tidak terdeteksi"
let media = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
let ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, async (err) => {
fs.unlinkSync(media)
if (err) return setReply(err)
let buffer = fs.readFileSync(ran)
conn.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `${botName}`, mediaType: 3,  renderLargerThumbnail : true,thumbnailUrl: '',sourceUrl: `https://wa.me/${nomerOwner}`
}}, image: buffer, caption: `${mess.success}`}, { quoted: m })
fs.unlinkSync(ran)
})
}
break
// ==============================//
case 'removebg':
  case 'nobg': {
 if (!isGroup) return onlyGroup()
 if (!isMedia) return setReply("Where The A Image")
                setReply(mess.wait)
                let media = await conn.downloadAndSaveMediaMessage(quoted)
                let anu = await TelegraPh(media)
 conn.sendMessage(m.chat, {
                    image: { url: `https://api.lolhuman.xyz/api/removebg?apikey=${api.Lol}&img=${anu}` },caption: "nih kak>\<" }, { quoted: m}) }
            break
case'toptv':{
try {
  if (!isGroup) return onlyGroup()
    setReply(mess.wait)
if
	(m.message.extendedTextMessage) 
{
  var dataVideo = { ptvMessage: m.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage }
    conn.relayMessage(m.chat, dataVideo, {})
 }
    } catch (error) {
        m.reply(error);
        }
        }
        break
 case 'toimage': 
            case 'toimg': {
                if (!/webp/.test(mime)) return setReply(`Reply sticker dengan caption *${prefix + command}*`)
                setReply(mess.wait)
                let media = await conn.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) return err
                    let buffer = fs.readFileSync(ran)
                    conn.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
                
            }
            break
case 'tomp4': 
	        case 'tovideo': {
                if (!/webp/.test(mime)) return setReply(`Reply stiker dengan caption *${prefix + command}*`)
                setReply(mess.wait)
                let media = await ehz.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await conn.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
                
            }
            break
case 'togif': {
                if (!/webp/.test(mime)) return setReply(`Reply stiker dengan caption *${prefix + command}*`)
                setReply(mess.wait)
                let media = await conn.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await conn.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
                
            }
            break
case 'tomp3':
if (isQuotedVideo || isVideo) {
setReply(mess.wait)
let media = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
let ran = getRandomFile('.mp3')
exec(`ffmpeg -i ${media} -vn ${ran}`, async (err) => {
fs.unlinkSync(media)
if (err) return setReply(`Err: ${err}`)
let buffer453 = fs.readFileSync(ran)
await conn.sendMessage(from, {mimetype: 'audio/mp4', audio: buffer453}, { quoted: m })
fs.unlinkSync(ran)
})
} else {
setReply("Reply videonya")
}
break
 case 'terbalik':{
	if (/audio/.test(mime)){ 
	setReply(mess.wait)
	let media3 = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
	let rname = getRandom('.mp3')
	exec(`ffmpeg -i ${media3} -filter_complex "areverse" ${rname}`, async (err, stderr, stdout) => {
	if (err) return setReply('Error!')
	let jadie = fs.readFileSync(rname)
	await conn.sendMessage(from, {audio: jadie, mimetype: 'audio/mp4' }, {quoted: m})
	fs.unlinkSync(rname)
	fs.unlinkSync(media3)
	}
	)
	} else {
	setReply('Reply audio!')
	}
	}
	break
case 'tts':
if (!isGroup) return onlyGroup()
if (!q) setReply( `Use Example ${prefix}${command} Ara ara`)
const gtts = require( 'node-gtts')
//const { gtts } = await import( 'node-gtts')
function tts(text, lang = 'id') {
// console.log(lang, text)
return new Promise((resolve, reject) => {
try {
let tts = gtts(lang)
let filePath =  (1 * new Date) + '.mp3'
tts.save(filePath, text, () => {
resolve(fs.readFileSync(filePath))
fs.unlinkSync(filePath)
})
} catch (e) { reject(e) }
})
}	
const defaultLang = 'id'
let lang = args[0]
let text = args.slice(1).join(' ')
if ((args[0] || '').length !== 2) {
lang = defaultLang
text = args.join(' ')
}
if (!text && m.quoted?.text) text = m.quoted.text	
let ras
try { ras = await tts(text, lang) }
catch (e) {
m.reply(e + '')
text = args.join(' ')
if (!text) setReply( `Use Example ${prefix}${command} Hello world\nUntuk Memakai Bahasa Lain Sikahkan Ketik .kodebahasa`)
ras = await tts(text, defaultLang)
} finally {
if (ras) conn.sendMedia(from, ras, m, {caption: `${mess.success}`})
//conn.sendFile(m.chat, res, 'tts.opus', null, m, true)
}
break
case 'kodebahasa':{
	let LANGUAGES = `
	*╭─❲ KODE BAHASA ❳*
	*│*
	*│▸* af: Afrikaans 
	*│▸* sq: Albanian
	*│▸* ar: Arabic
	*│▸* hy: Armenian
	*│▸* ca: Catalan 
	*│▸* zh: Chinese 
	*│▸* zh-cn: Chinese (Mandarin/China)
	*│▸* zh-tw: Chinese (Mandarin/Taiwan)
	*│▸* zh-yue: Chinese (Cantonese)
	*│▸* hr: Croatian
	*│▸* cs: Czech
	*│▸* da: Danish
	*│▸* nl: Dutch
	*│▸* en: English    
	*│▸* en-au: English (Australia)
	*│▸* en-uk: English (United Kingdom)
	*│▸* en-us: English (United States) 
	*│▸* eo: Esperanto 
	*│▸* fi: Finnish 
	*│▸* fr: French
	*│▸* de: German
	*│▸* el: Greek 
	*│▸* ht: Haitian Creole 
	*│▸* hi: Hindi 
	*│▸* hu: Hungarian 
	*│▸* is: Icelandic 
	*│▸* id: Indonesian 
	*│▸* it: Italian
	*│▸* ja: Japanese
	*│▸* ko: Korean
	*│▸* la: Latin
	*│▸* lv: Latvian
	*│▸* mk: Macedonian
	*│▸* no: Norwegian
	*│▸* pl: Polish
	*│▸* pt: Portuguese
	*│▸* pt-br: Portuguese (Brazil)
	*│▸* ro: Romanian
	*│▸* ru: Russian
	*│▸* sr: Serbian
	*│▸* sk: Slovak
	*│▸* es: Spanish 
	*│▸* es-es: Spanish (Spain)
	*│▸* es-us: Spanish (United States)
	*│▸* sw: Swahili
	*│▸* sv: Swedish
	*│▸* ta: Tamil
	*│▸* th: Thai
	*│▸* tr: Turkish
	*│▸* vi: Vietnamese 
	*│▸* cy: Welsh
	*│*
	*╰────────────⦁*`
setReply(LANGUAGES)
	}
	break
 case 'toptt':
 case 'tovn' :
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].limit < 1) return setReply(mess.limit)
if (isQuotedAudio){

sendSticker(stikot)
let media = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} ${ran}`, async (err) => {
fs.unlinkSync(media)
if (err) return setReply('Gagal mengkonversi audio ke ptt')
let topt = fs.readFileSync(ran)
await conn.sendMessage(from,{audio: topt, mimetype: 'audio/mp4', ptt:true}, {quoted: m})
fs.unlinkSync(ran)
})
} else {
setReply("Reply audio")
db.data.users[sender].limit -= 1 
}
break
case 'bass': 
            case 'blown': 
            case 'deep': 
            case 'earrape': 
            case 'fast': 
            case 'fat': 
            case 'nightcore': 
            case 'reverse': 
            case 'robot': 
            case 'slow': 
            case 'smooth': 
            case 'tupai': {
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                setReply(mess.wait)
                let media = await conn.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return setReply(err)
                let buff = fs.readFileSync(ran)
   sendMusic(buff)            // conn.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else setReply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
                } catch (e) {
                setReply(e)
                }
                }
            break
//======= MENU FUN ==========//
case 'tiktokghea':
setReply(mess.wait)
var gheayubi = JSON.parse(fs.readFileSync('./temp/tiktokvids/gheayubi.json'))
var hasil = pickRandom(gheayubi)
conn.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'cosplayangel':
setReply(mess.wait)
var gheayubi = JSON.parse(fs.readFileSync('./temp/tiktokvids/cosplayangel.json'))
var hasil = pickRandom(gheayubi)
conn.sendMessage(m.chat, { caption: 'nih bang ehanz\ningat jangan Gamon yak\nAng3l udah pergi;)', video: { url: hasil.url }}, { quoted: m })
break
case 'tiktokbocil':
setReply(mess.wait)
var bocil = JSON.parse(fs.readFileSync('./temp/tiktokvids/bocil.json'))
var hasil = pickRandom(bocil)
conn.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'videosad':
setReply(mess.wait)
var ukhty = JSON.parse(fs.readFileSync('./erc/tiktokvids/videosad.json'))
var hasil = pickRandom(ukhty)
conn.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'wibuvid':
setReply(mess.wait)
var santuy = JSON.parse(fs.readFileSync('./temp/tiktokvids/wibuvid.json'))
var hasil = pickRandom(santuy)
conn.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktokkayes':
setReply(mess.wait)
var kayes = JSON.parse(fs.readFileSync('./temp/tiktokvids/kayes.json'))
var hasil = pickRandom(kayes)
conn.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktokpanrika':
setReply(mess.wait)
var rikagusriani = JSON.parse(fs.readFileSync('./temp/tiktokvids/panrika.json'))
var hasil = pickRandom(rikagusriani)
conn.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url ,viewOnce: true}}, { quoted: m })
break
case 'videogalau':
setReply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./temp/tiktokvids/galau.json'))
var hasil = pickRandom(notnot)
conn.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break   
case 'hentaivid':{
setReply(mess.wait)
async function hentai() {
return new Promise((resolve, reject) => {
const page = Math.floor(Math.random() * 1153)
axios.get('https://sfmcompile.club/page/'+page)
.then((data) => {
const $ = cheerio.load(data.data)
const hasil = []
$('#primary > div > div > ul > li > article').each(function (a, b) {
hasil.push({
title: $(b).find('header > h2').text(),
link: $(b).find('header > h2 > a').attr('href'),
 category: $(b).find('header > div.entry-before-title > span > span').text().replace('in ', ''),
share_count: $(b).find('header > div.entry-after-title > p > span.entry-shares').text(),
views_count: $(b).find('header > div.entry-after-title > p > span.entry-views').text(),
type: $(b).find('source').attr('type') || 'image/jpeg',
video_1: $(b).find('source').attr('src') || $(b).find('img').attr('data-src'),
video_2: $(b).find('video > a').attr('href') || ''
})
})
resolve(hasil)
})
})
}
let ah = await hentai()
let nano = await pickRandom(ah)
conn.sendMessage(m.chat,{video:{url: nano.video_1,caption: 'Dosa Tanggung  Sendiri Dah'}},{quoted:m})


}
break     
case  'jjmeryani':{
setReply(mess.wait)
let kaydt = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/meryani.json')
let hayu = kaydt[Math.floor(Math.random() * kaydt.length)];
conn.sendMessage(m.chat,{video:{url:hayu},caption:`nih kak🗿`},{quoted: m})
}
break 
 // ============================ //
case 'china':
setReply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./temp/tiktokpics/china.json'))
var hasil = pickRandom(notnot)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'hijab':
setReply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./temp/tiktokpics/hijab.json'))
var hasil = pickRandom(notnot)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'indo':
setReply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./temp/tiktokpics/indonesia.json'))
var hasil = pickRandom(notnot)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'japanese':
setReply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./temp/tiktokpics/japan.json'))
var hasil = pickRandom(notnot)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'korean':
setReply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./temp/tiktokpics/korea.json'))
var hasil = pickRandom(notnot)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'malaysia':
setReply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./temp/tiktokpics/malaysia.json'))
var hasil = pickRandom(notnot)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'randomgirl':
setReply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./temp/tiktokpics/random.json'))
var hasil = pickRandom(notnot)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'randomboy':
setReply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./temp/tiktokpics/random2.json'))
var hasil = pickRandom(notnot)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'thailand':
setReply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./temp/tiktokpics/thailand.json'))
var hasil = pickRandom(notnot)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'vietnam':
setReply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./temp/tiktokpics/vietnam.json'))
var hasil = pickRandom(notnot)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break       
case 'paptt':
if (!q) return setReply(`Example 
${command} foto/video`)
let papttfoto = JSON.parse(fs.readFileSync('./database/paptt-foto.json'))
let papttvideo = JSON.parse(fs.readFileSync('./database/paptt-video.json'))
let titid1 = (pickRandom(papttfoto))
let titid2 = (pickRandom(papttvideo))
if (q == 'foto') {
setReply("Foto Akan Dikirim Lewat Private Chat ( *PC* )")
conn.sendMessage(m.sender, { image: { url: titid1 }, caption: 'Mana Tahan😛'}, { quoted: fkontak })
            } else if (q == 'video') {
setReply("Video Akan Dikirim Lewat Private Chat ( *PC* )")
conn.sendMessage(m.sender, { video: { url: titid2 }, caption: 'Mana Tahan🙈'}, { quoted: fkontak })
            }
break       
  //===== Text Pro ======//
case 'blackpink':
		case 'neon':
		case 'greenneon':
		case 'advanceglow':
		case 'futureneon':
		case 'sandwriting':
		case 'sandsummer':
		case 'sandengraved':
		case 'metaldark':
		case 'neonlight':
		case 'holographic':
		case 'text1917':
		case 'minion':
		case 'deluxesilver':
		case 'newyearcard':
		case 'bloodfrosted':
		case 'halloween':
		case 'jokerlogo':
		case 'fireworksparkle':
		case 'natureleaves':
		case 'bokeh':
		case 'toxic':
		case 'strawberry':
		case 'box3d':
		case 'roadwarning':
		case 'breakwall':
		case 'icecold':
		case 'luxury':
		case 'cloud':
		case 'summersand':
		case 'horrorblood':
		case 'thunder':
			if (args.length == 0) return setReply(`Example: ${prefix + command} HoshinoBotz`)
            db.data.users[m.sender].limit -= 2 // -1 limit
 setReply(mess.wait)
			conn.sendMessage
			(m.chat, { image: { url: `https://api.lolhuman.xyz/api/textprome/${command}?apikey=${api.Lol}&text=${args}` }, caption: `© Hoshino Botz\n\n Type: ${command}\n\nText: ${args}`})
			break
case 'pornhub':
		case 'glitch':
		case 'avenger':
		case 'space':
		case 'ninjalogo':
		case 'marvelstudio':
		case 'lionlogo':
		case 'wolflogo':
		case 'steel3d':
		case 'wallgravity':
			if (args.length == 0) return setReply(`Example: ${prefix + command} Ehanz Pedo`)
            db.data.users[m.sender].limit -= 4 // -1 limit
			setReply(mess.wait)
			conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/textprome2/${command}?apikey=${api.Lol}&text1=${args[0]}&text2=${args[1]}`}, caption: `© Rangel Botz\n\n Type: ${command}`})
			break
case 'flaming1':{
if (!isGroup) return onlyGroup()
if (args.length == 0) return setReply(`Example: ${prefix + command} Teks`)
if (!isPremium && global.db.data.users[sender].limit < 1) return setReply(mess.limit)

setReply(mess.wait)
let ini_txt = args.join(" ")
var buffer = `https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&script=fluffy-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=${ini_txt}`
conn.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `Rangel°᭄ᴮᵒᵗ`, mediaType: 3,  renderLargerThumbnail : true,thumbnailUrl:"https://telegra.ph/file/33d58a3a7b931d3902642.jpg",sourceUrl: `https://wa.me/${nomerOwner}`
}}, image: {url:buffer}, caption: `${mess.success}`}, { quoted: m})
.catch((err) => setReply('Server sedang error coba lagi besok!'))
db.data.users[sender].limit -= 1
}
break
 case 'flaming2':{
if (!isGroup) return onlyGroup()
if (args.length == 0) return setReply(`Example: ${prefix + command} Teks`)
if (!isPremium && global.db.data.users[sender].limit < 1) return setReply(mess.limit)

setReply(mess.wait)
let ini_txt = args.join(" ")
var buffer = `https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text=${ini_txt}`
conn.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `Rangel°᭄ᴮᵒᵗ`, mediaType: 3,  renderLargerThumbnail : true,thumbnailUrl: 'https://telegra.ph/file/33d58a3a7b931d3902642.jpg',sourceUrl: `https://wa.me/${nomerOwner}`
}}, image: {url:buffer}, caption: `${mess.success}`}, { quoted: m})
.catch((err) => setReply('Server sedang error coba lagi besok!'))
db.data.users[sender].limit -= 1
}
break
// ===================================== //
case 'flaming3':{
if (!isGroup) return onlyGroup()
if (args.length == 0) return setReply(`Example: ${prefix + command} Teks`)
if (!isPremium && global.db.data.users[sender].limit < 1) return setReply(mess.limit)

setReply(mess.wait)
let ini_txt = args.join(" ")
var buffer = `https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=${ini_txt}`
conn.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `${botName}`, mediaType: 3,  renderLargerThumbnail : true,thumbnailUrl: 'https://telegra.ph/file/33d58a3a7b931d3902642.jpg',sourceUrl: `https://wa.me/${nomerOwner}`
}}, image: {url:buffer}, caption: `${mess.success}`}, { quoted: m})
.catch((err) => setReply('Server sedang error coba lagi besok!'))
db.data.users[sender].limit -= 1
}
break
// ===================================== //
case 'flaming4':{
if (!isGroup) return onlyGroup()
if (args.length == 0) return setReply(`Example: ${prefix + command} Teks`)
if (!isPremium && global.db.data.users[sender].limit < 1) return setReply(mess.limit)

setReply(mess.wait)
let ini_txt = args.join(" ")
var buffer = `https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=${ini_txt}`
conn.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `${botName}`, mediaType: 3,  renderLargerThumbnail : true,thumbnailUrl:'https://telegra.ph/file/33d58a3a7b931d3902642.jpg',sourceUrl: `https://wa.me/${nomerOwner}`
}}, image: {url:buffer}, caption: `${mess.success}`}, { quoted: m})
.catch((err) => setReply('Server sedang error coba lagi besok!'))
db.data.users[sender].limit -= 1
}
break
// ===================================== //
case 'flaming5':{
if (!isGroup) return onlyGroup()
if (args.length == 0) return setReply(`Example: ${prefix + command} Teks`)
if (!isPremium && global.db.data.users[sender].limit < 1) return setReply(mess.limit)

setReply(mess.wait)
let ini_txt = args.join(" ")
var buffer = `https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=${ini_txt}`
conn.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `${botName}`, mediaType: 3,  renderLargerThumbnail : true,thumbnailUrl:'https://telegra.ph/file/33d58a3a7b931d3902642.jpg',sourceUrl: `https://wa.me/${nomerOwner}`
}}, image: {url:buffer}, caption: `${mess.success}`}, { quoted: m})
.catch((err) => setReply('Server sedang error coba lagi besok!'))
db.data.users[sender].limit -= 1
}
break
// ===================================== //
case 'flaming6':{
if (!isGroup) return onlyGroup()
if (args.length == 0) return setReply(`Example: ${prefix + command} Teks`)
if (!isPremium && global.db.data.users[sender].limit < 1) return setReply(mess.limit)

setReply(mess.wait)
let ini_txt = args.join(" ")
var buffer = `https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=0&backgroundColor=%23101820&text=${ini_txt}`
conn.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `${botName}`, mediaType: 3,  renderLargerThumbnail : true,thumbnail: fs.readFileSync('./stik/reply.jpg'),sourceUrl: `https://wa.me/${nomerOwner}`
}}, image: {url:buffer}, caption: `${mess.success}`}, { quoted: m})
.catch((err) => setReply('Server sedang error coba lagi besok!'))
db.data.users[sender].limit -= 1
}
break
//======== NSFW =========//
case 'premium': case 'buyprem': {
let anu = `𝗨𝗦𝗘𝗥 𝗣𝗥𝗘𝗠𝗜𝗨𝗠

╭───❒「  *𝘉𝘶𝘺 𝘗𝘳𝘦𝘮* 」
│ ╭୧⍤⃝───────────┈◦•◦❥•◦
│ │•⟢.pengguna baru 10k
│ │•⟢.masa aktif 500 Hari 
│ │•⟢.pengguna bru 25k
│ │•⟢.masa aktip 1500 Hari
│ ꒰⚘݄꒱₊___________________˓˓ ⍥⃝⃝ ˒˒
╰─────────────────────⁛⸙
`+readmore+`
╭───❒「  *𝘍𝘪𝘵𝘶𝘳 𝘗𝘳𝘦𝘮* 」
│ ╭୧⍤⃝───────────┈◦•◦❥•◦
│ │•⟢.limit tanpa batas
│ │•⟢.Fitur premium Terbuka
│ │•⟢.Nsfw Terbuka 🙆
│ │•⟢.Dll
│ ꒰⚘݄꒱₊___________________˓˓ ⍥⃝⃝ ˒˒
╰─────────────────────⁛⸙

𝗡𝗢𝗧𝗘 : 

Kegunaannya untuk Fitur Premium
Limit tanpa batas (Unlimited) .

jika minat chat owner ini ${nomerOwner}
`
conn.relayMessage(m.chat,  {
    requestPaymentMessage: {
      currencyCodeIso4217: 'INR',
      amount1000: 1234567,
      requestFrom: m.sender,
      noteMessage: {
      extendedTextMessage: {
      text: anu,
      contextInfo: {
      externalAdReply: {
      showAdAttribution: true
      }}}}}}, {})
      }
      break
 case 'nsfw': case 'nsfwmwnu':
if (!isPremium && !isOwner) return setReply(mess.only.prem)
let wow = `---- *NFSW* -----\n ╭୧⍤⃝───────────┈◦•◦❥•◦
│⩽⩾ .chiisaihentai
│⩽⩾ .trap
│⩽⩾ .blowjob
│⩽⩾ .yaoi
│⩽⩾ .ecchi
│⩽⩾ .hentai
│⩽⩾ .ahegao
│⩽⩾ .hololewd
│⩽⩾ .sideoppai
│⩽⩾ .animefeets
│⩽⩾ .animebooty
│⩽⩾ .animethighss
│⩽⩾ .hentaiparadise
│⩽⩾ .animearmpits
│⩽⩾ .hentaifemdom
│⩽⩾ .lewdanimegirls
│⩽⩾ .biganimetiddies
│⩽⩾ .animebellybutton
│⩽⩾ .hentai4everyone
꒰⚘݄꒱₊___________________⍥⃝⃝ ˒˒`
setReply(wow)
break
case 'chiisaihentai':
		case 'trap':
		case 'blowjob':
		case 'yaoi':
		case 'ecchi':
		case 'hentai':
		case 'ahegao':
		case 'hololewd':
		case 'sideoppai':
		case 'animefeets':
		case 'animebooty':
		case 'animethighss':
		case 'hentaiparadise':
		case 'animearmpits':
		case 'hentaifemdom':
		case 'lewdanimegirls':
		case 'biganimetiddies':
		case 'animebellybutton':
		case 'hentai4everyone':
if (!isPremium && !isOwner) return setReply(mess.only.prem)
setReply('waittt....\nmedia akan di kirim lewat private chat')
        
			conn.sendMessage(m.sender, { image: { url: `https://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=${api.Lol}` } })
			break
//=≠≠====≠=≠ RANDOM ==========//
case 'shadow': case 'cup': case 'cup1': case 'romance': case 'smoke': case 'burnpaper': case 'lovemessage': case 'undergrass': case 'love': case 'coffe': case 'woodheart': case 'woodenboard': case 'summer3d': case 'wolfmetal': case 'nature3d': case 'underwater': case 'golderrose': case 'summernature': case 'letterleaves': case 'glowingneon': case 'fallleaves': case 'flamming': case 'harrypotter': case 'carvedwood':
if (args.length == 0) return reply(`Example: ${prefix + command}  Cium Wibu Awwww Yamatee`)

setReply(mess.wait)
conn.sendMessage(from, { image: { url: `https://api.lolhuman.xyz/api/photooxy1/${command}?apikey=${api.Lol}&text=${args}` } })
break
			
case 'art': case 'awoo': case 'exo': case 'elf': case 'estetic': case 'wallnime': case 'quotesimage':
if (!isGroup) return onlyGroup()

setReply(mess.wait)
conn.sendMessage(from, { image: { url: `https://api.lolhuman.xyz/api/random/${command}?apikey=${api.Lol}` } })
break
case 'cyberspace':
            case 'mountain':
            case 'programming':
            case 'technology': {
            setReply(mess.wait)
                let anu = await fetchJson(`https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Wallpaper/${command}.json`)
  let result = anu[Math.floor(Math.random() * anu.length)]
 conn.sendMessage(m.chat, { image: { url: result}, caption: mess.succes }, { quoted: m })
            }
            break
case 'memeindo':
                setReply(mess.wait)
 conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/meme/memeindo?apikey=${api.Lol}`}, caption: `sangad Cringe Kaya idup Lo🗿`}, {quoted: m})
            break
 case 'cecan': case 'cogan': case 'hacker': case 'pubg': case 'boneka':
if (!isGroup) return onlyGroup()
setReply(mess.wait)
conn.sendMessage(from, { image: { url: `https://api.zahwazein.xyz/randomimage/${command}?apikey=${api.angel}` } })
break
case 'pantun': {
if (!isGroup) return onlyGroup()
let zeltoria = await fetch(`https://api.lolhuman.xyz/api/random/pantun?apikey=${api.Lol}`)
let hasil = await zeltoria.json()
 setReply(`${hasil.result}`.trim())
 }
 break
 case 'dilanquote': {
if (!isGroup) return onlyGroup()
let ewe = await fetch(`https://api.lolhuman.xyz/api/quotes/dilan?apikey=${api.Lol}`)
let hasil = await ewe.json()
 setReply(`${hasil.result}`.trim())
 }
 break
case 'motivasi': {
if (!isGroup) return onlyGroup()
let zeltoria = await fetch(`https://api.lolhuman.xyz/api/random/katabijak?apikey=${api.Lol}`)
let hasil = await zeltoria.json()
 setReply(`${hasil.result}`.trim())
 }
 break
case 'katabijak': {
if (!isGroup) return onlyGroup()
let zeltoria = await fetch(`https://api.lolhuman.xyz/api/random/katabijak?apikey=${api.Lol}`)
let hasil = await zeltoria.json()
setReply(`${hasil.result}`.trim())
 }
 break
 //======== EPHOTO =======//
case 'glitchtext':
case 'writetext':
case 'advancedglow':
case 'typographytext':
case 'pixelglitch':
case 'neonglitch':
case 'flagtext':
case 'flag3dtext':
case 'deletingtext':
case 'blackpinkstyle':
case 'glowingtext':
case 'underwatertext':
case 'logomaker':
case 'cartoonstyle':
case 'papercutstyle':
case 'watercolortext':
case 'effectclouds':
case 'blackpinklogo':
case 'gradienttext':
case 'summerbeach':
case 'luxurygold':
case 'multicoloredneon':
case 'sandsummer':
case 'galaxywallpaper':
case '1917style':
case 'makingneon':
case 'royaltext':
case 'freecreate':
case 'galaxystyle':
case 'lighteffects':{
if (!isGroup) return onlyGroup()
if (!q) return setReply(`Example : ${prefix+command} Rangel`) 
sendSticker(stikot) 
let link
if (/glitchtext/.test(command)) link = 'https://en.ephoto360.com/create-digital-glitch-text-effects-online-767.html'
if (/writetext/.test(command)) link = 'https://en.ephoto360.com/write-text-on-wet-glass-online-589.html'
if (/advancedglow/.test(command)) link = 'https://en.ephoto360.com/advanced-glow-effects-74.html'
if (/typographytext/.test(command)) link = 'https://en.ephoto360.com/create-typography-text-effect-on-pavement-online-774.html'
if (/pixelglitch/.test(command)) link = 'https://en.ephoto360.com/create-pixel-glitch-text-effect-online-769.html'
if (/neonglitch/.test(command)) link = 'https://en.ephoto360.com/create-impressive-neon-glitch-text-effects-online-768.html'
if (/flagtext/.test(command)) link = 'https://en.ephoto360.com/nigeria-3d-flag-text-effect-online-free-753.html'
if (/flag3dtext/.test(command)) link = 'https://en.ephoto360.com/free-online-american-flag-3d-text-effect-generator-725.html'
if (/deletingtext/.test(command)) link = 'https://en.ephoto360.com/create-eraser-deleting-text-effect-online-717.html'
if (/blackpinkstyle/.test(command)) link = 'https://en.ephoto360.com/online-blackpink-style-logo-maker-effect-711.html'
if (/glowingtext/.test(command)) link = 'https://en.ephoto360.com/create-glowing-text-effects-online-706.html'
if (/underwatertext/.test(command)) link = 'https://en.ephoto360.com/3d-underwater-text-effect-online-682.html'
if (/logomaker/.test(command)) link = 'https://en.ephoto360.com/free-bear-logo-maker-online-673.html'
if (/cartoonstyle/.test(command)) link = 'https://en.ephoto360.com/create-a-cartoon-style-graffiti-text-effect-online-668.html'
if (/papercutstyle/.test(command)) link = 'https://en.ephoto360.com/multicolor-3d-paper-cut-style-text-effect-658.html'
if (/watercolortext/.test(command)) link = 'https://en.ephoto360.com/create-a-watercolor-text-effect-online-655.html'
if (/effectclouds/.test(command)) link = 'https://en.ephoto360.com/write-text-effect-clouds-in-the-sky-online-619.html'
if (/blackpinklogo/.test(command)) link = 'https://en.ephoto360.com/create-blackpink-logo-online-free-607.html'
if (/gradienttext/.test(command)) link = 'https://en.ephoto360.com/create-3d-gradient-text-effect-online-600.html'
if (/summerbeach/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-free-595.html'
if (/luxurygold/.test(command)) link = 'https://en.ephoto360.com/create-a-luxury-gold-text-effect-online-594.html'
if (/multicoloredneon/.test(command)) link = 'https://en.ephoto360.com/create-multicolored-neon-light-signatures-591.html'
if (/sandsummer/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-576.html'
if (/galaxywallpaper/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-wallpaper-mobile-online-528.html'
if (/1917style/.test(command)) link = 'https://en.ephoto360.com/1917-style-text-effect-523.html'
if (/makingneon/.test(command)) link = 'https://en.ephoto360.com/making-neon-light-text-effect-with-galaxy-style-521.html'
if (/royaltext/.test(command)) link = 'https://en.ephoto360.com/royal-text-effect-online-free-471.html'
if (/freecreate/.test(command)) link = 'https://en.ephoto360.com/free-create-a-3d-hologram-text-effect-441.html'
if (/galaxystyle/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-style-free-name-logo-438.html'
if (/lighteffects/.test(command)) link = 'https://en.ephoto360.com/create-light-effects-green-neon-online-429.html'
let haldwhd = await ephoto(link, q)
conn.sendMessage(m.chat, { image: { url: haldwhd }, caption: `powerewd by ${botName}` }, { quoted: m })
}
break
//==============================//
 case 'jadian': {
if (!isGroup) return onlyGroup()
let member = groupMembers.map(u => u.id)
let orang = member[Math.floor(Math.random() * member.length)]
let jodoh = member[Math.floor(Math.random() * member.length)]
let jawab = `Ciee yang jadian ❤️ Jangan lupa pajak jadiannya yee

@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
let menst = [orang, jodoh]
conn.sendMessage(from, { text: jawab, mentions: menst },{quoted: m}) 
}
break
// ===================================== //
case 'jodohku':{
if (!isGroup) return onlyGroup()
let member = groupMembers.map(u => u.id)
let jodoh = member[Math.floor(Math.random() * member.length)]
let jawab = `Jodoh kamu adalah @${jodoh.split('@')[0]}`
let menst = [jodoh]
conn.sendMessage(from, { text: jawab, mentions: menst }, { quoted: m })
}
break
case 'bisakah':{
if (!isGroup) return m.reply('Kusus group')
const bisakah = body.slice(0)
const bisa =['BISA','Tidak Bisa','Oh tentu saja bisa dong','Udah dari lahir dia bisa kaya gitu kak 😂˜„','Oh tentu saja tidak bisa','Wuih bisa bisa','Ga mao jawab ah lu wibu','Tentu saja bisa eh tapi boong awokawok ','Engga engga dia ga bisa','Enggaklah','Aku ga mao jawbab 😆™‚','Rahasia dong','Ulangi Tod gua ga paham','Mana gua tau anjir']
const keh = bisa[Math.floor(Math.random() * bisa.length)]
conn.sendMessage(from, { contextInfo: { externalAdReply: { showAdAttribution: true,
title: `${week} , ${calender}⌟`,previewType:"PHOTO",thumbnail: its,sourceUrl: `https://www.instagram.com/ehanzdhoanx`,}
}, text: '*Pertanyaan : '+bisakah+'*\n\n*Jawaban :* '+ keh }, { quoted: m })
}
break
case 'gimana':
case 'gimanadong':
case 'bagaimanakah':{
if (!isGroup) return m.reply('Kusus group')
const bagaimanakah = body.slice(0)
const bagai =['Kita Kenal?','Nanya Terus deh','Tidak Tahu','Gua tabok boleh ?','Cari Aja Sendiri','Kurang Tahu','Mana Saya Tahu, Saya kan ikan','Hah kamu tanya sama aku trus aku tanya ke siapa dong','Whahahaha ga tau 😑']
const mana = bagai[Math.floor(Math.random() * bagai.length)]

    
 conn.sendMessage(from, { contextInfo: { externalAdReply: { showAdAttribution: true,
title: `${week} , ${calender}ㅤㅤㅤㅤㅤㅤㅤㅤㅤ`,body:`⌜ ${ucapanWaktu} ⌟`,previewType:"PHOTO",thumbnail: its,sourceUrl: `https://www.instagram.com/ehanzdhoanx`,}
}, text: '*Pertanyaan : '+bagaimanakah+'*\n\n*Jawaban :* '+ mana}, { quoted: m })
}
break
case 'apakah':{
if (!isGroup) return m.reply('Kusus group')
const apakah = body.slice(0)
const apa =['iya dong jelas itu','Tidak lah','Oh tentu saja tidak','Ya mana saya tau kok tanya saya','Rahasia dong','ga usah di tanya emang udah kaya gitu dia','Au ah mending mandi','Bentar aku lagi berak','Knpa emang kamu suka sama dia yak ??','Haha mna mungkin 👻']
const kah = apa[Math.floor(Math.random() * apa.length)]
conn.sendMessage(from, { contextInfo: { externalAdReply: { showAdAttribution: true,
title: `${week} , ${calender}ㅤㅤㅤㅤㅤㅤㅤㅤㅤ`,body:`⌜ ${ucapanWaktu} ⌟`,previewType:"PHOTO",thumbnail: its,sourceUrl: `wa.me/6281316643491`,}
}, text: '*Pertanyaan : '+apakah+'*\n\n*Jawaban :* '+ kah}, { quoted: m })
}
break
case 'kapankah':{
if (!isGroup) return m.reply('Kusus group')
const kapankah = body.slice(0)
const kapan =['Besok','Lusa','1 Hari Lagi','2 Hari Lagi','3 Hari Lagi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','7 Bulan Lagi','8 Bulan Lagi','9 Bulan Lagi','10 Bulan Lagi','11 Bulan Lagi','1 Tahun lagi','2 Tahun lagi','3 Tahun lag0i','4 Tahun lagi','5 Tahun lagi','6 Tahun lagi','7 Tahun lagi','8 Tahun lagi','9 Tahun lagi','10 Tahun lagi']
const koh = kapan[Math.floor(Math.random() * kapan.length)]
conn.sendMessage(from, { contextInfo: { externalAdReply: { showAdAttribution: true,
title: `${week} , ${calender}ㅤㅤㅤㅤㅤㅤㅤㅤㅤ`,body:`⌜ ${ucapanWaktu} ⌟`,previewType:"PHOTO",thumbnail: its,sourceUrl: `https://www.instagram.com/ehanzdhoanx`,}
}, text: '*Pertanyaan : '+kapankah+'*\n\n*Jawaban :* '+ koh}, { quoted: m })
}
break
    case 'watakcek': case 'cekwatak':
const watak = body.slice(0)
const wa =['Penyayang','Pemurah','Pemarah','Pemaaf','Penurut','Baik','Baperan','Baik Hati','penyabar','UwU','top deh, pokoknya','Suka Membantu']
const tak = wa[Math.floor(Math.random() * wa.length)]
conn.sendMessage(from, { text: 'Pertanyaan : *'+watak+'*\n\nJawaban : '+ tak}, { quoted: fkontak })
break				
    case 'hobbycek': case 'cekhobby':
const hobby = body.slice(0)
const hob =['Memasak','Membantu Atok','Mabar','Nobar','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
const by = hob[Math.floor(Math.random() * hob.length)]
conn.sendMessage(from, { text: 'Pertanyaan : *'+hobby+'*\n\nJawaban : '+ by}, { quoted: fkontak })
break
case 'cebelapaimutciaku': case 'seberapaimutsiaku':{
if (!isGroup) return m.reply('Kusus group')
const edgar = body.slice(0)
const nanya =['*79%*\n\nImut Banget Loh Kawai><','*15%*\n\nKamu imut kata mamakmu:v🗿','*30%*\n\nMene Ketehe Kok Tanya saya\nMinimal Mandi🗿','*28%*\n\nIya deh Cipaling Imut;)','*100%*\n\nPap imutnya dulu dong:v😘']
const pret = nanya[Math.floor(Math.random() * nanya.length)]
conn.sendMessage(from, { contextInfo: { externalAdReply: { showAdAttribution: true,
title: `RangelChan`,body:`⌜ ${ucapanWaktu} ⌟`,previewType:"PHOTO",thumbnail: its,sourceUrl: `https://www.instagram.com/ehanzdhoanx`,}
}, text: '*Pertanyaan : '+edgar+'*\n\n*Jawaban :* '+ pret}, { quoted: m })
}
break
    case 'cekmemek':
			case 'cekmeki':
				 if (!isGroup) return onlyGroup()
if (!q) return m.reply('tag temanmu!')
				const persengayy = body.slice(0)
          const gay = ["*Udah Ga Perawan:v*\n• Warna Item🙈\n• Bulu Lebat\n• Katanya Polos Ko Lima Jari Lolos Chuackk","*Masih Perawan*\n• Warna Pink🤤\n• Tidak Berbulu\n• Wah Yang ini Buat Owner Ku Aja😋","*Bjir Bau 😵‍💫*\n\n• Kang Colmek\n• Sangat Lebat:v\n• Ishh Sarang Jin Itu😵","*Masih Perawan*\n• Warna Putih Mati\n• Masih Polos\n• Sepertinya Anda Butuh Kehangatan Dari Owner ku🥸 ","*Meki nya Semu Coklat*\n • Korban Pemerkosaan 😑\n• Lu Sih Main Ma Kumpulan Cowo Sengklek\n• Sebaiknya Jan Terlalu Gegabah 🤧","*Normal Seperti Biasanya*\n• Wuanjay Ko Bulu Nya Pada Kriput🙈\n• Ternyata Oh Ternyata Kamu Suka Lesby🫤","*Bahaya Noh Gan*\n• Udah Kena Virus\n• Kalo wik wik Ntar Ke Patil Cowoknya\n😶‍🌫️Takut BerNanah Kelamin Ku ntarr😬","*Lah Ireng Amat bjirr*\n• Hati² Sama Ni Orang Beneran Dah\n• Jangankan Pria Hewan Pun Dia Layani🫣","*74%*\n*Astagfirullah Kabur Gan🏃🌬️*"]
				const kl = gay[Math.floor(Math.random() * gay.length)]
conn.sendMessage(from, { contextInfo: { externalAdReply: { showAdAttribution: true,
title: `${week} , ${calender}ㅤㅤㅤㅤㅤㅤㅤㅤㅤ`,body:`⌜ ${ucapanWaktu} ⌟`,previewType:"PHOTO",thumbnail: its,sourceUrl: `https://www.instagram.com/ehanzdhoanx`,}
}, text :'Hasil Dari: *'+persengayy+'*\n\nJawaban : '+kl}, { quoted: fkontak })
				break  

			case 'cekkontol':
				if (!isGroup) return onlyGroup()
if (!q) return setReply('Mana Nama?')
				
	const persenbucin = body.slice (0)
    const bucin =
          ["Hadehh🤦\n[ Dah Item Bauk Lagi ishh🤮 ]","9%\n\nMasih Kecil Ini Mah Ketutup Ama bulu komt nya🗿 Ae","Nakk Masih Kecil","28%\n\nYoalahh hmm","34%\n\nMayan Lah","48%\n\nGatau","59%\n\nBiasa Kang Coli Mah Tityd nya Item🗿","apacoba\nKasian Mana Masih Muda","itu tityd apa terong"," Ya Ampun"]
				const ehan = bucin[Math.floor(Math.random() * bucin.length)]
    conn.sendMessage(from, { contextInfo: { externalAdReply: { showAdAttribution: true,
title: `${week} , ${calender}ㅤㅤㅤㅤㅤㅤㅤㅤㅤ`,body:`⌜ ${ucapanWaktu} ⌟`,previewType:"PHOTO",thumbnail: its,sourceUrl: `https://www.instagram.com/ehanzdhoanx`,}
}, 
text : 'cekkomtlo🗿: *'+persenbucin+'*\n\nJawaban : '+ ehan}, { quoted: fkontak })
				break 
case 'wangy':
              if (!q) return setReply('contoh wangy memek')
              let qq = q.toUpperCase()
              let awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${qq} wangyy aku mau nyiumin aroma wangynya ${qq} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${qq} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${qq} AAAAA LUCCUUUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${qq} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${qq} gw ... ${qq} di laptop ngeliatin gw, ${qq} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${qq} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
              setReply(awikwok)
              break
case 'genjot' :
if (!q) return reply('Yang ingin di genjot sapa we')
let ahah = q.toUpperCase()
              let mamah = `${ahah} Buruan, panggil gue SIMP, ato BAPERAN. ini MURNI PERASAAN GUE. Gue pengen genjot bareng ${ahah}. Ini seriusan, suaranya yang imut, mukanya yang cantik, apalagi badannya yang aduhai ningkatin gairah gue buat genjot ${ahah}. Setiap lapisan kulitnya pengen gue jilat. Saat gue mau crot, gue bakal moncrot sepenuh hati, bisa di perut, muka, badan, teteknya, sampai lubang burit pun bakal gue crot sampai puncak klimaks. Gue bakal meluk dia abis gue moncrot, lalu nanya gimana kabarnya, ngrasain enggas bareng saat telanjang. Dia bakal bilang kalau genjotan gue mantep dan nyatain perasaannya ke gue, bilang kalo dia cinta ama gue. Gue bakal bilang balik seberapa gue cinta ama dia, dan dia bakal kecup gue di pipi. Terus kita ganti pakaian dan ngabisin waktu nonton film, sambil pelukan ama makan hidangan favorit. Gue mau ${ahah} jadi pacar, pasangan, istri, dan idup gue. Gue cinta dia dan ingin dia jadi bagian tubuh gue. Lo kira ini copypasta? Kagak cok. Gue ngetik tiap kata nyatain prasaan gue. Setiap kali elo nanya dia siapa, denger ini baik-baik : DIA ISTRI GUE. Gue sayang ${ahah}, dan INI MURNI PIKIRAN DAN PERASAAN GUE.`
              setReply(mamah)
break
case 'perkosa':
if (!q) return setReply('siapa yang ingin kau perkosa')
let aww = q.toUpperCase()
              let kondom = `GW BENAR-BENAR PENGEN JILAT KAKI *${aww}*,GW PENGEN BANGET MENJILAT SETIAP BAGIAN KAKINYA SAMPAI AIR LIUR GW BERCUCURAN KAYAK AIR KERINGAT LALU NGENTOD DENGAN NYA SETIAP HARI SAMPAI TUBUH KITA MATI RASA, YA TUHAN GW INGIN MEMBUAT ANAK ANAK DENGAN *${aww}* SEBANYAK SATU TIM SEPAK BOLA DAN MEMBUAT SATU TIM SEPAK BOLA LAINYA UNTUK MELAWAN ANAK-ANAK TIM SEPAK BOLA PERTAMA GW  YANG GW BUAT SAMA *${aww}* GW PENGEN MASUK KE SETIAP LUBANG TUBUHNYA, MAU ITU LUBANG HIDUNG LUBANG MATA MAUPUN LUBANG BOOL, KEMUDIAN GW AKAN MANUSIA YANG TIDAK BISA HIDUP KALO GW GA ENTOD SETIAP HARI.`
setReply(kondom)
break
case 'curhat':
if (!q) return setReply('siapa ingin kau ajak curhat')
let cur = q.toUpperCase()
              let hat = `Usiaku 19 tahun. Aku sangat mencintai ${cur}, aku punya semua Figurine dan wallpapernya. Aku berdoa setiap malam dan berterima kasih atas segala hal yang telah ia berikan kepadaku. "${cur} adalah cinta" aku bilang "${cur} adalah Tujuan Hidupku". Temanku datang ke kamarku dan berkata "HALU LU ANJING !!". Aku tau dia cemburu atas kesetiaanku kepada ${cur}. Lalu kukatakan padanya "BACOT NJING !!". Temanku menampol kepalaku dan menyuruhku untuk tidur. Kepalaku sakit dan aku menangis. Aku rebahan di kasur yang dingin, lalu ada sesuatu yang hangat menyentuhku. Ternyata ${cur} datang ke dalam kamarku, Aku begitu senang bertemu ${cur}. Dia membisikan ke telingaku, "Kamu adalah impianku" Dengan tangannya dia meraih diriku. Aku melebarkan pantatku keatas demi ${cur}. Dia menusukan sesuatu kedalam Anggusku. begitu sakit, tapi kulakukan itu demi ${cur}. Aku ingin memberikan kepuasan kepada ${cur}. Dia meraum bagaikan singa, disaat dia melepaskan cintanya kedalam Anggusku. Temanku masuk kekamarku dan berkata "....... Anjing". ${cur} melihat temanku dan berkata " Semua sudah berakhir" Dengan menggunakan kemampuannya Stellar Restoration ${cur} pergi meninggalkan kamarku. "${cur} itu cinta" "${cur} itu kehidupan".`
  setReply(hat)
break
case 'nenen':
if (!q) return setReply('nene nin siapa:v')
let nyot = q.toUpperCase()
              let pentil = `NENEN NENEN KEPENGEN NENEN SAMA ${nyot}. TETEK GEDE NAN KENCANG MILIK ${nyot} MEMBUATKU KEPENGEN NENEN. DIBALUT PAKAIAN KETAT YANG ADUHAI CROOOOTOTOTOTOTOT ANJING SANGE GUA BANGSAT. ${nyot}, PLIS DENGERIN BAIK BAIK. TOLONG BUKA BAJU SEBENTAR SAJA PLISSS TOLOOONG BANGET, BIARKAN MULUT KERINGKU BISA MENGECAP NENEN ${nyot}. BIARKAN AKU MENGENYOT NENENMU ${nyot}. AKU RELA NGASIH SESEMBAHAN APA AJA BERAPAPUN ITU DUIT YANG AKU BAKAR KHUSUS TERKHUSUS BUATMU. TAPI TOLOOOONG BANGET BUKA BAJUMU AKU MAU NENEN. NENEN NENEEEEN NENEN ${nyot} WANGIIII`
setReply(pentil)
break
case 'bucinsertifikat':
		    case 'sertifikatbucin':
			case 'bucinserti':
				if (args.length == 0) return setReply(`Example: ${prefix + command} ehanz & angel\n bjir lah love you`)
				setReply(mess.wait)
				let kueri = args.join(" ")
                conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/bucinserti?apikey=${api.Lol}&name=${kueri}`}, caption: 'Sertifikatnya kack'}, {quoted: m})
            break
case 'tololserti':
			case 'tololcert':
			case 'tololsertifikat':
			if (args.length == 0) return setReply(`Contoh: ${prefix + command} izmi Kontol`)
			setReply(mess.wait)
			let ytta = args.join(" ")
            conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/toloserti?apikey=${api.Lol}&name=${ytta}`}, caption: 'Sertifikatnya kack'}, {quoted: m})
            break
case 'pacarsertifikat':
			case 'pacarserti':
            if (args.length == 0) return setReply(`Usage: ${prefix + command} nama1|nama2`)
            setReply(mess.wait)
              let  get_args = args.join(" ").split("|")
              let  nik = get_args[0]
              let  prov = get_args[1]
			  let  titidnya = `Selamat yaa ${nik} ❤️ ${prov}`
            conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/pacarserti?apikey=${api.Lol}&name1=${nik}&name2=${prov}`}, caption: titidnya}, {quoted: m})
// ======= primbon ,=========//
case 'artinama': {
if (!q) return setReply( `Example : ${prefix + command} Ehanz Dhoanx`)
let anu = await primbon.arti_nama(q)
if (anu.status == false) return m.reply(anu.message)
let teks = `
∘ *Nama :* ${anu.message.nama}
∘ *Arti :* ${anu.message.arti}
∘ *Catatan :* ${anu.message.catatan}`
setReply(teks)
}
break	 
    
 // ===================================== //
case 'artimimpi': case 'tafsirmimpi': {
if (!q) return setReply( `Example : ${prefix + command} belanja`)
let anu = await primbon.tafsir_mimpi(q)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Mimpi :* ${anu.message.mimpi}
• *Arti :* ${anu.message.arti}
• *Solusi :* ${anu.message.solusi}`
setReply(teks)
}
break
 case 'pasangan': {
if (!q) return setReply( `Example : ${prefix + command} Ehanz|Angel`)
let [nama1, nama2] = q.split`|`
let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Nama Anda :* ${anu.message.nama_anda}
• *Nama Pasangan :* ${anu.message.nama_pasangan}
• *Sisi Positif :* ${anu.message.sisi_positif}
• *Sisi Negatif :* ${anu.message.sisi_negatif}`
setReply(teks)
}
break   
case 'ramalancinta': case 'ramalcinta': {
if (!q) return setReply( `Example : ${prefix + command} ehanz, 28, 6, 2004, angel, 16, 11, 2004`)
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = q.split`,`
let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Nama Anda :* ${anu.message.nama_anda.nama}
• *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}
• *Nama Pasangan :* ${anu.message.nama_pasangan.nama}
• *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}
• *Sisi Positif :* ${anu.message.sisi_positif}
• *Sisi Negatif :* ${anu.message.sisi_negatif}
• *Catatan :*
${anu.message.catatan}`
setReply(teks)
}
break   
case 'kecocokannama': 
case 'cocoknama': {
if (!q) return setReply( `Example : ${prefix + command} Ehanz, 28, 6, 2004`)
let [nama, tgl, bln, thn] = q.split`,`
let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Nama :* ${anu.message.nama}
• *Lahir :* ${anu.message.tgl_lahir}
• *Life Path :* ${anu.message.life_path}
• *Destiny :* ${anu.message.destiny}
• *Destiny Desire :* ${anu.message.destiny_desire}
• *Personality :* ${anu.message.personality}
• *Persentase :* ${anu.message.persentase_kecocokan}`
setReply(teks)
}
break 
    case 'kecocokanpasangan':
case 'cocokpasangan':
case 'pasangan': {
if (!q) return setReply( `Example : ${prefix + command} Dika|Novia`)
let [nama1, nama2] = q.split`|`
let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Nama Anda :* ${anu.message.nama_anda}
• *Nama Pasangan :* ${anu.message.nama_pasangan}
• *Sisi Positif :* ${anu.message.sisi_positif}
• *Sisi Negatif :* ${anu.message.sisi_negatif}`
setReply(teks)
}
break
case 'jadiannikah': {
if (!q) return setReply( `Example : ${prefix + command} 6, 12, 2020`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Tanggal Pernikahan :* ${anu.message.tanggal}
• *karakteristik :* ${anu.message.karakteristik}`
setReply(teks)
}
break
case 'sifatusaha': {
if (!q) return setReply( `Example : ${prefix + command} 28, 12, 2021`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Lahir :* ${anu.message.hari_lahir}
• *Usaha :* ${anu.message.usaha}`
setReply(teks)
}
break
    case 'rejeki': 
case 'rezeki': {
if (!q) return setReply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Lahir :* ${anu.message.hari_lahir}
• *Rezeki :* ${anu.message.rejeki}
• *Catatan :* ${anu.message.catatan}`
setReply(teks)
}
break
case 'pekerjaan':  {
if (!q) return setReply( `Example : ${prefix + command}  7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Lahir :* ${anu.message.hari_lahir}
• *Pekerjaan :* ${anu.message.pekerjaan}
• *Catatan :* ${anu.message.catatan}`
setReply(teks)
}
break
case 'ramalnasib': 
case 'nasib': {
if (!q) return setReply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.ramalan_nasib(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Analisa :* ${anu.message.analisa}
• *Angka Akar :* ${anu.message.angka_akar}
• *Sifat :* ${anu.message.sifat}
• *Elemen :* ${anu.message.elemen}
• *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`
setReply(teks)
}
break 
case 'penyakit': {
if (!q) return setReply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Analisa :* ${anu.message.analisa}
• *Sektor :* ${anu.message.sektor}
• *Elemen :* ${anu.message.elemesektorn}
• *Catatan :* ${anu.message.catatan}`
setReply(teks)
}
break
case 'artitarot': 
case 'tarot': {
if (!q) return setReply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Lahir :* ${anu.message.tgl_lahir}
• *Simbol Tarot :* ${anu.message.simbol_tarot}
• *Arti :* ${anu.message.arti}
• *Catatan :* ${anu.message.catatan}`
setReply(teks)
}
break
case 'fengshui': {
if (!q) return setReply( `Example : ${prefix + command} Rangel, 1, 2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`)
let [nama, gender, tahun] = q.split`,`
let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Nama :* ${anu.message.nama} 
• *Lahir :* ${anu.message.tahun_lahir}
• *Gender :* ${anu.message.jenis_kelamin}
• *Angka Kua :* ${anu.message.angka_kua}
• *Kelompok :* ${anu.message.kelompok}
• *Karakter :* ${anu.message.karakter}
• *Sektor Baik :* ${anu.message.sektor_baik}
• *Sektor Buruk :* ${anu.message.sektor_buruk}`
setReply(teks)
}
break
case 'haribaik': {
if (!q) return setReply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.petung_hari_baik(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Lahir :* ${anu.message.tgl_lahir}
•™*Kala Tinantang :* ${anu.message.kala_tinantang}
• *Info :* ${anu.message.info}
• *Catatan :* ${anu.message.catatan}`
setReply(teks)
}
break
case 'harisangar': 
case 'taliwangke': {
if (!q) return setReply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Lahir :* ${anu.message.tgl_lahir}
• *Hasil :* ${anu.message.result}
• *Info :* ${anu.message.info}
• *Catatan :* ${anu.message.catatan}`
setReply(teks)
}
break
case 'harisial': {
if (!q) return setReply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Hari Lahir :* ${anu.message.hari_lahir}
• *Tanggal Lahir :* ${anu.message.tgl_lahir}
• *Hari Naas :* ${anu.message.hari_naas}
• *Info :* ${anu.message.catatan}
• *Catatan :* ${anu.message.info}`
setReply(teks)
}
break
case 'harinaga': {
if (!q) return setReply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Hari Lahir :* ${anu.message.hari_lahir}
• *Tanggal Lahir :* ${anu.message.tgl_lahir}
• *Arah Naga Hari :* ${anu.message.arah_naga_hari}
• *Catatan :* ${anu.message.catatan}`
setReply(teks)
}
break
case 'arahrejeki': 
case 'arahrezeki': {
if (!q) return setReply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Hari Lahir :* ${anu.message.hari_lahir}
• *tanggal Lahir :* ${anu.message.tgl_lahir}
• *Arah Rezeki :* ${anu.message.arah_rejeki}
• *Catatan :* ${anu.message.catatan}`
setReply(teks)
}
break
case 'peruntungan': {
if (!q) return setReply( `Example : ${prefix + command} Ehanz, 28, 6, 2004, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`)
let [nama, tgl, bln, thn, untuk] = q.split`,`
let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Nama :* ${anu.message.nama}
• *Lahir :* ${anu.message.tgl_lahir}
• *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}
• *Hasil :* ${anu.message.result}
• *Catatan :* ${anu.message.catatan}`
}
break
case 'weton': 
case 'wetonjawa': {
if (!q) return setReply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.weton_jawa(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Tanggal :* ${anu.message.tanggal}
• *Jumlah Neptu :* ${anu.message.jumlah_neptu}
• *Watak Hari :* ${anu.message.watak_hari}
• *Naga Hari :* ${anu.message.naga_hari}
• *Jam Baik :* ${anu.message.jam_baik}
• *Watak Kelahiran :* ${anu.message.watak_kelahiran}`
setReply(teks)
}
break
case 'karakter': {
if (!q) return setReply( `Example : ${prefix + command} Ehanz, 28, 6, 2004`)
let [nama, tgl, bln, thn] = q.split`,`
let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Nama :* ${anu.message.nama}
• *Lahir :* ${anu.message.tgl_lahir}
• *Garis Hidup :* ${anu.message.garis_hidup}`
setReply(teks)
}
break
case 'keberuntungan': {
if (!q) return setReply( `Example : ${prefix + command} Ehanz, 28, 6, 2004`)
let [nama, tgl, bln, thn] = q.split`,`
let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Nama :* ${anu.message.nama}
• *Lahir :* ${anu.message.tgl_lahir}
• *Hasil :* ${anu.message.result}`
setReply(teks)
}
break
case 'masasubur': {
if (!q) return setReply( `Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`)
let [tgl, bln, thn, siklus] = q.split`,`
let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
if (anu.status == false) return m.reply(anu.message)
let teks = `
•  *Hasil :* ${anu.message.result}
•  *Catatan :* ${anu.message.catatan}`
setReply(teks)
}
break
  case 'zodiak': 
case 'zodiac': {
if (!q) return setReply( `Example : ${prefix + command} 7 7 2005`)
let zodiak = [
                    ["capricorn", new Date(1970, 0, 1)],
                    ["aquarius", new Date(1970, 0, 20)],
                    ["pisces", new Date(1970, 1, 19)],
                    ["aries", new Date(1970, 2, 21)],
                    ["taurus", new Date(1970, 3, 21)],
                    ["gemini", new Date(1970, 4, 21)],
                    ["cancer", new Date(1970, 5, 22)],
                    ["leo", new Date(1970, 6, 23)],
                    ["virgo", new Date(1970, 7, 23)],
                    ["libra", new Date(1970, 8, 23)],
                    ["scorpio", new Date(1970, 9, 23)],
                    ["sagittarius", new Date(1970, 10, 22)],
                    ["capricorn", new Date(1970, 11, 22)]
].reverse()
function getZodiac(month, day) {
let d = new Date(1970, month - 1, day)
return zodiak.find(([_,_d]) => d >= _d)[0]
}
let date = new Date(q)
if (date == 'Invalid Date') throw date
let d = new Date()
let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]
let zodiac = await getZodiac(birth[1], birth[2])
let anu = await primbon.zodiak(zodiac)
if (anu.status == false) return m.reply(anu.message)
let teks = `
∘ *Zodiak :* ${anu.message.zodiak}
∘ *Nomor :* ${anu.message.nomor_keberuntungan}
∘ *Aroma :* ${anu.message.aroma_keberuntungan}
∘ *Planet :* ${anu.message.planet_yang_mengitari}
∘ *Bunga :* ${anu.message.bunga_keberuntungan}
∘ *Warna :* ${anu.message.warna_keberuntungan} 
∘ *Batu :* ${anu.message.batu_keberuntungan}
∘ *Elemen :* ${anu.message.elemen_keberuntungan}
∘ *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}
∘ *Catatan :* ${anu.message.catatan}`
setReply(teks)
}
break
//========= GROUO FEATURE ======//
case 'getname':
if(isGroup) {
console.log(users)
const sname = await conn.getName(users)
setReply(sname)
} else if(!isGroup) {
const yahu = await conn.getName(users)
setReply(yahu)
} else{
setReply("Reply targetnya")
}
break
case 'getpp':{
if (!isGroup) return setReply ("Digunakan Khsus Dalam Group")
if(isQuotedTag || isQuotedReply ){
if (m.message.extendedTextMessage === null || m.message.extendedTextMessage === undefined) return setReply ('Reply targetnya kak atau Tag')
let userss = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
let ghosst = userss
	try {
   var ppuser = await conn.profilePictureUrl(ghosst, 'image')
} catch (err) {
   var ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
conn.sendMessage(from, { image: { url: ppuser }}, { quoted: m })
}
}
break 
case 'gc':
  if (!isGroup) return setReply(mess.group)
	if (!isGroupAdmins && !isOwner) return onlyAdmin()
	if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
	if (!q) return reply(`Kirim perintah ${command} _options_\nOptions : close & open\nContoh : ${command} close`)
	if (args[0] == "close") {
	conn.groupSettingUpdate(from, 'announcement')
	setReply(`Sukses mengizinkan hanya admin yang dapat mengirim pesan ke grup ini`)
	} else if (args[0] == "open") {
	conn.groupSettingUpdate(from, 'not_announcement')
	setReply(`Sukses mengizinkan semua peserta dapat mengirim pesan ke grup ini`)
	} else {
	setReply(`Kirim perintah ${command} _options_\nOptions : close & open\nContoh : ${command} close`)
	}
	break
case 'caridoi':
    case 'cariteman':{
    let userny = Object.values(db.data.users);
    let teman = pickRandom(userny)
    let namTemen = teman.name
    let nomerTemen = teman.id
    setTimeout(() => {
    setReply('Sedang mencari....')
    }, 1000)
    setTimeout(() => {
    setReply('Berhasil mendapatkan satu org')
    }, 5000)
    setTimeout(() => {
    conn.sendContact(from, nomerTemen, namTemen, m)
    }, 9000)
    }
    break
case  'getppgc':
	if (!isGroup) return 
	setReply(mess.wait)
	try {
	var ppimg = await conn.profilePictureUrl(from, 'image')
	} catch (err) {
	console.log(err)
	var ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
	}
	await conn.sendMessage(from, { image: { url: ppimg }}, { quoted: m })
	break
 case 'banchat':{
if (!isGroupAdmins) return setReply("Hanya admin")
if (!isGroup) return setReply(mess.only.group)
if (isBanchat) return setReply(`udah di ban`)
db.data.chats[from].banchat = true
setReply(`Bot berhasil Ban di group ini`)
}
break

case 'unbanchat':
if (!isOwner) return onlyOwner()
try {
if (!isBanchat) return setReply(`udah di UnBan`)
db.data.chats[from].banchat = false
setReply(`Bot telah di Unban di group ini`)
} catch (err){
console.log(err)
setReply(`${err}`)
}
break
case 'afk':{
    if (!isGroup) return onlyGroup()
    if (!q) return setReply("Alasan afk afa ?")
    let me = m.sender
    let user = global.db.data.users[m.sender]
    user.afk = + new Date
    user.afkReason = q
    let wikwik = ` 💢 Kamu telah AFK\nAlasan ${q ? ': ' + q : ''}`
 conn.sendMessage(from, { 
text: `${wikwik}`,
contextInfo:{
mentionedJid:[me],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": `${botName}`,
"body": 'simpel bot by ehanz',
"containsAutoReply": true,
"mediaType": 2, 
"thumbnailUrl": 'https://telegra.ph/file/8be8f5d2ae1fe973d0c40.jpg' ,
}
}
},{ 
quoted: m })
}
break
case  'intro': {
let teks = 'Member baru INTRO  :)\nNama lengkap:\nNama panggilan:\nHobi:\nUmur:\nGender:\nKelas:\nTinggi badan:\nBeratbadan :\nAgama:\nGolongan darah:\nStatus:\nNama pacar:\nJumlah mantan:\nNama mantan:\nNama bapak :\nNama ibu : \nNama kakak:\nKakak online:\nKakak kandung\tiri:\nJumlah kakak:\nNama adek:\nAdek online:\nAdek kandung\tiri:\nJumlah adek:\nNama kakek:\nKakek dari ayah :\nKakek dari ibu :\nNama nenek:\nNenek dari ayah :\nNenek dari ibu :\nNama bibi:\nBibi dari ayah :\nBibi dari ibu :\nNama paman:\nBibi dari ayah :\nBibi dari ibu :\nKTP:\nSIM:\nSTNK:\nBPKB:\nKK:\nAlamat rumah:\nRT:\nRW:\nKELURAHAN:\nKECAMATAN:\nKABUPATEN:\nKOTA:\nPROVINSI:\nPLANET:\nGALAXY:\nUNIVERSE:\nLANGIT:\nDARATAN:\nLAUTAN:\nKEPULAUAN:\nSAMUDRA:\nUKURAN SEPATU:\nUKURAN BAJU:\nUKURAN CELANA:\nLEBAR PINGGANG:\nPANJANG TANGAN:\nPANJANG KAKI:\nMAKANAN FAVORIT:\nMINUMAN FAVORIT:\nFILM FAVORIT:\nSINETRON FAVORIT:\nGAME FAVORIT:\nANIME FAVORIT:\nMANGA FAVORIT:\nMANHUA FAVORIT:\nMANHWA FAVORIT:\nCHANNEL YOUTUBE:\nINSTAGRAM:\nTWITTEER:\nFACEBOOK:\nMUSIC FAVORIT:\nSIFAT:\nSIKAP:\nZODIAK:\nTANGGAL LAHIR:\nMERK HP:\nMERK MOTOR:\nMERK MOBIL:\nTINGKAT RUMAH:\nALAMAT SEKOLAH:\nUkuran daleman:\nUkuran atasan :\nDiameter kepala :\nStatistik tubuh:\nDiameter perut :\nDiameter lengan :\nDiameter paha :\nDiameter lutut :\nDiameter betis:\nPanjang tangan :\nPanjang kaki :\nPanjang kepala :\nLebar hidung :\nCita cita :\nHobi :\nJenis hewanpeliharaan :\nNama hewan:\nDiameter rumah:\nWaifu:\nHusbu:\nLoli kesukaan :\nShota kesukaan :\nPunya brp teman :\nTeman online :\nTeman offline :\nTeman main game:\nTeman sekolah:\nTemen rumah:'
setReply(teks)
}
break    
case 'kick': {
if (!isGroupAdmins && !isOwner) return onlyAdmin()
if (!isGroup) return setReply(mess.only.group)
if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
if(!Input) return setReply("Tag/Mention/Masukan nomer target")
if (Input.startsWith('08')) return setReply('Awali nomor dengan 62')
await conn.groupParticipantsUpdate(from, [Input], 'remove').then((res) => setReply(`Berhasil mengeluarkan  ${Input.split("@")[0]} ke dalam group ${groupName}`)).catch((err) => setReply(jsonformat(err)))
}
break
case 'addkick':{
if (!isGroupAdmins && !isOwner) return onlyAdmin()
if (!isGroup) return setReply(mess.only.group)
if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
if(!Input) return setReply("reply/tag/nomer target")
let grup = db.data.kickon[from]
let number = Input.split("@")[0]
if(grup){
if(grup.includes(number)) return setReply("Target sudah ada di database")
grup.push(number)
setReply(`Berhasil memasukan ${number} ke dalam target kick`)
} else {
//db.data.kickon[from] = []
grup.push(number)
let teks =`Berhasil memasukan ${number} ke dalam target kick
dan telah menandai user sebagai user biadap`
setReply(teks)
}
}
break

case 'delkick':{
if (!isGroupAdmins && !isOwner) return onlyAdmin()
if (!isGroup) return setReply(mess.only.group)
if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
let grup = db.data.kickon[from]
if(!grup) return setReply("Gunakan fitur addkick terlebih dahulu")
let number = Input.split("@")[0]
grup.splice(grup.indexOf(number,1))
setReply("Berhasil menghapus user dari target kick")
}
break

case 'listkick':{
let kick = db.data.kickon[from]
if(!kick) return setReply("Group ini tidak memiliki listkick")
let banya = `*List Kick*\nJumlah : ${kick.length}\n\n`
kick.map(function(e, i){
banya +=(i+1)+`. Nomer : wa.me/${e}\n\n`
});
setReply(banya)
}
break
case 'add': {
if (!isGroupAdmins && !isOwner) return onlyAdmin()
if (!isGroup) return setReply(mess.only.group)
if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
if(!Input) return setReply("Tag/Mention/Masukan nomer target")
if (Input.startsWith('08')) return setReply('Awali nomor dengan 62')
await conn.groupParticipantsUpdate(from, [Input], 'add').then((res) =>{
if(res[0].status == 200) setReply(`Berhasil menambahkan ${Input.split("@")[0]} ke dalam group ${groupName}`)
if(res[0].status == 403) setReply(`Gagal menambahkan ${Input.split("@")[0]} ke dalam group ${groupName}`)
}).catch((err) => setReply(jsonformat(err)))
}
break

case 'demote':
case    'unadmin':{
if (!isGroupAdmins && !isOwner) return onlyAdmin()
if (!isGroup) return setReply(mess.only.group)
if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
await conn.groupParticipantsUpdate(from, [users], 'demote').then((res) => setReply(`Sukses Demote ${users}`)).catch((err) => setReply(jsonformat(err)))
}
break

case 'promote':
case     'admin': {
if (!isGroupAdmins && !isOwner) return onlyAdmin()
if (!isGroup) return setReply(mess.only.group)
if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
await conn.groupParticipantsUpdate(from, [users], 'promote').then((res) => setReply(`Sukses Promote ${users}`)).catch((err) => setReply(jsonformat(err)))
}
break

case 'opentime':
if (!isGroupAdmins) return onlyAdmin()
if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
if (args[1]=="detik") {var timer = args[0]*`1000`
} else if (args[1]=="menit") {var timer = args[0]*`60000`
} else if (args[1]=="jam") {var timer = args[0]*`3600000`
} else if (args[1]=="hari") {var timer = args[0]*`86400000`
} else {return setReply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
setReply(`Open time ${q} dimulai dari sekarang`)
setTimeout( () => {
const open = `*Tepat waktu* grup dibuka oleh admin\n sekarang member dapat mengirim pesan`
conn.groupSettingUpdate(from, 'not_announcement')
setReply(open)
}, timer)
break
case 'kickme':
try{
if (!isGroup) return setReply(mess.only.group)
if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
await conn.groupParticipantsUpdate(from, [sender], 'remove')
await setReply("Done wkwkw")
} catch (err){
setReply(`${err}`)
}
break
case 'tagme':{
if (!isGroup) return onlyGroup()
let menst = [sender]
conn.sendMessage(from, { text: `@${senderNumber}`, mentions: menst })
}
break
case 'closetime':
if (!isGroupAdmins) return onlyAdmin()
if (!isBotGroupAdmins) return setReply(mess.only.badmin)
if (args[1]=="detik") {var timer = args[0]*`1000`
} else if (args[1]=="menit") {var timer = args[0]*`60000`
} else if (args[1]=="jam") {var timer = args[0]*`3600000`
} else if (args[1]=="hari") {var timer = args[0]*`86400000`
} else {return setReply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
setReply(`Close time ${q} dimulai dari sekarang`)
setTimeout( () => {
const close = `*Tepat waktu* grup ditutup oleh admin\nsekarang hanya admin yang dapat mengirim pesan`
conn.groupSettingUpdate(from, 'announcement')
setReply(close)
}, timer)
break
case 'revoke':
if (!isGroup) return setReply(mess.only.group)
if (!isGroupAdmins) return onlyAdmin()
if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
await conn.groupRevokeInvite(from).then( res => {
setReply(`Sukses menyetel tautan undangan grup ini`)
}).catch(() => reply(mess.error.api))
break

case 'hidetag':
if (!isGroup) return setReply(mess.only.group)
if (!isGroupAdmins && !isOwner) return m.reply(mess.only.admin)
let mem = [];
groupMembers.map( i => mem.push(i.id) )
conn.sendMessage(from, { text: q ? q : '', mentions: mem })
break
case 'ban':
case    'banned':{
let alasan = ""
if (!isGroupAdmins && !isOwner)return setReply('hanya admin dan owner')
if (q.startsWith("+")) {
let woke = q.replace(new RegExp("[()+-/ +/]", "gi"), "")
let Name = await conn.getName(woke)
if(_ban.check(woke, ban)) return setReply("User sudah di ban sebelumnya")
_ban.add(Name,calender,woke,alasan, ban)
setReply( `Berhasil banned ${woke}`);
} else if(users){
let alasan = mentionByReply? q : mentionByTag? q.split("|")[1] : ""
if(alasan == undefined) alasan = "Tidak ada"
let Nomer = `${users.split("@")[0]}`
if(_ban.check(Nomer, ban)) return setReply("User sudah di ban sebelumnya")
let Name = await conn.getName(users)
if(ownerNumber.includes(users)) return setReply("Tidak bisa membanned owner")
_ban.add(Name,calender,Nomer,alasan, ban)
setReply( `Berhasil banned ${users.split("@")[0]}`);
} else setReply('Reply atau tag targetnya')
}
break

case 'unban':
case   'delban':
case   'unbanned':{
if (!isGroupAdmins && !isOwner)return setReply('hanya admin dan owner')
if (q.startsWith("+")) {
let woke = q.replace(new RegExp("[()+-/ +/]", "gi"), "")
if(!_ban.check(woke, ban)) return setReply("User sudah di unban sebelumnya")
_ban.del(woke, ban)
setReply( `Berhasil unbanned ${woke}`);
} else if(users){
let Nomer =`${users.split("@")[0]}`
if(!_ban.check(Nomer, ban)) return setReply("User sudah di unban sebelumnya")
_ban.del(Nomer, ban)
setReply(`Berhasil unbanned ${users.split("@")[0]}`);
} else setReply('Reply atau tag targetnya')
}
break

case 'listban':{
let banya = `*List Banned*\nJumlah : ${ban.length}\n\n`
ban.map(function(e, i){
banya +=(i+1)+`. Nomer : wa.me/${e.id}\n└▸ Tanggal : ${e.date}\n└▸ Alasan : ${e.reason} \n\n`
});
setReply(banya)
}
break
case 'infogc': {
	if(!isGroup) return setReply("Hanya bisa di dalam group")
	let _meta = await conn.groupMetadata(from)
	  console.log(_meta)
	let _img = await conn.profilePictureUrl(_meta.id, 'image') 

let caption = `*G R O U P I N F O*

*System* 
Anti Link gc : *${isAntilinkGc ? 'Aktif✅' : 'Mati❌'}*
Anti Link : *${isAntiLink ? 'Aktif✅' : 'Mati❌'}*
Anti Virtex : *${isAntiVirtex ? 'Aktif✅' : 'Mati❌'}*
Anti Wame : *${isAntiWame ? 'Aktif✅' : 'Mati❌'}*
Anti Asing : *${isKickarea ? 'Aktif✅' : 'Mati❌'}*
Anti Delete : *${isAntidelete ? 'Aktif✅' : 'Mati❌'}*
Anti Toxic : *${isAntiToxic ? 'Aktif✅' : 'Mati❌'}*
Anti Promosi *${Promosi2 ? 'Aktif✅' : 'Mati❌'}*
*Name :* ${_meta.subject}
 *ID Grup :* ${_meta.id}
 *Dibuat :* ${moment(_meta.creation * 1000).format('ll')}
 *Owner Grup :* ${_meta.subjectOwner}
 *Jumlah Admin :* ${_meta.participants.filter(x => x.admin === 'admin').length}
 *Jumlah Peserta :* ${_meta.participants.filter(x => x.admin === null).length}
 *Desc :* 
${_meta.desc}`

	await conn.sendMessage(from,{
	caption,
	image: await getBuffer(_img)
	},
	{ quoted: m }
	)
	}
	break
case 'ceksider': case 'sider':{
	if (!isGroupAdmins && !isOwner) return setReply(mess.only.admin)
    var lama = 86400000 * 7
    const now = new Date().toLocaleString("en-US", {
        timeZone: "Asia/Jakarta"
    });
    const milliseconds = new Date(now).getTime();
    let member = groupMetadata.participants.map(v => v.id)
    if (!q) {
        var pesan = "Harap aktif di grup karena akan ada pembersihan member setiap saat"
    } else {
        var pesan = q
    }
    var sum
    sum = member.length
    var total = 0
    var sider = []
    for (let i = 0; i < sum; i++) {
        let users = isGroup ? groupMetadata.participants.find(u => u.id == member[i]) : {}
        if ((typeof global.db.data.users[member[i]] == 'undefined' || milliseconds * 1 - global.db.data.users[member[i]].lastseen > lama) && !users.isAdmin && !users.isSuperAdmin) {
            if (typeof global.db.data.users[member[i]] !== 'undefined') {
            } else {
                total++
                sider.push(member[i])
            }
        }
    }
    if (total == 0) return conn.reply(from, `*Digrup ini tidak terdapat sider.*`, m)
  conn.reply(from, `*${total}/${sum}* anggota grup *${await conn.getName(from)}* adalah sider dengan alasan :\n1. Tidak aktif selama lebih dari 7 hari\n2. Baru join tetapi tidak pernah nimbrung\n\n_“${pesan}”_\n\n*LIST SIDER :*\n${sider.map(v => '  ○ @' + v.replace(/@.+/, '' + typeof global.db.data.users[v] == "undefined" ? ' Sider ' : ' Off ' + msToDate(milliseconds * 1 - global.db.data.users[v].lastseen))).join('\n')}`, m, {
        contextInfo: {
            mentionedJid: sider
        }
    })
}

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function msToDate(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  if (d == 0 && h == 0 && m == 0) {
        return "Baru Saja"
    } else {
        return [d, 'H ', h, 'J '].map(v => v.toString().padStart(2, 0)).join('')
    }  
}
break
case 'cekasalmember': {
  if (!m.isGroup) return setReply(mess.group)
  const participants = await conn.groupMetadata(m.chat).then(metadata => metadata.participants);
  let countIndonesia = 0;
  let countMalaysia = 0;
  let countUSA = 0;
  let countOther = 0;
  participants.forEach(participant => {
    const phoneNumber = participant.id.split('@')[0];
    if (phoneNumber.startsWith("62")) {
      countIndonesia++;
    } else if (phoneNumber.startsWith("60")) {
      countMalaysia++;
    } else if (phoneNumber.startsWith("1")) {
      countUSA++;
    } else if (phoneNumber.startsWith("+1")) {
      countOther++;
    } else {
      countOther++;
    }
  });
  const replyMessage = `Jumlah Anggota Grup Berdasarkan Negara:\n\nAnggota Indonesia: ${countIndonesia} 🇮🇩\nAnggota Malaysia: ${countMalaysia} 🇲🇾\nAnggota USA + OTHER : ${countUSA} 🇺🇲\nAnggota Negara Lain: ${countOther} 🏳️`;
  setReply(replyMessage);
  break;}
case 'setppgc':{
if (!isGroupAdmins) return onlyAdmin()
if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
if (isImage || isQuotedImage) {
let media = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
await conn.updateProfilePicture(from, { url: media })
.then( res => {
setReply(`Sukses`)
fs.unlinkSync(media)
}).catch(() => reply(mess.error.api))
} else {
setReply(`Kirim/balas gambar dengan caption ${command}`)
}
}
break
case 'deleteppgroup': case 'delppgc': case 'deleteppgc': case 'delppgroup': {
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !isOwner) return onlyAdmin()
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
    await conn.removeProfilePicture(from)
await setReply("Sukses")
    }
    break
case 'setnamegc':
if (!isGroup) return setReply(mess.only.group)
if (!isGroupAdmins) return onlyAdmin()
if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
if (args.length < 2) return reply(`Kirim perintah ${command} teks`)
await conn.groupUpdateSubject(from, q)
.then( res => {
setReply(`Sukses`)
}).catch(() => setReply(mess.error.api))
break

case 'setdesc':
if (!isGroup) return setReply(mess.only.group)
if (!isGroupAdmins) return onlyAdmin()
if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
if (args.length < 2) return reply(`Kirim perintah ${command} teks`)
await conn.groupUpdateDescription(from, q)
.then( res => {
setReply(`Sukses`)
}).catch(() => reply(mess.error.api))
break
//========== GAME NYA ========//
case 'math': case 'match': {
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].glimit < 1) return onlyGlimit()
let modes = {
  noob: [-3, 3, -3, 3, '+-', 15000, 10],
  easy: [-10, 10, -10, 10, '*/+-', 20000, 40],
  medium: [-40, 40, -20, 20, '*/+-', 40000, 150],
  hard: [-100, 100, -70, 70, '*/+-', 60000, 350],
  extreme: [-999999, 999999, -999999, 999999, '*/', 99999, 9999],
  impossible: [-99999999999, 99999999999, -99999999999, 999999999999, '*/', 30000, 35000],
  impossible2: [-999999999999999, 999999999999999, -999, 999, '/', 30000, 50000]
}

let operators = {
  '+': '+',
  '-': '-',
  '*': '×',
  '/': '÷'
}

function genMath(mode) {
  let [a1, a2, b1, b2, ops, time, bonus] = modes[mode]
  let a = randomInt(a1, a2)
  let b = randomInt(b1, b2)
  let op = pickRandom([...ops])
  let result = (new Function(`return ${a} ${op.replace('/', '*')} ${b < 0 ? `(${b})` : b}`))()
  if (op == '/') [a, result] = [result, a]
  return {
str: `${a} ${operators[op]} ${b}`,
mode,
time,
bonus,
result
  }
}

function randomInt(from, to) {
  if (from > to) [from, to] = [to, from]
  from = Math.floor(from)
  to = Math.floor(to)
  return Math.floor((to - from) * Math.random() + from)
}






 // conn.math = conn.math ? conn.math : {}
  if (!q) return setReply( `
┌─〔 Mode 〕
├ ${Object.keys(modes).join('\n├ ')}
└────    
contoh:
${prefix}math hard
`)
  let mode = args[0].toLowerCase()
  if (!(mode in modes)) return setReply( `
┌─〔 Mode 〕
├ ${Object.keys(modes).join('\n├ ')}
└────    
contoh:
${prefix}math hard
`)
  let id = from
  if (id in conn.math) return setReply('Masih ada soal belum terjawab di chat ini')
  let math2 = genMath(mode)
  conn.math[id] = [
await setReply(`Berapa hasil dari *${math2.str}*?\n\nTimeout: ${(math2.time / 1000).toFixed(2)} detik\nBonus Jawaban Benar: Rp${math2.bonus} `),
math2, 4,
setTimeout(async () => {
  //if (conn.math[id]) await conn.sendButton(from, `Waktu habis!\nJawabannya adalah ${math2.result}`, '', `${math2.mode.toUpperCase()}`, `.math ${math2.mode}`, conn.math[id][0])
if (conn.math[id]) await setReply(`Waktu habis!\nJawabannya adalah ${math2.result}\n\n${math2.mode.toUpperCase()}\n\nmath ${math2.mode}`)
   delete conn.math[id]
}, math2.time)
  ]
db.data.users[sender].glimit -= 1
}
break


// ===================================== //
case 'caklontong':{
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].glimit < 1) return onlyGlimit()
let poin = 3000
let timeout = 120000
let tiketcoin = 1
let id = m.chat

//let but1 = [{"buttonId": `${prefix}caklontong`,"buttonText": {"displayText": `🎮 ᴍᴀɪɴ ʟᴀɢɪ`},"type": "RESPONSE"}]
if (id in conn.caklontong) return setReply('Masih ada soal belum terjawab di chat ini')
let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')).json()
let json = src[Math.floor(Math.random() * src.length)]
let caption = `*Soal :* ${json.soal}

Timeout *${(timeout / 1000).toFixed(2)} detik*
Bonus : +${poin}
Tiketcoin : +${tiketcoin} `.trim()
conn.caklontong[id] = [
await setReply(caption),
json, poin,
setTimeout(() => {
setReply(`Waktu game telah habis
Jawabannya adalah : ${json.jawaban}

${json.deskripsi}`)  
delete conn.caklontong[id]
 }, timeout)
 ]
db.data.users[sender].glimit -= 1
}
break
// ===================================== //

case 'family100': {
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].glimit < 1) return onlyGlimit()
let winScore = 1000
let id = m.chat

if (id in conn.family) return reply('Masih ada kuis yang belum terjawab di chat ini') 
let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')).json()
let json = src[Math.floor(Math.random() * src.length)]
let caption = `*Soal :* ${json.soal}

Terdapat *${json.jawaban.length}* jawaban${json.jawaban.find(v => v.includes(' ')) ? `
(beberapa jawaban terdapat spasi)
`: ''}

+${winScore} Money tiap jawaban benar
`.trim()
conn.family[id] = {
id,
msg: await m.reply(caption),
...json,
terjawab: Array.from(json.jawaban, () => false),
winScore,
}
db.data.users[sender].glimit -= 1
}
break
// ===================================== //

case 'susunkata':{
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].glimit < 1) return onlyGlimit()
let poin = 1000
let timeout = 120000
let id = m.chat

let but1 = [{"buttonId": `${prefix}susunkata`,"buttonText": {"displayText": `🎮 ᴍᴀɪɴ ʟᴀɢɪ`},"type": "RESPONSE"}]
if (id in conn.susunkata) return setReply('Masih ada soal belum terjawab di chat ini')
let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/susunkata.json')).json()
let json = src[Math.floor(Math.random() * src.length)]
let caption = `*Soal :* ${json.soal}
*Tipe :* ${json.tipe}

Timeout *${(timeout / 1000).toFixed(2)} detik*
  Exp : +999
  Bonus : +${poin} Saldo
`.trim()
conn.susunkata[id] = [
await setReply(caption),
json, poin,
setTimeout(() => {
conn.sendButMessage(m.chat, `Waktu game telah habis
  Jawabannya adalah : ${json.jawaban}
`
, `${fake1}`, but1, m)  
delete conn.susunkata[id]
 }, timeout)
 ]
db.data.users[sender].glimit -= 1
}
break
// ===================================== //
case 'tebaklirik':{
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].glimit < 1) return onlyGlimit()
let poin = 1000
let timeout = 120000
let id = m.chat

//let but1 = [{"buttonId": `${prefix}tebaklirik`,"buttonText": {"displayText": `🎮 ᴍᴀɪɴ ʟᴀɢɪ`},"type": "RESPONSE"}]
if (id in conn.tebaklirik) return setReply('Masih ada soal belum terjawab di chat ini')
let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')).json()
let json = src[Math.floor(Math.random() * src.length)]
let caption = `*Soal :* ${json.soal}

Timeout *${(timeout / 1000).toFixed(2)} detik*
Exp : +999
Bonus : +${poin} Saldo`.trim()
conn.tebaklirik[id] = [
await setReply(caption),
json, poin,
setTimeout(() => {
if (conn.tebaklirik[id]) 
setReply(`Waktu game telah habis
  Jawabannya adalah : ${json.jawaban}`)  
delete conn.tebaklirik[id]
 }, timeout)
 ]
db.data.users[sender].glimit -= 1
}
break

// ===================================== //
case 'siapaaku':{
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].glimit < 1) return onlyGlimit()
let poin = 1000
let timeout = 120000
let id = m.chat

//let but1 = [{"buttonId": `${prefix}siapaaku`,"buttonText": {"displayText": `🎮 ᴍᴀɪɴ ʟᴀɢɪ`},"type": "RESPONSE"}]
if (id in conn.siapaaku) return setReply('Masih ada soal belum terjawab di chat ini')
let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/siapakahaku.json')).json()
let json = src[Math.floor(Math.random() * src.length)]
let caption = `*Soal :* ${json.soal}

Timeout *${(timeout / 1000).toFixed(2)} detik*
Exp : +999
Bonus : +${poin} Saldo`.trim()
conn.siapaaku[id] = [
await setReply(caption),
json, poin,
setTimeout(() => {
if (conn.siapaaku[id]) 
setReply(`Waktu game telah habis
Jawabannya adalah : ${json.jawaban}`)  
delete conn.siapaaku[id]
 }, timeout)
 ]
db.data.users[sender].glimit -= 1
}
break
// ===================================== //
case 'tekateki':{
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].glimit < 1) return onlyGlimit()
let poin = 1000
let timeout = 120000
let id = m.chat

//let but1 = [{"buttonId": `${prefix}tekateki`,"buttonText": {"displayText": `🎮 ᴍᴀɪɴ ʟᴀɢɪ`},"type": "RESPONSE"}]
if (id in conn.tekateki) return setReply('Masih ada soal belum terjawab di chat ini')
let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tekateki.json')).json()
let json = src[Math.floor(Math.random() * src.length)]
let caption = `*Soal :* ${json.soal}

Timeout *${(timeout / 1000).toFixed(2)} detik*
Exp : +999
Bonus : +${poin} Saldo`.trim()
conn.tekateki[id] = [
await setReply(caption),
json, poin,
setTimeout(() => {
if (conn.tekateki[id]) 
setReply(`Waktu game telah habis
Jawabannya adalah : ${json.jawaban}`)  
delete conn.tekateki[id]
 }, timeout)
 ]
}
db.data.users[sender].glimit -= 1
break
// ===================================== //
case 'tebakkata':{
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].glimit < 1) return onlyGlimit()
let poin = 1000
let timeout = 120000
let id = m.chat

//let but1 = [{"buttonId": `${prefix}tebakkata`,"buttonText": {"displayText": `🎮 ᴍᴀɪɴ ʟᴀɢɪ`},"type": "RESPONSE"}]
if (id in conn.tebakkata) return setReply('Masih ada soal belum terjawab di chat ini')
let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')).json()
let json = src[Math.floor(Math.random() * src.length)]
let caption = `*Soal :* ${json.soal}

Timeout *${(timeout / 1000).toFixed(2)} detik*
Exp : +999
Bonus : +${poin} Saldo`.trim()
conn.tebakkata[id] = [
await setReply(caption),
json, poin,
setTimeout(() => {
if (conn.tebakkata[id]) 
setReply(`Waktu game telah habis
Jawabannya adalah : ${json.jawaban}`)
delete conn.tebakkata[id]
 }, timeout)
 ]
}
db.data.users[sender].glimit -= 1
break
// ===================================== //
case 'tebaktebakan':{
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].glimit < 1) return onlyGlimit()
let poin = 1000
let timeout = 120000
let id = m.chat

if (id in conn.tebaktebak) return setReply('Masih ada soal belum terjawab di chat ini')
let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaktebakan.json')).json()
let json = src[Math.floor(Math.random() * src.length)]
let caption = `*Soal :* ${json.soal}

Timeout *${(timeout / 1000).toFixed(2)} detik*
Exp : +999
Bonus : +${poin} Saldo`.trim()
conn.tebaktebak[id] = [
await setReply(caption),
json, poin,
setTimeout(() => {
setReply(`Waktu game telah habis
Jawabannya adalah : ${json.jawaban}`)  
delete conn.tebaktebak[id]
 }, timeout)
 ]
db.data.users[sender].glimit -= 1
}
break
// ===================================== //
case 'tebakgambar':{
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].glimit < 1) return onlyGlimit()
let poin = 1000
let timeout = 120000
let id = m.chat

//let but1 = [{"buttonId": `${prefix}tebakgambar`,"buttonText": {"displayText": `🎮 ᴍᴀɪɴ ʟᴀɢɪ`},"type": "RESPONSE"}]
if (id in conn.tebakgambar) return setReply('Masih ada soal belum terjawab di chat ini')
let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')).json()
let json = src[Math.floor(Math.random() * src.length)]
let kentir = await getBuffer(json)       
let teks = `*Soal :* ${json.deskripsi}

Timeout *${(timeout / 1000).toFixed(2)} detik*
Exp : +999
Bonus : +${poin} Saldo`.trim()
conn.tebakgambar[id] = [
conn.sendImage(from, json.img , teks, m),
json,
setTimeout(() => {
if (conn.tebakgambar[id])
setReply(`Waktu game telah habis
Jawabannya adalah : ${json.jawaban}`)  
delete conn.tebakgambar[id]
 }, timeout)
 ]
db.data.users[sender].glimit -= 1
}
break
// ===================================== //
case 'tebakbendera':{
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].glimit < 1) return onlyGlimit()
let poin = 1000
let timeout = 120000
let id = m.chat

//let but1 = [{"buttonId": `${prefix}tebakbendera`,"buttonText": {"displayText": `🎮 ᴍᴀɪɴ ʟᴀɢɪ`},"type": "RESPONSE"}]
if (id in conn.tebakbendera) return setReply('Masih ada soal belum terjawab di chat ini')
let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakbendera.json')).json()
let json = src[Math.floor(Math.random() * src.length)]
let teks = `Bendera Apakah Ini ?

Timeout *${(timeout / 1000).toFixed(2)} detik*
Exp : +999
Bonus : +${poin} Saldo`.trim()
conn.tebakbendera[id] = [
conn.sendImage(from, json.img , teks, m),
json,
setTimeout(() => {
if (conn.tebakbendera[id]) 
setReply(`Waktu game telah habis
Jawabannya adalah : ${json.name}`)  
delete conn.tebakbendera[id]
 }, timeout)
 ]
db.data.users[sender].glimit -= 1 
}
break
case 'suitpvp': case 'suit': {
	if (!isGroup) return setReply (mess.group)
            conn.suit = conn.suit ? conn.suit : {}
            let poin = 10
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(conn.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(sender))) setReply(`Selesaikan suit mu yang sebelumnya`)
	    if (m.mentionedJid[0] === sender) return setReply(`Tidak bisa bermain dengan diri sendiri !`)
	if (m.mentionedJid[0] === botNumber) return setReply (`Tidak bisa bermain dengan Bot !`)
            if (!m.mentionedJid[0]) return setReply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${sender.split("@")[0]}`, m.chat, { mentions: [sender] })
            if (Object.values(conn.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) return setReply ( `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`)
            let id = 'suit_' + new Date() * 1
            let caption = `_*GAME SUIT PvP*_

@${sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit

Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
            conn.suit[id] = {
            chat: await conn.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
            id: id,
            p: sender,
            p2: m.mentionedJid[0],
            status: 'wait',
            waktu: setTimeout(() => {
            if (conn.suit[id]) conn.sendText(m.chat, `_Waktu suit habis_`, m)
            delete conn.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
            db.data.users[sender].glimit -= 1
            break  

case 'me': case 'profil': {
	let ppimg = await conn.profilePictureUrl(sender, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
	try{
	 let sol = await conn.fetchStatus(sender)
	var stst = sol.status == undefined ? '' : sol.status 
	} catch(err){
	var stst = ""
	}
	let persenya =`${userPersen}`
	let nana =`${userExp}/${requiredExp}`
	let prmm = isPremium? isOwner? 'Premium' : user? user.premiumDate : '' : 'Not Premium'
	 //
	let teks = `*]────「 Profile User 」────[*
	
	🆔 Nama : ${pushname} 
	💳 Saldo  : Rp ${db.data.users[sender].balance.toLocaleString()}
	✅ Verified : ${userVerified}
	📇 Status : ${isPremium ? 'Premium':'Free'}
	🧬 Level : ${userLevel}
	🔰 Grade : ${userLeveling(`${db.data.users[sender].level}`)}
	⚡ Exp :  ${userXp(userPersen)} ${persenya.split(".")[0]}%
	♻️ Total Exp : ${nana}
	📟 User Hit : ${db.data.users[sender].hit}
	🤖 Status Bot : ${isOwner ? 'Owner':'User'}
	🕔 Expired : ${prmm}
	📉 Limit : ${isPremium ? 'Unlimited' : `${db.data.users[sender].limit}/${limitCount}`}
	📈 Limit Game : ${isPremium ? 'Unlimited' : `${db.data.users[sender].glimit}/${gcounti.user}`}
	📲 No : wa.me/${sender.split("@")[0]}
	🧸 Bio : ${stst}`
	let its = await getBuffer (ppimg)
	const canvacord = require("canvacord");
	  let image3 = new canvacord.Rank()
	  .setAvatar(its)
	  .setCurrentXP(math(userExp))
	  .setRequiredXP(requiredExp)
	  .setStatus("online")
	  .setProgressBar("#FFFFFF", "COLOR")
	  .setBackground( "COLOR","#141414")
	  .setCustomStatusColor("#ff1a8c")  
	  .setUsername(`EXP: ${persenya.split(".")[0]}%,`)
	  .setLevel(userLevel)
	  .setRank(4)
	  .setOverlay("#3d3d3d")
	  .setDiscriminator("0007");
	  let foto = await getRandom(".png")
	  image3.build()
	  .then(async data => {
	  await canvacord.write(data,foto);
	  let gambar = await fs.readFileSync(foto)
conn.sendMessage(from, { caption: teks, image: gambar}, {quoted: m})
	  await fs.unlinkSync(foto)
			  });
	}
	break
 case  'limit':
case 'ceklimit': {
let name = mentionByReply ? await conn.getName(mentionByReply) : pushname
let number = mentionByReply ? mentionByReply.split("@")[0] : senderNumber
let limid = mentionByReply ? _prem.checkPremiumUser(mentionByReply, premium) == true ? 'Unlimited' : `${db.data.users[mentionByReply].limit}/${limitCount}` : isPremium ? 'Unlimited' : `${db.data.users[sender].limit}/${limitCount}`
let gemlimit = mentionByReply ? `${db.data.users[mentionByReply].glimit}/${gcount}` : `${db.data.users[sender].glimit}/${gcount}`
let uang = mentionByReply ? db.data.users[mentionByReply].money.toLocaleString() : db.data.users[sender].money.toLocaleString()

let teks =`––––––『 *USER LIMIT* 』––––––

• Nama: ${name}
• Nomer: ${number}
• Limit : ${limid}
• Limit Game : ${gemlimit}
• Saldo : Rp ${uang}

Kamu dapat membeli limit dengan ${prefix}buylimit dan ${prefix}buyglimit untuk membeli game limit`

if(mentionByReply){
setReply(teks)
} else {
setReply(teks)
}
}
break
case 'givesaldo':{
if (!isGroup) return onlyGroup()
if (!isGroupAdmins) return onlyAdmin()
if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
if(!q) return setReply("Reply target dan Masukan angka")
if (isNaN(q)) return setReply(`Harus berupa angka`)
if(!mentionByReply) return setReply("Reply tatgetnya")
db.data.users[mentionByReply].balance += math(q)
setReply(`Berhasil menambakan saldo ke nomer ${mentionByReply.split("@")[0]}`)
}
break
// ===================================== //
case 'kurangsaldo':{
if (!isGroup) return onlyGroup()
if (!isGroupAdmins) return onlyAdmin()
if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
if(!q) return setReply("Reply target dan Masukan angka")
if (isNaN(q)) return setReply(`Harus berupa angka`)
if(!mentionByReply) return setReply("Reply tatgetnya")
db.data.users[mentionByReply].balance -= math(q)
setReply(`Berhasil mengurangi saldo ke nomer ${mentionByReply.split("@")[0]}`)
}
break
// ===================================== //
case 'givelimit':{
if (!isGroup) return onlyGroup()
if (!isGroupAdmins) return onlyAdmin()
if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
if(!q) return setReply("Reply target dan Masukan angka")
if (isNaN(q)) return setReply(`Harus berupa angka`)
if(!mentionByReply) return setReply("Reply tatgetnya")
db.data.users[mentionByReply].limit += math(q)
setReply(`Berhasil menambakan limit ke nomer ${mentionByReply.split("@")[0]}`)
}
break
// ===================================== //
case 'kuranglimit':{
if (!isGroup) return onlyGroup()
if (!isGroupAdmins) return onlyAdmin()
if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
if(!q) return setReply("Masukan angka")
if (isNaN(q)) return setReply(`Harus berupa angka`)
if(!mentionByReply) return setReply("Reply tatgetnya")
db.data.users[mentionByReply].limit -= math(q)
setReply(`Berhasil mengurangi limit ke nomer ${mentionByReply.split("@")[0]}`)
}
break
case 'shop':{
let teks = `
*]────「 SHOP」────[*

Halo ${pushname}
Saldo : Rp ${db.data.users[sender].money.toLocaleString()}

• List Harga
1 Limit : Rp 1000
1 Limit Game : Rp 750
1 Jam Premium : Rp 50,000

NOTE :
Untuk membeli Limit ketik ${prefix}buylimit jumlah limit
Contoh : ${prefix}buylimit 10

Untuk membeli Limit Game ketik ${prefix}buyglimit jumlah limit
Contoh : ${prefix}buyglimit 10`
setReply(teks)
}
break
case 'buylimit':{
if (!isGroup) return onlyGroup()
if (!q) return setReply(`Kirim perintah *${prefix}buylimit* jumlah limit yang ingin dibeli\n\nHarga 1 limit = Rp1000`)
if (q.includes('-')) return setReply(`Jangan menggunakan -`)
if (isNaN(q)) return setReply(`Harus berupa angka`)
let ane = Number(math(q) * 1000)
if (db.data.users[sender].balance < ane) return setReply(`Saldo kamu tidak mencukupi untuk pembelian ini`)
db.data.users[sender].balance -= ane
db.data.users[sender].limit += math(q)
setReply(`Pembeliaan limit sebanyak ${q} berhasil\n\nSisa Saldo : Rp ${db.data.users[sender].balance.toLocaleString()}\nSisa Limit : ${db.data.users[sender].limit}`)
}
break
// ===================================== //
case 'buyglimit':{
if (!isGroup) return onlyGroup()
if (!q) return setReply(`Kirim perintah *${prefix}buyglimit* jumlah limit yang ingin dibeli\n\nHarga 1 game limit = Rp 700`)
if (q.includes('-')) return setReply(`Jangan menggunakan -`)
if (isNaN(q)) return setReply(`Harus berupa angka`)
let ane = Number(math(q) * 700)
if (db.data.users[sender].balance < ane) return setReply(`Saldo kamu tidak mencukupi untuk pembelian ini`)
db.data.users[sender].balance -= ane
db.data.users[sender].glimit += math(q)
setReply(`Pembeliaan game limit sebanyak ${q} berhasil\n\nSisa Saldo : Rp ${db.data.users[sender].balance.toLocaleString()}\nSisa Limit : ${db.data.users[sender].glimit}`)
}
break
// ===================================== //
case 'klaim':
case 'claim':
case 'daily':{
if (!isGroup) return onlyGroup()
const free = 5000
const prem = 10000
const moneyfree = 5000
const moneyprem = 10000
const timeout = 86400000
let time = global.db.data.users[m.sender].lastclaim + 86400000
 if (new Date - global.db.data.users[m.sender].lastclaim < 86400000) return setReply( `Anda sudah mengklaim, klaim harian hari ini\ntunggu selama ${conn.msToTime(time - new Date())} lagi`)
 global.db.data.users[m.sender].exp += isPremium ? prem : free
 global.db.data.users[m.sender].balance += isPremium ? moneyprem : moneyfree
setReply(`Selamat kamu mendapatkan:\n\n+${isPremium? prem : free} Exp\n+${isPremium? moneyprem : moneyfree} Balance`)
global.db.data.users[m.sender].lastclaim = new Date * 1
} 
break
 case  'topbalance': case 'topglobal' :{
let uang = Object.values(db.data.users);
uang.sort((a, b) => (a.balance < b.balance) ? 1 : -1)
let top = '*── 「 TOP BALANCE 」 ──*\n\n'
var arrTop = []
var total = 15
if (uang.length < 15) total = uang.length
for (let i = 0; i < total; i ++){
    top += `${i + 1}. wa.me/${uang[i].id.split("@")[0]}\n=> balance : $${uang[i].balance}\n\n`
    arrTop.push(uang[i].id)
}
   //conn.sendMessage(from, {text: top, mentions: arrTop}, {quoted: m})
 mentions(top, arrTop, true)
  }
break
case 'listonline': {
let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
let online = [...Object.keys(store.presences[id]), botNumber]
conn.sendText(from, 'List Online:\n\n' + online.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
}
break
case 'infoall': case 'tagall':{
if (!isGroup) return setReply(mess.only.group)
if(!q) {
var inpo = "No inpo"
} else var inpo = q
let members_id = []
let tes = '\n'
await groupMembers.map( i => {
tes += `┣ ⬣@${i.id.split('@')[0]}\n`
members_id.push(i.id) })
setReply(`
*From :* ${pushname}

Info :  ${inpo}

Total Member : ${groupMembers.length}

┏━⬣`+tes+`┗━⬣`, members_id)
}
break
 //@======== SATPAM =========//
case 'on':
if (!isGroup) return onlyGroup()
if (!isGroupAdmins) return onlyAdmin()
setReply(`*[ Silakan di pilih ]*

- antitoxic
- antidelete
- antiasing
- antilink
- antilinkgc
- antipromosi
- antiwame
- welcome

contoh : 
.antilink on untuk mengaktifkan
.antilink off untuk menonaktifkan`)
break
case 'antiwame':{
  if (!isGroup) return setReply(mess.group)
	if (!isGroupAdmins && !isOwner) return onlyAdmin()
	if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
	 if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
	if (isAntiWame) return setReply("Sudah aktif!!");
	db.data.chats[from].antiwame = true
	setReply("Sukses mengaktifkan antiwame!");
	} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
	if (!isAntiWame) return setReply("Udah off!!");
	db.data.chats[from].antiwame = false
	setReply("Sukses mematikan antiwame!");
	} else if (!q) {
	reply ( `*MODE ANTI WAME*\n ${prefix+command} on/off`)
	 }
	 }
	break;
case 'antiasing':{
if (!isGroup) return setReply('Kusus group')
if (!isGroupAdmins) return onlyAdmin()
if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
if (isKickarea) return setReply("Sudah aktif!!");
db.data.chats[from].antiasing = true
setReply("Sukses mengaktifkan kickarea!");
} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
if (!isKickarea) return setReply("Udah off!!");
db.data.chats[from].antiasing = false
setReply("Sukses mematikan kickarea!");
} else if (!q) {
setReply("Pilih on atau off")
}
}
break;
case 'antilinkgc':{
if (!isGroupAdmins) return onlyAdmin()
if (!isGroup) return setReply('hanya bisa di group')
if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
if (isAntilinkGc) return setReply('Fitur sudah aktif kak')
db.data.chats[from].antilinkgc = true
let ih =`Fitur antilink group telah di aktifkan`
setReply(ih)
} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
if (!isAntilinkGc) return setReply('Udah mati')
db.data.chats[from].antilinkgc = false
let ih =`Fitur antilink group telah di matikan`
setReply(ih)
}else if (!q) {
setReply("Pilih on atau off")
}
}
break;
case 'antilink':{
if (!isGroupAdmins) return onlyAdmin()
if (!isGroup) return setReply('hanya bisa di group')
if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
if (isAntiLink) return setReply('Fitur sudah aktif kak')
db.data.chats[from].antilink = true
let ih =`Fitur antilink telah di aktifkan`
setReply(ih)
} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
if (!isAntiLink) return setReply('Fitur Anti link sudah off')
db.data.chats[from].antilink = false
let ih =`Fitur antilink telah di matikan`
setReply(ih)
} else if (!q) {
setReply("Pilih on atau off")
}
}
break;
case 'antidelete':{
if (!isGroup) return setReply('Kusus group')
if (!isGroupAdmins) return onlyAdmin()
if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
if (isAntidelete) return setReply("Sudah aktif!!");
db.data.chats[from].antidelete = true
setReply("Sukses mengaktifkan antidelete!");
} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
if (!isAntidelete) return setReply("Udah off!!");
db.data.chats[from].antidelete = false
setReply("Sukses mematikan antidelete!");
} else if (!q) {
setReply("Pilih on atau off")
}
}
break
case 'antipromosi': {
if (!isGroup) return setReply(mess.only.group)
if (!isGroupAdmins) return onlyAdmin()
if (args[0] === "on") {
if (db.data.chats[m.chat].promosi2) return setReply(`Sudah Aktif Sebelumnya`)
db.data.chats[m.chat].promosi2 = true
setReply(`antipromosi Aktif !`)
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].promosi2) return setReply(`Sudah Tidak Aktif Sebelumnya`)
db.data.chats[m.chat].promosi2 = false
setReply(`antipromosi Tidak Aktif !`)
} else {
setReply(`Mode ${command}\n\n\nKetik ${prefix + command}on/off`)
}
}
break
case 'antitoxic':{
if (!isGroup) return setReply(mess.only.group)
if (!isGroupAdmins) return onlyAdmin()
if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
if (isAntiLink) return setReply('Fitur sudah aktif kak')
db.data.chats[from].antitoxic = true
let ih =`Fitur ${command} telah di aktifkan`
setReply(ih)
} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
if (!isAntiLink) return setReply(`Fitur ${command} sudah off`)
db.data.chats[from].antitoxic = false
let ih =`Fitur ${command} telah di matikan`
setReply(ih)
} else if (!q) {
setReply(`Mode ${command}\n• .${command} on \n• .${command} off`)
}
}
break
case 'welcome':{
if(!q) return setReply("Masukan query on atau of")
if(!chat) return setReply('Group ini belom terdaftar di database bot')
 if(q == 'on'){
if(chat.welcome == true) return setReply('Welcome sudah aktif')
db.data.chats[from].welcome = true
setReply('Berhasil mengaktifkan welcome pada grouop ini')
} else if(q == 'off'){       
  if(chat.welcome == false) return setReply('Welcome sudah aktif')
  db.data.chats[from].welcome = false
  setReply('Berhasil menonaktifkan welcome pada grouop ini')
} else setReply('Pilih on atau off')
 }
break
//========= SETTINGS =======//
case 'setimgreply':{
if(!isOwner) return onlyOwner()
if(isImage || isQuotedImage){
let delb = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
await fse.copy(delb,`./stik/reply.jpg`)
fs.unlinkSync(delb)
setReply(`Berhasil mengubah image reply`)
} else {
setReply(`Kirim gambar dengan caption ${prefix}setimagereply`);
}
}
break
// ===================================== //
case 'setthumb':{
if(!isOwner) return onlyOwner()
if(isImage || isQuotedImage){
let delb = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
await fse.copy(delb,`./stik/thumb.jpeg`)
fs.unlinkSync(delb)
setReply(`Berhasil mengubah image reply`)
} else {
setReply(`Kirim gambar dengan caption ${prefix}setimagereply`);
}
}
break
case 'setnamebot':
	if (!isOwner) return onlyOwner()
	setReply(`Berhasil mengubah nama bot ke ${q}`)
	fake = `${q}`
	break
case 'setppbot':{
if (!isOwner) return onlyOwner()
if(isQuotedImage){
const media = await conn.downloadAndSaveMediaMessage(quoted)
const { img } = await generateProfilePicture(media)
await conn.query({ tag: 'iq',  attrs: { to: botNumber, type:'set', xmlns: 'w:profile:picture'}, content: [{ tag: 'picture', attrs: { type: 'image' }, content: img }]})       
await setReply(`${mess.success}`)    
} else setReply("Reply fotonya")
}
break
case 'setbiobot':{
if (!isOwner && !itsMe) return setReply("Khusus Owner")
if (!q) return setReply(`Kirim perintah ${prefix+command} nama\n\nContoh : ${command} Paijo`)
await conn.updateProfileStatus(q)
await setReply(`Berhasil mengganti status bio ke *${q}*`)
}
break
case 'blockcmd':
if (!isOwner) return onlyOwner()
if(!q) return setReply(`Textnya mana cih\n\nContoh : ${prefix}blockcmd menu\nGituuuuuuu`)
if (_blockcmd.check(q, listcmdblock)) return setReply(`Command tersebut sudah ada di database`)
_blockcmd.add(q,listcmdblock)
setReply(`Berhasil memblokir command 「 *${q}* 」\nsilakan ketik ${prefix}listblockcmd untuk melihat\ndaftar command yang telah di block`)
break

case 'unblockcmd':
try{
if (!isOwner) return onlyOwner()
if(!q) return setReply("Textnya mana cih")
if (!_blockcmd.check(q, listcmdblock)) return setReply(`Command tersebut tidak ada di database`)
_blockcmd.del(q, listcmdblock)
setReply(`Berhasil unblock command 「 *${q}* 」`)
} catch (err) {
setReply("Bjirr error, keknya ada yang error")
}
break
case   'listcmdblock':
case 'listblockcmd':{
let wo = `*「 LIST BLOCK CMD 」*`
let soso = [];
for (let i of listcmdblock) {
soso.push(i.cmd)
wo += `\n\n•> Command : ${i.cmd}`
}
setReply(wo)
}
break
//======== STORAGE ========//
case 'addvn':{
const client = require('filestack-js').init(fileStackApi);
if(!q) return setReply("Nama audionya apa?")
if(db.data.audio[q]) return setReply("Nama tersebut sudah ada di dalam database")

if(isQuotedAudio) {
let media = await conn.downloadAndSaveMediaMessage(quoted, q)
await client.upload(media, {}, { filename: q }, {}).then(data => {
db.data.audio[q] = {
name: data._file.name,
id: data.handle,
size: FileSize(data._file.size),
link: data.url
}
})
let teks = `Berhasil menambahkan audio
ke dalam database dengan nama *${q}*`
await setReply(teks)
await fs.unlinkSync(media)
} else if (isQuotedVideo || isVideo) {
setReply(mess.wait)
let media = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
let ran = getRandomFile('.mp3')
exec(`ffmpeg -i ${media} -vn ${ran}`, async (err) => {
fs.unlinkSync(media)
if (err) return setReply(`Err: ${err}`)
let buffer453 = fs.readFileSync(ran)

await client.upload(buffer453, {}, { filename: q }, {}).then(data => {
db.data.audio[q] = {
name: data._file.name,
id: data.handle,
size: FileSize(data._file.size),
link: data.url
}
})

let teks = `Berhasil menambahkan audio
ke dalam database dengan nama *${q}*`
await setReply(teks)



fs.unlinkSync(ran)
})
} else {
setReply("Reply audio/videonya")
}
}
break


case 'delvn':{
if (!isOwner) return onlyOwner()
try {
if(!db.data.audio[q]) return setReply("Nama tersebut tidak ada di dalam data base")
delete db.data.audio[q]
setReply(`Sukses delete vn ${q}`)
} catch (err){
console.log(err)
setReply('eror kak')
}
}
break
case 'listvn':
{
let teks = '\n\n––––––『 *VOICE NOTE* 』––––––\n\n'
for (let awokwkwk of Object.keys(db.data.audio)) {
teks += `• ${awokwkwk}\n`
}
teks += `\n*Total ada : ${Object.keys(db.data.audio).length}*`
teks += `\n\n📮 *Note:* ↓
• Untuk mengambil vn ketik nama vn
• Gunaka huruf sesuai dengan nama vn
• Dilarang spam berlebihan menggunakan vn
• Request vn silakan hubungi owner\n`
setReply(teks)
}
break
case 'addstik':{
const client = require('filestack-js').init(fileStackApi)
if(!isQuotedSticker) return setReply("Reply sticker")
if(!q) return setReply("Nama stickernya apa?")
if(db.data.sticker[q]) return setReply("Nama tersebut sudah ada di dalam database")
let media = await conn.downloadAndSaveMediaMessage(quoted, q)
await client.upload(media, {}, { filename: q }, {}).then(data => {
db.data.sticker[q] = {
name: data._file.name,
id: data.handle,
size: FileSize(data._file.size),
link: data.url
}
})
let teks = `Berhasil menambahkan sticker
ke dalam database dengan nama *${q}*`
await setReply(teks)
await fs.unlinkSync(media)
}
break


case 'delstik':{
if(!m.key.fromMe & !isOwner) return setReply('Only owner')
if (!q) return setReply("Masukan query")
try {
if(!db.data.sticker[q]) return setReply("Nama tersebut tidak ada di dalam data base")
delete db.data.sticker[q]
setReply(`Succes delete sticker ${q}!`)
} catch (err) {
console.log(err)
setReply(`Gagal delete sticker ${q}!`)
}
}
break
case 'liststik':{
let teks = '*Sticker list :*\n\n'
for (let awokwkwk of Object.keys(db.data.sticker)) {
teks += `- ${awokwkwk}\n`
}
teks += `\n*Total : ${Object.keys(db.data.sticker).length}*`
setReply(teks)
}
break
case 'getallstik':
let stiker1 = Object.keys(db.data.sticker)
for (let jid of stiker1){
await conn.sendMessage(from, {sticker: {url: db.data.sticker[jid].link }})
await sleep(1000)
}
break
case 'banstik':
case  'addantistik':{
if(!isOwner) return setReply(mess.only.owner)
//if(!antiSticker) await db.data.others["antiSticker"]  = []
if(!mentionByReply) return setReply("Reply pesan")
if (mentionByReply == botNumber) {
conn.sendMessage(from, { delete: { remoteJid: from, fromMe: true, id: m.quoted.id, participant: mentionByReply } })
} else if(mentionByReply !== botNumber && isBotGroupAdmins){
conn.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: m.quoted.id, participant: mentionByReply } })
}

if(!isQuotedSticker) return setReply("Reply stickernya")
let sticker = m.quoted.fileSha256.toString('base64')
if(antiSticker.includes(sticker)) return setReply("sudah ada di database")
antiSticker.push(sticker)
setReply("Sukses")
}
break

case 'unbanstik':
case  'delantistik':{
if(!isOwner) return setReply(mess.only.owner)
if(!isQuotedSticker) return setReply("Reply stickernya")
let sticker = m.quoted.fileSha256.toString('base64')
if(!antiSticker.includes(sticker)) return setReply("Tidak ada di database")
antiSticker.splice(antiSticker.indexOf(sticker, 1))
setReply("Sukses")
}
break
//======== OWNER ========//
case 'public':
if (!isOwner) return onlyOwner()
if (publik) return setReply('Udah di mode publick kak')
db.data.settings['settingbot'].publik = true
let bab =`Mode public aktif kak`
setReply(bab)
break

case 'self':
if (!isOwner) return onlyOwner()
if (publik == false) return setReply('Udah di mode self kak')
db.data.settings['settingbot'].publik = false
let breh =`Mode self aktif kak`
setReply(breh)
break
case 'delsampah':{
let directoryPath = path.join();
fs.readdir(directoryPath, async function (err, files) {
if (err) {
console.log('Unable to scan directory: ' + err);
return setReply('Unable to scan directory: ' + err);
}
let filteredArray = await files.filter(item => item.endsWith("gif") || item.endsWith("png") || item.endsWith("mp3")  || item.endsWith("mp4") || item.endsWith("jpg") ||item.endsWith("webp") ||item.endsWith("webm")   )
console.log(filteredArray.length);
let teks =`Terdeteksi ${filteredArray.length} file sampah\n\n`
if(filteredArray.length == 0) return setReply(teks)
filteredArray.map(function(e, i){
teks += (i+1)+`. ${e}\n`
})
setReply(teks)
await sleep(2000)
setReply("Menghapus file sampah...")
await filteredArray.forEach(function (file) {
fs.unlinkSync(file)
});
await sleep(2000)
setReply("Berhasil menghapus semua sampah")
});
}
break
case 'clearsesi':{
fs.readdir("./session", async function (err, files) {
if (err) {
console.log('Unable to scan directory: ' + err);
return setReply('Unable to scan directory: ' + err);
}
let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
item.startsWith("sender-key") || item.startsWith("session-")
)
console.log(filteredArray.length);
let teks =`Terdeteksi ${filteredArray.length} file sampah\n\n`
if(filteredArray.length == 0) return setReply(teks)
m.reply(teks)
await sleep(2000)
m.reply("Menghapus file sampah session")
await filteredArray.forEach(function (file) {
fs.unlinkSync(`./${global.session}/${file}`)
});
await sleep(2000)
m.reply("Berhasil menghapus semua sampah di folder session")
});

}
break
case 'getfolder': {
let data = await fs.existsSync(`./${q}`)
if(!data) return setReply("Folder tidak di temukan")
const JSZIP = require('jszip')
const zip = new JSZIP();
if (!isOwner) return setReply(mess.only.owner)
setReply("Getting folder...")
const readSession = await fs.readdirSync(`./${q}`);
const folder = zip.folder(q);
for (let json of readSession) {
const jsonSession = await fs.readFileSync(`./${q}/${json}`);
folder.file(json, jsonSession);
}
let jpegThumbnail = fs.readFileSync("./stik/thumbnaildokumen.jpg")
let file = `./${q}.zip`
zip.generateNodeStream({ type: 'nodebuffer', streamFiles: true })
.pipe(fs.createWriteStream(`./${q}.zip`))
.on('finish', async () => {
let media = fs.readFileSync(file)
await conn.sendMessage(m.chat, { document: media, fileName: `${q}`, mimetype: 'application/zip'  ,  jpegThumbnail  }, { quoted: m })
await fs.unlinkSync(file)
})
}
break
case 'getsesi': {
const JSZIP = require('jszip')
const zip = new JSZIP();
if (!isOwner) return setReply(mess.only.owner)
setReply("Getting session file...")
const readSession = await fs.readdirSync(`./session`);
const folder = zip.folder("session");
for (let json of readSession) {
const jsonSession = await fs.readFileSync(`./session/${json}`);
folder.file(json, jsonSession);
}
let jpegThumbnail = fs.readFileSync("./stik/thumbnaildokumen.jpg")
let file = `./session.zip`
zip.generateNodeStream({ type: 'nodebuffer', streamFiles: true })
.pipe(fs.createWriteStream(`./session.zip`))
.on('finish', async () => {
let media = fs.readFileSync(file)
await conn.sendMessage(m.chat, { document: media, fileName: "Session file", mimetype: 'application/zip'  ,  jpegThumbnail  }, { quoted: m })
await fs.unlinkSync(file)
})
}
break
case 'restart': case 'mulaiulang': {
if (!isOwner && !itsMe) return setReply(mess.only.owner)
let bot = db.data.others['restart']
if(bot){
db.data.others['restart'].m = m
db.data.others['restart'].from = from
} else {db.data.others['restart'] = {
m:m,
from:from
}
}
await conn.sendMessage(from, {text: `_Restarting ${fake}_`})
await conn.sendMessage(from, {text: "_Succes_"})
await sleep(1000)
process.send('reset')
}
break

case 'addcmdowner':{
if (!isOwner) return onlyOwner()
if(!q) return setReply(mess.query)
if(_data.checkDataId("commands", q,  DataId)) return setReply("User sudah menjadi owner")
if(!_data.checkDataName("commands", q, DataId)) { await _data.createDataId("commands", DataId) }
_data.addDataId(q, "commands", DataId)
setReply(`Berhasil menambahkan ${q} ke daftar fitur owner`)
}
break

case 'delcmdowner':
if(!q) return setReply(mess.query)
if (!isOwner) return onlyOwner()
try {
if(!_data.checkDataId("commands", q, DataId)) return setReply(`User bukan owner`)
_data.removeDataId ("commands", q, DataId)
setReply(`Berhasil menghapus ${q} ke daftar fitur owner`)
} catch (err){
console.log(err)
setReply(`${err}`)
}
break

case 'listcmdowner':{
let nana = await DataId.filter(item => item.name == "commands" )
let teks ="List Commands For Owner\n"
let nunu = nana[0].id
for(let i of nunu){
teks +=`. ${i}\n`
}
setReply(teks)
}
break


case 'addcmdprem':{
if (!isOwner) return onlyOwner()
if(!q) return setReply(mess.query)
if(_data.checkDataId("premium", q,  DataId)) return setReply("Command sudah ada di database")
if(!_data.checkDataName("premium", q, DataId)) { await _data.createDataId("premium", DataId) }
_data.addDataId(q, "premium", DataId)
setReply(`Berhasil menambahkan ${q} ke daftar fitur premium`)
}
break

case 'delcmdprem':
if(!q) return setReply(mess.query)
if (!isOwner) return onlyOwner()
try {
if(!_data.checkDataId("premium", q, DataId)) return setReply("Command tidak ada di database")
_data.removeDataId ("premium", q, DataId)
setReply(`Berhasil menghapus ${q} ke daftar fitur premium`)
} catch (err){
console.log(err)
setReply(`${err}`)
}
break

case 'listcmdprem':{
if(!_data.checkDataName("premium", q, DataId)) { await _data.createDataId("premium", DataId) }
let nana = await DataId.filter(item => item.name == "premium" )
let teks ="List Command For Premium User\n\n"
let nunu = nana[0].id
for(let i of nunu){
teks +=`• ${toFirstCase(i)}\n`
}
teks +=`\n• Total: ${nunu.length}\n`
setReply(teks)
}
break


case  'addcmdlimit':{
if (!isOwner) return onlyOwner()
if(!q) return setReply(mess.query)
if(_data.checkDataId("limit", q,  DataId)) return setReply("Command sudah ada di database")
if(!_data.checkDataName("limit", q, DataId)) { await _data.createDataId("limit", DataId) }
_data.addDataId(q, "limit", DataId)
setReply(`Berhasil menambahkan ${q} ke daftar fitur limit`)
}
break

case  'delcmdlimit':
if(!q) return setReply(mess.query)
if (!isOwner) return onlyOwner()
try {
if(!_data.checkDataId("limit", q, DataId)) return setReply("Command tidak ada di database")
_data.removeDataId ("limit", q, DataId)
setReply(`Berhasil menghapus ${q} ke daftar fitur limit`)
} catch (err){
console.log(err)
setReply(`${err}`)
}
break

case 'listcmdlimit':{
let nana = await DataId.filter(item => item.name == "limit" )
let teks ="List Commands For limit\n"
let nunu = nana[0].id
for(let i of nunu){
teks +=`. ${i}\n`
}
setReply(teks)
}
break
case 'addprem':{
if (!isOwner) return onlyOwner()
if(!db.data.users[Input] ) return setReply("User belom terdaftar di database bot")
if(isGroup && mentionByReply) {
var nomernya = mentionByReply
var waktunya = q
var namanye = await conn.getName(mentionByReply)
} else if(isGroup && mentionByTag) {
var nomernya = mentionByTag[0]
var waktunya =  q.split(" |")[1] || q.split("| ")[1] || q.split("|")[1] || q.split(" ")[1]
var namanye = await conn.getName(mentionByTag[0])
} else  if((isGroup || !isGroup) && q.startsWith("+")) {
var nomernya = q.split("|")[0].replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
var waktunya = q.split("|")[1]
} else  return setReply("Penggunaan salah, silakan reply/tag/input nomer +")
Log(q.split("|")[0])
if(waktunya == undefined) return setReply("masukan waktu\ns = detik\nh = jam\nd =hari")
_prem.addPremiumUser(nomernya, waktunya,namanye, premium)
let teks =`
_*SUCCESS*_

🆔 *Name :* ${namanye}
📛 *Number:* ${nomernya.split("@")[0]}
📆 *Days:* ${conn.msToDate(toMs(waktunya))}
📉 *Countdown:* ${toMs(waktunya)}`


let text = `HALO KAK AKU *${fake}*
kamu telah terdaftar sabagai user premium

📛 *Number:* ${nomernya.split("@")[0]}
📆 *Days:* ${conn.msToDate(toMs(waktunya))}
📉 *Countdown:* ${toMs(waktunya)}

terimakasih sudah menggunakan ${fake}`


setReply(teks)
conn.sendMessage(nomernya,{text})
}
break

case 'delprem':
if (!isOwner) return onlyOwner()
if(Input){
if(!_prem.checkPremiumUser (Input, premium)) return setReply("Maap kak user tersebut tidak ada di database")
_prem.delPremiumUser (Input, premium)
setReply(`Succes delete premium ${Input.split("@")[0]}`)
} else setReply("Tag/Reply/Input nomer target")
break

case 'listprem':{
let txt = `*── 「 LIST PREMIUM 」 ──*\nTotal : ${premium.length}\n\n`
let men = [];
for (let i of premium){
Log(i.id)
men.push(i.id)
let cekvip = ms(i.expired - Date.now())
txt += `*Name :* ${i.name}\n*Number :* wa.me/${i.id.split("@")[0]}\n*Expired :* ${cekvip.days} Hari ${cekvip.hours} Jam ${cekvip.minutes} Menit ${cekvip.seconds} Detik\n\n`
}
setReply(txt, men)
}
break
case 'cekprem':
case    'cekpremium':{
if (!isPremium && !isOwner) return setReply(`Kamu bukan user premium`)
let cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
let premiumnya = `${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s) ${cekvip.seconds} second(s)`
setReply(premiumnya)
}
break
case 'addsewa':{
if(!isGroup){
const rex1 = /chat.whatsapp.com\/([\w\d]*)/g;
let LinkGc = q.split(" ")[0];
let Second = q.split(" ")[1];
let code = LinkGc.match(rex1);
if (code == null) return  setReply("No invite url detected.");
let kode = code[0].replace("chat.whatsapp.com/", "");
await conn.groupAcceptInvite(kode)
let { id, subject,creator,creation,desc,descId } = await conn.groupGetInviteInfo(kode).catch(async () => {
return setReply("Invalid invite url.");
});
let teks =`
Success
*Name:* ${subject}
*Id:* ${id}
*Days:* ${conn.msToDate(toMs(Second))}
*Countdown:* ${toMs(Second)}`
setReply(teks)
let ini = `Halo kak aku ${fake} silakan ketik ${prefix}menu`
conn.sendMessage(id,{text:ini})
await _sewa.addSewaGroup(id, subject, LinkGc, Second, sewa)
} else if(isGroup){
if(!q) return setReply("Maukian angka 1m/1d/1h")
if (isBotGroupAdmins) {
let linkgc = await conn.groupInviteCode(from)
var yeh = `https://chat.whatsapp.com/${linkgc}`
} else if(!isBotGroupAdmins){
var yeh = `Botz Is Not Admin`
}
_sewa.addSewaGroup(from, groupName, yeh, q, sewa)
setReply("Berhasil Add Sewa ke group")
}
}
break

case 'ceksewa':
case  'sewacek':
if (!isGroup) return setReply(mess.only.group)
if (!_sewa.checkSewaGroup(from, sewa)) return setReply(`Group ini tidak terdaftar dalam list sewabot. Ketik ${prefix}sewabot untuk info lebih lanjut`)
let cekid = ms(_sewa.getSewaExpired(from, sewa) - Date.now())
let sewenye = `「 *SEWA EXPIRE* 」
*Group*: ${groupName}
*ID*: ${from}
*EXPIRE :* ${cekid.days} Hari, ${cekid.hours} Jam, ${cekid.minutes} Menit, ${cekid.seconds} Detik`
setReply(sewenye)
break
case 'listsewa': {
let ordernye = `*List Sewa*\nJumlah : ${sewa.length}\n\n`
for (let i of sewa){
let cekvipp = ms(i.expired - Date.now())
ordernye += `Group : ${i.group}\nID : ${i.id}\nExpired : ${cekvipp.days} hari ${cekvipp.hours} jam ${cekvipp.minutes} menit ${cekvipp.seconds} detik\nLink : ${isOwner? i.linkgc : ""}\n\n`
}
ordernye += `© ${fake1}`
setReply(ordernye)
}
break
case 'addowner':{
if (!isOwner) return setReply(mess.only.ownerB)
if (!isGroup) return setReply(mess.only.group)
if(_data.checkDataId("owner", Input,  DataId)) return setReply("User sudah menjadi owner")
if(!_data.checkDataName("owner", Input, DataId)) { await _data.createDataId("owner", DataId) }
_data.addDataId(Input, "owner", DataId)
setReply(`Berhasil menambahkan ${Input} ke daftar owner`)
}
break

case 'delowner':
if (!isOwner) return onlyOwner()
try {
if(!_data.checkDataId("owner", Input, DataId)) return setReply(`User bukan owner`)
_data.removeDataId ("owner", Input, DataId)
setReply(`Berhasil menghapus ${Input.split("@")[0]} ke daftar owner`)
} catch (err){
console.log(err)
setReply(`${err}`)
}
break
case 'listowner':{
if(!_data.checkDataName("owner", q, DataId)) { await _data.createDataId("owner", DataId) }
let nana = await DataId.filter(item => item.name == "owner" )
if(!nana) return setReply("Tidak ada")
let teks ="List Owner\n"
let nunu = nana[0].id
for(let i of nunu){
teks +=`- wa.me/${i.split("@")[0]} \n`
}
setReply(teks)
}
break
case 'join':{
if(!isOwner) return setReply(mess.only.owner)
let link = q.startsWith("http")
if(!link) return setReply(`Kirim perintah ${command} _linkgrup_`)
let Url = args[1]
let ano = q.split('https://chat.whatsapp.com/')[1]
await conn.groupAcceptInvite(ano)
setReply("Sukses join group")
}
break
case 'bc': 
	if (!isOwner) return onlyOwner()
	if (args.length < 1) return reply(`Masukkan isi pesannya banh`)
	var data = await store.chats.all()
	for (let i of data) {
	await conn.sendMessage(i.id, { text: `${q}\n\n_*BROADCAST MESSAGE*_` })
	await sleep(1000)
	}
	break
case 'bcgc':{
if (!isOwner && !itsMe) return onlyOwner()
if (!q) return setReply('Teksnya?')
let getGroups = await conn.groupFetchAllParticipating()
let groupss = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anus = groupss.map(v => v.id)
if(isQuotedImage || isImage || isQuotedAudio) {
var alala = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
}

setReply(`Mengirim Broadcast Ke ${anus.length} Chat, Waktu Selesai ${anus.length * 0.5 } detik`)

for (let i of anus) {
let text = `
*_Broadcast Group_*

––––––『 *MESSAGE* 』––––––

${q}

`

await sleep(1000)
let contextInfo = {
forwardingScore: 50,
isForwarded: true,
externalAdReply:{
showAdAttribution: false,
title: `${baileysVersion}`,
body:`Runtime ${runTime} `,
previewType:"PHOTO",
thumbnailUrl: 'https://telegra.ph/file/0aa9d587a19e37a0b0122.jpg'
}
}
if(isQuotedImage || isImage){
conn.sendMessage(i,{contextInfo,image:fs.readFileSync(alala),caption:text})
} else if(isQuotedAudio){
conn.sendMessage(i,{contextInfo,Audio:fs.readFileSync(alala)})
} else conn.sendMessage(i,{contextInfo,text})
}
setReply(`Sukses Mengirim Broadcast Ke ${anus.length} Group`)
}
break
case 'listgc': {
if(!isOwner) return setReply(mess.only.owner)
let getGroups = await conn.groupFetchAllParticipating()
//console.log(getGroups)
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
for (let i of anu) {
let metadata2 = await conn.groupMetadata(i)
teks += `◉ Nama : ${metadata2.subject}\n◉ Owner : ${metadata2.owner !== undefined ? '@' + metadata2.owner.split`@`[0] : 'Tidak diketahui'}\n◉ ID : ${metadata2.id}\n◉ Dibuat : ${moment(metadata2.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n◉ Member : ${metadata2.participants.length}\n\n────────────────────────\n\n`
}
conn.sendTextWithMentions(from, teks, m)
}
break
case 'listpc': {
if(!isOwner) return setReply(mess.only.owner)
let anulistp = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
let teks = `*Private Chat*\nTotal: ${anulistp.length} Chat\n\n`
for (let i of anulistp) {
let nama = store.messages[i].array[0].pushName
teks += `*Name :* ${pushname}\n*User :* @${sender.split('@')[0]}\n*Chat :* https://wa.me/${sender.split('@')[0]}\n\n───────────\n\n`
}
setReply(teks)
}
break
case 'getfile':{
if(!q) return setReply("Mau cari file apa")
let format = q.split(".")[1]
if(!format) return setReply('Tipe file js atau json?')
let mimetype = format == "js"?  'text/javascript' : format == "json"? 'application/json' : ""
let jpegThumbnail = fs.readFileSync("./stik/thumbnaildokumen.jpg")
setReply("Getting File...")
await sleep(2000)

let data1 = await fs.existsSync(`./database/${q}`)
let data2 = await fs.existsSync(`./message/${q}`)
let data3 = await fs.existsSync(`./lib/${q}`)
let data4 = await fs.existsSync(`./${q}`)
let data5 = await fs.existsSync(`./stik/${q}`)

if(data1) {
let file = fs.readFileSync(`./database/${q}`)
conn.sendMessage(m.chat, { document: file, fileName: q, mimetype,  jpegThumbnail  }, { quoted: m })
} else if(data2) {
let file = fs.readFileSync(`./message/${q}`)
conn.sendMessage(m.chat, { document: file, fileName: q, mimetype,  jpegThumbnail  }, { quoted: m })
} else if(data3) {
let file = fs.readFileSync(`./lib/${q}`)
conn.sendMessage(m.chat, { document: file, fileName: q, mimetype,  jpegThumbnail }, { quoted: m })
} else if(data4) {
let file = fs.readFileSync(`./${q}`)
conn.sendMessage(m.chat, { document: file, fileName: q, mimetype,  jpegThumbnail }, { quoted: m })
} else if(data5) {
let file = fs.readFileSync(`./stik/${q}`)

if(format == "mp4"){
conn.sendMessage(m.chat, { video: file},{ quoted: m })
} else conn.sendMessage(m.chat, {image: file},{ quoted: m })

} else setReply("File not found")

}
break
case 'getcase':
try{
if (!m.key.fromMe && !isOwner) return setReply(mess.only.owner)
if (!q) return setReply("*Mau nyari Case apa kak*")
if(q.startsWith(prefix)) return setReply("Query tidak boleh menggunakan prefix")
let nana = await getCase(q)
setReply(nana)
} catch(err){
console.log(err)
setReply(`Case ${q} tidak di temukan`)
}
break
case 'block':
if (!isOwner) return onlyOwner()
if(isGroup){

if(users){
await conn.updateBlockStatus(users, "block")
setReply(`Sukses block user`)
} else {
setReply("Silakan reply pesan atau tag atau input nomer yang mau di block")
}
} else if(!isGroup){
if(q){
var woke = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
if(woke.startsWith("08")) return setReply("Awali nomer dengan 62")
if(!woke.startsWith("62")) return setReply("Silakan reply pesan atau tag atau input nomer yang mau di block")
await conn.updateBlockStatus(woke, "block")
} else if(!q){
setReply("Masukan nomer yang ingin di block")
}
setReply(`Berhasil Block user ${woke.split("@")[0]}`)
}
break

case  'unblock':
if (!isOwner) return onlyOwner()
if(isGroup){
if(users){
await conn.updateBlockStatus(users, "unblock")
await setReply(`Sukses unblock user`)
} else if(!q){
setReply("Silakan reply pesan atau tag atau input nomer yang mau di block")
}
} else if(!isGroup){
if(q){
let woke = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
if(woke.startsWith("08")) return setReply("Awali nomer dengan 62")
if(!woke.startsWith("62")) return setReply("Silakan re�ply pesan atau tag atau input nomer yang mau di block")
await conn.updateBlockStatus(woke, "unblock")
setReply(`Sukses unblock ${woke}`)
} else if(!q){
setReply("Masukan nomer yang ingin di unblock")
}

}
break
case 'listblock':{
let block = await conn.fetchBlocklist()
setReply('List Block:\n\n' + `Total: ${block == undefined ? '*0* Diblokir' : '*' + block.length + '* Diblokir'}\n` + block.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`)
}
break
case '$':{
if (!itsMe && !isOwner) return onlyOwner()
await setReply("_Executing..._")
exec(q, async (err, stdout) => {
if (err) return setReply(`${copyright}:~ ${err}`)
if (stdout) {
await setReply(`*>_ Console*\n\n${stdout}`)
}
})
}
break
case 'clearalluser':
if (!isOwner) return onlyOwner()
setReply("Sukses clear all User")
db.data.users = {}
break
case 'clearallerror':
if (!isOwner) return onlyOwner()
setReply("SukseS clear all error")
_error.clear(listerror)
break
case 'listerror': {
let errornye = `*List Error*\nJumlah : ${db.data.listerror.length}\n\n`
for (let i of db.data.listerror){
errornye += `_*Command*_ : ${i.cmd}\n_*System Error*_ : ${i.error}\n\n*]─────────────────[*\n\n`
}
errornye += `© ${botName}`
setReply(errornye)
}
break
case 'clearban':{
if (!isOwner) return onlyOwner()
setReply("Sukses clear all Ban")
ban.length = 0
}
break
case 'clearlevel':
if (!isOwner) return onlyOwner()
setReply("Sukses clear all level")
db.data.level = []
break
case 'clearhit':
if (!isOwner) return onlyOwner()
setReply("Sukses clear all hit")
db.data.hittoday = []
break
case 'del': case 'd':
if(!mentionByReply) return setReply("Reply pesan")
if (mentionByReply == botNumber) {
conn.sendMessage(from, { delete: { remoteJid: from, fromMe: true, id: m.quoted.id, participant: mentionByReply } })
} else if(mentionByReply !== botNumber && isBotGroupAdmins){
conn.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: m.quoted.id, participant: mentionByReply } })
}
break
case 'kenon': case 'banwa': {
if(!isOwner) return setReply(mess.only.owner)
if (m.quoted || q) {
var tosend = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (tosend === global.owner) return setReply(`Tidak bisa verif My Creator!`)
var targetnya = tosend.split('@')[0]

try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `I noticed that a user was using modified whatsapp, so i ask support to ban this account for violating terms of service, and the account uses a WhatsApp bot that can send malicious messages so that other users' WhatsApp cannot work
Number : +${targetnya}`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19531.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007735016")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}
 
})
setReply(`Wait 1-24 Jam an untuk proses banned dari bot dan tunggu ±30 Detik an untuk melihat balasan email dari WhatsApp tuan Hw Mods🥺🙏`)

let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
setReply(`##- WhatsApp Support -##

Sepertinya Anda menggunakan atau mengajukan pertanyaan mengenai versi WhatsApp yang tidak resmi.

Untuk memastikan Anda memiliki akses ke WhatsApp, verifikasi ulang nomor telepon Anda menggunakan aplikasi resmi kami yang dapat diunduh dari situs web kami: www.whatsapp.com/download

Aplikasi tidak resmi membahayakan keamanan dan keselamatan Anda, dan kami tidak mendukungnya.

Berikut yang mungkin terjadi jika Anda menggunakannya:

Tidak ada jaminan bahwa pesan atau data Anda seperti lokasi Anda atau file yang Anda bagikan akan bersifat privat dan aman.

Akun mungkin akan diblokir karena penggunaan aplikasi WhatsApp yang tidak resmi bertentangan dengan Ketentuan Layanan kami.

Berikut adalah ketentuan layanan WhatsApp:

Ketentuan Layanan WhatsApp

1. Penggunaan Aplikasi

Anda setuju untuk menggunakan aplikasi WhatsApp ("Aplikasi") hanya untuk tujuan yang sah dan sesuai dengan hukum yang berlaku. Anda tidak diizinkan untuk menggunakan Aplikasi untuk tujuan ilegal atau melanggar hak-hak pihak ketiga. Anda juga setuju untuk tidak menggunakan Aplikasi untuk mengirimkan, menerima, atau menyimpan informasi yang melanggar hukum atau melanggar hak-hak pihak ketiga.

2. Hak Cipta dan Merek Dagang

Anda setuju bahwa semua hak cipta, merek dagang, dan hak milik lainnya yang terkait dengan Aplikasi adalah milik WhatsApp, Inc. dan/atau afiliasinya. Anda tidak diizinkan untuk menggunakan atau memodifikasi hak cipta, merek dagang, atau hak milik lainnya tanpa izin tertulis dari WhatsApp, Inc. atau afiliasinya.

3. Privasi dan Keamanan Data
WhatsApp berjanji untuk melindungi privasi dan keamanan data Anda. Kami akan memproses data Anda sesuai dengan Kebijakan Privasi kami yang dapat diakses di https://www.whatsapp.com/legal/#privacy-policy. Dengan menggunakan Aplikasi, Anda setuju dengan Kebijakan Privasi kami dan memberikan persetujuan Anda untuk memproses data Anda sesuai dengan Kebijakan Privasi kami. 

4. Pembatasan Tanggung Jawab 
WhatsApp tidak bertanggung jawab atas kerugian apapun yang disebabkan oleh penggunaan Aplikasi oleh Anda atau pihak ketiga lainnya, termasuk namun tidak terbatas pada kerugian yang disebabkan oleh kegagalan teknis atau kerusakan peralatan, kehilangan data, kerusakan properti, atau kerugian finansial lainnya. 

5. Perubahan Ketentuan Layanan 
WhatsApp berhak untuk mengubah Ketentuan Layanan ini sewaktu-waktu tanpa pemberitahuan sebelumnya. Dengan melanjutkan penggunaan Aplikasi setelah perubahan Ketentuan Layanan ini berlaku, Anda setuju untuk terikat oleh versi terbaru dari Ketentuan Layanan ini.`)
} else if (payload.includes(`"payload":false`)) {
setReply(`##- WhatsApp Support -##

Terima kasih telah menghubungi kami. Kami akan menghubungi Anda kembali melalui email, dan itu mungkin memerlukan waktu hingga tiga hari kerja.`)
} else setReply(util.format(res.data))
} catch (err) {setReply(`${err}`)}
} else setReply('Masukkan nomor target!')
}
break 
case 'unbanwa':{
try{ 
if (!q) return setReply ('Masukan Nomor')
  let ntah = await axios.get("https://www.whatsapp.com/contact/noclient/")
let email = await axios.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "ID")
form.append("phone_number", `${q}`)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `Saya ingin Anda mengaktifkan kembali nomor saya karena saya tidak melakukan kesalahan apa pun yang bertentangan dengan komunitas WhatsApp atau peraturan tolong aktifkan kembali nomor saya karena saya ada pekerjaan penting di perusahaan saya jadi saya minta lagi tolong aktifkan kembali nomor [ ${q} ]`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axios({
  url,
  method: "POST",
  data: form,
  headers: {
    cookie
  }
})
var payload = String(res.data)
if (payload.includes(`"payload":true`)) {
setReply (`WhatsApp Support

Hai,
Terima kasih telah menghubungi kami.

Kami mengerti bahwa saat ini Anda tidak dapat mengakses WhatsApp dan kami sedang bekerja dengan giat untuk menjawab permohonan Anda. Terima kasih untuk kesabaran Anda, dan kami akan berusaha untuk membalas email Anda secepat mungkin. Untuk informasi selengkapnya, silakan baca artikel dibawah ini.
Jika Anda memiliki pertanyaan atau masalah lain, jangan ragu untuk menghubungi kami. 

Kami akan dengan senang hati membantu!

*WHATSAPP SUPPORT:*
https://faq.whatsapp.com/465883178708358`)
} else if (payload.includes(`"payload":false`)) {
  setReply (`Terima kasih telah menghubungi kami. Dan itu mungkin memerlukan waktu hingga tiga hari kerja.`)
}
} catch (err){
                console.log(err)
  setReply (`${err}`)
            }
}
break
case 'joincall': case 'tlp': case 'turu': {
if (!isGroup && !isOwner) return onlyGroup()
conn.relayMessage(m.chat, {
scheduledCallCreationMessage: {
callType: "VIDEO",		
scheduledTimestampMs: 12000,
title: `Slep Call🗿\n\n
${botName} By ${ownerName}\n\n`,		
		inviteCode: 'https://yandex.com', }	}, {})	}
	break
case 'sendpol':{
function checkDuplicate(arr) {
    return new Set(arr).size !== arr.length
}
    let a = q.split("|").slice(1)
    if (!a[1]) return setReply( 'Format\n' + prefix + command + 'ehanz ganteng |ya|gak')
    if (a[12]) return setReply('Kebanyakan pilihan, Format\n' + prefix + command + ' halo |ya|gak')
    if (checkDuplicate(a)) return setReply('Ada kesamaan isi dalam pesan!')
    let cap = "*Polling Request By* " + m.name + "\n*Pesan:* " + q.split("|")[0]

    const pollMessage = {
        name: cap,
        values: a,
        multiselect: false,
        selectableCount: 1
    }
    await conn.sendMessage(m.chat, {
        poll: pollMessage
    })

}
break
//Eval.code
case '>': {
if (!isOwner) return setReply(mess.only.owner)
try {
let evaled = await eval(q)
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
m.reply(evaled)
} catch (err) {
m.reply(String(err))
}
}
break
//------------------------ BATAS DARI AREA CASE -----------------------------\\
default:
if (isCmd) {
await _data.Nothing(toFirstCase(command), dash, allcommand)
const stringSimilarity = require("string-similarity");
let matches = await stringSimilarity.findBestMatch(toFirstCase(command), allcommand)
setReply(`Command *${prefix+command}* tidak ditemukan\nMungkin yang kamu maksud adalah *${prefix+matches.bestMatch.target.toLowerCase()}*`)
await sleep(1500)
sendSticker(stiknot)
}
}//Akhir switch command

//Auto Download Video IG
if(budy.startsWith("https://www.instagram.com/reel/") || budy.startsWith('https://www.instagram.com/p/')){
try{
let res = await fetchJson (`https://skizo.tech/api/igdl?url=${budy}&apikey=${api.ehz}`)
for (let i of res.media) {
await sleep (100)
conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key, }})
conn.sendFile(from, i,'ig.mp4', `"*乂 Instagram Downloader*"\n\n${res.caption}`, m)
	}
} catch (err){ 
let res = await instagram3 (budy)
    for (let i of res) {
await sleep (2000)
conn.sendMedia(from, i, m)
//conn.sendFile(from, i, dev)
		}
}
} 
//Auto Download Video Tiktok
if (budy.includes('https://vt.tiktok.com/') || budy.includes('https://www.tiktok.com/') || budy.includes('https://vm.tiktok.com/') ) {
try{
let res = await fetch(`https://skizo.tech/api/tiktok?url=${budy}&apikey=${api.ehz}`)
  let json = await res.json()
  let fbk = `*乂 Tiktok Downloader*\n\n*Name:* ${json.data.author.nickname}\n*Nickname:* @${json.data.author.unique_id}\n*ID:* ${json.data.id}\n*Description:* ${json.data.title}`
conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key, }})

  await conn.sendMessage(m.chat, { video: { url: json.data.play }, caption: fbk }, { quoted: m })


} catch (err){ return
}
}
//Auto sticker
if (isImage && autoSticker) {
try{
let WSF = require('wa-sticker-formatter')
let wsf = false
let mime = (m.msg || m).mimetype || ''
if (/image/.test(mime)) {
let img = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
wsf = new WSF.Sticker(img, {
pack: packName,
type: WSF.StickerTypes.FULL,
author: authorName,
crop: true,
})
}
if (wsf) {
await wsf.build()
const sticBuffer = await wsf.get()
if (sticBuffer) await conn.sendMessage(from, { sticker: sticBuffer }, {
quoted: m,
mimetype: 'image/webp',
ephemeralExpiration: 86400
})
}
}catch(err){

}
}

//jika ada yg cek prefix bot akan merespon
if (budy.includes('ekprefix')){
if (_spam.check("NotCase",senderNumber, AntiSpam)) return
_spam.add("NotCase",senderNumber, "10s", AntiSpam)
conn.sendMessage(from,{text:  `Baik kak untuk prefix saat ini adalah : 「  ${thePrefix}  」`}, { quoted: m })
}

//Jika ada yg kirim pesan "Asalamualaikun" botz akan respon✓
if (budy.includes(`ualaikum`) || budy.includes(`u'alaikum`)) { 
if (_spam.check("NotCase",senderNumber, AntiSpam)) return
_spam.add("NotCase",senderNumber, "5s", AntiSpam)
sendvn(walaikumsalam)
}



//ketika ada yang invite/kirim link grup di chat pribadi
if ((type === 'groupInviteMessage' || budy.includes('https://chat') || budy.includes('Buka tautan ini')) && !isCmd && !m.isBaileys && !isGroup && !itsMe && !isOwner) {
let { dada } = (await import("../message/sewabot.js"))
let teks = dada(prefix, pushname, ucapanWaktu)
setReply(teks)
}

//User Private Chat
if (!isGroup && user && isPremium && new Date - user.pc < 86400000) {
} else if(!isGroup && user && isPremium && !itsMe) {
setReply( `Hai ${ucapanWaktu} kak *${pushname}*  ada yang bisa aku bantu ? silakan ketik ${prefix}menu`)
user.pc = new Date * 1
}

//Jika ada yg ara bot✓
if (katara.includes(budy)) {		
if (_spam.check("NotCase",senderNumber, AntiSpam)) return 
_spam.add("NotCase",senderNumber, "5s", AntiSpam)
sendvn(wibu)
}
//Jika ada yang tag nomer owner
if (isGroup && budy.includes(`${devoloper1}`)) {
if (_spam.check("NotCase",senderNumber, AntiSpam)) return 
if (itsMe) return
const kta = ['*Iya kak itu nomer ayang aku ada apa ya ??*\n','*Jangan di tag dia sedang sibuk.*\n','*Kenapa kak tag ayang aku??*\n']
const su = kta[Math.floor(Math.random() * kta.length)]
let me = m.sender
conn.sendMessage(from, { 
text: `${su}`,
contextInfo:{
mentionedJid:[me],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": `${botName}`,
"body": 'created by ehanz',
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": its ,
}
}
},{ 
quoted: m })

sendSticker(stikown)
_spam.add("NotCase",senderNumber, "5s", AntiSpam)
}
//jika ada yg kirim pesan "makasih" botz akan respon✓
if (budy.includes(`akasih`) || budy.includes(`ksih`) ) { 
if (_spam.check("NotCase",senderNumber, AntiSpam)) return 
_spam.add("NotCase",senderNumber, "5s", AntiSpam)
sendSticker(stiktnk)
}   	
//Jika ada yg toxic botz akan merespon✓
if (bad.includes(budy)) {		
if (_spam.check("NotCase",senderNumber, AntiSpam)) return 
_spam.add("NotCase",senderNumber, "5s", AntiSpam)
sendSticker(stiktox)
}
//Jika ada yg toxic botz akan merespon✓
if (dosa.includes(budy)) {		
if (_spam.check("NotCase",senderNumber, AntiSpam)) return 
_spam.add("NotCase",senderNumber, "5s", AntiSpam)
sendvn(astaga)
}
//Jika ada yg pangil bot✓
if (katabot.includes(budy)) {		
if (_spam.check("NotCase",senderNumber, AntiSpam)) return 
_spam.add("NotCase",senderNumber, "5s", AntiSpam)
sendvn(halo)
}
//Jika ada yg toxic botz akan merespon✓
if (katakawai.includes(budy)) {		
if (_spam.check("NotCase",senderNumber, AntiSpam)) return 
_spam.add("NotCase",senderNumber, "5s", AntiSpam)
sendvn(kawai)
}
//Jika ada yang bilang ohayo pagi bot akan merespon✓
if(ohayo.includes(budy)){
if (_spam.check("NotCase",senderNumber, AntiSpam)) return 
if (timeWib >= '11:00' && timeWib <= '23:50')  return setReply("Hadeuh sekarang udah ga pagi kak") 
_spam.add("NotCase",senderNumber, "5s", AntiSpam)
setReply(`${ucapanWaktu} kak`)
}

//Jika ada yang bilang oyasumi malem bot akan merespon✓
if(katamalem.includes(budy)){
if (_spam.check("NotCase",senderNumber, AntiSpam)) return 
if (timeWib >= '06:00' && timeWib <= '17:00')  return setReply("Hadeuh sekarang udah ga malem kak")
_spam.add("NotCase",senderNumber, "10s", AntiSpam)
setReply(`${ucapanWaktu} kak`)
}
         
//Jika ada yang bilang koniciwa siang bot akan merespon✓
if(katasiang.includes(budy)){
if (_spam.check("NotCase",senderNumber, AntiSpam)) return 
_spam.add("NotCase",senderNumber, "5s", AntiSpam)
setReply(`${ucapanWaktu} kak`)
}


































} catch (err){
Log(err)
//add to dashboard
if(isCmd) _data.Failed(toFirstCase(command), dash)
let e = util.format(err)

if(err.message.includes("Cannot find module")){
let module = err.message.split("Cannot find module '")[1].split("'")[0]
let teks = `Module ${module} belom di install
silakan klik tombol install di bawah terlebih dahulu`
return setReply(teks)
}

await conn.sendText(Ownerin, `]─────「 *SYSTEM-ERROR* 」─────[\n\n${e}\n\n© ${fake1}`, m) 
if(_error.check(err.message, db.data.listerror)) return
_error.add(err.message, command, db.data.listerror)
if(autoblockcmd){
_blockcmd.add(command,listcmdblock)
await setReply("Command telah di block karena terjadi error")
}

if(autoReport){
if(isQuotedImage){
var media =  "Reply Image ✅"
}else if(isQuotedVideo){
var media = "Reply Video ✅"
} else if(isQuotedSticker){
var media = "Reply Sticker ✅"
} else if(isQuotedAudio){
var media = "Reply Audio ✅"
} else if(isQuotedTeks){
var media =  "Reply Teks ✅"
} else if(isQuotedTag){
var media =  "Reply Tag ✅"
} else {
var media = "No Quoted ❌"
}

if(q.length > "0"){
var tetek = q
} else if(q.length == "0"){
var tetek = "No Query ❌"
}

if (isGroup && isBotGroupAdmins) {
let linkgc = await conn.groupInviteCode(from)
var yeh = `https://chat.whatsapp.com/${linkgc}`
} else if(isGroup && !isBotGroupAdmins){
var yeh = `Botz Is Not Admin`
} else if(!isGroup){
var yeh = `Botz Is Not In The Group`
}

let teks =`\n*]───── 「 Laporan Bug ⚠️」 ─────[*\n\n👤 Nama : ${pushname}\n📳 Nomer : wa.me/${senderNumber}\n📢 Info Laporan :\n       _${e}_\n🔖 Command : ${prefix}${command}\n⏰Time : ${timeWib} Wib\n📝 Query : ${tetek}\n🧩 Quoted : ${media}\n💠 Group : ${isGroup?`${groupName}`:'Di private chat'}\n🆔 ID : ${from}\n🌐 Link Group : ${yeh}\n\n\n`


await conn.sendMessage(Ownerin, {text:teks} , {quoted: fkontak})

if(!autoblockcmd){
await conn.sendMessage(from,{ text: "Jika Bot Tidak Merespon Mungkin Ada Kendala Dalam Bot Ini,Kendala Akan Saya Laporkan Kepada Creator Bot Agar Segera Memperbaiki nya Terimakasih..."})
}

if(isQuotedSticker || isQuotedImage || isQuotedVideo || isQuotedAudio ){
let media = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
await conn.sendMedia (Ownerin, media, m, {caption: "System Error"})
await fs.unlinkSync(media)
}

}
}







} catch(err){
Log(err)
console.log(chalk.bgRed(chalk.black("[  ERROR  ]")),util.format(err))
let e = String(err)
if (e.includes("this.isZero")) {return}
if (e.includes("rate-overlimit")) {
if(!publik) return
publik = false
await conn.sendMessage(nomerOwner+"@s.whatsapp.net",{
text: `Terjadi rate-overlimit
Bot telah mengganti dari mode Public ke mode Self
Untuk menghindari spam yang berlebihan,
Silakan tunggu 1 menit hingga semua pesan
telah terbaca oleh bot`
})
await setTimeout(() => {
publik = true
conn.sendMessage(nomerOwner+"@s.whatsapp.net",{
text: `Berhasil mengubah mode self ke mode public`
})
}, 60000)
return
}
if (e.includes('Connection Closed')){ return }
if (e.includes('Timed Out')){ return }
if (e.includes('Value not found')){ return }
console.log(chalk.white('Message Error : %s'), chalk.green(util.format(e)))
}





}//Akhir export default



reloadFile(import.meta.url)



