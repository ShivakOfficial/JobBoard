
// const users = {
//     "user123": { password: "pass123", type: "user" },
//     "admin123": { password: "adminpass", type: "admin" }
// };

// // Data storage (unchanged)
// let jobs = JSON.parse(localStorage.getItem('jobs')) || [];
// let applications = JSON.parse(localStorage.getItem('applications')) || [];

// // DOM Elements (unchanged)
// const home = document.getElementById('home');
// const login = document.getElementById('login');
// const userDashboard = document.getElementById('userDashboard');
// const adminDashboard = document.getElementById('adminDashboard');
// const navButtons = document.getElementById('navButtons');
// const logoutSection = document.getElementById('logoutSection');
// const jobListings = document.getElementById('jobListings');
// const adminJobListings = document.getElementById('adminJobListings');
// const applicationForm = document.getElementById('applicationForm');
// const applicationHistory = document.getElementById('applicationHistory');
// const applicationMessage = document.getElementById('applicationMessage');

// // Form handling (login form unchanged)
// document.getElementById('loginForm').addEventListener('submit', (e) => {
//     e.preventDefault();
//     const username = document.getElementById('username').value;
//     const password = document.getElementById('password').value;
//     const userType = document.getElementById('userType').value;

//     if (users[username] && users[username].password === password && users[username].type === userType) {
//         localStorage.setItem('currentUser', username);
//         localStorage.setItem('userType', userType);
//         updateUI();
//     } else {
//         alert('Invalid credentials');
//     }
// });

// // Job post form handler (unchanged)
// document.getElementById('jobPostForm')?.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const job = {
//         id: Date.now(),
//         title: document.getElementById('jobTitle').value,
//         company: document.getElementById('companyName').value,
//         category: document.getElementById('jobCategory').value,
//         description: document.getElementById('jobDescription').value,
//         location: document.getElementById('location').value,
//         salaryRange: document.getElementById('salaryRange').value,
//         jobType: document.getElementById('jobType').value,
//         experienceLevel: document.getElementById('experienceLevel').value,
//         applicationDeadline: document.getElementById('applicationDeadline').value,
//         contactEmail: document.getElementById('contactEmail').value,
//         companyWebsite: document.getElementById('companyWebsite').value,
//         requiredSkills: document.getElementById('requiredSkills').value,
//         benefits: document.getElementById('benefits').value,
//         remoteWork: document.getElementById('remoteWork').value
//     };
//     jobs.push(job);
//     localStorage.setItem('jobs', JSON.stringify(jobs));
//     alert('Job posted successfully!');
//     e.target.reset();
//     displayJobs();
// });

// // Updated job application form handler with email simulation
// document.getElementById('jobApplicationForm')?.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const application = {
//         user: localStorage.getItem('currentUser'),
//         jobTitle: document.getElementById('applyJobTitle').value,
//         company: document.getElementById('applyCompany').value,
//         fullName: document.getElementById('fullName').value,
//         emailAddress: document.getElementById('emailAddress').value,
//         phoneNumber: document.getElementById('phoneNumber').value,
//         address: document.getElementById('address').value,
//         resumeLink: document.getElementById('resumeLink').value,
//         coverLetter: document.getElementById('coverLetter').value,
//         yearsExperience: document.getElementById('yearsExperience').value,
//         highestEducation: document.getElementById('highestEducation').value,
//         currentJobTitle: document.getElementById('currentJobTitle').value || 'N/A',
//         currentEmployer: document.getElementById('currentEmployer').value || 'N/A',
//         availabilityDate: document.getElementById('availabilityDate').value,
//         linkedinProfile: document.getElementById('linkedinProfile').value || 'N/A',
//         portfolioLink: document.getElementById('portfolioLink').value || 'N/A',
//         references: document.getElementById('references').value || 'N/A',
//         additionalComments: document.getElementById('additionalComments').value || 'N/A',
//         date: new Date().toLocaleString()
//     };
//     applications.push(application);
//     localStorage.setItem('applications', JSON.stringify(applications));
//     sendApplicationToAdmin(application); // Simulate sending to admin
//     e.target.reset();
//     applicationForm.classList.add('hidden');
//     applicationMessage.classList.remove('hidden');
//     setTimeout(() => applicationMessage.classList.add('hidden'), 3000); // Hide message after 3 seconds
//     displayApplications();
// });

// // Navigation functions (unchanged)
// function showHome() {
//     switchTab(home);
// }

// function showLogin() {
//     switchTab(login);
// }

// function logout() {
//     localStorage.clear();
//     updateUI();
//     window.history.pushState(null, '', window.location.pathname);
// }

// function switchTab(tab) {
//     [home, login, userDashboard, adminDashboard].forEach(t => t.classList.remove('active'));
//     tab.classList.add('active');
// }

// // Display jobs (unchanged)
// function displayJobs() {
//     jobListings.innerHTML = '';
//     adminJobListings.innerHTML = '';
//     const searchTerm = document.getElementById('searchInput')?.value.toLowerCase() || '';
//     const categoryFilter = document.getElementById('categoryFilter')?.value || '';

