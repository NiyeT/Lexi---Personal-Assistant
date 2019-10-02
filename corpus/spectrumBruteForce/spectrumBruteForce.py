import requests

cookies = {
    'lang': 'en',
    'session': '%7B%22req_id%22%3A1%2C%22sess_id%22%3A%220%22%2C%22basic%22%3Afalse%2C%22user%22%3A%22username%22%2C%22dataModel%22%3A%7B%22name%22%3A%22Internal%22%2C%22nss%22%3A%5B%7B%22name%22%3A%22gtw%22%2C%22uri%22%3A%22http%3A%2F%2Fsagemcom.com%2Fgateway-data%22%7D%5D%7D%2C%22ha1%22%3A%22d46187bbbf5f4dcc3b5aa765d61d8327deb882cf99a835a392db4d6657b74f2e%22%2C%22nonce%22%3A%22%22%7D',
}

headers = {
    'Origin': 'http://192.168.1.1',
    'Accept-Encoding': 'gzip, deflate',
    'Accept-Language': 'en-US,en;q=0.9',
    'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.131 Mobile Safari/537.36',
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'Accept': 'application/json, text/javascript, */*; q=0.01',
    'Referer': 'http://192.168.1.1/0.1/gui/',
    'X-Requested-With': 'XMLHttpRequest',
    'Connection': 'keep-alive',
}

data = {
  'req': '{"request":{"id":0,"session-id":"0","priority":true,"actions":[{"id":0,"method":"logIn","parameters":{"user":"username","persistent":"true","session-options":{"nss":[{"name":"gtw","uri":"http://sagemcom.com/gateway-data"}],"language":"ident","context-flags":{"get-content-name":true,"local-time":true},"capability-depth":2,"capability-flags":{"name":true,"default-value":false,"restriction":true,"description":false},"time-format":"ISO_8601"}}}],"cnonce":3224652020,"auth-key":"f5e1f2c616cf4ae1d13f299bd79e980e"}}'
}

response = requests.post('http://192.168.1.1/cgi/json-req', headers=headers, cookies=cookies, data=data)
print(response.text)
