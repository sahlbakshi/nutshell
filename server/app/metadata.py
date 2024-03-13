from app import app
from flask import request
import requests

@app.route("/metadata/", methods=['GET'])
def getMetadata():
    api_key = "AIzaSyAQQZSOjn0Zd3ksVdDevYBOGNV0lTuaV90"
    videoID = request.args.get('v')
    url = f"https://www.googleapis.com/youtube/v3/videos?id={videoID}&key={api_key}&part=snippet"
    response = requests.get(url)
    if response.status_code == 200:
        data = response.json()
        res = {
            "title": data['items'][0]['snippet']['title'],
            "channelTitle": data['items'][0]['snippet']['channelTitle'], 
            "thumbnail": data['items'][0]['snippet']['thumbnails']['high']['url']
        }
        return res
    else:
        print("Failed to fetch metadata:", response.status_code)
        return None
        