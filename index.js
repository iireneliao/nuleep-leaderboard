const Discord = require("discord.js");        
const {Intents} = require("discord.js");
const client = new Discord.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
});
const config = require("./config.json");      
const Enmap = require("enmap")                
const canvacord = require("canvacord")        
client.points = new Enmap({ name: "points" });
client.on("ready", ()=>console.log("READY")); 
const ranking = require("./ranking");       
ranking(client);                            
client.login(config.TOKEN);                 
//Bot coded by Tomato#6966
// Modified by 1r0n#6408