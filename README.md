# GDG Events Website

A simple, responsive event discovery website for college students to find and register for tech events.

## Features

- Browse upcoming tech events (workshops, seminars, hackathons)
- Filter events by category
- Detailed event information and registration
- Google Charts integration for event statistics
- Embedded Google Docs for community guidelines
- Interactive chatbot assistant
- Fully responsive design

## Setup

1. Clone this repository
2. Replace the Google Doc embed URL in `index.html` with your own Google Doc URL:
   ```html
   <iframe id="gdg-docs-frame" src="YOUR_GOOGLE_DOC_URL"></iframe>
   ```
3. Open `index.html` in a web browser

## Project Structure

```
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── js/
│   ├── data.js        # Mock event data
│   ├── main.js        # Main application logic
│   ├── charts.js      # Google Charts integration
│   └── chatbot.js     # Chatbot functionality
└── README.md          # This file
```

## Customization

- Edit `js/data.js` to add or modify events
- Update the color scheme in `styles.css` (CSS variables in :root)
- Modify chatbot responses in `js/chatbot.js`

## Browser Support

The website works on all modern browsers:
- Chrome
- Firefox
- Safari
- Edge

## Note

This is a frontend-only implementation. All data is stored locally in `data.js`. For a production environment, you should:
1. Implement a proper backend
2. Add user authentication
3. Use a real database
4. Implement proper form validation
5. Add error handling 