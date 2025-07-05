// DOM Elements
const eventsContainer = document.getElementById('events-container');
const eventDetails = document.getElementById('event-details');
const eventDetailsContent = document.getElementById('event-details-content');
const backButton = document.getElementById('back-button');
const categoryFilter = document.getElementById('category-filter');

// Event Handlers
function displayEvents(filteredEvents = events) {
    eventsContainer.innerHTML = '';
    filteredEvents.forEach(event => {
        const eventCard = document.createElement('div');
        eventCard.className = 'event-card';
        eventCard.innerHTML = `
            <h3>${event.title}</h3>
            <div class="event-meta">
                <div>📅 ${formatDate(event.date)} at ${event.time}</div>
                <div>📍 ${event.location}</div>
            </div>
            <span class="event-category">${capitalizeFirstLetter(event.category)}</span>
        `;
        eventCard.addEventListener('click', () => showEventDetails(event));
        eventsContainer.appendChild(eventCard);
    });
}

function showEventDetails(event) {
    eventsContainer.classList.add('hidden');
    eventDetails.classList.remove('hidden');
    eventDetailsContent.innerHTML = `
        <h2>${event.title}</h2>
        <div class="event-meta">
            <div>📅 ${formatDate(event.date)} at ${event.time}</div>
            <div>📍 ${event.location}</div>
            <div>🏷️ ${capitalizeFirstLetter(event.category)}</div>
        </div>
        <p>${event.description}</p>
        <a href="${event.registrationLink}" target="_blank" class="register-button">Register Now</a>
    `;
}

// Utility Functions
function formatDate(dateStr) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateStr).toLocaleDateString(undefined, options);
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Event Listeners
categoryFilter.addEventListener('change', (e) => {
    const selectedCategory = e.target.value;
    const filteredEvents = selectedCategory === 'all' 
        ? events 
        : events.filter(event => event.category === selectedCategory);
    displayEvents(filteredEvents);
});

backButton.addEventListener('click', () => {
    eventDetails.classList.add('hidden');
    eventsContainer.classList.remove('hidden');
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    displayEvents();
}); 