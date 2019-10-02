import requests,re, json

add_songs=[]

def artist_page(artist):
    headers = {
        'authority': 'genius.com',
        'cache-control': 'max-age=0',
        'upgrade-insecure-requests': '1',
        'user-agent': 'Mozilla/5.0 (Linux; Android 8.0.0; Pixel 2 XL Build/OPD1.170816.004) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.100 Mobile Safari/537.36',
        'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
        'referer': 'https://genius.com/',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'en-US,en;q=0.9',
        'cookie': '__cfduid=d405f9281066a2c2a3f00033996f9af8f1563074114; _ab_tests_identifier=e5fa29a0-2e70-4dcd-9b9f-06d87f81cdca; _cb_ls=1; _cb=BzTmHRDA6TMoC2ClM7; _v__chartbeat3=a2zRVQFJBzaDWEc; _chartbeat2=.1563074582811.1563074595030.1.BALHKkCh9iKiDlLSopeYWLHBMBOwA.2',
        'if-none-match': 'W/"ad9cc8407f9b6ba3e637c873d0588d49"',
    }
    response = requests.get('https://genius.com/artists/Young-thug', headers=headers).text
    artist_id=re.search("for_artist_page=(\d+)",response,re.DOTALL).group(1)
    return artist_id

def list_songs(artist,page):
    artist_id=artist_page(artist)
    headers = {
        'cookie': '__cfduid=d405f9281066a2c2a3f00033996f9af8f1563074114; _ab_tests_identifier=e5fa29a0-2e70-4dcd-9b9f-06d87f81cdca; _cb_ls=1; _cb=BzTmHRDA6TMoC2ClM7; _v__chartbeat3=a2zRVQFJBzaDWEc; _chartbeat2=.1563074582811.1563079023740.1.N17HgBX4SMlMuuZMD6Fv-bD58Bhk.1; _cb_svref=https%3A%2F%2Fgenius.com%2F',
        'if-none-match': 'W/"e97101eb7c7f3a6692e46b69a9cb7ce1"',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'en-US,en;q=0.9',
        'user-agent': 'Mozilla/5.0 (Linux; Android 8.0.0; Pixel 2 XL Build/OPD1.170816.004) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.100 Mobile Safari/537.36',
        'accept': 'application/json, text/plain, */*',
        'referer': 'https://genius.com/artists/Young-thug',
        'authority': 'genius.com',
        'x-requested-with': 'XMLHttpRequest',
    }

    params = (
        ('page', str(page)),
        ('sort', 'release-date'),
    )

    response = requests.get('https://genius.com/api/artists/20503/songs', headers=headers, params=params).text
    print(response)
    return json.loads(response)

def songs(artist):
    page=1
    while(1):
        song_list=list_songs(artist,page)['response']['songs']
        for song in song_list:
            title=song['title']
            print(title)
        page+=1
        break

songs('Young Thug')
