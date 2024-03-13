from youtube_transcript_api import YouTubeTranscriptApi
import openai
import time

def getTranscript(videoID):
    try:
        response = YouTubeTranscriptApi.get_transcript(videoID, languages=['en'])
        return response
    except Exception as e:
        return {'Error': 'Transcript not available for given video ID'}, 500

def filterTranscriptForTimestamps(transcript):
    stops = 100
    count = 0
    text = ""
    result = []
    start = 0
    for item in transcript:
        if count == 0:
            start = item['start']
        text += item['text']
        text += " "
        count += 1
        if count == stops:
            result.append({"start": start, "text": text})
            count = 0
            text = ""
    if count < stops:
        start = item['start']
        result.append({"start": start, "text": text})
    return result

def gpt(transcript, text):
    response = openai.chat.completions.create(
        model="gpt-3.5-turbo",
        #response_format={ "type": "json_object" },
        messages=[
            {"role": "system", "content": "You are an assistant designed to putput JSON"},
            {"role": "assistant", "content": str(transcript)},
            {"role": "user", "content": text},
        ]
    )
    print(response.choices[0].message.content)
    return response.choices[0].message.content

def format_time(seconds):
    return time.strftime("%H:%M:%S", time.gmtime(seconds))


def filterTranscriptForSummary(transcript):
    duration = transcript[-1]['start']
    minutes = duration/60
    if minutes < 30:
        return [" ".join(item['text'] + " " for item in transcript)]
    else:
        ## break into 30 min segments
        return [" ".join(item['text'] + " " for item in transcript)]
