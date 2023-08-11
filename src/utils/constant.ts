/*
 * @Date: 2023-08-04 09:08:13
 * @Author: Bruce Hsu
 * @Description: 
 */
export const AUTH_TOKEN = "auth_token"
export const HTTP_LINK = "//localhost:3000/graphql"
export const DEFAULT_PAGE_SIZE = 10
export const CHATGPT_URL = "http://127.0.0.1:3000/stream"
export const MODEL_SELECT = [
    { id: 1, name: "ChatGPT-3.5", available: false },
    { id: 2, name: "ChatGPT-4.0", available: true },
    { id: 3, name: "Calude2", available: true }
]