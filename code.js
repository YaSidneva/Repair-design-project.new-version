const projectsImages = [
  {
    cityName: "Rostov-on-Don LCD admiral",
    apartmentArea: "81 m2",
    repairTime: "3.5 months",
    repairCost: "Upon request",
    projectImage: "img/projects-img.svg",
    linkId: "admiral",
  },
  {
    cityName: "Sochi Thieves",
    apartmentArea: "105 m2",
    repairTime: "4 months",
    repairCost: "Upon request",
    projectImage: "img/projects-img2.svg",
    linkId: "sochi",
  },
  {
    cityName: "Rostov-on-Don Patriotic",
    apartmentArea: "93 m2",
    repairTime: "3 months",
    repairCost: "Upon request",
    projectImage: "img/projects-img3.3.svg",
    linkId: "patriotic",
  },
];

const cityName = document.querySelector(".city-name");
const apartmentArea = document.querySelector(".apartment-area");
const repairTime = document.querySelector(".repair-time");
const repairCost = document.querySelector(".repair-cost");
const projectImage = document.querySelector(".project-img");

const setEntity = (index) => {
  let project = projectsImages[index];
  cityName.innerText = project.cityName;
  apartmentArea.innerText = project.apartmentArea;
  repairTime.innerText = project.repairTime;
  repairCost.innerText = project.repairCost;
  projectImage.style.backgroundImage = `url(${project.projectImage})`;

  //attach link and switch
  projectsImages.forEach((item) => {
    let linkItem = item.linkId;
    const linkName = document.getElementById(linkItem);
    linkName.classList.remove("active");
  });
  let linkProject = project.linkId;
  const linkProjectElement = document.getElementById(linkProject);
  linkProjectElement.classList.add("active");

  //attach dot and switch
  let sliderNav = document.querySelector(".slider-nav");
  const dotChild = sliderNav.children.item(index);
  for (const child of sliderNav.children) {
    child.classList.remove("button-active");
  }
  dotChild.classList.add("button-active");
};

//switch
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
let currentIndex = 0;

prev.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex -= 1;
  } else {
    currentIndex = projectsImages.length - 1;
  }
  setEntity(currentIndex);
});

next.addEventListener("click", () => {
  if (currentIndex <= projectsImages.length - 2) {
    currentIndex += 1;
  } else {
    currentIndex = 0;
  }
  setEntity(currentIndex);
});

//dot button
const firstButton = document.getElementById("first-button");
const secondButton = document.getElementById("second-button");
const thirdButton = document.getElementById("third-button");

firstButton.addEventListener("click", () => {
  setEntity(0);
});

secondButton.addEventListener("click", () => {
  setEntity(1);
});

thirdButton.addEventListener("click", () => {
  setEntity(2);
});

//links
const linkAdmiral = document.getElementById("admiral");
const linkSochi = document.getElementById("sochi");
const linkPatriotic = document.getElementById("patriotic");

linkAdmiral.addEventListener("click", () => {
  setEntity(0);
});

linkSochi.addEventListener("click", () => {
  setEntity(1);
});

linkPatriotic.addEventListener("click", () => {
  setEntity(2);
});

//mobile version
const cityNameMob = document.querySelector(".city-name-mob");
const apartmentAreaMob = document.querySelector(".apartment-area-mob");
const repairTimeMob = document.querySelector(".repair-time-mob");
const repairCostMob = document.querySelector(".repair-cost-mob");
const projectImageMob = document.querySelector(".mob-project");

const setEntityMob = (index) => {
  let project = projectsImages[index];
  cityNameMob.innerText = project.cityName;
  apartmentAreaMob.innerText = project.apartmentArea;
  repairTimeMob.innerText = project.repairTime;
  repairCostMob.innerText = project.repairCost;
  projectImageMob.style.backgroundImage = `url(${project.projectImage})`;
};

const prevMob = document.querySelector(".prev-mob");
const nextMob = document.querySelector(".next-mob");

prevMob.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex -= 1;
  } else {
    currentIndex = projectsImages.length - 1;
  }
  setEntityMob(currentIndex);
});

nextMob.addEventListener("click", () => {
  if (currentIndex <= projectsImages.length - 2) {
    currentIndex += 1;
  } else {
    currentIndex = 0;
  }
  setEntityMob(currentIndex);
});
