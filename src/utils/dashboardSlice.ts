import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    sessionEstablished: false,
    conversations: [],
    selectedConversationId: null
}

const dashboardSlice = createSlice({
    name: "dashboard",
    initialState,
    reducers: {
        setSelectedConversationId: (state, action) => {
            state.selectedConversationId = action.payload
        },
        addMessage: (state: any, action) => {
            const {message, conversationId} = action.payload
            const conversation: any = state.conversations.find((c: any) => c.id === conversationId)
            if(conversation) {
                conversation.messages.push(message)
            }else{
                state.conversations.push({
                    id: conversationId,
                    messages: [message],
                })
            }
        },
        setConversations: (state: any, action) => {
            state.conversations = action.payload
            state.sessionEstablished = true
        },
        setConversationHistory: (state: any, action) => {
            const {id, messages} = action.payload
            
            const conversation = state.conversations.find((c: any) => c.id === id)

            if(conversation) {
                conversation.messages = messages
            }else{
                state.conversations.push({
                    id,
                    messages
                })
            }
        }
    }
})

export const { setSelectedConversationId, addMessage, setConversations, setConversationHistory } = dashboardSlice.actions;

export default dashboardSlice.reducer;