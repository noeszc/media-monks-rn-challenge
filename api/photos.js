import client from './client'

export const fetchAllPhotos = () =>
  client.get('/photos').then(({ data }) => data)
