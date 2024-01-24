

"use strict"
//process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
process.on('uncaughtException', console.error)
import "./settings.js"
const {Browsers,
makeInMemoryStore,
useMultiFileAuthState,
makeCacheableSignalKeyStore,
MessageRetryMap,
fetchLatestBaileysVersion,
getContentType,
PHONENUMBER_MCC,
useSingleFileAuthState
} = (await import('@whiskeysockets/baileys')).default
import fs, { readdirSync,  existsSync, readFileSync, watch } from "fs"
import logg from 'pino'
import axios from "axios"
import {Socket, smsg, protoType} from './lib/simple.js'
import {handler} from './message/case.js'
import _ from 'lodash'
import CFonts from 'cfonts'
import path, { join, dirname } from 'path'
import readline from 'readline'
import chalkAnimation from 'chalk-animation'
import {memberUpdate,groupsUpdate } from "./message/group.js"
import {connect} from "./server.js"
import { antiCall } from "./message/anticall.js"
import {connectionUpdate} from "./message/connection.js"
import {sleep} from "./lib/myfunc.js" 
import fetch from 'node-fetch'
import NodeCache from 'node-cache'
import { createRequire } from 'module'
import { fileURLToPath, pathToFileURL } from 'url'
import { platform } from 'process'
import syntaxerror from 'syntax-error';
import { format } from 'util';
import yargs from 'yargs';
var require = createRequire(import.meta.url) 
const PORT = process.env.PORT || 3000   
const proxy = process.env.http_proxy || 'http://168.63.76.32:3128';
const __dirname = dirname(fileURLToPath(import.meta.url))
global.__filename = function filename(pathURL = import.meta.url, rmPrefix = platform !== 'win32') { 
    return rmPrefix ? /file:\/\/\//.test(pathURL) ? 
    fileURLToPath(pathURL): pathURL: pathToFileURL(pathURL).toString() 
}; 
/*
global.__dirname = function dirname(pathURL) { 
    return path.dirname(global.__filename(pathURL, true)) 
}; 
*/
global.__require = function require(dir = import.meta.url) {
     return createRequire(dir) 
    }
global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())




protoType()

const useStore = !process.argv.includes('--no-store')
const doReplies = !process.argv.includes('--no-reply')
const pairingCode = process.argv.includes('--use-pairing-code')
const useMobile = process.argv.includes('--mobile')
//const handler = (await import('./message/case.js'))
// external map to store retry counts of messages when decryption/encryption fails
// keep this out of the socket itself, so as to prevent a message decryption/encryption loop across socket restarts
const msgRetryCounterCache = new NodeCache()


// Read line interface
const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
const question = (text) => new Promise<string>((resolve) => rl.question(text, resolve))














//Function untuk menghapus sampah tmp di database
setInterval(() => {
fs.readdir('./database', async function (err, files) {
let tmpFile = await files.filter(item => item.endsWith(".tmp"))
if(tmpFile.length > 0){
console.log("Menghapus file sampah tmp")
await tmpFile.forEach(function (file) {
fs.unlinkSync(`./database/${file}`)
});
console.log("Berhasil menghapus semua sampah tmp")
}
})
}, 10_000)



//Function Auto delete sampah 
setInterval(() => {
let directoryPath = path.join();
fs.readdir(directoryPath, async function (err, files) {
var filteredArray = await files.filter(item =>
item.endsWith("gif") ||
item.endsWith("png") || 
item.endsWith("mp3") ||
item.endsWith("mp4") || 
item.endsWith("jpg") ||
item.endsWith("webp") ||
item.endsWith("webm") ||
item.endsWith("zip") 
)
if(filteredArray.length > 0){
let teks =`Terdeteksi ${filteredArray.length} file sampah`
console.log(teks)
setInterval(() => {
if(filteredArray.length == 0) return console.log("File sampah telah hilang")
filteredArray.forEach(function (file) {
let sampah = fs.existsSync(file)
if(sampah) fs.unlinkSync(file)
})
}, 15_000)
}
});
}, 30_000)

 
CFonts.say('fearless', {
font: 'chrome',
align: 'left',
gradient: ['red', 'magenta']
})
 
setTimeout(() => {
chalkAnimation.rainbow('Lorem ipsum').start(); // Animation resumes
}, 2000);


