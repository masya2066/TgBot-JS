export class Options{ 
    static usersOptions = { 
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: 'Данила Гамаюнов', url: 'https://vk.com/fuckyourmom4'}],
                [{text: 'Даниил Петров', url: 'https://vk.com/masev1ch'}]
            ]
        })
    }
}