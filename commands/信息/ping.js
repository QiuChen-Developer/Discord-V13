const Discord = require('discord.js')
module.exports = {
    name: "ping",
    category: '信息',
    description: "返回延迟和API 延迟",
    timeout: 10000,
    run: async (bot, slashcommand, message, args) => {
        if (slashcommand) {
            await message.reply(`🏓 Pinging....`)
            let msg = await message.fetchReply();
            const embed = new Discord.MessageEmbed()
                .setTitle('Pong!')
                .setDescription(`🏓 Pong!\n延迟为 ${Math.floor(msg.createdTimestamp - message.createdTimestamp)}ms\nAPI延迟为 ${Math.round(bot.ws.ping)}ms`)
                .setColor('RANDOM')
            await message.editReply("\u200B")
            return await message.editReply({ embeds: [embed] })

        }
        message.reply(`🏓 Pinging....`).then(async msg => {
            const embed = new Discord.MessageEmbed()
                .setTitle('Pong!')
                .setDescription(`🏓 Pong!\n延迟为 ${Math.floor(msg.createdTimestamp - message.createdTimestamp)}ms\nAPI延迟为 ${Math.round(bot.ws.ping)}ms`)
                .setColor('RANDOM')
            msg.edit("\u200B")
            msg.edit({ embeds: [embed] })
        })
    }
}