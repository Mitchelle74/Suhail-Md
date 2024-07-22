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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_52_07_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICA3MCxcbiAgICAgICAgMjI4LFxuICAgICAgICA0MixcbiAgICAgICAgMTQyLFxuICAgICAgICAxODgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTAsXG4gICAgICAgIDI1LFxuICAgICAgICAyMyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTE4LFxuICAgICAgICA3NyxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE5MixcbiAgICAgICAgODMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTMxLFxuICAgICAgICA3MCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDUxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIxLFxuICAgICAgICAxMjksXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTA2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDg4LFxuICAgICAgICA1MCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDExOCxcbiAgICAgICAgODEsXG4gICAgICAgIDIyLFxuICAgICAgICA3MyxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEwLFxuICAgICAgICAyMCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNzgsXG4gICAgICAgIDgzLFxuICAgICAgICA5NSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMzksXG4gICAgICAgIDI0NixcbiAgICAgICAgMTcxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTYsXG4gICAgICAgIDQyLFxuICAgICAgICAxMCxcbiAgICAgICAgMjEwLFxuICAgICAgICA0MyxcbiAgICAgICAgNzYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTI1LFxuICAgICAgICA1NSxcbiAgICAgICAgMjMsXG4gICAgICAgIDg2LFxuICAgICAgICA5MixcbiAgICAgICAgMTk2LFxuICAgICAgICA4NixcbiAgICAgICAgNDEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTkyLFxuICAgICAgICA5MCxcbiAgICAgICAgODksXG4gICAgICAgIDIzNixcbiAgICAgICAgMTUzLFxuICAgICAgICA4MyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDAsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcwLFxuICAgICAgICA3NixcbiAgICAgICAgMTE3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDkwLFxuICAgICAgICA4MCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjQzLFxuICAgICAgICA2MSxcbiAgICAgICAgNDYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMzksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxOTksXG4gICAgICAgIDAsXG4gICAgICAgIDcxLFxuICAgICAgICAxOCxcbiAgICAgICAgMTk5LFxuICAgICAgICA5MCxcbiAgICAgICAgMzgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDUsXG4gICAgICAgIDYxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDM3LFxuICAgICAgICAxODMsXG4gICAgICAgIDUzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDI4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE5NixcbiAgICAgICAgODMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMTksXG4gICAgICAgIDIxNixcbiAgICAgICAgMTA5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTk5LFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzOSxcbiAgICAgICAgMjA0LFxuICAgICAgICA4NCxcbiAgICAgICAgODUsXG4gICAgICAgIDE0MixcbiAgICAgICAgNTYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMSxcbiAgICAgICAgNTAsXG4gICAgICAgIDM3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDM5LFxuICAgICAgICAxMSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTM4LFxuICAgICAgICA2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjgsXG4gICAgICAgIDIxLFxuICAgICAgICA3MyxcbiAgICAgICAgMTM3LFxuICAgICAgICA1MixcbiAgICAgICAgMjE2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDk2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgOThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDksXG4gICAgICAgIDc5LFxuICAgICAgICA3OCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNTksXG4gICAgICAgIDIyMixcbiAgICAgICAgMTA5LFxuICAgICAgICA1MyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNixcbiAgICAgICAgMjMzLFxuICAgICAgICA3NCxcbiAgICAgICAgMTQsXG4gICAgICAgIDk3LFxuICAgICAgICA2NSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgODYsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDY2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMTksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTAyLFxuICAgICAgICA1OSxcbiAgICAgICAgMTk1LFxuICAgICAgICA2MCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE4MixcbiAgICAgICAgOTUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDY2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDg0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjA5LFxuICAgICAgICAzLFxuICAgICAgICAxNSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI0NyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ6NzJEN3preUt2UFdpWTZPaFBodnZMTDdEOFcwUHc4Zyt5YlM3andYNjRRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIxZkV1WXVCWVJkYUJpN2lHWGJxTW5RXCIsXG4gIFwicGhvbmVJZFwiOiBcIjhhZThjM2M3LWI1YjMtNDMyZi1iNjYzLTY4ZWMyYmViNGIzZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzMCxcbiAgICAgIDE2NCxcbiAgICAgIDIxMCxcbiAgICAgIDc3LFxuICAgICAgMjA4LFxuICAgICAgMTAyLFxuICAgICAgNTIsXG4gICAgICA1MSxcbiAgICAgIDcsXG4gICAgICAyNTQsXG4gICAgICAxMTcsXG4gICAgICA4OSxcbiAgICAgIDEyMCxcbiAgICAgIDM3LFxuICAgICAgNjUsXG4gICAgICA0NSxcbiAgICAgIDk3LFxuICAgICAgMjI0LFxuICAgICAgNDQsXG4gICAgICA1N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTUsXG4gICAgICAxMixcbiAgICAgIDE1MixcbiAgICAgIDEzNixcbiAgICAgIDIsXG4gICAgICAzNSxcbiAgICAgIDM0LFxuICAgICAgMTA3LFxuICAgICAgMTk4LFxuICAgICAgNTgsXG4gICAgICAxMDUsXG4gICAgICAzOCxcbiAgICAgIDQyLFxuICAgICAgMTQwLFxuICAgICAgNjksXG4gICAgICA4NSxcbiAgICAgIDg5LFxuICAgICAgNixcbiAgICAgIDE0NyxcbiAgICAgIDE4MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJWQTJQODVSR1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTAyMDkyMDA0Mjo0MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTEzNjQ1MjU0MTExMzM4OjQxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09YWDZPa0RFTXlmK0xRR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwicWJvbk1wUUVoZWNzSU9VSjEycTEvaTFiZ2RIZGRxcThCYU5GOWphM2xHdz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIvTldNY1cvbmZtR2I5eW9QdHE4b3NKcWpQcmtELzB6cENDdVRlRFdYQVVrSldodHlJNU54Mk05T01WcEp2V09WTmZoaVRESnV4RjAzSGdRaWtvcTFCUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJkQTNjMHhCRThjZDY4UEh5VFhwdmNwTE5yYk5MYXJRU3JJanZkcGcrOFdaY3JQYitLNGo4VlcvT2MrNTMvdldaRlRwcUd4RjlEcjh5ZVAwbkg5NzloQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDIwOTIwMDQyOjQxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMDhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTYzNDc2OFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0=" ;


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
