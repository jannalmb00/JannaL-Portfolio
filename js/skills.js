const skillsData = [
  {
    "name": "Java",
    "image": "./assets/images/logos/java.svg",
    "percent": 70,
    "links": [
      "https://github.com/jannalmb00/Library-Management",
      "https://github.com/jannalmb00/SchoolProject-ATM-Machine"
      ]
  },
  {
    "name": "C#",
    "image": "./assets/images/logos/c_sharp.png",
    "percent": 50,
    "links": ["https://github.com/raeeba/Niche"]
  },
  {
    "name": "Dart",
    "image": "./assets/images/logos/dart.png",
    "percent": 70,
    "links": ["https://github.com/jannalmb00/Strive-Project"]
  },
  {
    "name": "PHP",
    "image": "./assets/images/logos/php.png",
    "percent": 60,
    "links": ["https://github.com/Bellotiny/SysDevOrange"]
  },
  {
    "name": "Javascript",
    "image": "./assets/images/logos/js_logo.png",
    "percent": 70,
    "links": [
      "https://github.com/jannalmb00/Travel-Website",
      "https://github.com/jannalmb00/JannaL-Portfolio?tab=readme-ov-file"]
  },
  {
    "name": "Python",
    "image": "./assets/images/logos/python.png",
    "percent": 40,
    "links": [""]
  },
  {
    "name": "SQL",
    "image": "./assets/images/logos/sql.svg",
    "percent": 70,
    "links": ["https://github.com/Bellotiny/SysDevOrange"]
  },
  {
    "name": "Flutter",
    "image": "./assets/images/logos/flutter.svg",
    "percent": 80,
    "links": ["https://github.com/jannalmb00/Strive-Project"]
  },
  {
    "name": "React",
    "image": "./assets/images/logos/react_native.png",
    "percent": 30,
    "links": ["https://github.com/raeeba/McHacks12"]
  }
]

$("document").ready(function(){
const masteryText = {
  10: "Getting Started – Beginning the Journey",
  20: "Exploring – Building a Basic Understanding",
  30: "Learning – Grasping Core Ideas",
  40: "Growing – Gaining Comfort with Concepts",
  50: "Progressing – Steady Improvement",
  60: "Developing – Applying What You've Learned",
  70: "Advancing – Strengthening Your Skills",
  80: "Nearly There – Deepening Your Understanding",
  85: "Refining – Working on the Details",
  90: "Approaching Mastery – Staying Consistent",
  95: "Finishing Touches – Reviewing and Reflecting",
  100: "Confident – Comfortable Sharing with Others"
}


  let container = $("#section4 .right-lower-div");
  container.empty();

  $.each(skillsData, function(index, skill){
    let element = `
     <div class="right-lower-item">
            <div class="skill-title play-bold ">${skill.name}</div>
            <div class="item-logo">
              <img src="${skill.image}" height="100px">
            </div>
            <div class="item-statement play-bold">${masteryText[skill.percent] || 0}</div>
            <div class="item-progress-bar" data-progress="${skill.percent}"></div>
            <div class="play">Project Links:</div>
            <div class="project-links">
            ${skill.links.map(link=>
              `<div>
              <a href="${link}">
                <svg  xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                </svg>
              </a>
            </div>`

            ).join("")}

            </div>
           
            
          </div>
    `;

    container.append(element);
    $('.item-progress-bar').each(function() {
      const progress = $(this).data('progress'); // Get the data-progress attribute
      $(this).css('background', `linear-gradient(to right, rgba(246, 115, 39, 0.79) ${progress}%, rgba(243, 92, 27, 0.5) ${progress}%)`);
    });
   
  })


});