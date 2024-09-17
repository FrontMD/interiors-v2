function pProjects() {
    const pProjectsEl = document.querySelector('[data-js="pProjects"]')

    if(!pProjectsEl) return

    pProjectsAnimationMarkup()

}

/* разметка проектов */
function pProjectsAnimationMarkup() {
    const projectsAnim = document.querySelectorAll('[data-anim="projectAnim"]')

    if(projectsAnim.length < 1) return

    projectsAnim.forEach(projectAnim => {

        let project = projectAnim.querySelector('[data-js="projectCard"]')

        let projectHeight = project.offsetHeight
        let projectWidth = project.offsetWidth

        projectAnim.style.height = projectHeight + "px"
        projectAnim.style.width = projectWidth + "px"

    })

}