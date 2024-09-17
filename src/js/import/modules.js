@@include("../../blocks/modules/header/header.js")
@@include("../../blocks/modules/pages/home/home-reviews/home-reviews.js")
@@include("../../blocks/modules/m-projects/m-projects.js")
@@include("../../blocks/modules/pages/projects/projects-projects/projects-projects.js")
@@include("../../blocks/modules/pages/project/project-quote/project-quote.js")
@@include("../../blocks/modules/pages/project/project-drawings/project-drawings.js")
@@include("../../blocks/modules/modals/modals.js")


document.addEventListener('DOMContentLoaded', () => {
    headerControllInit();
    mProjects();
    homeReviews();
    pProjects();
    projectQuote();
    projectDrawings();
})