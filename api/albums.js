import client from './client'

export const fetchAllAlbums = () =>
  client.get('/albums').then(({ data }) => data)
