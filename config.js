const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_27_08_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDIyLFxuICAgICAgICA2NyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDk2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMzEsXG4gICAgICAgIDY1LFxuICAgICAgICA4NyxcbiAgICAgICAgMTc2LFxuICAgICAgICA0MixcbiAgICAgICAgNjQsXG4gICAgICAgIDE3NixcbiAgICAgICAgNzQsXG4gICAgICAgIDY1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgOTEsXG4gICAgICAgIDkyLFxuICAgICAgICAxODUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMzIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTI5LFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MixcbiAgICAgICAgMTM1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDksXG4gICAgICAgIDkwLFxuICAgICAgICAxMixcbiAgICAgICAgNzIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxODYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDY1LFxuICAgICAgICA2NixcbiAgICAgICAgMTQyLFxuICAgICAgICAzNyxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTAsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTcsXG4gICAgICAgIDI3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNDQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNDMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTAzLFxuICAgICAgICAzOCxcbiAgICAgICAgODAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNDksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTkxLFxuICAgICAgICA3MyxcbiAgICAgICAgMTg0LFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjksXG4gICAgICAgIDcxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTE2LFxuICAgICAgICAzOCxcbiAgICAgICAgMTk4LFxuICAgICAgICA2MCxcbiAgICAgICAgNTcsXG4gICAgICAgIDc1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE3LFxuICAgICAgICA2OCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDM3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDM2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA4NSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxOSxcbiAgICAgICAgOTIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNzAsXG4gICAgICAgIDYwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAyLFxuICAgICAgICAzMixcbiAgICAgICAgMjAxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDc0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgODAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIwNixcbiAgICAgICAgOTEsXG4gICAgICAgIDg3LFxuICAgICAgICA4MCxcbiAgICAgICAgMjU0LFxuICAgICAgICA3MyxcbiAgICAgICAgNzQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjMyLFxuICAgICAgICAzNyxcbiAgICAgICAgOTUsXG4gICAgICAgIDYyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI5LFxuICAgICAgICA3OCxcbiAgICAgICAgMzEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMzQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDU1LFxuICAgICAgICA1LFxuICAgICAgICA4MixcbiAgICAgICAgNTksXG4gICAgICAgIDIwLFxuICAgICAgICAxMixcbiAgICAgICAgMTkzLFxuICAgICAgICA5NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgOTksXG4gICAgICAgIDg5LFxuICAgICAgICA4NCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDU4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDk0LFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA4MlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTI5LFxuICAgICAgICA0MCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjQxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDYxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDExLFxuICAgICAgICAxNjYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTIsXG4gICAgICAgIDExMyxcbiAgICAgICAgODMsXG4gICAgICAgIDY5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNDksXG4gICAgICAgIDE3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNjksXG4gICAgICAgIDEyNixcbiAgICAgICAgMjIsXG4gICAgICAgIDksXG4gICAgICAgIDE5NixcbiAgICAgICAgMTYyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDI4LFxuICAgICAgICAxODQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNDEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjUxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDgwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNTEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTk4LFxuICAgICAgICA0LFxuICAgICAgICAxOSxcbiAgICAgICAgNTUsXG4gICAgICAgIDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlUwL1JUSGJ4Uy9ZQlIzTGhnL1Zia3dhb2orVmZEUGd6anVLYzhsMTFwU0k9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjh3UU1fZ2ZxUWJxRjF1MnRIdUtfandcIixcbiAgXCJwaG9uZUlkXCI6IFwiMjE5NDEwMzYtNDA3YS00OWRkLWI1ODMtMmUxYjdmYThhMjhmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0NixcbiAgICAgIDE3NSxcbiAgICAgIDQ3LFxuICAgICAgOTMsXG4gICAgICAzNixcbiAgICAgIDI3LFxuICAgICAgMTMyLFxuICAgICAgNzQsXG4gICAgICAxNzQsXG4gICAgICAxOTcsXG4gICAgICA4MixcbiAgICAgIDE1MSxcbiAgICAgIDc3LFxuICAgICAgMTI0LFxuICAgICAgOTMsXG4gICAgICA4NSxcbiAgICAgIDEzNSxcbiAgICAgIDEzNyxcbiAgICAgIDEwMixcbiAgICAgIDI0MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0MixcbiAgICAgIDE2NixcbiAgICAgIDMyLFxuICAgICAgNDYsXG4gICAgICA1OSxcbiAgICAgIDIwNSxcbiAgICAgIDIwNCxcbiAgICAgIDI0MixcbiAgICAgIDIsXG4gICAgICAxODEsXG4gICAgICAxODcsXG4gICAgICAxMDksXG4gICAgICAzMSxcbiAgICAgIDI0OCxcbiAgICAgIDk0LFxuICAgICAgMTc1LFxuICAgICAgMTk1LFxuICAgICAgMTg3LFxuICAgICAgMzksXG4gICAgICA3OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJQTk1CRVZTQlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3MDI1OTkxNzI6MjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLwnZCT8J2Qh/CdkIDwnZCV8J2asPCdkI3wnZCD8J2QgCBIzLYuXCIsXG4gICAgXCJsaWRcIjogXCIzMjcxMDkwNzE0MjMyOToyNUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJU3VyTm9HRUpPVzJMVUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInRIeEYzbW9zMWVLUU85QlR0cndaQ1NoOFRmVm5mKytOYUdhaWl3VXlYamM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiQktFVjc2NGI2OHBabWhRLzVnU2JrcjZtVFhNdXlaRHpSYjQ0UzVXODZiSlZrQ2VJeGIxQmgwR0dIQy9icTlZbEkyNlpEOVVXdHhqaVFFQWlzN1pSQ2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiUWJuS2RWcU9HdkMxcDVBYzZWUjF4eHlpcU5ENnBwY2VRZzV4ZlVpRGErQVJwSlRzWUNEb01CQjlTV295QWJZSkM5bS9xSmV6eTJQVTVWKzZFTTJtQkE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3MDI1OTkxNzI6MjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA1NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIzMjA2NDIzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSXV6XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJdXouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJQTGJIM28yTisvUm9IaTBDb1VEWjk3VFc3bHJsaGJ3ZnR4QTlaN3gyV0NBPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE4MDAwODMyMDMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjMyMDM0MDYwMzJcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
