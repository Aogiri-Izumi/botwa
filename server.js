
import { fileURLToPath, URL } from 'url'
import { join, dirname } from 'path'
import { Server } from "socket.io"
import express from 'express'
import http from 'http'
import fetch from 'node-fetch'
const app = express()
const server = http.createServer(app);
const __dirname = dirname(fileURLToPath(import.meta.url))
const io = new Server(server);


export function connect(conn, PORT) {
  app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
  });
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

server.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
  //console.log('Keep Alive on ')
  //keepAlive()
});
}


//KEEP ALIVE
function keepAlive() {
    const url = `https://${process.env.REPL_SLUG}.${process.env.REPL_OWNER}.repl.co`
    if (/(\/\/|\.)undefined\./.test(url)) return
    setInterval(() => {
        fetch(url).catch(console.error)
    }, 5 * 1000 * 60)
}

