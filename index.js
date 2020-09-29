const { Client } = require('discord.js')
const client = new Client()
const fs = require('fs')
fs.readdir('./events/', (err, files) => {
  files.forEach(file => {
    const eventHandler = require(`./events/${file}`)
    const eventName = file.split('.')[0]
    client.on(eventName, (...args) => eventHandler(client, ...args))
  })
})
require('dotenv').config()
const token = process.env.BOT_TOKEN
client.login(token)
