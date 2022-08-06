import slugify from 'slugify'

export const slugifyTitle = (title) => {
  const modifiedTitle = title.replace('_', '-').replace('&', '')
  return (slugify(modifiedTitle, {
    lower: true
  }))
}
