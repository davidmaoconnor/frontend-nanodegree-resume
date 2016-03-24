/** Biographical object
*@description Describes contact and other useful information about me
*/
var bio = {
  'name': 'David O\'Connor',
  'role': 'Developer',
  'contacts': {
    'mobile': '305-984-8118',
    'email': 'davidmaoconnor at gmail.com',
    'github': 'davidmaoconnor',
    'twitter': 'N/A',
    'location': 'Miami, FL'
  },
  'welcomeMessage': 'I am learning the skills necessary to be a web developer.',
  'skills': ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Photoshop', 'Illustrator'],
  'biopic': 'https://avatars3.githubusercontent.com/u/17125492?v=3&s=460',

/** @constructor Function to display the bio on the DOM
*@description Adds information from the bio object to index.html
*/
  display: function displayBio() {
    var formattedName = HTMLheaderName.replace('%data%', bio.name);
    var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
    $('#header').prepend(formattedName + formattedRole);

    var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
    var formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
    var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);

    $('#topContacts').append(formattedMobile + formattedEmail + formattedGithub + formattedLocation);

    $('#footerContacts').append(formattedMobile + formattedEmail + formattedGithub + formattedLocation);

    var formattedBioPic = HTMLbioPic.replace('%data%', bio.biopic);
    var formattedMsg = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
    $('#header').append(formattedBioPic);
    $('#header').append(formattedMsg);

    $('#header').append(HTMLskillsStart);
    var skillFirst = HTMLskills.replace('%data%', bio.skills[0]);
    var skillSecond = HTMLskills.replace('%data%', bio.skills[1]);
    var skillThird = HTMLskills.replace('%data%', bio.skills[2]);
    var skillFourth = HTMLskills.replace('%data%', bio.skills[3]);
    var skillFifth = HTMLskills.replace('%data%', bio.skills[4]);
    var skillSixth = HTMLskillsLast.replace('%data%', bio.skills[5]);
    $('#header').append(skillFirst + skillSecond + skillThird + skillFourth + skillFifth + skillSixth);
  }
}

/** Education Object
*@description Describes the schools I attended and the online courses
*/
var education = {
  'schools': [
    {
      'name': 'Miami Dade College',
      'location': 'Miami, FL',
      'degree': 'N/A',
      'majors': ['Film', 'Environmental Science'],
      'dates': '2008',
      'url': 'http://www.mdc.edu/'
    },
    {
      'name': 'Dr. Michael Krop Sr. High',
      'location': 'Miami, FL',
      'degree': 'N/A',
      'majors': ['Not', 'Applicable'],
      'dates': '2008',
      'url': 'http://kropseniorhigh.org/'
    }
  ],
  'OnlineCourses': [
    {
      'title': 'Udacity - Front-End Web Developer Nanodegree',
      'school': 'Online',
      'date': '2016',
      'url': 'https://www.udacity.com'
    }
  ],

/** @constructor Function to display my education on the DOM
*@description Adds information from the education object to index.html
*/
  display: function () {
    $('#education').append(HTMLschoolStart);
    for (school in education.schools) {
      var formattedSchoolName = HTMLschoolName.replace('%data%', education.schools[school].name);
      var formattedSchoolLocation = HTMLschoolLocation.replace('%data%', education.schools[school].location);

      var formattedEductaionSection = formattedSchoolName + formattedSchoolLocation;

      $('.education-entry:last').append(formattedEductaionSection);
    }

    for (course in education.OnlineCourses) {
      $('#education').append(HTMLonlineClasses);

      var formattedOnlineTitle = HTMLonlineTitle.replace('%data%', education.OnlineCourses[course].title);
      var formattedOnlineDates = HTMLonlineDates.replace('%data%', education.OnlineCourses[course].date);
      var formattedOnlineURL = HTMLonlineURL.replace('%data%', education.OnlineCourses[course].url);

      var formattedOnlineCourseSection = formattedOnlineTitle + formattedOnlineDates;
      $('.onlinecourse-entry').append(formattedOnlineCourseSection);
    }
  }
};

/** Work Object
*@description Describes the jobs that I've had
*/
var work = {
  'jobs': [
    {
      'employer': 'David and Jonathan Ltd',
      'title': 'Shipping Clerk',
      'location': 'Miami, FL',
      'dates': '2014 - 2015',
      'description': 'I managed the shipping and packaging',
    },
    {
      'employer': 'Clickworker',
      'title': 'Clickworker',
      'location': 'Online',
      'dates': '2013 - Present',
      'description': 'I worked to improve the Bing search engine and related tasks',
    }
  ],

/** @constructor Function to display my jobs on the DOM
*@description Adds information from the work object to index.html
*/  
  display: function () {
    for (job in work.jobs) {
      $('#workExperience').append(HTMLworkStart);

      var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
      var formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[job].title);
      var formattedDuration = HTMLworkDates.replace('%data%', work.jobs[job].dates);
      var formattedLocation = HTMLworkLocation.replace('%data%', work.jobs[job].location);
      var formattedDescription = HTMLworkDescription.replace('%data%', work.jobs[job].description);


      var formattedWorkSection = formattedEmployer + formattedTitle + formattedDuration + formattedLocation + formattedDescription;

      $('.work-entry:last').append(formattedWorkSection);
    }
  }
};

/** Projects Object
*@description Describes the projects that I've done
*/
var projects = {
  'projects': [
    {
      'title': 'P1: Mockup to Article',
      'dates': '2016',
      'description': 'I replicated a PDF article in Markdown. I love Markdown!',
      'image': 'https://raw.githubusercontent.com/davidmaoconnor/frontend-nanodegree-resume/gh-pages/images/article-to-mockup.png' 
    },
    {
      'title': 'P2: Build a Portfolio Site',
      'dates': '2016',
      'description': 'I built a portfolio website in HTML, CSS, and jQuery',
      'image': 'https://raw.githubusercontent.com/davidmaoconnor/frontend-nanodegree-resume/gh-pages/images/build-a-portfolio.png',      
    }
  ],
  
  /** @constructor Function to display my projects on the DOM
*@description Adds information from the projects object to index.html
*/  
  display: function () {
    for (project in projects.projects) {
      $('#projects').append(HTMLprojectStart);

      var formattedProjectTitle = HTMLprojectTitle.replace('%data%', projects.projects[project].title);
      var formattedProjectDates = HTMLprojectDates.replace('%data%', projects.projects[project].dates);
      var formattedProjectDescription = HTMLprojectDescription.replace('%data%', projects.projects[project].description);
      var formattedProjectImage = HTMLprojectImage.replace('%data%', projects.projects[project].image);

      var formattedProjectSection = formattedProjectTitle + formattedProjectDates + formattedProjectDescription + formattedProjectImage;

      $('.project-entry:last').append(formattedProjectSection);
    }
  }
};

/** Calls the education function */
education.display();

/** Calls the work function */
work.display();

/** Calls the project function */
projects.display();

/** Calls the bio function */
bio.display();

/** Appends the map to the DOM */
$('#mapDiv').append(googleMap);

/** Changes email to the traditional format */
var newEmail = 'davidmaoconnor@gmail.com';
$('.email').hover(function() {
  $('.email').text(newEmail);
});