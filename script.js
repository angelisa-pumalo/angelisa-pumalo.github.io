// Load projects from the JSON file
async function loadProjects() {
    const projectList = document.getElementById("project-list");

    try {
        const response = await fetch("data/projects.json");

        if (!response.ok) {
            throw new Error("Unable to load projects.");
        }

        const projects = await response.json();

        projectList.innerHTML = "";

        projects.forEach(function (project) {
            const card = document.createElement("div");
            card.className = "card";

            card.innerHTML = `
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <p><strong>Technologies:</strong> ${project.technologies}</p>
                <p><strong>My Role:</strong> ${project.role}</p>
                <a href="${project.link}" target="_blank" rel="noopener noreferrer">
                    View Project
                </a>
            `;

            projectList.appendChild(card);
        });
    } catch (error) {
        projectList.textContent =
            "Projects could not be loaded. Please try again later.";
    }
}
loadProjects();