@@include("../../blocks/modules/header/header.js")
@@include("../../blocks/modules/pages/home/home-reviews/home-reviews.js")
@@include("../../blocks/modules/m-projects/m-projects.js")
@@include("../../blocks/modules/pages/projects/projects-projects/projects-projects.js")

@@include("../../blocks/modules/pages/project/project-quote/project-quote.js")
@@include("../../blocks/modules/pages/project/project-drawings/project-drawings.js")
@@include("../../blocks/modules/pages/project/project-details/project-details.js")

@@include("../../blocks/modules/pages/services/services-list/services-list.js")
@@include("../../blocks/modules/pages/services/services-process/services-process.js")

@@include("../../blocks/modules/pages/service/service-photos/service-photos.js")
@@include("../../blocks/modules/pages/service/service-process/service-process.js")

@@include("../../blocks/modules/modals/modals.js")


document.addEventListener('DOMContentLoaded', () => {
    headerControllInit();
    mProjects();
    homeReviews();
    pProjects();
    projectQuote();
    projectDrawings();
    projectDetails();
    servicesList();
    servicesProcess();
    servicePhotos();
    serviceProcess();
})