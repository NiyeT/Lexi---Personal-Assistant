import requests

def submitInfo(full_name,username,password,phone_number):
    headers = {
        'Origin': 'https://www.instagram.com',
        'X-Instagram-AJAX': '8913b83d7689',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': '*/*',
        'Referer': 'https://www.instagram.com/',
        'X-Requested-With': 'XMLHttpRequest',
        'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.100 Mobile Safari/537.36',
        'X-CSRFToken': 'MpwT3EoVhYWvC94oczr5rD1u4UTvNWhf',
        'X-IG-App-ID': '936619743392459',
    }

    data = {
      'password': password,
      'phone_number': phone_number,
      'username': username,
      'first_name': full_name,
      'client_id': 'XSYVUAAEAAEfffoof6RsJsw0GRpg',
      'opt_into_one_tap': 'false'
    }

    response = requests.post('https://www.instagram.com/accounts/web_create_ajax/attempt/', headers=headers, data=data).text
    return response

def verification(full_name,username,password,phone_number,sms_code):
    headers = {
        'cookie': 'rur=FRC; csrftoken=MpwT3EoVhYWvC94oczr5rD1u4UTvNWhf; mid=XSYVUAAEAAEfffoof6RsJsw0GRpg',
        'origin': 'https://www.instagram.com',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'en-US,en;q=0.9',
        'user-agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.100 Mobile Safari/537.36',
        'x-requested-with': 'XMLHttpRequest',
        'x-csrftoken': 'MpwT3EoVhYWvC94oczr5rD1u4UTvNWhf',
        'x-ig-app-id': '936619743392459',
        'x-instagram-ajax': '8913b83d7689',
        'content-type': 'application/x-www-form-urlencoded',
        'accept': '*/*',
        'referer': 'https://www.instagram.com/',
        'authority': 'www.instagram.com',
    }

    data = {
      'password': password,
      'phone_number': phone_number,
      'username': username,
      'first_name': full_name,
      'sms_code': sms_code,
      'client_id': 'XSYVUAAEAAEfffoof6RsJsw0GRpg',
      'seamless_login_enabled': '1',
      'tos_version': 'row',
      'opt_into_one_tap': 'false'
    }

    response = requests.post('https://www.instagram.com/accounts/web_create_ajax/', headers=headers, data=data).text
    return response

submission_response=submitInfo('jerry mandering','jerrymadneringbaconand','pleaseplease','4154240369')
print(submission_response)
sms_code=input("SMS Code: ")
verification('jerry mandering','jerrymadneringbaconand','pleaseplease','4154240369',sms_code)
