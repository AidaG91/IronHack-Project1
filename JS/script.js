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
      console.log("Data from API:", projects);

      const reversedProjects = [...projects].reverse();

      const recentProjects = reversedProjects.slice(0, 3);
      recentProjects.forEach((project) => {
        const projectCard = document.createElement("div");
        projectCard.classList.add("project-card");

        projectCard.innerHTML = `
                    <img src="${project.image}" alt="${project.name}">
                    <h4>${project.name}</h4>
                    <p>${project.description}</p>
                    <a href="projects/1.html" class="learn-more-btn">Learn more</a>
                `;

        projectsGrid.appendChild(projectCard);
      });
    })
    .catch((error) => {
      console.error("There was an issue while fetching:", error);
      projectsGrid.innerHTML =
        "<p>Error when loading the projects. Please try again later.</p>";
    });
});
