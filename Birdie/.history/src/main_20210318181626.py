import os
import discord


from dotenv import load_dotenv, find_dotenv
load_dotenv(find_dotenv())


token = os.getenv('DISCORD_TOKEN')

client = discord.Client()

@client.event
async def on_ready():
    print(f'{client.user} has connected to Discord!')

    client.run(token)
