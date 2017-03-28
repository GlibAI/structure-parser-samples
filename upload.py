import requests
import json

ORG = 'glib-sample'
ID = '123456'

base_url = 'http://35.187.158.185:8080/upload'
url = '/'.join([base_url, ORG, ID])

files = {'intents': open('intents.txt.sample', 'rb'),
         'entities': open('entities.txt.sample', 'rb'),
         'synonyms': open('synonyms.txt.sample', 'rb')}

r = requests.post(url, files=files)
if r.status_code == 200:
    print json.loads(r.content)['message']
else:
    print 'Error: ', json.loads(r.content)['message']