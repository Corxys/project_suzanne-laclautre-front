export const actions = {
  async nuxtServerInit (context) {
    await this.$axios.get('/api/projets?populate=%2A')
      .then((response) => {
        context.commit('projects/INIT_DATA', { data: response.data.data })
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
