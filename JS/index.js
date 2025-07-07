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
      console.log("Datos de la API (orden original):", projects);

      const projectsCopy = [...projects];

      projectsCopy.reverse();
      
      const requiredProjects = projectsCopy.slice(0, 3);

      console.log(
        "Proyectos para index.html (ordenado 1, 2, 3):",
        requiredProjects
      );

      if (requiredProjects.length === 0) {
        projectsGrid.innerHTML =
          "<p>No se encontraron proyectos recientes.</p>";
        return;
      }

      requiredProjects.forEach((project) => {
        const projectCard = document.createElement("div");
        projectCard.classList.add("project-card");

        projectCard.innerHTML = `
                    <img src="${project.image}" alt="${project.name}">
                    <h4>${project.name}</h4>
                    <p>${project.description}</p>
                    <a href="./projects.html?id=${project.uuid}" class="learn-more-btn">Learn more</a>
                `;

        projectsGrid.appendChild(projectCard);
      });
    })
    .catch((error) => {
      console.error("Hubo un problema al cargar los proyectos:", error);
      projectsGrid.innerHTML =
        "<p>Error al cargar los proyectos. Por favor, inténtalo de nuevo más tarde.</p>";
    });
});
