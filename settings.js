7//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                    AHMII-𝗠𝗗  𝐁𝐎𝐓                                                 //
//                                                                                                      //
//                                         Ｖ：7.0                                                       //

//███╗░░░███╗░█████╗░███╗░░██╗██╗░░░██╗
//████╗░████║██╔══██╗████╗░██║██║░░░██║
//██╔████╔██║███████║██╔██╗██║██║░░░██║
//██║╚██╔╝██║██╔══██║██║╚████║██║░░░██║
//██║░╚═╝░██║██║░░██║██║░╚███║╚██████╔╝
//╚═╝░░░░░╚═╝╚═╝░░╚═╝╚═╝░░╚══╝░╚═════╝░

//███╗░░░███╗██████╗░
//████╗░████║██╔══██╗
//██╔████╔██║██║░░██║
//██║╚██╔╝██║██║░░██║
//██║░╚═╝░██║██████╔╝
//╚═╝░░░░░╚═╝╚═════╝░

//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : Ahmii-MD
//  * @author : Ahmad Meharzada
//  * @youtube : https://www.youtube.com/@notxahmiiTech
//  * @description : Ahmii-MD ,A Multi-functional whatsapp user bot.
//*
//*
//base by Ahmad Meharzada
//GitHub: NotxAhmii
//WhatsApp: +923034819465
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@notxahmiiTech
//   * Created By Github: NotxAhmii.
//   * Credit To Ahmii Meharzada
//   * © 2024 AHMII-MD-V7.
// ⛥┌┤
// */

const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "Manu-MD&PI01VI4A#_l5r9IgypmelkhTca8JbPkcDNEHX2qD3TqQs50tR0DE", // ඔයාගෙ සෙසන් එක දාගන්න / Put Your Session_id Here !!! 💚
MONGODB: process.env.MONGODB || "mongodb+srv://manulwijethilaka42:manumd123@cluster0.le0te.mongodb.net/", // ඔයාගෙ Mongodb Url එක දාගන්න / Put Your Mongodb Url Here !!! 💚
};
