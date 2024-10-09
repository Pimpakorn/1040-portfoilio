document.getElementById('showMoreButton').addEventListener('click', function() {
    const mainContent = document.getElementById('mainContent');
    const identitySection = document.getElementById('identity');

    mainContent.classList.add('hidden');

    identitySection.classList.remove('hidden');

    showProfileContent();
});

function showProfileContent() {
    document.getElementById('profileBox').classList.remove('hidden');
    document.getElementById('assignmentBox').classList.add('hidden');
    document.getElementById('projectBox').classList.add('hidden');
    document.getElementById('referenceBox').classList.add('hidden'); 
    document.getElementById('profileDetails').classList.add('hidden');
}

function showAssignmentContent() {
    document.getElementById('profileBox').classList.add('hidden');
    document.getElementById('assignmentBox').classList.remove('hidden');
    document.getElementById('projectBox').classList.add('hidden');
    document.getElementById('referenceBox').classList.add('hidden'); 
    document.getElementById('profileDetails').classList.add('hidden'); 
}

function showProjectContent() {
    document.getElementById('profileBox').classList.add('hidden');
    document.getElementById('assignmentBox').classList.add('hidden');
    document.getElementById('projectBox').classList.remove('hidden');
    document.getElementById('referenceBox').classList.add('hidden'); 
    document.getElementById('profileDetails').classList.add('hidden'); 
}

function showReferenceContent() {
    document.getElementById('profileBox').classList.add('hidden');
    document.getElementById('assignmentBox').classList.add('hidden');
    document.getElementById('projectBox').classList.add('hidden');
    document.getElementById('referenceBox').classList.remove('hidden');
    document.getElementById('profileDetails').classList.add('hidden'); 
}

document.getElementById('backButton').addEventListener('click', function() {
    const mainContent = document.getElementById('mainContent');
    const identitySection = document.getElementById('identity');

    mainContent.classList.remove('hidden');
    identitySection.classList.add('hidden');
});

document.getElementById('profileDetailsBackButton').addEventListener('click', function() {
    const profileDetails = document.getElementById('profileDetails');
    const identitySection = document.getElementById('identity');

    profileDetails.classList.add('hidden');
    identitySection.classList.remove('hidden');
    showProfileContent(); 
});

document.getElementById('showProfile').addEventListener('click', showProfileContent);
document.getElementById('showAssignment').addEventListener('click', showAssignmentContent);
document.getElementById('showProject').addEventListener('click', showProjectContent);
document.getElementById('showReference').addEventListener('click', showReferenceContent); 


document.getElementById('readMoreButtonProfile').addEventListener('click', function() {
    const identitySection = document.getElementById('identity');
    const profileDetails = document.getElementById('profileDetails');

    identitySection.classList.add('hidden'); 
    profileDetails.classList.remove('hidden'); 
});

document.getElementById('readMoreButtonAssignment').addEventListener('click', function() {
    const identitySection = document.getElementById('identity');
    const assignmentsSection = document.getElementById('assignments');

    identitySection.classList.add('hidden'); 
    assignmentsSection.classList.remove('hidden'); 
});

document.getElementById('backFromAssignments').addEventListener('click', function() {
    const identitySection = document.getElementById('identity');
    const assignmentsSection = document.getElementById('assignments');

    assignmentsSection.classList.add('hidden'); 
    identitySection.classList.remove('hidden'); 
});

document.getElementById('readMoreButtonReference').addEventListener('click', function() {
    const identitySection = document.getElementById('identity');
    const referenceDetails = document.getElementById('referenceDetails');

    identitySection.classList.add('hidden'); 
    referenceDetails.classList.remove('hidden'); 
});

document.getElementById('referenceDetailsBackButton').addEventListener('click', function() {
    const referenceDetails = document.getElementById('referenceDetails');
    const identitySection = document.getElementById('identity');

    referenceDetails.classList.add('hidden');
    identitySection.classList.remove('hidden');
    showProfileContent(); 
});

document.addEventListener('DOMContentLoaded', function () {
    const showMoreButton = document.getElementById('showMoreButton');
    const backButton = document.getElementById('backButton');
    const mainContent = document.getElementById('mainContent');
    const identitySection = document.getElementById('identity');
    const bodyElement = document.getElementById('homepage');

    const contentelement = document.getElementById('content')

    showMoreButton.addEventListener('click', function () {
        bodyElement.style.backgroundImage = 'none';
        mainContent.classList.add('hidden'); 
        identitySection.classList.remove('hidden'); 
        contentelement.style.backgroundColor ='#d598f6';
    });

    backButton.addEventListener('click', function () {
        bodyElement.style.backgroundImage = 'url("pic/background1.jpg")'; 
        mainContent.classList.remove('hidden'); 
        identitySection.classList.add('hidden'); 
        contentelement.style.backgroundColor ='none';
    });
});
