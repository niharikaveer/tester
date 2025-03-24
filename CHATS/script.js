function sendMessage() {
    const messageInput = document.getElementById('message');
    const messageText = messageInput.value.trim();

    if (messageText !== "") {
        const chatBox = document.querySelector('.chat-box');

        const userMessage = document.createElement('div');
        userMessage.classList.add('chat-message', 'user-message');
        userMessage.innerHTML = `<p>${messageText}</p>`;
        chatBox.appendChild(userMessage);

        messageInput.value = ''; // Clear the input

        chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom of the chat box

        // Simulate bot reply (You can replace this with actual bot logic)
        setTimeout(() => {
            const botMessage = document.createElement('div');
            botMessage.classList.add('chat-message', 'bot-message');
            botMessage.innerHTML = `<p>Bot: You said "${messageText}"</p>`;
            chatBox.appendChild(botMessage);

            chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom of the chat box
        }, 1000);
    }
}
