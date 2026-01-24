import requests
from bs4 import BeautifulSoup
# response = requests.get(
     
#      "https://www.regmiabinash72.com.np"
# )
# print(response.text)

# url='https://jsonplaceholder.typicode.com/posts'

# data =  {
#     'id': 30,
#     'title': 'foo',
#     'body': 'bar',
#     'userId': 33,
#   }
# headers = {
#     'Content-type': 'application/json; charset=UTF-8',
#   }
# response=requests.post(url,headers=headers,json=data)
# print(response.text)
url="https://newsapi.org/v2/everything?q=Apple&from=2026-01-15&sortBy=popularity&apiKey=API_KEY"
r = requests.get(url)
soup=BeautifulSoup(r.text,'html.parser')

# print(soup.prettify())

for paragraph in soup.find_all('html'):
    print(paragraph.text)
# print(r.text)