// Dark/Light Mode Toggle
function toggleTheme() {
  document.body.classList.toggle("dark-mode");
}

// Fetch Projects from JSON File
// Embed your JSON data directly
const projectsData = {
  "projects": [
      {
          "title": "flashcard quiz app",
          "description": "A brief description of Project One.",
          "image": "https://assets.onecompiler.app/424h56q45/42x2d3qwt/pic1.png",
          "link": "https://drive.google.com/file/d/1RS-HK05f3qgTfMZQd56RejxqfxOacH0d/view?usp=drive_link"
      },
      {
          "title": "random quote generator",
          "description": "A brief description of Project Two.",
          "image": "https://assets.onecompiler.app/424h56q45/42x2d3qwt/pic3.png",
          "link": "https://drive.google.com/file/d/1krokUjWAfpi6OJ_ddmGpHkUmX8cJWVD6/view?usp=drive_link"
      }
  ]
};

const projectContainer = document.getElementById("project-container");

// Use the data directly without fetching
projectsData.projects.forEach(project => {
  const projectElement = document.createElement("div");
  projectElement.classList.add("project");
  projectElement.innerHTML = `
      <img src="${project.image}" alt="${project.title}">
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <a href="${project.link}" target="_blank">View Project</a>
  `;
  projectContainer.appendChild(projectElement);
});

// Contact Form Submission
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Form Validation (Simple Example)
  if (name && email && message) {
      document.getElementById("formFeedback").innerText = "Message sent successfully!";
      this.reset();
  } else {
      document.getElementById("formFeedback").innerText = "Please fill in all fields.";
  }
});
