module.exports = function(client, member) {
  const channel = member.guild.channels.find(ch => ch.name === "welcome");
  if (channel) {
    channel.send(`Welcome to the server, ${member.user.tag}!`);
  }
};
