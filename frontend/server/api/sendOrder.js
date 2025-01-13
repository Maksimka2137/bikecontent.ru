import TelegramBot from 'node-telegram-bot-api'

export default defineEventHandler(async (event) => {

    // import technical stuff / helpers
    const runtimeConfig = useRuntimeConfig()
    const token = runtimeConfig.TG_BOT_KEY;
    const chatId = runtimeConfig.TG_CHAT_ID;

    const bot = new TelegramBot(token, {polling: true});

    // read request body
    let req = await readBody(event)
    
    // send a message to the chat
    bot.sendMessage(chatId, `Новый заказ ${req.email}`);

    // spit out a response
    return {
        messageSent: true,
    }
})
