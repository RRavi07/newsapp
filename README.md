
# News App Overview

This is a React-based news application that fetches live news from a third-party API and displays the latest articles in real-time. The app allows users to view news from various categories like business, technology, sports, and more.

## Prerequisites

Before running the app, make sure you have Node.js installed. You also need to install the required Node.js modules.

### Steps to Install Dependencies:

1. Navigate to the project directory and run:
   ```bash
   npm install
   ```

This will install all the necessary dependencies for the app to run.

## Running the App

Once the dependencies are installed, you can start the React application with the following command:

```bash
npm run start
```

The app will start in development mode, and it will be available at [http://localhost:3000](http://localhost:3000).

### Live News Fetching

The app fetches real-time news using a public API. Upon loading, it automatically fetches the latest news articles and updates the content dynamically. You can filter news based on different categories, and the app will make live API calls to get the relevant news.

## API Integration

- The app uses a third-party news API to fetch data. Make sure to set up your API key in the `.env` file if required by the API service.
  
  Example of adding API Key:
  ```bash
  REACT_APP_NEWS_API_KEY=your-api-key-here
  ```

## Project Images

![Screenshot 2024-10-08 095359](https://github.com/user-attachments/assets/7e55657b-56d1-490a-b539-1893c306b16e)



