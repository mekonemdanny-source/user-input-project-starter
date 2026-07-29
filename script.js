```javascript
// Get the elements from the HTML
const titleInput = document.getElementById("title_input");
const mainTitle = document.getElementById("main_title");

const nounInput = document.getElementById("noun");
const verbInput = document.getElementById("verb");
const adjectiveInput = document.getElementById("adjective");

const form = document.querySelector(".form_container");
const storyResult = document.getElementById("story_result");

// Update the main title as the user types
titleInput.addEventListener("input", function () {
  mainTitle.textContent = titleInput.value;
});

// Listen for the form being submitted
form.addEventListener("submit", function (event) {
  // Prevent the page from refreshing
  event.preventDefault();

  // Get the values entered by the user
  const title = titleInput.value;
  const noun = nounInput.value;
  const verb = verbInput.value;
  const adjective = adjectiveInput.value;

  // Check if any field is empty
  if (
    title === "" ||
    noun === "" ||
    verb === "" ||
    adjective === ""
  ) {
    alert("Please fill in all of the fields!");
    return;
  }

  // Display the title
  mainTitle.textContent = title;

  // Create and display the ad-lib story
  storyResult.textContent =
    "One day, a " +
    adjective +
    " " +
    noun +
    " decided to " +
    verb +
    ".";

  // Hide the form after all fields are filled
  form.style.display = "none";
});
```
