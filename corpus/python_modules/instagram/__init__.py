import requests
from ast import literal_eval
import json
import re

def get_unfollowed_followers():
    headers = {
        'cookie': 'mid=XRvsVwAEAAFhekNSfuB2niWmAW9v; csrftoken=ppIenJiCBh20h06wjwBUAC2Q1E3e4FnQ; shbid=8575; ds_user_id=38135600; sessionid=38135600%3AVCSshmWATt5OoG%3A26; rur=VLL; shbts=1562906659.046413; urlgen="{\\"47.146.141.77\\": 5650\\054 \\"2605:e000:1219:c6ab:b0d5:deef:d05a:8f1d\\": 20001\\054 \\"104.238.46.139\\": 8100}:1hlnqs:5CeGhKHBCy5XOdf3xbMSqWb7Ag8"',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'en-US,en;q=0.9',
        'user-agent': 'Mozilla/5.0 (Linux; Android 8.0.0; Pixel 2 XL Build/OPD1.170816.004) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.100 Mobile Safari/537.36',
        'accept': '*/*',
        'referer': 'https://www.instagram.com/explore/',
        'authority': 'www.instagram.com',
        'x-requested-with': 'XMLHttpRequest',
        'x-ig-app-id': '936619743392459',
    }

    params = (
        ('__a', '1'),
        ('include_reel', 'true'),
    )

    response = json.loads(requests.get('https://www.instagram.com/accounts/activity/', headers=headers, params=params).text)
    activities=response['graphql']['user']['activity_feed']['edge_web_activity_feed']['edges']

    recently_followed=[]

    for activity in activities:
        try:
            follow_activity=activity['node']['user']['followed_by_viewer']
        except:
            continue
        followed_by_viewer=follow_activity
        if(followed_by_viewer):recently_followed.append(activity)
    return recently_followed

def follow():
    headers = {
        'cookie': 'mid=XRvsVwAEAAFhekNSfuB2niWmAW9v; csrftoken=ppIenJiCBh20h06wjwBUAC2Q1E3e4FnQ; shbid=8575; ds_user_id=38135600; sessionid=38135600%3AVCSshmWATt5OoG%3A26; rur=VLL; shbts=1562906659.046413; urlgen="{\\"104.238.46.121\\": 8100}:1hm7gC:mfM1yOHtVLmbulivKxtMGo9SYGo"',
        'origin': 'https://www.instagram.com',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'en-US,en;q=0.9',
        'user-agent': 'Mozilla/5.0 (Linux; Android 8.0.0; Pixel 2 XL Build/OPD1.170816.004) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.100 Mobile Safari/537.36',
        'x-requested-with': 'XMLHttpRequest',
        'x-csrftoken': 'ppIenJiCBh20h06wjwBUAC2Q1E3e4FnQ',
        'x-ig-app-id': '936619743392459',
        'x-instagram-ajax': 'eaa96c04bc05',
        'content-type': 'application/x-www-form-urlencoded',
        'accept': '*/*',
        'referer': 'https://www.instagram.com/',
        'authority': 'www.instagram.com',
        'content-length': '0',
    }
    response = json.loads(requests.post('https://www.instagram.com/web/friendships/3908640144/follow/', headers=headers).text)
    return response

def watch_insta():
    unfollowed_followers=get_unfollowed_followers()
    for follower in unfollowed_followers:
        username=follower['node']['user']['id']
        print(username)
        users_page=requests.get('https://instagram.com/' + username).text
        print(users_page)
        user_ids=re.findall("profilePage_",users_page,re.DOTALL)
        print('user_ids:',user_ids)

watch_insta()