//     jobs.filter(job => 
//         (job.title.toLowerCase().includes(searchTerm) ||
//          job.company.toLowerCase().includes(searchTerm) ||
//          job.description.toLowerCase().includes(searchTerm)) &&
//         (categoryFilter === '' || job.category === categoryFilter)
//     ).forEach((job, index) => {
//         const userJobDiv = document.createElement('div');
//         userJobDiv.className = 'job-listing';
//         userJobDiv.innerHTML = `
//             <h4>${job.title}</h4>
//             <p>${job.company} | ${job.category}</p>
//             <p>Location: ${job.location}</p>
//             <p>Salary: ${job.salaryRange}</p>
//             <p>Type: ${job.jobType} | Experience: ${job.experienceLevel}</p>
//             <p>Deadline: ${job.applicationDeadline}</p>
//             <p>Email: ${job.contactEmail}</p>
//             <p>Website: <a href="${job.companyWebsite}" target="_blank">${job.companyWebsite}</a></p>
//             <p>Skills: ${job.requiredSkills}</p>
//             <p>Benefits: ${job.benefits || 'N/A'}</p>
//             <p>Remote: ${job.remoteWork}</p>
//             <p>${job.description}</p>
//             <button onclick="showApplicationForm(${job.id})">Apply</button>
//         `;
//         jobListings.appendChild(userJobDiv);

//         const adminJobDiv = document.createElement('div');
//         adminJobDiv.className = 'job-listing';
//         adminJobDiv.innerHTML = `
//             <h4>${job.title}</h4>
//             <p>${job.company} | ${job.category}</p>
//             <p>Location: ${job.location}</p>
//             <p>Salary: ${job.salaryRange}</p>
//             <p>Type: ${job.jobType} | Experience: ${job.experienceLevel}</p>
//             <p>Deadline: ${job.applicationDeadline}</p>
//             <p>Email: ${job.contactEmail}</p>
//             <p>Website: <a href="${job.companyWebsite}" target="_blank">${job.companyWebsite}</a></p>
//             <p>Skills: ${job.requiredSkills}</p>
//             <p>Benefits: ${job.benefits || 'N/A'}</p>
//             <p>Remote: ${job.remoteWork}</p>
//             <p>${job.description}</p>
//             <button onclick="editJob(${job.id})">Edit</button>
//             <button class="delete-btn" onclick="deleteJob(${job.id})">Delete</button>
//         `;
//         adminJobListings.appendChild(adminJobDiv);
//     });
// }

// function showApplicationForm(jobId) {
//     const job = jobs.find(j => j.id === jobId);
//     document.getElementById('applyJobTitle').value = job.title;
//     document.getElementById('applyCompany').value = job.company;
//     applicationForm.classList.remove('hidden');
//     applicationMessage.classList.add('hidden'); // Reset message visibility
// }

// // Edit job (unchanged)
// function editJob(jobId) {
//     const job = jobs.find(j => j.id === jobId);
//     document.getElementById('jobTitle').value = job.title;
//     document.getElementById('companyName').value = job.company;
//     document.getElementById('jobCategory').value = job.category;
//     document.getElementById('jobDescription').value = job.description;
//     document.getElementById('location').value = job.location;
//     document.getElementById('salaryRange').value = job.salaryRange;
//     document.getElementById('jobType').value = job.jobType;
//     document.getElementById('experienceLevel').value = job.experienceLevel;
//     document.getElementById('applicationDeadline').value = job.applicationDeadline;
//     document.getElementById('contactEmail').value = job.contactEmail;
//     document.getElementById('companyWebsite').value = job.companyWebsite;
//     document.getElementById('requiredSkills').value = job.requiredSkills;
//     document.getElementById('benefits').value = job.benefits;
//     document.getElementById('remoteWork').value = job.remoteWork;
//     deleteJob(jobId);
// }

// function deleteJob(jobId) {
//     jobs = jobs.filter(j => j.id !== jobId);
//     localStorage.setItem('jobs', JSON.stringify(jobs));
//     displayJobs();
// }

// // Updated displayApplications to show limited details to users
// function displayApplications() {
//     applicationHistory.innerHTML = '';
//     const currentUser = localStorage.getItem('currentUser');
//     applications.filter(app => app.user === currentUser).forEach(app => {
//         const appDiv = document.createElement('div');
//         appDiv.className = 'job-listing';
//         appDiv.innerHTML = `
//             <h4>${app.jobTitle}</h4>
//             <p>${app.company}</p>
//             <p>Applied: ${app.date}</p>
//         `;
//         applicationHistory.appendChild(appDiv);
//     });
// }

