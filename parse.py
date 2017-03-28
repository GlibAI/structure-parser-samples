import requests
import json

ORG = 'glib-sample'
ID = '123456'

base_url = 'http://35.187.158.185:8080/parse'
url = '/'.join([base_url, ORG, ID])
headers = {'content-type': 'application/json'}

data = {"query": "i want to eat a burger"}

r = requests.post(url, data=json.dumps(data), headers=headers)
if r.status_code == 200:
    response = json.loads(r.content)
    print 'Query: ', response['query']
    print 'Intent: ', response['intent']
    print 'Score: ', response['score']
    print 'Entities: ', response['context']
else:
    response = json.loads(r.content)
    print 'Error: ', response['message']
