import os
import discord


from .env import load.env, find_dotenv
load_.env(find_dotenv())


token = os.get.env('DISCORD_TOKEN')

client = discord.Client()

@client.event
async def on_ready():
    print(f'{client.user} has connected to Discord!')

    client.run(token)
