document.addEventListener("DOMContentLoaded", () => {
  const API_URL =
    "https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects";

  const urlParams = new URLSearchParams(window.location.search);
  const projectId = urlParams.get("id");

  if (!projectId) {
    document.getElementById("project-name").textContent =
      "Error: Project ID missing.";
    document.getElementById("project-headline").textContent =
      "Please make sure the URL contains a project ID (e.g., ?id=1).";
    document.getElementById("project-img").style.display = "none";
    document.getElementById("project-content").textContent = "";
    document.getElementById("date-of-completion").textContent = "";
    console.error("Project ID not found in URL.");
    return;
  }

  fetch(API_URL)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((projects) => {
      const mainProject = projects.find((p) => p.uuid === projectId);

      if (mainProject) {
        document.getElementById("project-name").textContent = mainProject.name;
        document.getElementById("project-headline").textContent =
          mainProject.description;
        document.getElementById("project-img").src = mainProject.image;
        document.getElementById("project-content").innerHTML =
          mainProject.content;
        document.getElementById("date-of-completion").textContent = new Date(
          mainProject.completed_on
        ).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        });

        const otherProjectsGrid = document.querySelector(
          ".other-projects-grid"
        );
        otherProjectsGrid.innerHTML = "";

        const availableProjects = projects.filter(
          (p) => p.uuid !== mainProject.uuid
        );

        const otherRecentProjects = availableProjects.slice(0, 3);

        if (otherRecentProjects.length === 0) {
          otherProjectsGrid.innerHTML = "<p>No other projects available.</p>";
        } else {
          otherRecentProjects.forEach((otherProject) => {
            const otherProjectCard = document.createElement("div");
            otherProjectCard.classList.add("project-card");
            otherProjectCard.innerHTML = `
                            <img src="${otherProject.image}" alt="${otherProject.name}">
                            <h4>${otherProject.name}</h4>
                            <p>${otherProject.description}</p>
                            <a href="./projects.html?id=${otherProject.uuid}" class="learn-more-btn">Learn more</a> 
                        `;
            otherProjectsGrid.appendChild(otherProjectCard);
          });
        }
      } else {
        document.getElementById("project-name").textContent =
          "Project Not Found";
        document.getElementById(
          "project-headline"
        ).textContent = `The project with ID "${projectId}" could not be found. Please check the ID.`;
        document.getElementById("project-img").style.display = "none";
        document.getElementById("project-content").textContent = "";
        document.getElementById("date-of-completion").textContent = "";
        console.warn(
          `Project with UUID '${projectId}' not found in API response.`
        );
      }
    })
    .catch((error) => {
      console.error("Error fetching project details:", error);
      document.getElementById("project-name").textContent =
        "Error Loading Project Details.";
      document.getElementById("project-headline").textContent = "";
      document.getElementById("project-content").textContent =
        "Please try again later.";
    });
});
