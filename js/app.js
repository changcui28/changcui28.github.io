// Get the reviewData from the window object
const { reviewData } = window;

// Wait for the DOM to be fully loaded before initializing the script
document.addEventListener("DOMContentLoaded", function () {
  // Get references to the review card container and the review form elements
  const reviewCardContainer = document.getElementById("reviewCardContainer");
  const reviewForm = document.getElementById("reviewForm");

  // Function to generate and display review cards based on the reviewData array
  function generateCards() {
    // Clear the existing content inside the review card container
    reviewCardContainer.innerHTML = "";

    // Loop through each review object in the reviewData array
    reviewData.forEach((review) => {
      const card = document.createElement("div");
      card.classList.add("reviewCard");

      const name = document.createElement("p");
      name.textContent = review.name;
      name.classList.add("nameText");

      const reviewDate = new Date(review.date);
      const formattedDate = reviewDate.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
      });

      const date = document.createElement("time");
      date.dateTime = review.date;
      date.textContent = formattedDate;

      const rating = document.createElement("p");
      rating.innerHTML = `Rating: <span class="ratingStars">${"★".repeat(
        review.rating
      )}${"☆".repeat(5 - review.rating)}</span>`;

      const reviewText = document.createElement("p");
      reviewText.textContent = review.reviewText;

      card.appendChild(name);
      card.appendChild(date);
      card.appendChild(rating);
      card.appendChild(reviewText);

      reviewCardContainer.appendChild(card);
    });
  }

  // Event listener for the review form submission
  reviewForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Get the input values from the review form
    const name = document.getElementById("name").value;
    const rating = parseInt(document.getElementById("rating").value);
    const reviewText = document.getElementById("reviewText").value;
    const currentDate = new Date();

    // Add the new review data as an object to the reviewData array
    reviewData.push({ name, date: currentDate, rating, reviewText });
    // Reset the review form fields after submission
    reviewForm.reset();
    // Regenerate and display the review cards with the updated data
    generateCards();
  });

  // Initial call to generateCards() to display any existing reviews on page load
  generateCards();
});