// // Simulate sending application to admin email (placeholder)
// function sendApplicationToAdmin(application) {
//     const adminEmail = "admin@example.com"; // Replace with actual admin email
//     const emailContent = `
//         New Job Application:
//         Job Title: ${application.jobTitle}
//         Company: ${application.company}
//         Applicant: ${application.fullName}
//         Email: ${application.emailAddress}
//         Phone: ${application.phoneNumber}
//         Address: ${application.address}
//         Resume Link: ${application.resumeLink}
//         Cover Letter: ${application.coverLetter}
//         Experience: ${application.yearsExperience} years
//         Education: ${application.highestEducation}
//         Current Job: ${application.currentJobTitle} at ${application.currentEmployer}
//         Availability: ${application.availabilityDate}
//         LinkedIn: ${application.linkedinProfile}
//         Portfolio: ${application.portfolioLink}
//         References: ${application.references}
//         Comments: ${application.additionalComments}
//         Date: ${application.date}
//     `;

//     // Placeholder for email sending logic
//     console.log(`Sending email to ${adminEmail}:`, emailContent);

//     // Uncomment and configure the following if using EmailJS
//     /*
//     emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
//         to_email: adminEmail,
//         job_title: application.jobTitle,
//         company: application.company,
//         full_name: application.fullName,
//         email: application.emailAddress,
//         phone: application.phoneNumber,
//         address: application.address,
//         resume_link: application.resumeLink,
//         cover_letter: application.coverLetter,
//         years_experience: application.yearsExperience,
//         highest_education: application.highestEducation,
//         current_job_title: application.currentJobTitle,
//         current_employer: application.currentEmployer,
//         availability_date: application.availabilityDate,
//         linkedin_profile: application.linkedinProfile,
//         portfolio_link: application.portfolioLink,
//         references: application.references,
//         additional_comments: application.additionalComments,
//         application_date: application.date
//     }).then(
//         (response) => console.log('Email sent successfully!', response.status, response.text),
//         (error) => console.log('Failed to send email:', error)
//     );
//     */
// }

// function filterJobs() {
//     displayJobs();
// }

// function updateUI() {
//     const userType = localStorage.getItem('userType');
//     const username = localStorage.getItem('currentUser');

//     if (userType === 'user') {
//         switchTab(userDashboard);
//         navButtons.classList.add('hidden');
//         logoutSection.classList.remove('hidden');
//         document.getElementById('userName').textContent = username;
//         displayJobs();
//         displayApplications();
//     } else if (userType === 'admin') {
//         switchTab(adminDashboard);
//         navButtons.classList.add('hidden');
//         logoutSection.classList.remove('hidden');
//         displayJobs();
//     } else {
//         switchTab(home);
//         navButtons.classList.remove('hidden');
//         logoutSection.classList.add('hidden');
//     }
// }

// // Initial setup
// updateUI();

// // Prevent back button issues
// window.onpageshow = function(event) {
//     if (event.persisted || (window.performance && window.performance.navigation.type === 2)) {
//         updateUI();
//     }
// };

// User database (unchanged)



// const users = {
//     "user123": { password: "pass123", type: "user" },
//     "admin123": { password: "adminpass", type: "admin" }
// };

// // Data storage (unchanged)
// let jobs = JSON.parse(localStorage.getItem('jobs')) || [];
// let applications = JSON.parse(localStorage.getItem('applications')) || [];

// // DOM Elements (unchanged, with applicationMessage added)
// const home = document.getElementById('home');
// const login = document.getElementById('login');
// const userDashboard = document.getElementById('userDashboard');
// const adminDashboard = document.getElementById('adminDashboard');
// const navButtons = document.getElementById('navButtons');
// const logoutSection = document.getElementById('logoutSection');
// const jobListings = document.getElementById('jobListings');
// const adminJobListings = document.getElementById('adminJobListings');
// const applicationForm = document.getElementById('applicationForm');
// const applicationHistory = document.getElementById('applicationHistory');
// const applicationMessage = document.getElementById('applicationMessage');

// // Updated login form handler with validation feedback
// document.getElementById('loginForm').addEventListener('submit', (e) => {
//     e.preventDefault();
//     const username = document.getElementById('username').value.trim();
//     const password = document.getElementById('password').value;
//     const userType = document.getElementById('userType').value;
//     const usernameError = document.getElementById('usernameError');
//     const passwordError = document.getElementById('passwordError');

//     // Reset error messages
//     usernameError.textContent = '';
//     passwordError.textContent = '';

//     // Basic validation
//     if (!username) {
//         usernameError.textContent = 'Username is required';
//         return;
//     }
//     if (!password) {
//         passwordError.textContent = 'Password is required';
//         return;
//     }
//     if (!userType) {
//         alert('Please select a user type');
//         return;
//     }

//     // Authentication
//     if (users[username] && users[username].password === password && users[username].type === userType) {
//         localStorage.setItem('currentUser', username);
//         localStorage.setItem('userType', userType);
//         updateUI();
//     } else {
//         usernameError.textContent = 'Invalid credentials';
//         passwordError.textContent = 'Invalid credentials';
//     }
// });

// // Password toggle function
// function togglePassword() {
//     const passwordInput = document.getElementById('password');
//     const toggleIcon = document.querySelector('.toggle-password i');
//     if (passwordInput.type === 'password') {
//         passwordInput.type = 'text';
//         toggleIcon.classList.remove('fa-eye');
//         toggleIcon.classList.add('fa-eye-slash');
//     } else {
//         passwordInput.type = 'password';
//         toggleIcon.classList.remove('fa-eye-slash');
//         toggleIcon.classList.add('fa-eye');
//     }
// }

