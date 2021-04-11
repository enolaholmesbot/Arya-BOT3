let handler = function (m) {
  // this.sendContact(m.chat, '6282292119677', 'Andi', m)
  this.sendContact(m.chat, '6282292119677', 'Andi', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
