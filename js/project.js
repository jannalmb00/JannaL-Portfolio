$(document).ready(function(){
  alert("janna");
  //tag text
  const tagText = {
    "school" : "School Project",
    "personal" : "Personal Project",
    "collab" : "Collaboration",
    "done": "Complete",
    "ongoing" : "In Progress"
  }

    $.each(projectData,function(index,project){
      let element = `

          <div class="right-lower-item ">
            <div class="project-left-div">
              <div class="project-title play-bold">
                ${project.title}
              </div>
              <div class="tagInfos">
              ${project.tags.map(tag =>
                `<div class="tagInfo play ${tag}">
                ${tagText[tag] || tag}
                </div>`
              ).join("")}
               
               
                <a target="_blank" href="${project.link}">
                  <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                  </svg>
                </a>
              </div>
              <div class="project-description play">
              ${project.description}
              </div>
              <span class="title2 play">Technology Stack:</span>
              <div class="tech-stack"> 
              ${project.stacks.map(stack =>
                `<div class="tech-stack-item play">
                ${stack || "None"}
                </div>`
                ).join("")}
               
              </div>      
            </div>          
          </div>         

      `;
      container.append(element);
      //$element = '';
     
      
    })



});

const projectData = [
  {
    "title":"Website Portfolio",
    "tags": ["personal", "ongoing"],
    "link": "https://github.com/jannalmb00/JannaL-Portfolio",
    "description": "Created a responsive personal portfolio to showcase web development projects and skills with custom styling and interactivity.",
    "stacks": ["HTML", "CSS", "jQuery"]
  },
  {
    "title":"Nail Salon Website",
    "tags": ["school", "collab", "done"],
    "link": "https://github.com/jannalmb00/SysDevOrange",
    "description": "Developed a responsive nail salon website using Bootstrap and PHP, integrating third-party APIs like Instagram, Google Maps, and Square. Built backend systems for bookings, customer management, and database integration, working closely with the client to align with business requirements.",
    "stacks": ["Bootstrap", "HTML", "CSS", "JavaScript", "PHP", "APIs", "phpMyAdmin"]
  },
  {
    "title":"STRIVE (TO-DO APP)",
    "tags": ["school", "collab", "done"],
    "link": "https://github.com/jannalmb00/Strive-Project.git",
    "description": "Developed a cross-platform To-Do app using Flutter and Dart, with Firebase for real-time data syncing. Implemented real-time collaboration for task management and integrated APIs for motivational quotes and Google Maps to find nearby cafes and libraries.",
    "stacks": ["Flutter", "Dart", "Firebase", "APIs"]
  }
  
]