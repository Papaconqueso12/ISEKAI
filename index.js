require("dotenv").config(); // Cargar variables de entorno

const { Client, GatewayIntentBits } = require("discord.js");
const express = require("express");

const app = express();
app.get("/", (req, res) => res.send("¡Estoy vivo!"));
app.listen(3000, () => console.log("Servidor keep_alive activo"));

// Configuración del bot
const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});

client.once("ready", () => {
    console.log(`Conectado como ${client.user.tag}`);
});

client.on("messageCreate", (message) => {
    if (message.content.toLowerCase() === "!hola") {
        message.reply("¡Hola, Diego! 😊");
    }
});

// Usa el token desde el archivo .env
client.login(process.env.DISCORD_TOKEN);

