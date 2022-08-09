export const actions = {
  async nuxtServerInit (context) {
    await this.$axios.get('/api/projects?populate[pictures][populate]=%2A&populate[tags][populate]=%2A')
      .then((response) => {
        const projects = []
        response.data.data.forEach((item) => {
          const projectObject = {}
          projectObject.id = item.id
          projectObject.title = item.attributes.title
          projectObject.year = item.attributes.year
          projectObject.description = item.attributes.description
          projectObject.spotlight = item.attributes.spotlight
          projectObject.pictures = []
          item.attributes.pictures.forEach((picture) => {
            const pictureObject = {
              id: picture.id,
              alt: picture.alt,
              source: picture.source.data.attributes.url
            }
            projectObject.pictures.push(pictureObject)
          })
          projectObject.tags = []
          item.attributes.tags.data.forEach((tag) => {
            const tagObject = {
              id: tag.id,
              name: tag.attributes.name
            }
            projectObject.tags.push(tagObject)
          })
          projects.push(projectObject)
        })
        context.commit('projects/INIT_DATA', { data: projects })
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
