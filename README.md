# Name Classifier API

## Endpoint
GET /api/classify?name=John

## Description
This API integrates with the Genderize API to predict gender based on a name.

## Features
- External API integration
- Data processing
- Confidence logic
- Error handling
- CORS enabled

## Tech Stack
- Node.js
- Express
- Axios

## Example Response
{
  "status": "success",
  "data": {
    "name": "john",
    "gender": "male",
    "probability": 0.99,
    "sample_size": 1234,
    "is_confident": true,
    "processed_at": "2026-04-01T12:00:00Z"
  }
}