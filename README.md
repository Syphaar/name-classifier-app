# Name Classifier API – Backend Wizards Stage 0

A high-performance backend API that predicts the gender of a name by integrating with the Genderize API. This project demonstrates clean API integration, real-time data processing, and robust error handling within a modular Node.js architecture.

## 🚀 Live API
**Base URL:** [https://name-classifier-app.vercel.app](https://name-classifier-app.vercel.app)
**Endpoint:** `GET /api/classify?name={name}`
**Example:** [https://name-classifier-app.vercel.app/api/classify?name=john](https://name-classifier-app.vercel.app/api/classify?name=john)

## Features
- **External API Integration:** Seamlessly fetches data from the Genderize.io database.
- **Data Transformation:** Cleans and renames raw data fields for better API consumption.
- **Confidence Logic:** Built-in intelligence to determine if a prediction is statistically significant.
- **Robust Error Handling:** Specific handlers for missing data, invalid types, and upstream failures.
- **CORS Enabled:** Includes mandatory `Access-Control-Allow-Origin: *` headers for grading script access.
- **Fast Performance:** Designed to process requests in under 500ms.

## How It Works

### API Logic & Transformation
The API acts as a smart middleman between the client and the data provider. The internal flow follows these steps:
1. **Validation:** The middleware checks if a name exists and is a valid string.
2. **Fetch:** The service layer calls the Genderize API.
3. **Extraction:** The processor extracts `gender`, `probability`, and `count`.
4. **Renaming:** The `count` field is renamed to `sample_size` for clarity.
5. **Logic Calculation:** `is_confident` is set to `true` **only** if `probability >= 0.7` **AND** `sample_size >= 100`.
6. **Timestamping:** Generates a fresh `processed_at` timestamp in UTC (ISO 8601).

### Success Response (200 OK)
```json
{
  "status": "success",
  "data": {
    "name": "john",
    "gender": "male",
    "probability": 0.99,
    "sample_size": 1234,
    "is_confident": true,
    "processed_at": "2026-04-10T12:00:00Z"
  }
}
```

## Features
The API handles various edge cases to ensure a smooth user experience:
- 400 Bad Request: Returned when the name parameter is missing or empty.
- 422 Unprocessable Entity: Returned when the name is not a string or when the external API returns no prediction.
- 500 Internal Server Error: Returned for upstream failures or server-side issues.


## Tech Stack

- **Node.js**  
- **Express**
- **Axios**


## Project Structure
```
name-classifier-api/
├── src/
│   ├── controllers/classifyController.js
│   ├── middleware/validateQuery.js
│   ├── routes/classifyRoutes.js
│   ├── services/genderizeService.js
│   ├── utils/processData.js
│   └── app.js
├── server.js
├── package.json
└── .gitignore
```

## How To Run

### Prerequisites
- Flutter SDK (≥3.19 recommended)  
- Dart SDK  

### Installation & Run
```bash
# 1. Clone the repository
git clone https://github.com/YourUsername/flutter-profile-page
cd flutter-profile-page

# 2. Get dependencies
npm install

# 3. Run the app
npm start
```

### Supported Environments
- Local: http://localhost:5000
- Production: https://name-classifier-app.vercel.app


## Contributing

Contributions are welcome! For significant changes, please open an issue first so we can discuss it.

---
Built by Sifon, don’t forget to star the repo if you find it useful.
