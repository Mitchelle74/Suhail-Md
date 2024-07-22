const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/758549f0de2219884f387.jpg,https://telegra.ph/file/9498496b010dfb5900b80.jpg,https://telegra.ph/file/59bf80efbb6e6576b5a52.jpg,https://telegra.ph/file/ee0e191363161e88e4743.jpg" // ramadan Theme Images
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


// global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_41_07_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNzksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDc3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNjcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTY4LFxuICAgICAgICAyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDk4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDczLFxuICAgICAgICA1NCxcbiAgICAgICAgMTQwLFxuICAgICAgICA3MSxcbiAgICAgICAgMTExLFxuICAgICAgICAxNzQsXG4gICAgICAgIDg5LFxuICAgICAgICA4MyxcbiAgICAgICAgODAsXG4gICAgICAgIDEwLFxuICAgICAgICA2N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTE2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjA3LFxuICAgICAgICA1OSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyNSxcbiAgICAgICAgMTk2LFxuICAgICAgICA2NyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjM1LFxuICAgICAgICAzMixcbiAgICAgICAgMTg3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNDIsXG4gICAgICAgIDI5LFxuICAgICAgICAxODYsXG4gICAgICAgIDk1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNTksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxMzksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDYwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTU3LFxuICAgICAgICA3MCxcbiAgICAgICAgOTAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgODIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNTIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEzNixcbiAgICAgICAgOTcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTIwLFxuICAgICAgICA0MixcbiAgICAgICAgMTE2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDcyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNjIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNTYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNjksXG4gICAgICAgIDE5NixcbiAgICAgICAgNTYsXG4gICAgICAgIDk1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDUxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE3MixcbiAgICAgICAgNyxcbiAgICAgICAgMTksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjM2LFxuICAgICAgICAzMCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDgyLFxuICAgICAgICA0MixcbiAgICAgICAgNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDYzLFxuICAgICAgICAyMTksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTMsXG4gICAgICAgIDI5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTA1LFxuICAgICAgICA4OSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMjksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMzYsXG4gICAgICAgIDI5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDUxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDIsXG4gICAgICAgIDgwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNTEsXG4gICAgICAgIDYsXG4gICAgICAgIDk5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgODMsXG4gICAgICAgIDU2LFxuICAgICAgICAzNixcbiAgICAgICAgNzMsXG4gICAgICAgIDc2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMzYsXG4gICAgICAgIDgwLFxuICAgICAgICA0NSxcbiAgICAgICAgMTQ2L
xuICAgICAgICA3NixcbiAgICAgICAgMTgyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDM0LFxuICAgICAgICA0OSxcbiAgICAgICAgMTg2LFxuICAgICAgICA0NCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTYsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDEyMFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAzOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUsXG4gICAgICAgIDg1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDkwLFxuICAgICAgICA1NSxcbiAgICAgICAgOTcsXG4gICAgICAgIDM4LFxuICAgICAgICAxOCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDMsXG4gICAgICAgIDM3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDkxLFxuICAgICAgICA1NyxcbiAgICAgICAgMzUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgOTksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE2LFxuICAgICAgICAxODQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTYxLFxuICAgICAgICA1MCxcbiAgICAgICAgMTY4LFxuICAgICAgICA0NCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDQ1LFxuICAgICAgICA1OCxcbiAgICAgICAgODAsXG4gICAgICAgIDkyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTgxLFxuICAgICAgICAzNixcbiAgICAgICAgMTY0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDI5LFxuICAgICAgICAyMDksXG4gICAgICAgIDgzLFxuICAgICAgICA1MSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNyxcbiAgICAgICAgNTEsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgOTMsXG4gICAgICAgIDMyLFxuICAgICAgICA4MSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNyxcbiAgICAgICAgMTAyLFxuICAgICAgICA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMzMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiU0d3c0tYN1kya09wbStteSttRERsNm5xNitDMmgwN05nVUo4Y0tjKy94cz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiNnpIb1ljWl9UQ1NfOENuMGxCdmR1Z1wiLFxuICBcInBob25lSWRcIjogXCI3OTAwMzVjNC0wMmRkLTRiN2UtYWYzOC04ODI2ZTFhZGFjYmFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjEwLFxuICAgICAgMTI2LFxuICAgICAgMTcxLFxuICAgICAgMTkyLFxuICAgICAgMjM4LFxuICAgICAgMTM4LFxuICAgICAgMTc4LFxuICAgICAgMjA1LFxuICAgICAgMTU1LFxuICAgICAgODUsXG4gICAgICAxOTEsXG4gICAgICAxMzgsXG4gICAgICAxMTgsXG4gICAgICAxNDQsXG4gICAgICAxNjcsXG4gICAgICAxMjIsXG4gICAgICAxMjQsXG4gICAgICA3MSxcbiAgICAgIDExOCxcbiAgICAgIDc3XG4gICAgXVxuICB9LF
uICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQ4LFxuICAgICAgMTAyLFxuICAgICAgMTEzLFxuICAgICAgMTA5LFxuICAgICAgNTMsXG4gICAgICAyMixcbiAgICAgIDEzMixcbiAgICAgIDIzLFxuICAgICAgMyxcbiAgICAgIDIwNCxcbiAgICAgIDk1LFxuICAgICAgMTg1LFxuICAgICAgMjU1LFxuICAgICAgMTIwLFxuICAgICAgMjQwLFxuICAgICAgMjExLFxuICAgICAgNzQsXG4gICAgICAzOSxcbiAgICAgIDE1NyxcbiAgICAgIDIwMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI4SkM1QVI4RVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTAyMDkyMDA0Mjo0MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTEzNjQ1MjU0MTExMzM4OjQyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09YWDZPa0RFS3I3K2JRR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwicWJvbk1wUUVoZWNzSU9VSjEycTEvaTFiZ2RIZGRxcThCYU5GOWphM2xHdz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJDQ1pySzR3S0gvK3IvaFlmeTgyUTRjVGx3OVdqRjNBSnc3NWcyVGtRUkw0QTlZTFZuMVowQW9Kb0UwYUd4SFV3STZsSUlsZTEvdjA3dGZ6QVlLak9BZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJnSDl6OXp2ajJZMkEwYmtKdkFYa2MwUG5qRElJaUx0SlZmdUVKbjRjdG5MR0Q0dHBVQkQ5RTlGOHV2RzRkaENycXFuaXRXNXNlaUZ2dS9HRnJXaDFCdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDIwOTIwMDQyOjQyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMDhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTY2Mjg5NFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0=" // PUT your SESSION_ID


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.1",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};

























global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
