// Function to add a job
function addJob() {
    const jobTitle = document.getElementById('job-title').value;
    const jobLocation = document.getElementById('job-location').value;
    const jobHours = document.getElementById('job-hours').value;
    const jobCategory = document.getElementById('categoriesofjob').value;
    const companyName = document.getElementById('company-name').value;
    

    if (jobTitle && jobLocation && jobHours && jobCategory && companyName) {
        let jobs = getJobsFromStorage();
        jobs.push({ title: jobTitle, location: jobLocation, workhours: jobHours, category:jobCategory, name:companyName });
        localStorage.setItem('jobs', JSON.stringify(jobs));
        document.getElementById('job-title').value = '';
        document.getElementById('job-location').value = '';
        document.getElementById('job-hours').value = '';
     document.getElementById('company-name').value='';
    }
}

// Function to retrieve jobs from localStorage
function getJobsFromStorage() {
    const jobs = localStorage.getItem('jobs');
    return jobs ? JSON.parse(jobs) : [];
}

// Function to display jobs on the page
function displayJobs() {
    const empty = document.querySelector('.empty');
    const jobs = getJobsFromStorage();
    empty.innerHTML = '';

    jobs.forEach((job, index) => {
        let addJobContainer = document.querySelector('.add-job');
        let jobDiv = document.createElement('div'); // Changed variable name to jobDiv
        jobDiv.classList.add('border');
        jobDiv.innerHTML = `
             <h4>Title: ${job.title}</h4><br>
             Company: ${job.name}</h4><br>
            Location: ${job.location}<br>
            <b>Hours: ${job. workhours}<b><br>
             Catagory: ${job.category}<br>
             <button>Apply</button>
        `;
        addJobContainer.appendChild(jobDiv);
    });
}