// // Rest of your script.js remains unchanged
// // Job post form handler
// document.getElementById('jobPostForm')?.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const job = {
//         id: Date.now(),
//         title: document.getElementById('jobTitle').value,
//         company: document.getElementById('companyName').value,
//         category: document.getElementById('jobCategory').value,
//         description: document.getElementById('jobDescription').value,
//         location: document.getElementById('location').value,
//         salaryRange: document.getElementById('salaryRange').value,
//         jobType: document.getElementById('jobType').value,
//         experienceLevel: document.getElementById('experienceLevel').value,
//         applicationDeadline: document.getElementById('applicationDeadline').value,
//         contactEmail: document.getElementById('contactEmail').value,
//         companyWebsite: document.getElementById('companyWebsite').value,
//         requiredSkills: document.getElementById('requiredSkills').value,
//         benefits: document.getElementById('benefits').value,
//         remoteWork: document.getElementById('remoteWork').value
//     };
//     jobs.push(job);
//     localStorage.setItem('jobs', JSON.stringify(jobs));
//     alert('Job posted successfully!');
//     e.target.reset();
//     displayJobs();
// });

// // Job application form handler
// document.getElementById('jobApplicationForm')?.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const application = {
//         user: localStorage.getItem('currentUser'),
//         jobTitle: document.getElementById('applyJobTitle').value,
//         company: document.getElementById('applyCompany').value,
//         fullName: document.getElementById('fullName').value,
//         emailAddress: document.getElementById('emailAddress').value,
//         phoneNumber: document.getElementById('phoneNumber').value,
//         address: document.getElementById('address').value,
//         resumeLink: document.getElementById('resumeLink').value,
//         coverLetter: document.getElementById('coverLetter').value,
//         yearsExperience: document.getElementById('yearsExperience').value,
//         highestEducation: document.getElementById('highestEducation').value,
//         currentJobTitle: document.getElementById('currentJobTitle').value || 'N/A',
//         currentEmployer: document.getElementById('currentEmployer').value || 'N/A',
//         availabilityDate: document.getElementById('availabilityDate').value,
//         linkedinProfile: document.getElementById('linkedinProfile').value || 'N/A',
//         portfolioLink: document.getElementById('portfolioLink').value || 'N/A',
//         references: document.getElementById('references').value || 'N/A',
//         additionalComments: document.getElementById('additionalComments').value || 'N/A',
//         date: new Date().toLocaleString()
//     };
//     applications.push(application);
//     localStorage.setItem('applications', JSON.stringify(applications));
//     sendApplicationToAdmin(application);
//     e.target.reset();
//     applicationForm.classList.add('hidden');
//     applicationMessage.classList.remove('hidden');
//     setTimeout(() => applicationMessage.classList.add('hidden'), 3000);
//     displayApplications();
// });

// // Navigation functions
// function showHome() {
//     switchTab(home);
// }

// function showLogin() {
//     switchTab(login);
// }

// function logout() {
//     localStorage.clear();
//     updateUI();
//     window.history.pushState(null, '', window.location.pathname);
// }

// function switchTab(tab) {
//     [home, login, userDashboard, adminDashboard].forEach(t => t.classList.remove('active'));
//     tab.classList.add('active');
// }

// function displayJobs() {
//     jobListings.innerHTML = '';
//     adminJobListings.innerHTML = '';
//     const searchTerm = document.getElementById('searchInput')?.value.toLowerCase() || '';
//     const categoryFilter = document.getElementById('categoryFilter')?.value || '';

//     jobs.filter(job => 
//         (job.title.toLowerCase().includes(searchTerm) ||
//          job.company.toLowerCase().includes(searchTerm) ||
//          job.description.toLowerCase().includes(searchTerm)) &&
//         (categoryFilter === '' || job.category === categoryFilter)
//     ).forEach((job, index) => {
//         const userJobDiv = document.createElement('div');
//         userJobDiv.className = 'job-listing';
//         userJobDiv.innerHTML = `
//             <h4>${job.title}</h4>
//             <p>${job.company} | ${job.category}</p>
//             <p>Location: ${job.location}</p>
//             <p>Salary: ${job.salaryRange}</p>
//             <p>Type: ${job.jobType} | Experience: ${job.experienceLevel}</p>
//             <p>Deadline: ${job.applicationDeadline}</p>
//             <p>Email: ${job.contactEmail}</p>
//             <p>Website: <a href="${job.companyWebsite}" target="_blank">${job.companyWebsite}</a></p>
//             <p>Skills: ${job.requiredSkills}</p>
//             <p>Benefits: ${job.benefits || 'N/A'}</p>
//             <p>Remote: ${job.remoteWork}</p>
//             <p>${job.description}</p>
//             <button onclick="showApplicationForm(${job.id})">Apply</button>
//         `;
//         jobListings.appendChild(userJobDiv);

