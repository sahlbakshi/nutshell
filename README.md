# INANUTSHELL
IN-A-NUTSHELL is an advanced AI-powered summarization tool designed to simplify the process of digesting video content. By providing any YouTube Video URL, users can effortlessly obtain a concise summary of the video, its key points with timestamps and captions. This tool utilizes Hugging faces LLS and OpenAI API to process the text and accurately distill lengthy videos into easily digestible summaries.

## Used
- Google Cloud Platform (GCP) for authentication
- Hugging Face Inference Endpoints to host Hugging Face LLM
- OpenAI API for content summarization
- Hugging Face LLM to restore punctuation in captions
- Redis to cache recent searches and skip repeat fetches
- Python Flask server to host custom endpoints
- React Client frontend
- Styled with Tailwind CSS and Figma

## App
<table>
  <tr>
    <td align="center"><img src="https://github.com/sahlbakshi/nutshell/assets/86169374/54bcceeb-db77-4ca8-894d-0f24c6b8481b" width="200px;" alt="Screenshot 1"/></td>
    <td align="center"><img src="https://github.com/sahlbakshi/nutshell/assets/86169374/dc223a89-17a4-4a5c-8660-9fc6832beaf1" width="200px;" alt="Screenshot 2"/></td>
  </tr>
  <tr>
    <td align="center"><b>Screenshot 1</b></td>
    <td align="center"><b>Screenshot 2</b></td>
  </tr>
  <tr>
    <td align="center"><img src="https://github.com/sahlbakshi/nutshell/assets/86169374/18d2ae1c-f5fd-49ae-941c-5eb0d4ddbec9" width="200px;" alt="Screenshot 3"/></td>
    <td align="center"><img src="https://github.com/sahlbakshi/nutshell/assets/86169374/18d2ae1c-f5fd-49ae-941c-5eb0d4ddbec9" width="200px;" alt="Screenshot 4"/></td>
  </tr>
  <tr>
    <td align="center"><b>Screenshot 3</b></td>
    <td align="center"><b>Screenshot 4</b></td>
  </tr>
</table>

## Next Steps
- [ ] Deployment
- [ ] Stripe Pricing
