const { Client, RichEmbed } = require('discord.js')
const client = new Client()
require('dotenv').config()
const token = process.env.BOT_TOKEN

client.on('ready', () => {
  console.log(`${client.user.tag} is ready to help! <3`)
})

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'yuri') {
    msg.channel.send('🔪')
  } else if (msg.content.toLowerCase() === 'natsuki') {
    msg.channel.send('🍭')
  } else if (msg.content.toLowerCase() === 'manga') {
    msg.channel.send('Manga is literature, too!')
  } else if (msg.content === 'clear') {
    // if the msg is sent by an admin/mod,
    // delete the last 50 messages in the channel
  } else if (msg.content === 'poem of the day') {
    // embeds a random poem in the "poems" channel
    if (msg.channel.name === 'poems') {
      const embed = new RichEmbed()
      .setTitle('%')
      .setColor(0xE14D88)
      .setDescription('But a poem is never actually finished. It just stops moving.')
      msg.channel.send(embed)
    } else {
      msg.channel.send('You cannot post poems in this channel!')
    }
  } else if (msg.content === 'inspire me') {
    const topics = ['favorite animal', 'dreams', 'fears']
    const position = Math.floor(Math.random() * topics.length)
    const topic = topics[position]
    msg.channel.send(`Have you considered writing about your ${topic}?`)
  }
})

/*
1) the client will wait for a DM from a member
2) it will provide the member with options to choose from
3) if the content of the DM begins with "privately post",
then it will send the message to the "poems" text channel and hide the
author's identity
*/

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find(ch => ch.name === 'welcome')
  if (channel) {
    channel.send(`Welcome to the server, ${member}!`)
  }
})

client.login(token)
