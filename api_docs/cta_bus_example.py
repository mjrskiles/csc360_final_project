import requests

# http://ctabustracker.com/bustime/api/v2/gettime?key=89dj2he89d8j3j3ksjhdue93j

# our app token is: Yv4DRee6iWKk2aPs3bCtJnZpm

api_url = 'http://ctabustracker.com/bustime/api/v2/'
app_token = '?key=' + 'Yv4DRee6iWKk2aPs3bCtJnZpm' 

method = 'getvehicles'
params = app_token + '&format=json' + '&rt=49,74'

r = requests.get(api_url + method + params)

print(r.status_code)
if r.status_code == 200:
    print(r.headers['content-type'])
    response = r.text
    print(response)