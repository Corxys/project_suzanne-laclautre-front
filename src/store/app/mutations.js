export default {
  INIT_DATA (state, payload) {
    state.projects = payload.projects
    state.errorMessage = ''
  },
  DISPLAY_ERROR_MESSAGE (state, payload) {
    state.errorMessage = payload.message
  },
  UPDATE_CURSOR_STUCK (state, payload) {
    state.cursorIsStuck = payload.bool
  },
  GET_PROJECTS_BY_CATEGORY (state, payload) {
    // if the user clicks on the same category as the previous one, the state is cleared
    if (state.activeCategory === payload.name) {
      state.projectsByCategory = []
      state.activeCategory = ''
    }
    // if he clicks on another category, we change it and fill the state
    else {
      state.activeCategory = payload.name
      const filteredProjects = []
      state.projects.forEach((project) => {
        project.tags.forEach((tag) => {
          if (tag.name === payload.name) {
            filteredProjects.push(project)
          }
        })
      })
      state.projectsByCategory = filteredProjects
    }
  },
  GET_PROJECT (state, payload) {
    state.project = payload.project
  }
}
