from app import app
from flask import request
from utils import getTranscript
from utils import filterTranscriptForTimestamps
from utils import filterTranscriptForSummary
from utils import gpt
from utils import format_time

"""
Hugging Face is slow because it is working on my GPU
To make it work faster I must to deploy it to the cloud
https://huggingface.co/facebook/bart-large-cnn
https://huggingface.co/oliverguhr/fullstop-punctuation-multilang-large

Follow this tutorial later
https://huggingface.co/blog/alvarobartt/deploy-from-hub-to-vertex-ai
"""

@app.route("/summary/", methods=['GET'])
def getSummary():
    videoID = request.args.get('v')
    transcript = getTranscript(videoID)
    result = filterTranscriptForSummary(transcript)
    summary = gpt(result, "Summarize the video in 200 words or less")
    return {"summary" : summary}

@app.route("/subtitles/", methods=['GET'])
def getSubtitles():
    videoID = request.args.get('v')
    transcript = getTranscript(videoID)
    subtitles = " ".join(item['text'] + " " for item in transcript)
    return {"captions": subtitles}
    
@app.route("/timestamps/", methods=['GET'])
def getTimestamps():
    videoID = request.args.get('v')
    transcript = getTranscript(videoID)
    transcript = filterTranscriptForTimestamps(transcript)
    data = []
    for item in transcript:
        response = gpt(item, "Summarize this part of a video in 50 words or less")
        data.append({"start": format_time(item['start']), "summary": response})
    return data
        