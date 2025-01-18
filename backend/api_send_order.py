from dotenv import dotenv_values
from flask import Flask
from flask import jsonify
from flask import request
import telebot

config = dotenv_values(".env")

TG_BOT_KEY = config['TG_BOT_KEY']
TG_CHAT_ID = config['TG_CHAT_ID']

app = Flask(__name__)


@app.post('/api/send-order')
def send_order():
    bot = telebot.TeleBot(TG_BOT_KEY)
    data = request.get_json()
    email = data.get('email')
    bot.send_message(chat_id=TG_CHAT_ID, text=f"Новый заказ {email}")
    return jsonify({
        'messageSent': True,
    })
