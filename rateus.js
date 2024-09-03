        function submitRating() {
    const ratingInput = document.getElementById("rating").value;
    const messageElement = document.getElementById("message");

    // Check if rating is valid
    const rating = parseInt(ratingInput);
    if (rating < 1 || rating > 10) {
        messageElement.textContent = "Please enter a rating between 1 and 10.";
        messageElement.style.color = "red";
        return;
    }

    // Record the rating (Here we are just displaying it for simplicity)
    localStorage.setItem("userRating", rating);
    messageElement.textContent = `Thank you for rating our service: ${rating}!`;
    messageElement.style.color = "green";

    // Optional: Clear the input
    document.getElementById("rating").value = '';
}
    