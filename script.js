document.addEventListener("DOMContentLoaded", function () {
    const calendarDays = document.querySelectorAll(".day");

    // Ustawienie daty początkowej
    const startDate = new Date("2024-12-01");

    // Funkcja odblokowująca hiperłącza
    const today = new Date();
    calendarDays.forEach((day) => {
        const dayNumber = parseInt(day.dataset.day, 10);
        const dayDate = new Date(startDate);
        dayDate.setDate(startDate.getDate() + dayNumber - 1);

        if (today >= dayDate) {
            day.classList.remove("locked");
        }
    });
});
