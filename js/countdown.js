document.addEventListener('DOMContentLoaded', () => {
    const countdownContainer = document.getElementById('countdown');
    const targetDate = new Date('December 27, 2025 00:00:00').getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance < 0) {
            countdownContainer.innerHTML = '<div class="countdown-item"><span class="countdown-number">00</span><span class="countdown-label">Ngày Hạnh Phúc</span></div>';
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownContainer.innerHTML = `
            <div class="countdown-item">
                <span class="countdown-number">${days}</span>
                <span class="countdown-label">Ngày</span>
            </div>
            <div class="countdown-item">
                <span class="countdown-number">${hours}</span>
                <span class="countdown-label">Giờ</span>
            </div>
            <div class="countdown-item">
                <span class="countdown-number">${minutes}</span>
                <span class="countdown-label">Phút</span>
            </div>
            <div class="countdown-item">
                <span class="countdown-number">${seconds}</span>
                <span class="countdown-label">Giây</span>
            </div>
        `;
    }

    setInterval(updateCountdown, 1000);
    updateCountdown();
});