//         const adminJobDiv = document.createElement('div');
//         adminJobDiv.className = 'job-listing';
//         adminJobDiv.innerHTML = `
//             <h4>${job.title}</h4>
//             <p>${job.company} | ${job.category}</p>
//             <p>Location: ${job.location}</p>
//             <p>Salary: ${job.salaryRange}</p>
//             <p>Type: ${job.jobType} | Experience: ${job.experienceLevel}</p>
//             <p>Deadline: ${job.applicationDeadline}</p>
//             <p>Email: ${job.contactEmail}</p>
//             <p>Website: <a href="${job.companyWebsite}" target="_blank">${job.companyWebsite}</a></p>
//             <p>Skills: ${job.requiredSkills}</p>
//             <p>Benefits: ${job.benefits || 'N/A'}</p>
//             <p>Remote: ${job.remoteWork}</p>
//             <p>${job.description}</p>
//             <button onclick="editJob(${job.id})">Edit</button>
//             <button class="delete-btn" onclick="deleteJob(${job.id})">Delete</button>
//         `;
//         adminJobListings.appendChild(adminJobDiv);
//     });
// }

// function showApplicationForm(jobId) {
//     const job = jobs.find(j => j.id === jobId);
//     document.getElementById('applyJobTitle').value = job.title;
//     document.getElementById('applyCompany').value = job.company;
//     applicationForm.classList.remove('hidden');
//     applicationMessage.classList.add('hidden');
// }

// function editJob(jobId) {
//     const job = jobs.find(j => j.id === jobId);
//     document.getElementById('jobTitle').value = job.title;
//     document.getElementById('companyName').value = job.company;
//     document.getElementById('jobCategory').value = job.category;
//     document.getElementById('jobDescription').value = job.description;
//     document.getElementById('location').value = job.location;
//     document.getElementById('salaryRange').value = job.salaryRange;
//     document.getElementById('jobType').value = job.jobType;
//     document.getElementById('experienceLevel').value = job.experienceLevel;
//     document.getElementById('applicationDeadline').value = job.applicationDeadline;
//     document.getElementById('contactEmail').value = job.contactEmail;
//     document.getElementById('companyWebsite').value = job.companyWebsite;
//     document.getElementById('requiredSkills').value = job.requiredSkills;
//     document.getElementById('benefits').value = job.benefits;
//     document.getElementById('remoteWork').value = job.remoteWork;
//     deleteJob(jobId);
// }

// function deleteJob(jobId) {
//     jobs = jobs.filter(j => j.id !== jobId);
//     localStorage.setItem('jobs', JSON.stringify(jobs));
//     displayJobs();
// }

// function displayApplications() {
//     applicationHistory.innerHTML = '';
//     const currentUser = localStorage.getItem('currentUser');
//     applications.filter(app => app.user === currentUser).forEach(app => {
//         const appDiv = document.createElement('div');
//         appDiv.className = 'job-listing';
//         appDiv.innerHTML = `
//             <h4>${app.jobTitle}</h4>
//             <p>${app.company}</p>
//             <p>Applied: ${app.date}</p>
//         `;
//         applicationHistory.appendChild(appDiv);
//     });
// }

// function sendApplicationToAdmin(application) {
//     const adminEmail = "admin@example.com"; // Replace with actual admin email
//     const emailContent = `
//         New Job Application:
//         Job Title: ${application.jobTitle}
//         Company: ${application.company}
//         Applicant: ${application.fullName}
//         Email: ${application.emailAddress}
//         Phone: ${application.phoneNumber}
//         Address: ${application.address}
//         Resume Link: ${application.resumeLink}
//         Cover Letter: ${application.coverLetter}
//         Experience: ${application.yearsExperience} years
//         Education: ${application.highestEducation}
//         Current Job: ${application.currentJobTitle} at ${application.currentEmployer}
//         Availability: ${application.availabilityDate}
//         LinkedIn: ${application.linkedinProfile}
//         Portfolio: ${application.portfolioLink}
//         References: ${application.references}
//         Comments: ${application.additionalComments}
//         Date: ${application.date}
//     `;
//     console.log(`Sending email to ${adminEmail}:`, emailContent);
//     // Uncomment and configure for EmailJS if desired
//     /*
//     emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
//         to_email: adminEmail,
//         job_title: application.jobTitle,
//         company: application.company,
//         full_name: application.fullName,
//         email: application.emailAddress,
//         phone: application.phoneNumber,
//         address: application.address,
//         resume_link: application.resumeLink,
//         cover_letter: application.coverLetter,
//         years_experience: application.yearsExperience,
//         highest_education: application.highestEducation,
//         current_job_title: application.currentJobTitle,
//         current_employer: application.currentEmployer,
//         availability_date: application.availabilityDate,
//         linkedin_profile: application.linkedinProfile,
//         portfolio_link: application.portfolioLink,
//         references: application.references,
//         additional_comments: application.additionalComments,
//         application_date: application.date
//     }).then(
//         (response) => console.log('Email sent successfully!', response.status, response.text),
//         (error) => console.log('Failed to send email:', error)
//     );
//     */
// }

