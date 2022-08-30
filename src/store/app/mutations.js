export default {
  INIT_DATA (state, payload) {
    state.projects = payload.projects
    state.errorMessage = ''
  },
  DISPLAY_ERROR_MESSAGE (state, payload) {
    state.errorMessage = payload.message
  },
  GET_PROJECTS_BY_CATEGORY (state, payload) {
    const filteredProjects = []
    state.projects.forEach((project) => {
      project.tags.forEach((tag) => {
        if (tag.name === payload.name) {
          filteredProjects.push(project)
        }
      })
    })
    state.projectsByCategory = filteredProjects
    if (!payload.redirect) {
      if (state.activeCategory === payload.name) {
        state.projectsByCategory = []
        state.activeCategory = ''
      } else {
        state.activeCategory = payload.name
      }
    } else {
      state.activeCategory = payload.name
    }
  },
  GET_PROJECT (state, payload) {
    state.project = payload.project
  }
}
