const { Client } = require('discord.js');
const client = new Client();
const fs = require('fs');

fs.readdir('./events/', function(err, files) {
  files.forEach(file => {
    const handleEvent = require(`./events/${file}`);
    const eventName = file.split('.')[0];
    client.on(eventName, function(...args) {
      handleEvent(client, ...args);
    });
  });
});

require('dotenv').config();
const token = process.env.BOT_TOKEN;
client.login(token);