// function filterJobs() {
//     displayJobs();
// }

// function updateUI() {
//     const userType = localStorage.getItem('userType');
//     const username = localStorage.getItem('currentUser');

//     if (userType === 'user') {
//         switchTab(userDashboard);
//         navButtons.classList.add('hidden');
//         logoutSection.classList.remove('hidden');
//         document.getElementById('userName').textContent = username;
//         displayJobs();
//         displayApplications();
//     } else if (userType === 'admin') {
//         switchTab(adminDashboard);
//         navButtons.classList.add('hidden');
//         logoutSection.classList.remove('hidden');
//         displayJobs();
//     } else {
//         switchTab(home);
//         navButtons.classList.remove('hidden');
//         logoutSection.classList.add('hidden');
//     }
// }

// // Initial setup
// updateUI();

// // Prevent back button issues
// window.onpageshow = function(event) {
//     if (event.persisted || (window.performance && window.performance.navigation.type === 2)) {
//         updateUI();
//     }
// };











// User database (loaded from localStorage or initialized)
let users = JSON.parse(localStorage.getItem('users')) || {
    "user123": { password: "pass123", type: "user" },
    "admin123": { password: "adminpass", type: "admin" }
};

// Data storage (unchanged)
let jobs = JSON.parse(localStorage.getItem('jobs')) || [];
let applications = JSON.parse(localStorage.getItem('applications')) || [];

// DOM Elements
const home = document.getElementById('home');
const login = document.getElementById('login');
const userDashboard = document.getElementById('userDashboard');
const adminDashboard = document.getElementById('adminDashboard');
const navButtons = document.getElementById('navButtons');
const logoutSection = document.getElementById('logoutSection');
const jobListings = document.getElementById('jobListings');
const adminJobListings = document.getElementById('adminJobListings');
const applicationForm = document.getElementById('applicationForm');
const applicationHistory = document.getElementById('applicationHistory');
const applicationMessage = document.getElementById('applicationMessage');
const loginFormContainer = document.getElementById('loginFormContainer');
const signUpFormContainer = document.getElementById('signUpFormContainer');
const forgotPasswordContainer = document.getElementById('forgotPasswordContainer');

// Login form handler
document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
    const userType = document.getElementById('userType').value;
    const usernameError = document.getElementById('usernameError');
    const passwordError = document.getElementById('passwordError');

    usernameError.textContent = '';
    passwordError.textContent = '';

    if (!username) {
        usernameError.textContent = 'Username is required';
        return;
    }
    if (!password) {
        passwordError.textContent = 'Password is required';
        return;
    }
    if (!userType) {
        alert('Please select a user type');
        return;
    }

    if (users[username] && users[username].password === password && users[username].type === userType) {
        localStorage.setItem('currentUser', username);
        localStorage.setItem('userType', userType);
        updateUI();
    } else {
        usernameError.textContent = 'Invalid credentials';
        passwordError.textContent = 'Invalid credentials';
    }
});

// Sign-up form handler
document.getElementById('signUpForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('signUpUsername').value.trim();
    const password = document.getElementById('signUpPassword').value;
    const userType = document.getElementById('signUpUserType').value;
    const usernameError = document.getElementById('signUpUsernameError');
    const passwordError = document.getElementById('signUpPasswordError');

    usernameError.textContent = '';
    passwordError.textContent = '';

    if (!username) {
        usernameError.textContent = 'Username is required';
        return;
    }
    if (users[username]) {
        usernameError.textContent = 'Username already exists';
        return;
    }
    if (!password) {
        passwordError.textContent = 'Password is required';
        return;
    }
    if (password.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters';
        return;
    }
    if (!userType) {
        alert('Please select a user type');
        return;
    }

    users[username] = { password: password, type: userType };
    localStorage.setItem('users', JSON.stringify(users));
    alert('Sign-up successful! Please log in.');
    showLogin();
    e.target.reset();
});

// Password toggle function
function togglePassword(inputId) {
    const passwordInput = document.getElementById(inputId);
    const toggleIcon = passwordInput.nextElementSibling.querySelector('i');
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleIcon.classList.remove('fa-eye');
        toggleIcon.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = 'password';
        toggleIcon.classList.remove('fa-eye-slash');
        toggleIcon.classList.add('fa-eye');
    }
}

// Form switching functions
function showLogin() {
    loginFormContainer.classList.remove('hidden');
    signUpFormContainer.classList.add('hidden');
    forgotPasswordContainer.classList.add('hidden');
}

function showSignUp() {
    loginFormContainer.classList.add('hidden');
    signUpFormContainer.classList.remove('hidden');
    forgotPasswordContainer.classList.add('hidden');
}

function showForgotPassword() {
    loginFormContainer.classList.add('hidden');
    signUpFormContainer.classList.add('hidden');
    forgotPasswordContainer.classList.remove('hidden');
}

