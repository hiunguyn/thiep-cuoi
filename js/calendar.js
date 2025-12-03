document.addEventListener('DOMContentLoaded', () => {
    const calendarGrid = document.getElementById('calendar-grid');
    const daysInMonth = 31; // December has 31 days
    const startDay = 0; // December 1st 2025 is a Monday (0=Sun, 1=Mon)

    // Days of week headers
    const daysOfWeek = ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'];

    daysOfWeek.forEach(day => {
        const dayHeader = document.createElement('div');
        dayHeader.classList.add('calendar-day-header');
        dayHeader.textContent = day;
        calendarGrid.appendChild(dayHeader);
    });

    // Empty cells for days before start of month
    for (let i = 0; i < startDay; i++) {
        const emptyCell = document.createElement('div');
        calendarGrid.appendChild(emptyCell);
    }

    // Days of the month
    for (let i = 1; i <= daysInMonth; i++) {
        const dayCell = document.createElement('div');
        dayCell.classList.add('calendar-day');
        dayCell.textContent = i;

        if (i === 27) {
            dayCell.classList.add('highlight');
        }

        calendarGrid.appendChild(dayCell);
    }
});
