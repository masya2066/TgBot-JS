import { Options } from "../commands/optionsCommands.js"

export class Messages{ 


    static sendMsg(bot){ 
        bot.on('message', async msg => { 
            console.log(msg)
            const text = msg.text
            const chatId = msg.chat.id
            const msgId = msg.message_id
            //commands
            if(text === '/start' && msgId <= 1){ 
                return bot.sendMessage(chatId, 'Хоу, да ты у нас новенький(ая)! Давай поздороваемся, напиши мне "привет"');
            }
            if(text === '/users'){ 
                return bot.sendMessage(chatId, 'Вот они все пользователи:', Options.usersOptions)
            }
            if(text === '/info'){
                return bot.sendMessage(chatId, 
                    'Этот бот был создан чисто по фану, поэтому не стоит его воспринимать как то серьезно. Я пытаюсь сделать максимально понятным для всех, но хз получается или нет :D\n В этого бота я буду добавлять какие-нибудь полезные ссылки и что-нибудь еще \n Реализовывать различный функционал этого бота я буду по ходу обучения работы с TelegramApi. Поэтому я буду очень благодарен, если вы будете давать мне фидбэк.')
            }
            //messages
            if(text === 'привет'){ 
                return bot.sendMessage(chatId, 'Привет, меня только начали создавать и я пока что ничего не умею, но в будущем обязательно научусь чему-нибудь');
            }

                return bot.sendMessage(chatId, 'Хэй, чувак, я тебя не понимаю...' || 'Поробуй что нибудь другое')
        })
    }
}