//Connect to WhatsApp
const connectToWhatsApp = async () => {
await(await import("./message/database.js")).default()

//Function untuk update runtime di database
setInterval(() => {
let data = global.db.data.others['runtime']

if(data){ 
if((new Date - data.lastTime) > (60000*60)){
data.runtime = + new Date
data.lastTime = + new Date
console.log("Runtime di perbarui")
} else data.lastTime = + new Date
} else{ global.db.data.others['runtime'] = {
runtime: + new Date,
lastTime: + new Date
}
console.log("New update runtime")
}

},60_000)



//const { state } = useSingleFileAuthState('./session.json')
const { state, saveCreds } = await useMultiFileAuthState(session)
const store = makeInMemoryStore({ logger: logg().child({ level: 'fatal', stream: 'store' }) }) 
const { version, isLatest } = await fetchLatestBaileysVersion()




//Funtion agar pesan bot tidak pending  
const getMessage = async (key) => {
if(store) {
const msg = await store.loadMessage(key.remoteJid, key.id, undefined)
return msg?.message || undefined
}
// only if store is present
return proto.Message.fromObject({})
}

//Untuk menyimpan session  
const auth = {
creds: state.creds,
/** caching makes the store faster to send/recv messages */
keys: makeCacheableSignalKeyStore(state.keys, logg().child({ level: 'fatal', stream: 'store' })),
}


 

  

//Koneksi nih silakan di isi
const connectionOptions = {
version,
printQRInTerminal: !pairingCode,
mobile: useMobile,
logger: logg({ level: 'fatal' }),
auth,
browser: ['Chrome (Linux)', '', ''], // for this issues https://github.com/WhiskeySockets/Baileys/issues/328
getMessage,
MessageRetryMap,
msgRetryCounterCache,
keepAliveIntervalMs: 20000,
defaultQueryTimeoutMs: undefined, // for this issues https://github.com/WhiskeySockets/Baileys/issues/276
connectTimeoutMs: 30000,
emitOwnEvents: true,
fireInitQueries: true,
generateHighQualityLinkPreview: true,
syncFullHistory: true,
markOnlineOnConnect: true,
}


global.conn = Socket(connectionOptions)
connect(conn, PORT)
store.bind(conn.ev)

  

















  


if (pairingCode && !conn.authState.creds.registered) {
if (useMobile) throw new Error('Cannot use pairing code with mobile api')

let phoneNumber
if (!!pairingNumber) {
phoneNumber = pairingNumber.replace(/[^0-9]/g, '')

if (!Object.keys(PHONENUMBER_MCC).some(v => phoneNumber.startsWith(v))) {
console.log(chalk.bgBlack(chalk.redBright("Start with your country's WhatsApp code, Example : 62xxx")))
process.exit(0)
}
} else {
phoneNumber = await question(chalk.bgBlack(chalk.greenBright(`Please type your WhatsApp number : `)))
phoneNumber = phoneNumber.replace(/[^0-9]/g, '')

// Ask again when entering the wrong number
if (!Object.keys(PHONENUMBER_MCC).some(v => phoneNumber.startsWith(v))) {
console.log(chalk.bgBlack(chalk.redBright("Start with your country's WhatsApp code, Example : 62xxx")))

phoneNumber = await question(chalk.bgBlack(chalk.greenBright(`Please type your WhatsApp number : `)))
phoneNumber = phoneNumber.replace(/[^0-9]/g, '')
rl.close()
}
}

setTimeout(async () => {
let code = await conn.requestPairingCode(phoneNumber)
code = code?.match(/.{1,4}/g)?.join("-") || code
console.log(chalk.black(chalk.bgGreen(`Your Pairing Code : `)), chalk.black(chalk.white(code)))
}, 3000)
} 

// login mobile API (prone to bans)
// source code https://github.com/WhiskeySockets/Baileys/blob/master/Example/example.ts#L72
if (useMobile && !conn.authState.creds.registered) {
const { registration } = conn.authState.creds || { registration: {} }

if (!registration.phoneNumber) {
let phoneNumber = await question(chalk.bgBlack(chalk.greenBright(`Please type your WhatsApp number : `)))
phoneNumber = phoneNumber.replace(/[^0-9]/g, '')

// Ask again when entering the wrong number
if (!Object.keys(PHONENUMBER_MCC).some(v => phoneNumber.startsWith(v))) {
console.log(chalk.bgBlack(chalk.redBright("Start with your country's WhatsApp code, Example : 62xxx")))

phoneNumber = await question(chalk.bgBlack(chalk.greenBright(`Please type your WhatsApp number : `)))
phoneNumber = phoneNumber.replace(/[^0-9]/g, '')
}

registration.phoneNumber = "+" + phoneNumber
}

const phoneNumber = parsePhoneNumber(registration.phoneNumber)
if (!phoneNumber.isValid()) throw new Error('Invalid phone number: ' + registration.phoneNumber)

registration.phoneNumber = phoneNumber.format("E.164")
registration.phoneNumberCountryCode = phoneNumber.countryCallingCode
registration.phoneNumberNationalNumber = phoneNumber.nationalNumber

const mcc = PHONENUMBER_MCC[phoneNumber.countryCallingCode]
registration.phoneNumberMobileCountryCode = mcc

async function enterCode() {
try {
const code = await question(chalk.bgBlack(chalk.greenBright(`Please Enter Your OTP Code : `)))
const response = await conn.register(code.replace(/[^0-9]/g, '').trim().toLowerCase())
console.log(chalk.bgBlack(chalk.greenBright("Successfully registered your phone number.")))
console.log(response)
rl.close()
} catch (e) {
console.error('Failed to register your phone number. Please try again.\n', e)
await askOTP()
}
}

// from this : https://github.com/WhiskeySockets/Baileys/blob/master/Example/example.ts#L110
async function enterCaptcha() {
const response = await sock.requestRegistrationCode({ ...registration, method: 'captcha' })
const pathFile = path.join(process.cwd(), "temp", "captcha.png")
fs.writeFileSync(pathFile, Buffer.from(response.image_blob, 'base64'))
await open(pathFile)
const code = await question(chalk.bgBlack(chalk.greenBright(`Please Enter Your Captcha Code : `)))
fs.unlinkSync(pathFile)
registration.captcha = code.replace(/["']/g, '').trim().toLowerCase()
}

async function askOTP() {
if (!registration.method) {
let code = await question(chalk.bgBlack(chalk.greenBright('What method do you want to use? "sms" or "voice" : ')))
code = code.replace(/["']/g, '').trim().toLowerCase()

if (code !== 'sms' && code !== 'voice') return await askOTP()

registration.method = code
}

try {
await conn.requestRegistrationCode(registration)
await enterCode()
} catch (e) {
console.error('Failed to request registration code. Please try again.\n', e)
if (e?.reason === 'code_checkpoint') {
await enterCaptcha()
}
await askOTP()
}
}

await askOTP()
}










  
conn.ev.process(async(events) => {

//Cnnection Update
if(events['connection.update']) {
if (db.data == null) await loadDatabase()
const update = events['connection.update']
await connectionUpdate(connectToWhatsApp,conn,update)
}

// credentials updated -- save them
if(events['creds.update']) { await saveCreds() }

  
// received a new message
if(events['messages.upsert']) {
const chatUpdate = events['messages.upsert']
if (global.db.data) await global.db.write() 
if (!chatUpdate.messages) return;
let m = chatUpdate.messages[0] || chatUpdate.messages[chatUpdate.messages.length - 1]
if (!m.message) return
if (m.key.id.startsWith('BAE5') && m.key.id.length === 16) return
m = await smsg(conn, m, store) 
handler(conn, m, chatUpdate,store)
}

  
//Anti Call
if(events.call) {
const node = events.call
antiCall(db,node, conn)
}
	

 //Member Update
    if (events["group-participants.update"]) {
      const anu = events["group-participants.update"];
      if (global.db.data == null) await loadDatabase();
      memberUpdate(conn, anu);
    }

//Group Update  
if(events['groups.update']) {
const anu = events['groups.update']
//groupsUpdate(conn,anu)
}

  
//------------------------------------[BATAS]--------------------------------\\

})
  


//Function untuk update gempa BMKG
let gempa = db.data.others['updateGempa']
let data1 = db.data.others['infogempa']
if(!gempa) db.data.others['updateGempa'] = []

if(gempa && gempa.length > 0){

setInterval(async() => {
const {data} = await axios.get("https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json")
let nana = /TimurLaut|Tenggara|BaratDaya|BaratLaut|Utara|Timur|Selatan|Barat/
//console.log(data.Infogempa)
let lokasi = data.Infogempa.gempa.Wilayah //.split("km")[1].replace(nana,"").replace(" ",'').replace(" ","")
let waktu = data.Infogempa.gempa.Jam
let caption = `––––––『 *INFO GEMPA* 』––––––

*• Tanggal:* ${data.Infogempa.gempa.Tanggal}
*• Waktu:* ${data.Infogempa.gempa.Jam}
*• Kordinat:* ${data.Infogempa.gempa.Coordinates}
*• Magnitudo:* ${data.Infogempa.gempa.Magnitude}
*• Kedalaman:* ${data.Infogempa.gempa.Kedalaman}
*• Lokasi:* ${data.Infogempa.gempa.Wilayah}
*• Potention:* ${data.Infogempa.gempa.Potensi}
*• Effect:* ${data.Infogempa.gempa.Dirasakan}
`

if(data1){
let getGroups = await conn.groupFetchAllParticipating()
let groupss = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anus = groupss.map(v => v.id)
let image = {url:"https://data.bmkg.go.id/DataMKG/TEWS/" + data.Infogempa.gempa.Shakemap}
  
if(data1.lokasi !== lokasi && data1.lokasi !== waktu){
 
data1.lokasi = lokasi
data1.waktu = waktu
  
for(let i of gempa){
if(!anus.includes(i)) {
gempa.splice(gempa.indexOf(i,1)) 
console.log("menghapus auto update gempa pada group")
} else {
await sleep(2000)
conn.sendMessage(i,{image,caption}) 
}
}
}

  
} else {
let getGroups = await conn.groupFetchAllParticipating()
let groupss = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anus = groupss.map(v => v.id)

db.data.others['infogempa'] = {
lokasi : lokasi,
waktu: waktu
}

  
for(let i of gempa){
if(!anus.includes(i)) {
gempa.splice(gempa.indexOf(i,1)) 
console.log("menghapus auto update gempa pada group")
} else {
await sleep(2000)
conn.sendMessage(i,{image,caption}) 
}
}
 
} 

}, 60_000*10)// akhir dari set interval

}// akhir dari gempa.length









let isInit = true;
global.reloadHandler = async function (restatConn) {
  /*
try {
const Handler = await import(`./message/case.js?update=${Date.now()}`).catch(console.error)
if (Object.keys(Handler || {}).length) handler = Handler
} catch (e) {
console.error(e)
}

if (restatConn) {
const oldChats = global.conn.chats
try {
global.conn.ws.close()
} catch {}
conn.ev.removeAllListeners()
global.conn = Socket(connectionOptions, {
chats: oldChats
})
isInit = true
}

if (!isInit) {
conn.ev.off('messages.upsert', conn.handler)
}

conn.handler = handler.handler.bind(global.conn)
conn.ev.on('messages.upsert', conn.handler)
isInit = false
return true
*/
}

 








  







  
const toFirstCase = (str) =>{
let first = str.split(" ")              // Memenggal nama menggunakan spasi
.map(nama => 
nama.charAt(0).toUpperCase() + 
nama.slice(1))                 // Ganti huruf besar kata-kata pertama
.join(" ");

return first
 }


 const Log = (text) =>{
 console.log(text)
 }
  


let d = new Date
let locale = 'id'
let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
let week = d.toLocaleDateString(locale, { weekday: 'long' })
const calender = d.toLocaleDateString("id", {
day: 'numeric',
month: 'long',
year: 'numeric'
})


function clockString(ms) {
let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
let dDisplay = d > 0 ? d +  " hari, ": "";
let hDisplay = h > 0 ? h +  " jam, " : "";
let mDisplay = m > 0 ? m +  " menit, " : "";
let sDisplay = s > 0 ? s +  " detik" : "";
let time = d > 0 ? dDisplay + hDisplay + mDisplay  : hDisplay + mDisplay + sDisplay
return time
}

function tmp(file) {
return file+".tmp"
}

global.tmp = tmp
global.clockString = clockString
global.week = week
global.calender = calender  
global.Log = Log
global.toFirstCase = toFirstCase
return conn
 }

connectToWhatsApp()
    


    









