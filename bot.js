const { Telegraf, Markup } = require('telegraf');

const bot = new Telegraf('9009394556:AAE_gUN0abt54zTwYe7gLvjr1juNR41kjoM');

bot.start((ctx) => {
    ctx.reply(
        "🤖 <b>Savdo360 Tizimiga xush kelibsiz!</b>\n\nKerakli bo'limni tanlang:",
        {
            parse_mode: 'HTML',
            ...Markup.keyboard([
                ['📊 Bugungi Savdo', '📦 Ombor Qoldig\'i'],
                ['📖 Nasiyalar Daftari', '💵 Kassa Balansi'],
                ['🚨 Yaroqsiz (Brak)', 'ℹ️ Ma\'lumot']
            ]).resize()
        }
    );
});

bot.hears('📊 Bugungi Savdo', (ctx) => {
    ctx.reply("📊 Bugungi savdolar: 0 so'm");
});

bot.hears('📦 Ombor Qoldig\'i', (ctx) => {
    ctx.reply("📦 Ombordagi tovarlar:\n• Choynak - 5 dona");
});

bot.hears('📖 Nasiyalar Daftari', (ctx) => {
    ctx.reply("📖 Faol nasiyalar mavjud emas.");
});

bot.hears('💵 Kassa Balansi', (ctx) => {
    ctx.reply("💵 Kassa:\n• Naqd: 0 so'm\n• Terminal: 0 so'm\n• Click: 0 so'm");
});

bot.hears('🚨 Yaroqsiz (Brak)', (ctx) => {
    ctx.reply("🚨 Yaroqsiz tovarlar ro'yxati bo'sh.");
});

bot.hears('ℹ️ Ma\'lumot', (ctx) => {
    ctx.reply("ℹ️ Bu Savdo360 All-in-One tizimining rasmiy Telegram botidir.");
});

bot.launch();
console.log("🤖 Savdo360 Node.js boti muvaffaqiyatli ishga tushdi!");
