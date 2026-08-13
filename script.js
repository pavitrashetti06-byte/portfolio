fetch("http://127.0.0.1:3000/api/projects")
    .then(response => {
        if (!response.ok) {
            throw new Error("Server returned " + response.status);
        }
        return response.json();
    })
    .then(projects => {
        const projectList = document.getElementById("project-list");

        if (!projectList) {
            throw new Error("project-list element not found in index.html");
        }

        projectList.innerHTML = "";

        projects.forEach(project => {
            const projectDiv = document.createElement("div");

            projectDiv.innerHTML = `
                <h3>${project.project_name}</h3>
                <p>${project.description}</p>
                <p><strong>Technologies:</strong> ${project.technologies}</p>
                <a href="${project.github_link}" target="_blank">
                    View on GitHub
                </a>
            `;

            projectList.appendChild(projectDiv);
        });
    })
    .catch(error => {
        console.error("Error loading projects:", error);

        const projectList = document.getElementById("project-list");

        if (projectList) {
            projectList.innerHTML =
                "<p>Unable to load projects. Please try again.</p>";
        }
    });