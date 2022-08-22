const url = '/api/projects?populate[pictures][populate]=%2A&populate[tags][populate]=%2A'

export const actions = {
  async nuxtServerInit (context) {
    await this.$axios.get(url)
      .then((response) => {
        const projects = []
        response.data.data.forEach((item) => {
          const project = {
            id: item.id,
            title: item.attributes.title,
            year: item.attributes.year,
            description: item.attributes.description,
            spotlight: item.attributes.spotlight,
            pictures: [],
            tags: []
          }
          item.attributes.pictures.forEach((picture) => {
            project.pictures.push({
              id: picture.id,
              alt: picture.alt,
              source: picture.source.data.attributes.url
            })
          })
          item.attributes.tags.data.forEach((tag) => {
            project.tags.push({
              id: tag.id,
              name: tag.attributes.name
            })
          })
          projects.push(project)
        })
        context.commit('app/INIT_DATA', { projects })
      })
      .catch(() => {
        context.commit('app/DISPLAY_ERROR_MESSAGE', { message: 'Les données n\'ont pas pu êtres chargées.' })
      })
  }
}
