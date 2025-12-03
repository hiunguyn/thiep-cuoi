document.addEventListener('DOMContentLoaded', () => {
    // RSVP Form
    const rsvpForm = document.getElementById('rsvp-form');
    if (rsvpForm) {
        rsvpForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Cảm ơn bạn đã xác nhận tham dự! Chúng tôi rất mong chờ được đón tiếp bạn.');
            rsvpForm.reset();
        });
    }

    // Message Form
    const messageForm = document.getElementById('message-form');
    const messagesList = document.getElementById('messages-list');

    if (messageForm) {
        messageForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('msg-name').value;
            const content = document.getElementById('msg-content').value;

            if (name && content) {
                const newMessage = document.createElement('div');
                newMessage.classList.add('message-item');
                newMessage.innerHTML = `
                    <h4>${name}</h4>
                    <p>${content}</p>
                `;

                // Add new message to top of list
                messagesList.insertBefore(newMessage, messagesList.firstChild);

                alert('Cảm ơn lời chúc tốt đẹp của bạn!');
                messageForm.reset();
            }
        });
    }
});
