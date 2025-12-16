// chatUI.js
function formatResponseAsList(responseText) {
    // Check if the response is a numbered list (starts with '1.' and has a newline)
    if (!responseText.includes('\n') || !responseText.trim().startsWith('1.')) {
        return responseText; // Return as is if not a list
    }

    // Split the response by newline
    const steps = responseText.split('\n').filter(s => s.trim() !== "");
    
    // Remove the leading number and dot from each step before wrapping in <li>
    const listItems = steps.map(step => {
        // Simple regex to remove leading number, dot, and space (e.g., "1. ")
        // We use the numbers from the OL/LI tags, not the hardcoded numbers in the string
        return `<li>${step.replace(/^\d+\.\s*/, '').trim()}</li>`;
    }).join('');

    return `<ol>${listItems}</ol>`;
}

function sendMessage() {
    const input = document.getElementById("userInput");
    const chatBox = document.querySelector(".messages");

    if (!input || input.value.trim() === "") return;

    const userMessage = input.value.trim();

    // Show user message
    const userDiv = document.createElement("div");
    // Ensure 'message' class is added for general styling
    userDiv.className = "user message"; 
    userDiv.innerText = userMessage;
    chatBox.appendChild(userDiv);

    // Get AI response (getAIResponse is in chatLogic.js)
    const aiResponse = getAIResponse(userMessage);

    // Show AI message
    const aiDiv = document.createElement("div");
    // Ensure 'message' class is added for general styling
    aiDiv.className = "ai message"; 
    
    // Use the new function to format the text before inserting
    const formattedResponse = formatResponseAsList(aiResponse);

    // If the response was formatted into an HTML list, use innerHTML
    if (formattedResponse !== aiResponse) {
        aiDiv.innerHTML = formattedResponse;
    } else {
        // Otherwise, it's plain text, use innerText for security
        aiDiv.innerText = aiResponse;
    }
    
    chatBox.appendChild(aiDiv);
    input.value = "";
    // Scroll to the bottom of the chat
    chatBox.scrollTop = chatBox.scrollHeight;
}