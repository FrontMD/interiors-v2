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

@@include("../../blocks/modules/pages/about/about-awards/about-awards.js")
@@include("../../blocks/modules/pages/about/about-joinTeam/about-joinTeam.js")
@@include("../../blocks/modules/pages/about/about-whoWe/about-whoWe.js")

@@include("../../blocks/modules/pages/employee/employee-awards/employee-awards.js")
@@include("../../blocks/modules/pages/employee/employee-history/employee-history.js")

@@include("../../blocks/modules/pages/awards/awards-about/awards-about.js")
@@include("../../blocks/modules/pages/awards/awards-media/awards-media.js")

@@include("../../blocks/modules/pages/blog/blog-hero/blog-hero.js")

@@include("../../blocks/modules/pages/article/article-hero/article-hero.js")

@@include("../../blocks/modules/pages/contacts/contacts-map/contacts-map.js")

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
    aboutAwardsSlider();
    employeeAwardsSlider();
    awardsMediaSlider();
    blogHeroSwier();
    loadYandexMaps();
})