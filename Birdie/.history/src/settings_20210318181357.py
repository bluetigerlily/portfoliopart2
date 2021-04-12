import os
import discord


from src/dotenv import load_dotenv, find_dotenv
load_dotenv(find_dotenv())


token = os.get.env('DISCORD_TOKEN')

client = discord.Client()

@client.event
async def on_ready():
    print(f'{client.user} has connected to Discord!')

    client.run(token)
