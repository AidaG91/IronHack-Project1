document.addEventListener("DOMContentLoaded", () => {
  const projectsGrid = document.querySelector(".projects-grid");
  const API_URL =
    "https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects";

  fetch(API_URL)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((projects) => {
      console.log("Data from API (original order):", projects);

      const projectsCopy = [...projects];

      projectsCopy.reverse();

      const requiredProjects = projectsCopy.slice(0, 3);

      console.log(
        "Projects for index.html (order: 1, 2, 3):",
        requiredProjects
      );

      if (requiredProjects.length === 0) {
        projectsGrid.innerHTML = "<p>Recent projects were not found.</p>";
        return;
      }

      requiredProjects.forEach((project) => {
        const projectCard = document.createElement("div");
        projectCard.classList.add("project-card");

        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.name} project image">
            <div class="card-content"> 
                <h4>${project.name}</h4>
                <p>${project.description}</p>
                <a href="./pages/projects.html?id=${project.uuid}" class="card-link">Learn more</a>
            </div>
        `;

        projectsGrid.appendChild(projectCard);
      });
    })
    .catch((error) => {
      console.error("There was an issue while loading th eprojects:", error);
      projectsGrid.innerHTML =
        "<p>Error when loading the projects. Please, try again later.</p>";
    });
});


let myButton = document.getElementById("scroll-to-top-btn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    myButton.style.display = "block";
  } else {
    myButton.style.display = "none";
  }
}