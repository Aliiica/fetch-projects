"use strict"; 

window.addEventListener("load", initApp); 

// Function to initialize the Web App
async function initApp() {
  console.log("initApp: app.js is running 🎉"); // Log to the console that the app is running
  const projects = await getProjects(); // Call the getProjects function
  console.log(projects); // Log the projects to the console
  displayProjectsGrid(projects); // Call the displayprojectsGrid function
}

async function getProjects() {
  const response = await fetch(
    "https://portfolio.alicainmultimedia.dk/wp-json/wp/v2/projects?acf_format=standard&orderby=date&order=asc"
  ); // Fetch the data from the URL
  const data = await response.json(); // Parse the data as JSON into readable JavaScript objects (array of objects)
  return data; // Return the data
}

function displayProjectsGrid(projects) {
  const projectsGrid = document.querySelector("#projects-grid");

  for (const project of projects) { //looping through projects
    projectsGrid.insertAdjacentHTML( //inserting project html
      "beforeend",
      /*html*/ `
          <article class="grid-item">
            <img src="${project.acf.image}" alt="${project.acf.title}" />
            <h4>${project.acf.client}</h4> 
            <h5>${project.acf.date}</h5>
            <h3>${project.acf.title}</h3>
            <p>${project.acf.description}</p>
            <a href="${project.acf.link}" target="_blank">Explore the project</a>
  
          </article>
        `
    );
  }
}

//burger menu 
function toggleMenu() {
  const navbar = document.querySelector(".navbar");
  navbar.classList.toggle("active");
}
