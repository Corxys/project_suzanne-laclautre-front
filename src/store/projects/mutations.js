export default {
  INIT_DATA (state, payload) {
    state.projects = payload.data
    state.projectsSpotlight = state.projects.filter(project => project.spotlight === true)
  },
  GET_PROJECTS_BY_CATEGORIES (state, payload) {
    const filteredProjects = []
    // if the user clicks on the same category as the previous one, the state is cleared
    if (state.activeCategory === payload.type) {
      state.activeProjects = []
      state.activeCategory = ''
    }
    // if he clicks on another category, we change it and fill the state
    else {
      state.activeCategory = payload.type
      const filteredProjects = []
      state.projects.forEach((project) => {
        project.tags.forEach((tag) => {
          if (tag.name === payload.type) {
            filteredProjects.push(project)
          }
        })
      })
      state.activeProjects = filteredProjects
    }
  },
  GET_PROJECT (state, payload) {
    state.project = payload.project
  }
}