// Rest of your script.js remains unchanged (job posting, applications, etc.)
// Job post form handler
document.getElementById('jobPostForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const job = {
        id: Date.now(),
        title: document.getElementById('jobTitle').value,
        company: document.getElementById('companyName').value,
        category: document.getElementById('jobCategory').value,
        description: document.getElementById('jobDescription').value,
        location: document.getElementById('location').value,
        salaryRange: document.getElementById('salaryRange').value,
        jobType: document.getElementById('jobType').value,
        experienceLevel: document.getElementById('experienceLevel').value,
        applicationDeadline: document.getElementById('applicationDeadline').value,
        contactEmail: document.getElementById('contactEmail').value,
        companyWebsite: document.getElementById('companyWebsite').value,
        requiredSkills: document.getElementById('requiredSkills').value,
        benefits: document.getElementById('benefits').value,
        remoteWork: document.getElementById('remoteWork').value
    };
    jobs.push(job);
    localStorage.setItem('jobs', JSON.stringify(jobs));
    alert('Job posted successfully!');
    e.target.reset();
    displayJobs();
});

// Job application form handler
document.getElementById('jobApplicationForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const application = {
        user: localStorage.getItem('currentUser'),
        jobTitle: document.getElementById('applyJobTitle').value,
        company: document.getElementById('applyCompany').value,
        fullName: document.getElementById('fullName').value,
        emailAddress: document.getElementById('emailAddress').value,
        phoneNumber: document.getElementById('phoneNumber').value,
        address: document.getElementById('address').value,
        resumeLink: document.getElementById('resumeLink').value,
        coverLetter: document.getElementById('coverLetter').value,
        yearsExperience: document.getElementById('yearsExperience').value,
        highestEducation: document.getElementById('highestEducation').value,
        currentJobTitle: document.getElementById('currentJobTitle').value || 'N/A',
        currentEmployer: document.getElementById('currentEmployer').value || 'N/A',
        availabilityDate: document.getElementById('availabilityDate').value,
        linkedinProfile: document.getElementById('linkedinProfile').value || 'N/A',
        portfolioLink: document.getElementById('portfolioLink').value || 'N/A',
        references: document.getElementById('references').value || 'N/A',
        additionalComments: document.getElementById('additionalComments').value || 'N/A',
        date: new Date().toLocaleString()
    };
    applications.push(application);
    localStorage.setItem('applications', JSON.stringify(applications));
    sendApplicationToAdmin(application);
    e.target.reset();
    applicationForm.classList.add('hidden');
    applicationMessage.classList.remove('hidden');
    setTimeout(() => applicationMessage.classList.add('hidden'), 3000);
    displayApplications();
});

// Navigation functions
function showHome() {
    switchTab(home);
}

function showLogin() {
    switchTab(login);
    showLogin(); // Ensure login form is visible
}

function logout() {
    localStorage.clear();
    updateUI();
    window.history.pushState(null, '', window.location.pathname);
}

function switchTab(tab) {
    [home, login, userDashboard, adminDashboard].forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
}

function displayJobs() {
    jobListings.innerHTML = '';
    adminJobListings.innerHTML = '';
    const searchTerm = document.getElementById('searchInput')?.value.toLowerCase() || '';
    const categoryFilter = document.getElementById('categoryFilter')?.value || '';

    jobs.filter(job => 
        (job.title.toLowerCase().includes(searchTerm) ||
         job.company.toLowerCase().includes(searchTerm) ||
         job.description.toLowerCase().includes(searchTerm)) &&
        (categoryFilter === '' || job.category === categoryFilter)
    ).forEach((job, index) => {
        const userJobDiv = document.createElement('div');
        userJobDiv.className = 'job-listing';
        userJobDiv.innerHTML = `
            <h4>${job.title}</h4>
            <p>${job.company} | ${job.category}</p>
            <p>Location: ${job.location}</p>
            <p>Salary: ${job.salaryRange}</p>
            <p>Type: ${job.jobType} | Experience: ${job.experienceLevel}</p>
            <p>Deadline: ${job.applicationDeadline}</p>
            <p>Email: ${job.contactEmail}</p>
            <p>Website: <a href="${job.companyWebsite}" target="_blank">${job.companyWebsite}</a></p>
            <p>Skills: ${job.requiredSkills}</p>
            <p>Benefits: ${job.benefits || 'N/A'}</p>
            <p>Remote: ${job.remoteWork}</p>
            <p>${job.description}</p>
            <button onclick="showApplicationForm(${job.id})">Apply</button>
        `;
        jobListings.appendChild(userJobDiv);

        const adminJobDiv = document.createElement('div');
        adminJobDiv.className = 'job-listing';
        adminJobDiv.innerHTML = `
            <h4>${job.title}</h4>
            <p>${job.company} | ${job.category}</p>
            <p>Location: ${job.location}</p>
            <p>Salary: ${job.salaryRange}</p>
            <p>Type: ${job.jobType} | Experience: ${job.experienceLevel}</p>
            <p>Deadline: ${job.applicationDeadline}</p>
            <p>Email: ${job.contactEmail}</p>
            <p>Website: <a href="${job.companyWebsite}" target="_blank">${job.companyWebsite}</a></p>
            <p>Skills: ${job.requiredSkills}</p>
            <p>Benefits: ${job.benefits || 'N/A'}</p>
            <p>Remote: ${job.remoteWork}</p>
            <p>${job.description}</p>
            <button onclick="editJob(${job.id})">Edit</button>
            <button class="delete-btn" onclick="deleteJob(${job.id})">Delete</button>
        `;
        adminJobListings.appendChild(adminJobDiv);
    });
}

