module.exports = function(client, msg) {
  
  if (msg.channel.type === "text") {
    if (msg.content.startsWith("clear")) {
      const acceptedRoles = ["Owner", "Mod", "Admin"];
      const memberHasPower = msg.member.roles.cache.some(r => acceptedRoles.includes(r.name));
      if (memberHasPower) {
        msg.channel.bulkDelete(50);
      }
    }
  }
  
  if (msg.channel.type === "dm") {
    if (msg.content.startsWith("hide me")) {
      let poem = msg.content.split("hide me")[1].trim();
      let userID = msg.author.id;
      let sharedGuild = client.guilds.cache.find(guild => guild.members.cache.find(member => member.user.id === userID));
      let channel = sharedGuild.channels.cache.find(ch => ch.name === "poems");
      if (channel) {
        channel.send(`An anonymous poet wrote the following:\n${poem}`);
      }
    }
  }

};
