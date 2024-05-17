const fs = require('fs')
const chalk = require('chalk')

//contact details
global.ownernumber = ['201032199513']
global.ownername = "𝗠 𝗨 𝗭 𝗔 𝗡♡゙"//owner name
global.ytname = "𝗖 𝗔 𝗩 𝗘 ⾕."
global.socialm = "𝗭𝗛𝗧𝗘𝗥 𝗕𝗢𝗧⩉"
global.location = "egypt"

global.botname = 'زعــتـــر' //name of the bot

//sticker details
global.stickername = 'مــــوزان مهنــدس'
global.packname = 'بــــوت زعتــر'
global.author = 'مــــوزان مهنــدس'
//console view/theme
global.themeemoji = '🧩'
global.wm = "𝗠 𝗨 𝗭 𝗔 𝗡 | 𝗖 𝗔 𝗩 𝗘."

//theme link
global.link = 'https://whatsapp.com/channel/0029VadI7hk5Ejy2CFolh80Q'

//custom prefix
global.prefa = ['.']

//false=disable and true=enable
global.welcome = true //auto welcome
global.autoRecording = false //auto recording
global.autoTyping = false //auto typing
global.autorecordtype = false //auto typing + recording
global.autoread = false //auto read messages
global.autobio = false //auto update bio
global.anti212 = true //auto block +212
global.autoread_status = false //auto view status/story



//reply messages
global.mess = {
    done: '*تحديث زعتــر!* \n\n*⾕ c a v e ⾕*\n\n*​​​​​​​​​​​​𖤘 Bot link:* \nhttps://whatsapp.com/channel/0029VadI7hk5Ejy2CFolh80Q\n',
    prem: '*هذا الامر فقط للمستخـدم مميز*',
    admin: '*هذا الامر فقط للادمن يا عضو*',
    botAdmin: '*لازم ترفع البوت ادمن ليعمل الامر* ',
    owner: '*هذا الامر للمطور فقط*',
    group: '*هذا الامر للجروبات فقط*',
    private: '*هذا الامر في شات الخاص*',
    wait: '*انتظر يبه...* ',    
    error: '*حدث خطا ما!*',
}

global.thumb = fs.readFileSync('./Gallery/thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
