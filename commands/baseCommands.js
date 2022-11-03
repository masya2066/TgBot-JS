
// import cfg from '../config.json' assert { type: "json" }
// import TelegramBot from 'node-telegram-bot-api';
// const bot = new TelegramBot(cfg.token, {polling: true})

export class Commands{ 
    
    static setCmd(bot){ 
            bot.setMyCommands([
                {command: '/info' , description: 'Информация о боте'},
                {command: '/users', description: 'Просто ссылки на некоторых людей.'}
            ])
    }
}

