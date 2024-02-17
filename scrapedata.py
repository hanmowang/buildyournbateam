from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
import pandas as pd
import time


player_stats_url = "https://www.basketball-reference.com/leagues/NBA_{}_per_game.html"
url = player_stats_url.format(2024)

# service = Service(executable_path='/Users/hanmo/Downloads/chromedriver-win64/chromedriver-win64/chromedriver.exe')
# options = webdriver.ChromeOptions()
# driver = webdriver.Chrome(service=service, options=options)

year = 2024
url = player_stats_url.format(year)

# driver.get(url)
# driver.execute_script("window.scrollBy(0,100000)")
# time.sleep(2)

# html = driver.page_source

# with open("player/{}.html".format(year), "w+", encoding="utf-8") as f:
#     f.write(html)

with open("player/{}.html".format(year), encoding="utf-8") as f:
    page = f.read()

soup = BeautifulSoup(page, "html.parser")
soup.find('tr', class_="thead").decompose()
player_table = soup.find(id="per_game_stats")
player = pd.read_html(str(player_table))[0]
player["Year"] = year

player.to_csv("players.csv")