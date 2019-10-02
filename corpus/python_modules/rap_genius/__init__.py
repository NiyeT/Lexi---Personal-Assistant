import requests
import json

def get_artists(genre):

    headers = {
        'cookie': '__cfduid=df266d7c60fbe7c1b612bdefcb009aaca1560545954; _ab_tests_identifier=d808fcf3-d135-48f5-bdaa-925035fd30ce; mp_77967c52dc38186cc1aadebdd19e2a82_mixpanel=%7B%22distinct_id%22%3A%20%2216b8202033c77e-09944693ea6d76-3f770c5a-1fa400-16b8202033d43f%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fgenius.com%2F%22%2C%22%24initial_referring_domain%22%3A%20%22genius.com%22%2C%22AMP%22%3A%20false%2C%22genius_platform%22%3A%20%22web%22%7D; mp_mixpanel__c=0; _csrf_token=4sdt0uSsbzc7P2qn%2B6NdxrUzXazI9QLvLDqMvsde6HA%3D; _rapgenius_session=BAh7BzoPc2Vzc2lvbl9pZEkiJWQ1NjBhNWU0NGI0NWI4NzAzMzlkMzYyYWNhY2U2YWEyBjoGRUY6EF9jc3JmX3Rva2VuSSIxNHNkdDB1U3NiemM3UDJxbis2TmR4clV6WGF6STlRTHZMRHFNdnNkZTZIQT0GOwZG--482723a3a85ae833e9719cc0f6368b48f53d9116',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'en-US,en;q=0.9',
        'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1',
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'accept': 'application/x-javascript, text/javascript, text/html, application/xml, text/xml, */*',
        'referer': 'https://genius.com/tags/hip-hop/all',
        'authority': 'genius.com',
        'x-requested-with': 'XMLHttpRequest',
    }

    params = (
        ('page', '1'),
    )

    response = requests.get('https://genius.com/tags/hip-hop/all', headers=headers, params=params).text
    print(response)
    return response

def get_albums(artist):

    headers = {
        'cookie': '__cfduid=df266d7c60fbe7c1b612bdefcb009aaca1560545954; _ab_tests_identifier=d808fcf3-d135-48f5-bdaa-925035fd30ce; mp_77967c52dc38186cc1aadebdd19e2a82_mixpanel=%7B%22distinct_id%22%3A%20%2216b8202033c77e-09944693ea6d76-3f770c5a-1fa400-16b8202033d43f%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fgenius.com%2F%22%2C%22%24initial_referring_domain%22%3A%20%22genius.com%22%2C%22AMP%22%3A%20false%2C%22genius_platform%22%3A%20%22web%22%7D; mp_mixpanel__c=0; _csrf_token=4sdt0uSsbzc7P2qn%2B6NdxrUzXazI9QLvLDqMvsde6HA%3D; _rapgenius_session=BAh7BzoPc2Vzc2lvbl9pZEkiJWQ1NjBhNWU0NGI0NWI4NzAzMzlkMzYyYWNhY2U2YWEyBjoGRUY6EF9jc3JmX3Rva2VuSSIxNHNkdDB1U3NiemM3UDJxbis2TmR4clV6WGF6STlRTHZMRHFNdnNkZTZIQT0GOwZG--482723a3a85ae833e9719cc0f6368b48f53d9116',
        'if-none-match': 'W/"d2d9b4dc9dfd3b3066dfbaad22995008"',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'en-US,en;q=0.9',
        'user-agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.131 Mobile Safari/537.36',
        'accept': 'application/json, text/plain, */*',
        'referer': 'https://genius.com/artists/Young-thug',
        'authority': 'genius.com',
        'x-requested-with': 'XMLHttpRequest',
    }

    params = (
        ('page', '1'),
    )

    response = requests.get('https://genius.com/api/artists/20503/albums', headers=headers, params=params).text
    print(response )
    return response

def get_songs(artist,album):
    pass

get_genre('kanye')
