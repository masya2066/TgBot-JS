import TelegramBot from "node-telegram-bot-api";
import {Commands} from "./commands/baseCommands.js";
import { Messages } from "./messages/eventMessages.js";
import cfg from "./config.json" assert { type: "json" }
const cmd = new Commands
const bot = new TelegramBot(cfg.token, {polling: true})

function start(){
    Commands.setCmd(bot)
    Messages.sendMsg(bot)
}

start();

