
import { createRequire } from 'module'
import { fileURLToPath } from "url"
import fs from "fs"
const require = createRequire(import.meta.url)
const version = require("@whiskeysockets/baileys/package.json").version 
global.require = require
global.reloadFile = (file) => reloadFile(file)
global.language = "id"
global.nomerOwner ="6281316643491"
global.nomerOwner2 = "6285795718659"
global.runWith = "Panel"

global.ownerName = "-єнαηz"
global.botName = "R⩜⃝ngelꪆᴮᵒᵗ" 
global.sessionName ="session"
global.setmenu ="location"
global.docType = "docx"
global.Qoted = "ftoko"
global.autoBio = false
global.baileysMd = true
global.antiSpam = true
global.fake = botName
global.Console = false
global.copyright = `© ${botName}`
global.baileysVersion = `Baileys ${version}`
global.fake1 ="R⩜⃝ngelꪆᴮᵒᵗ"
global.packName = "Rangel°᭄ᴮᵒᵗ"
global.authorName = "Created By єнαηz"
global.replyType = "web"
global.setwelcome = "type11"
global.autoblockcmd = false
global.autoReport = true
global.autoLevel = true
global.autoSticker = false
global.gamewaktu = 60
global.limitCount = 30
global.Intervalmsg = 1000 //detik
global.session = 'session'
global.fileStackApi ="AVKHbeyXsT0G9IKI01qenz" //daftar di filestack
global.apiflash ='9b9e84dfc18746d4a19d3afe109e9ea4' //
global.gcounti = {
'prem' : 60,
'user' : 20
} 
// Apikey 
global.api = {
ehz: 'always ehz',
angel: 'zenzkey_af003aedbf', // Apikey Zahwazein
Lol: 'GataDios',
Botcahx: 'Admin',
}
global.syt = 'https://www.youtube.com/@ehanzdhoanx552'
global.sgc = 'https://chat.whatsapp.com/Fguw4KxsP6qCBm9RfZvHOS'
global.sig = 'https://instagram.com/ehanzdhoanx'
global.ehanzUrl = 'https://telegra.ph/file/59a2583b604f3cb255cb4.jpg'
global.angelUrl = 'https://telegra.ph/file/1a0a7bedb59fe80a3d9f5.jpg'
global.fotoRandom = [
"https://telegra.ph/file/e029478aecb1a6a13c164.jpg",
"https://telegra.ph/file/3d5d06d629491be76272a.jpg",
"https://telegra.ph/file/6f9900d82a1e075c15c27.jpg",
"https://telegra.ph/file/dc966f02b88e7bc9224ab.jpg",
"https://telegra.ph/file/87839efd609396560965f.jpg"

    ]



async function reloadFile(file) {
  file = (file).url || (file)
  let fileP = fileURLToPath(file)
  fs.watchFile(fileP, () => {
    fs.unwatchFile(fileP)
    console.log(`Update File "${fileP}"`)
    import(`${file}?update=${Date.now()}`)
  })
}

reloadFile(import.meta.url)





