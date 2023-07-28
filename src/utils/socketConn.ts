/*
 * @Date: 2023-07-28 16:24:32
 * @Author: Bruce Hsu
 * @Description: 
 */
import { io } from "socket.io-client"

const connectWithSocketServer = () => {
  let socket = io('http://localhost:3000')
  socket.on("connect", () => {
    console.log("connected with socket.io server.")
    console.log(socket.id)
  })
}

export default connectWithSocketServer;