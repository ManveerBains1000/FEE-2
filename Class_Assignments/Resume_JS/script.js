const body = document.querySelector('body');
const main = document.createElement('main');

const header = document.createElement('header');
const title = document.createElement('h1');
title.textContent = 'Manveer';
header.appendChild(title);

const personalDetailsSection = document.createElement('section');
const personalHeading = document.createElement('h2');
personalHeading.textContent = 'Personal Details';
personalDetailsSection.appendChild(personalHeading);

const personalDetailsList = document.createElement('ul');
const email = document.createElement('li');
email.textContent = 'Manveerjaat95@gmail.com';
const phone = document.createElement('li');
phone.textContent = 'Phone: +999999999999';
const address = document.createElement('li');
address.textContent = 'Haryana';

personalDetailsList.appendChild(email);
personalDetailsList.appendChild(phone);
personalDetailsList.appendChild(address);
personalDetailsSection.appendChild(personalDetailsList);

const educationSection = document.createElement('section');
const educationHeading = document.createElement('h2');
educationHeading.textContent = 'Education';
educationSection.appendChild(educationHeading);

const educationList = document.createElement('ul');
const education1 = document.createElement('li');
education1.textContent = 'Bachelor of Technology in Information Technology, XYZ Institute of Technology';

educationList.appendChild(education1);
educationSection.appendChild(educationList);

const workExperienceSection = document.createElement('section');
const workExperienceHeading = document.createElement('h2');
workExperienceHeading.textContent = 'Work Experience';
workExperienceSection.appendChild(workExperienceHeading);

const workExperienceList = document.createElement('ul');
const job1 = document.createElement('li');
job1.textContent = 'Lead Developer, Innovate Solutions (2023 - Present)';
const job2 = document.createElement('li');
job2.textContent = 'Software Engineer, CodeWorks Inc. (2020 - 2023)';

workExperienceList.appendChild(job1);
workExperienceList.appendChild(job2);
workExperienceSection.appendChild(workExperienceList);

const projectsSection = document.createElement('section');
const projectsHeading = document.createElement('h2');
projectsHeading.textContent = 'Projects';
projectsSection.appendChild(projectsHeading);

const projectsList = document.createElement('ul');
const project1 = document.createElement('li');
project1.textContent = "Chess Game";
const project2 = document.createElement('li');
project2.textContent = 'E-commerce';

projectsList.appendChild(project1);
projectsList.appendChild(project2);
projectsSection.appendChild(projectsList);

const skillsSection = document.createElement('section');
const skillsHeading = document.createElement('h2');
skillsHeading.textContent = 'Skills';
skillsSection.appendChild(skillsHeading);

const skillsList = document.createElement('ul');
const skill1 = document.createElement('li');
skill1.textContent = 'JavaScript (ES6+), React, Node.js';
const skill2 = document.createElement('li');
skill2.textContent = 'Python, Flask, Django';
const skill3 = document.createElement('li');
skill3.textContent = 'Database Management (MySQL, MongoDB)';
const skill4 = document.createElement('li');
skill4.textContent = 'Version Control (Git, GitHub)';

skillsList.appendChild(skill1);
skillsList.appendChild(skill2);
skillsList.appendChild(skill3);
skillsList.appendChild(skill4);
skillsSection.appendChild(skillsList);

main.appendChild(header);
main.appendChild(personalDetailsSection);
main.appendChild(educationSection);
main.appendChild(workExperienceSection);
main.appendChild(projectsSection);
main.appendChild(skillsSection);

body.appendChild(main);