function showApplicationForm(jobId) {
    const job = jobs.find(j => j.id === jobId);
    document.getElementById('applyJobTitle').value = job.title;
    document.getElementById('applyCompany').value = job.company;
    applicationForm.classList.remove('hidden');
    applicationMessage.classList.add('hidden');
}

function editJob(jobId) {
    const job = jobs.find(j => j.id === jobId);
    document.getElementById('jobTitle').value = job.title;
    document.getElementById('companyName').value = job.company;
    document.getElementById('jobCategory').value = job.category;
    document.getElementById('jobDescription').value = job.description;
    document.getElementById('location').value = job.location;
    document.getElementById('salaryRange').value = job.salaryRange;
    document.getElementById('jobType').value = job.jobType;
    document.getElementById('experienceLevel').value = job.experienceLevel;
    document.getElementById('applicationDeadline').value = job.applicationDeadline;
    document.getElementById('contactEmail').value = job.contactEmail;
    document.getElementById('companyWebsite').value = job.companyWebsite;
    document.getElementById('requiredSkills').value = job.requiredSkills;
    document.getElementById('benefits').value = job.benefits;
    document.getElementById('remoteWork').value = job.remoteWork;
    deleteJob(jobId);
}

function deleteJob(jobId) {
    jobs = jobs.filter(j => j.id !== jobId);
    localStorage.setItem('jobs', JSON.stringify(jobs));
    displayJobs();
}

function displayApplications() {
    applicationHistory.innerHTML = '';
    const currentUser = localStorage.getItem('currentUser');
    applications.filter(app => app.user === currentUser).forEach(app => {
        const appDiv = document.createElement('div');
        appDiv.className = 'job-listing';
        appDiv.innerHTML = `
            <h4>${app.jobTitle}</h4>
            <p>${app.company}</p>
            <p>Applied: ${app.date}</p>
        `;
        applicationHistory.appendChild(appDiv);
    });
}

function sendApplicationToAdmin(application) {
    const adminEmail = "admin@example.com"; // Replace with actual admin email
    const emailContent = `
        New Job Application:
        Job Title: ${application.jobTitle}
        Company: ${application.company}
        Applicant: ${application.fullName}
        Email: ${application.emailAddress}
        Phone: ${application.phoneNumber}
        Address: ${application.address}
        Resume Link: ${application.resumeLink}
        Cover Letter: ${application.coverLetter}
        Experience: ${application.yearsExperience} years
        Education: ${application.highestEducation}
        Current Job: ${application.currentJobTitle} at ${application.currentEmployer}
        Availability: ${application.availabilityDate}
        LinkedIn: ${application.linkedinProfile}
        Portfolio: ${application.portfolioLink}
        References: ${application.references}
        Comments: ${application.additionalComments}
        Date: ${application.date}
    `;
    console.log(`Sending email to ${adminEmail}:`, emailContent);
    // Uncomment and configure for EmailJS if desired
    /*
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
        to_email: adminEmail,
        job_title: application.jobTitle,
        company: application.company,
        full_name: application.fullName,
        email: application.emailAddress,
        phone: application.phoneNumber,
        address: application.address,
        resume_link: application.resumeLink,
        cover_letter: application.coverLetter,
        years_experience: application.yearsExperience,
        highest_education: application.highestEducation,
        current_job_title: application.currentJobTitle,
        current_employer: application.currentEmployer,
        availability_date: application.availabilityDate,
        linkedin_profile: application.linkedinProfile,
        portfolio_link: application.portfolioLink,
        references: application.references,
        additional_comments: application.additionalComments,
        application_date: application.date
    }).then(
        (response) => console.log('Email sent successfully!', response.status, response.text),
        (error) => console.log('Failed to send email:', error)
    );
    */
}

function filterJobs() {
    displayJobs();
}

function updateUI() {
    const userType = localStorage.getItem('userType');
    const username = localStorage.getItem('currentUser');

    if (userType === 'user') {
        switchTab(userDashboard);
        navButtons.classList.add('hidden');
        logoutSection.classList.remove('hidden');
        document.getElementById('userName').textContent = username;
        displayJobs();
        displayApplications();
    } else if (userType === 'admin') {
        switchTab(adminDashboard);
        navButtons.classList.add('hidden');
        logoutSection.classList.remove('hidden');
        displayJobs();
    } else {
        switchTab(home);
        navButtons.classList.remove('hidden');
        logoutSection.classList.add('hidden');
    }
}

// Initial setup
updateUI();

// Prevent back button issues
window.onpageshow = function(event) {
    if (event.persisted || (window.performance && window.performance.navigation.type === 2)) {
        updateUI();
    }
};