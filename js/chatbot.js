// DOM Elements
const chatbotWidget = document.getElementById('chatbot-widget');
const chatbotHeader = document.getElementById('chatbot-header');
const chatMessages = document.getElementById('chat-messages');
const chatInput = document.getElementById('chat-input');
const chatSend = document.getElementById('chat-send');

// Mock responses for common questions
const responses = {
    default: "I'm not sure about that. Try asking about events, registration, or GDG!",
    greetings: ["Hi there!", "Hello! How can I help you?", "Welcome! Ask me about our events!"],
    eventTypes: "We organize various types of events including workshops, hackathons, and seminars. Check out our events list above!",
    registration: "To register for an event, click on any event card and use the 'Register Now' button on the event details page.",
    location: "Most of our in-person events are held at the Tech Hub or Innovation Center. Virtual events can be attended online.",
    gdg: "Google Developer Groups (GDG) is a community of developers interested in Google's developer technology. We organize events, workshops, and meetups!",
};

// Keywords for response matching
const keywords = {
    greetings: ['hi', 'hello', 'hey', 'greetings'],
    eventTypes: ['event', 'events', 'type', 'types', 'workshop', 'hackathon', 'seminar'],
    registration: ['register', 'registration', 'sign up', 'join'],
    location: ['where', 'location', 'place', 'venue'],
    gdg: ['gdg', 'google developer', 'developer group'],
};

// Chatbot logic
function findResponse(message) {
    const lowerMessage = message.toLowerCase();
    
    // Check for greetings
    if (keywords.greetings.some(word => lowerMessage.includes(word))) {
        return responses.greetings[Math.floor(Math.random() * responses.greetings.length)];
    }
    
    // Check other categories
    for (const [category, words] of Object.entries(keywords)) {
        if (words.some(word => lowerMessage.includes(word))) {
            return responses[category];
        }
    }
    
    return responses.default;
}

function addMessage(message, isUser = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `chat-message ${isUser ? 'user-message' : 'bot-message'}`;
    messageDiv.textContent = message;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Event Listeners
chatbotHeader.addEventListener('click', () => {
    chatbotWidget.classList.toggle('chatbot-collapsed');
});

function handleUserInput() {
    const message = chatInput.value.trim();
    if (message) {
        addMessage(message, true);
        chatInput.value = '';
        
        // Simulate typing delay
        setTimeout(() => {
            const response = findResponse(message);
            addMessage(response);
        }, 500);
    }
}

chatSend.addEventListener('click', handleUserInput);

chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        handleUserInput();
    }
});

// Initial greeting
setTimeout(() => {
    addMessage("👋 Hi! I'm your GDG Events Assistant. Ask me anything about our events!");
}, 1000); 