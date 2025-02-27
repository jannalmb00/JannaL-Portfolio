const updatesData = [
  {
    "title": "ConUHacks 9 at Concordia University",
    "link" : "",
    "tags": ["React Native", "Firebase"],
    "content": "Participated in ConUHacks 9, strengthening knowledge of React Native through hands-on development and engaged with sponsors to learn about their career paths and gather valuable tips for professional growth."
  },
  {
    "title": "McHack 12 at McGill University",
    "link" : "",
    "tags": ["React Native", "Open Food Facts API"],
    "content": "Participated in McHack 12, applying mobile development skills using React Native to build a project within 24 hours. Attended a Cybersecurity workshop and connected with fellow developers and industry professionals, expanding my network"
  },
  {
    "title": "CUSEC 2025 (Canadian University Software Engineering Conference)",
    "link" : "",
    "tags": ["Conference"],
    "content": "Attended CUSEC, gaining insights on career growth, job hunting, and work-life balance, while making valuable connections at the career fair. Motivated to continue learning and engaging with the tech community."
  },
  {
    "title": "Floss Day 2023 & 2024 Attendee",
    "link" : "",
    "tags": [],
    "content": "Attended the Floss Day event in both 2023 and 2024, engaging with the open-source community and learning about the latest developments in free and open- source software (FOSS)."
  },
  {
    "title": "Robotics Club – Website Developer",
    "link" : "",
    "tags": [
      "Vue.js",
      "Web Design",
      "Web Development"
    ],
    "content": "Contributed to designing and developing the website for the CRC Robotics Competition using Vue.js, featuring this year's 'Plants vs. Zombies' theme. The site provided information about the robot, the team's journey, and videos related to the team."
  },
  {
    "title": " McGill Computer Science Summer Camp 2024",
    "link" : "",
    "tags": [
      "Bootcamp",
      "Certificate"
    ],
    "content": "Received a certificate from the McGill Computer Science Summer Camp 2024, where I participated in various workshops and activities to enhance my programming and problem-solving skills."
  }

  
]
$("document").ready(function(){

    let container = $("#section5 .right-lower-div");
    container.empty();

    $.each(updatesData, function(index, update){
      let element = `
       <div class="right-lower-item ">
            <div class="updates-lower-div">
              <div class="project-title play-bold">
              	${update.title}
              </div>
              <a href="${update.link}">
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                </svg>
              </a>
              <div class="tagInfos">
              ${update.tags.map(tag =>
                `<div class="tech-stack-item play">
                 ${tag}
                </div>`
                ).join("")}
              </div>
              <div class="project-description play">
              ${update.content}
              </div>
            </div>
          </div>
      `;
      container.append(element); 
    });
});
