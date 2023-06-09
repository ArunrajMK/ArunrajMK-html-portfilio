const Projects = [
	{
		name: "Votek",
		about:
			"Votek is a site which help us to create poll and to attend the poll, live details will be availabe for the admin.",
		gitrepo: "https://github.com/masai-builds/Votek",
		img: "https://static.prepleaf.com/graphics/seo/advancedProgramming.png",
		// video: "#",
		// blog: "#",
		tech_stack: "React.js | Redux | Chakra Ui | MongoDb | Node | Express | socket.io | Firebase ",
		tech_stackicons: [
			`<img src="https://img.icons8.com/color/50/000000/html-5--v1.png" />`,
			`<img src="https://img.icons8.com/color/50/000000/css3.png"/>`,
			`<img src="https://img.icons8.com/color/50/000000/javascript--v2.png"/>`,
		],
		project_link: "https://votek.netlify.app/",
		project_type: "Team Project",
		category: ["all", "html"],
	},
	{
		name: "Prepleaf Clone",
		about:
			"Prepleaf is an AI-powered personalized learning platform for competitive exams like CAT, and IIT-JEE and job preparations. The platform has various features, like speedometer, accuracy meter, and time limit on questions, to help the student improve his performance.",
		gitrepo: "https://github.com/masai-builds/Team8",
		img: "https://static.prepleaf.com/graphics/seo/advancedProgramming.png",
		
		// video: "#",
		// blog: "#",
		tech_stack: "React.js | Redux | Chakra Ui | MongoDb | Node | Express | Firebase",
		tech_stackicons: [
			`<img src="https://img.icons8.com/color/50/000000/html-5--v1.png" />`,
			`<img src="https://img.icons8.com/color/50/000000/css3.png"/>`,
			`<img src="https://img.icons8.com/color/50/000000/javascript--v2.png"/>`,
		],
		project_link: "https://team8-prepleaf-project.netlify.app/",
		project_type: "Team Project",
		category: ["all", "html"],
	},
	{
		name: "ZARA Clone",
		about:
			"zara.com, operated by Zara USA, Inc., is an internationally-focused online store that generates eCommerce net sales primarily in the United States as well as in the United Kingdom and Spain. With regards to the product range, zara.com achieves the greatest part of its eCommerce net sales in the “Fashion” category.",
		img: "https://cdn.dribbble.com/users/4495454/screenshots/11170834/zara.png",
		gitrepo: "https://github.com/najmushsaaquib/Zara-Clone",
		// video: "#",
		// blog: "#",
		tech_stack: "HTML | CSS | JAVASCRIPT ",
		tech_stackicons: [
			`<img src="https://img.icons8.com/color/50/000000/html-5--v1.png" />`,
			`<img src="https://img.icons8.com/color/50/000000/css3.png"/>`,
			`<img src="https://img.icons8.com/color/50/000000/javascript--v2.png"/>`,
		],
		project_link: "https://zara-final.netlify.app/",
		project_type: "Team Project",
		category: ["all", "html"],
	},
	{
		name: "ZARA Home Clone",
		about:
			"zara.com, operated by Zara USA, Inc., is an internationally-focused online store that generates eCommerce net sales primarily in the United States as well as in the United Kingdom and Spain. With regards to the product range, zarahome.com achieves the greatest part of its eCommerce net sales in the “Home appliances” category.",
		img: "https://dossitgirl.com/wp-content/uploads/2016/01/3.png",
		gitrepo: "https://github.com/najmushsaaquib/Zara-Home",
		// video: "#",
		// blog: "#",
		tech_stack: "HTML | CSS | JAVASCRIPT ",
		tech_stackicons: [
			`<img src="https://img.icons8.com/color/50/000000/html-5--v1.png" />`,
			`<img src="https://img.icons8.com/color/50/000000/css3.png"/>`,
			`<img src="https://img.icons8.com/color/50/000000/javascript--v2.png"/>`,
		],
		project_link: "https://zara-home-clone.netlify.app/",
		project_type: "Team Project",
		category: ["all", "html"],
	},
];

let projects__container = document.getElementById("projects--container");

let all_projects = document.querySelector(".all_projects");
// let react_projects = document.querySelector(".react_projects");
// let mern_projects = document.querySelector(".mern_projects");
// let other_projects = document.querySelector(".other_projects");
// let html_projects = document.querySelector(".html_projects");
// all_projects.classList.add("active_tech_project");



// all_projects.addEventListener("click", () => {
// 	filterProjects("all");
// 	all_projects.classList.add("active_tech_project");
// 	react_projects.classList.remove("active_tech_project");
// 	mern_projects.classList.remove("active_tech_project");
// 	// other_projects.classList.remove("active_tech_project")
// 	html_projects.classList.remove("active_tech_project");
// });
// react_projects.addEventListener("click", () => {
// 	filterProjects("react");
// 	all_projects.classList.remove("active_tech_project");
// 	react_projects.classList.add("active_tech_project");
// 	mern_projects.classList.remove("active_tech_project");
// 	// other_projects.classList.remove("active_tech_project")
// 	html_projects.classList.remove("active_tech_project");
// });
// mern_projects.addEventListener("click", () => {
// 	filterProjects("mern");
// 	all_projects.classList.remove("active_tech_project");
// 	react_projects.classList.remove("active_tech_project");
// 	mern_projects.classList.add("active_tech_project");
// 	// other_projects.classList.remove("active_tech_project")
// 	html_projects.classList.remove("active_tech_project");
// });



// other_projects.addEventListener("click", () => {
//     filterProjects("other");
//     all_projects.classList.remove("active_tech_project")
//     react_projects.classList.remove("active_tech_project")
//     mern_projects.classList.remove("active_tech_project")
//     // other_projects.classList.add("active_tech_project")
//     html_projects.classList.remove("active_tech_project")
// })

// html_projects.addEventListener("click", () => {
// 	filterProjects("html");
// 	all_projects.classList.remove("active_tech_project");
// 	react_projects.classList.remove("active_tech_project");
// 	mern_projects.classList.remove("active_tech_project");
// 	// other_projects.classList.remove("active_tech_project")
// 	html_projects.classList.add("active_tech_project");
// });

function filterProjects(basis) {
	if (basis === "all") {
		let filtered = Projects.filter((el) => {
			return el.category.includes(basis);
		});
		displayProjectData(filtered.reverse());
	} else {
		let filtered = Projects.filter((el) => {
			return el.category.includes(basis);
		});
		displayProjectData(filtered);
	}
}

function displayProjectData(Projects) {
	projects__container.innerHTML = null;
	Projects.reverse().forEach((pro) => {
		let main = document.createElement("div");
		main.setAttribute("class", "portfolio-item padd-15");
		main.innerHTML = `
    <div class="portfolio-item-inner shadow-dark">
    <div class="portfolio-img">
      <img src=${pro.img} alt="">
      <h3 class="project-name">${pro.name}</h3>
      <h4 class="project-name project__about">${pro.about}</h4>
      <div class="navigate_ar">
      <a href=${pro.project_link} target="_blank" title="Demo" class="see-project"><i class="fas fa-eye"></i></a>
      <a href=${pro.gitrepo} target="_blank" title="GitHub Repository" class="github-repo"><i class="fab fa-github"></i></a>
      </div>
      <div class="project_tech_box">
      <span class="TechStacks__text">TechStacks: </span> ${pro.tech_stack}
      </div>
      
    </div>
  </div>
    `;
		projects__container.append(main);
	});
}

displayProjectData(Projects);
