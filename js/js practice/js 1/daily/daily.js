document.addEventListener("DOMContentLoaded", function () {
  // Animate progress bar
  const progressBar = document.getElementById("progressBar");
  let progress = 0;
  const progressInterval = setInterval(() => {
    progress += 1;
    progressBar.style.width = `${progress}%`;
    progressBar.textContent = `${progress}% Complete`;
    if (progress >= 65) {
      clearInterval(progressInterval);
    }
  }, 30);

  // Toggle project details
  const toggleButton = document.getElementById("toggleProjectDetails");
  const projectDetails = document.getElementById("projectDetails");

  toggleButton.addEventListener("click", function () {
    projectDetails.classList.toggle("hidden");
    this.textContent = projectDetails.classList.contains("hidden")
      ? "Show Project Requirements"
      : "Hide Project Requirements";
  });

  // Task tracker functionality
  const checkboxes = document.querySelectorAll(".task-checkbox");
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
      const label = this.nextElementSibling;
      label.classList.toggle("completed", this.checked);
      updateProgress();
    });
  });

  function updateProgress() {
    const totalTasks = checkboxes.length;
    const completedTasks = document.querySelectorAll(
      ".task-checkbox:checked"
    ).length;
    const progressPercentage = Math.round((completedTasks / totalTasks) * 100);
    progressBar.style.width = `${progressPercentage}%`;
    progressBar.textContent = `${progressPercentage}% Complete`;

    // Change color based on progress
    if (progressPercentage < 30) {
      progressBar.style.background = "linear-gradient(90deg, #e74c3c, #f39c12)";
    } else if (progressPercentage < 70) {
      progressBar.style.background = "linear-gradient(90deg, #f39c12, #3498db)";
    } else {
      progressBar.style.background = "linear-gradient(90deg, #3498db, #2ecc71)";
    }
  }

  // Add current date with more formatting
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const today = new Date();
  const dateString = today.toLocaleDateString("en-US", options);

  const header = document.querySelector("h1");
  const dateElement = document.createElement("div");
  dateElement.style.textAlign = "center";
  dateElement.style.marginBottom = "20px";
  dateElement.style.fontSize = "1.1em";
  dateElement.style.color = "#7f8c8d";

  const timeElement = document.createElement("div");
  timeElement.style.fontWeight = "bold";
  timeElement.style.color = "#2c3e50";
  timeElement.style.marginTop = "5px";

  dateElement.innerHTML = `Today is <span style="color: #3498db;">${dateString}</span>`;
  timeElement.textContent = `Current time: ${today.toLocaleTimeString()}`;

  header.insertAdjacentElement("afterend", dateElement);
  dateElement.appendChild(timeElement);

  // Update time every second
  setInterval(() => {
    const now = new Date();
    timeElement.textContent = `Current time: ${now.toLocaleTimeString()}`;
  }, 1000);

  // Add hover effects to resource cards
  const resourceCards = document.querySelectorAll(".resource-card");
  resourceCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-5px)";
      this.style.boxShadow = "0 8px 16px rgba(0,0,0,0.1)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "";
      this.style.boxShadow = "0 2px 5px rgba(0,0,0,0.1)";
    });
  });

  // Random motivational quotes
  const quotes = [
    {
      text: "The only way to learn a new programming language is by writing programs in it.",
      author: "Dennis Ritchie",
    },
    {
      text: "Progress is progress, no matter how small.",
      author: "Unknown",
    },
    {
      text: "It's not about being the best, it's about being better than you were yesterday.",
      author: "Unknown",
    },
    {
      text: "The beautiful thing about learning is that no one can take it away from you.",
      author: "B.B. King",
    },
    {
      text: "Consistent small efforts lead to big results.",
      author: "Unknown",
    },
  ];

  const quoteElement = document.querySelector(
    ".motivation-quote p:first-child"
  );
  const authorElement = document.querySelector(
    ".motivation-quote p:last-child"
  );

  function showRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.textContent = quotes[randomIndex].text;
    authorElement.textContent = `- ${quotes[randomIndex].author}`;
  }

  // Change quote every 10 seconds
  showRandomQuote();
  setInterval(showRandomQuote, 10000);
});
