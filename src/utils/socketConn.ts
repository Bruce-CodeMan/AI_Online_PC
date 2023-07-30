/*
 * @Date: 2023-07-28 16:24:32
 * @Author: Bruce Hsu
 * @Description: 
 */
import { io } from "socket.io-client"

import { store } from "./store";
import { setConversations, setConversationHistory } from "./dashboardSlice";

let socket:any;

export const connectWithSocketServer = () => {
  socket = io('http://localhost:3000')
  socket.on("connect", () => {
    console.log("connected with socket.io server.")
    console.log(socket.id)

    // get session history
    socket.emit("session-history", {
      sessionId: localStorage.getItem("sessionId")
    })

    socket.on("session-details", (data: any) => {
      const { sessionId, conversations } = data

      localStorage.setItem("sessionId", sessionId)
      store.dispatch(setConversations(conversations))
    })

    socket.on("conversation-details", (conversation: any) => {
      console.log(conversation)
      store.dispatch(setConversationHistory(conversation))
    })

  })
}

export const sendConversationMessage = (message: any, conversationId: string) => {
  console.log(conversationId)
  socket.emit("conversation-message", {
    sessionId: localStorage.getItem("sessionId"),
    message,
    conversationId
  })
}
