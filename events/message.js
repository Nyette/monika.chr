const { RichEmbed } = require('discord.js')

module.exports = (client, msg) => {
  if (msg.channel.type === 'text') {
    if (msg.content.toLowerCase() === 'yuri') {
      msg.channel.send('🔪')
    } else if (msg.content.toLowerCase() === 'natsuki') {
      msg.channel.send('🍬')
    } else if (msg.content.toLowerCase() === 'manga') {
      msg.channel.send('Manga is literature, too!')
    } else if (msg.content === 'clear') {
      // delete the last 50 messages in the channel
      msg.channel.bulkDelete(50)
    } else if (msg.content === 'poem of the day') {
      // embeds a random poem in the "poems" channel
      if (msg.channel.name === 'poems') {
        const embed = new RichEmbed()
        .setColor(0xE14D88)
        .setTitle('Done')
        .setDescription('But a poem is never actually finished. It just stops moving.')
        msg.channel.send(embed)
      } else {
        msg.channel.send('You cannot post poems in this channel!')
      }
    } else if (msg.content === 'inspire me') {
      if (msg.channel.name === 'inspiration') {
        const topics = ['favorite animal', 'dreams', 'fears']
        const position = Math.floor(Math.random() * topics.length)
        let topic = topics[position]
        msg.channel.send(`Have you considered writing about your ${topic}?`)
      } else {
        msg.channel.send(`That command will only work in the #inspiration channel!`)
      }
    }
  } else if (msg.channel.type === 'dm') {
    if (msg.content === 'hide me') {
      const num = Math.floor(Math.random() * 500000)
      const poem = new RichEmbed()
      .setColor(0xE14D88)
      .setAuthor(`By Anon #${num}`)
      .setTitle('Title')
      .setDescription('Content')
      msg.channel.send(poem)
      // find a specific guild that the bot is a member of
      // const member = guild.member(author)
      // if (member) {
        // const destination = guild.channels.find(ch => ch.name === 'poems')
        // destination.send(poem)
      // }
    }
  }
}
