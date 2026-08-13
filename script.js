const projects = [
    {
        project_name: "Personal Portfolio Website",
        description: "A personal portfolio website showcasing my skills, education and projects.",
        technologies: "HTML, CSS, JavaScript",
        github_link: "https://github.com/pavitrashetti06-byte/portfolio"
    },
    {
        project_name: "Smart Household Expense Analyzer",
        description: "A project for tracking and analyzing household expenses.",
        technologies: "Python, SQL",
        github_link: "https://github.com/pavitrashetti06-byte/portfolio"
    }
];

const projectList = document.getElementById("project-list");

if (projectList) {
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
}
