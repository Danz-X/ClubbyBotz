let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('*[❗] Wait,Tunggu Bentar Kak Sedang Dalam Proses...*')
  let res = `https://api.zeks.xyz/api/breakwall?apikey=MIMINGANZ&text=${response}`
  conn.sendFile(m.chat, res, 'nama.jpg', `Nih Kak`, m, false)
}
handler.help = ['breakwall'].map(v => v + ' <teks>')
handler.tags = ['sticker']
handler.command = /^(breakwall)$/i
handler.limit = true
handler.register = true

module.exports = handler

