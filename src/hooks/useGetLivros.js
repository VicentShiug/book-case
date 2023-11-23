export const getLivros = async ({ user, setLivros, type }) => {
  //  0 - favoritos
  //  4 - lidos
  //  2 - para ler
  //  3 - lendo
  const urlVolume = `https://www.googleapis.com/books/v1/mylibrary/bookshelves/${type}/volumes`;
  // const accessToken = "ya29.a0AfB_byDcL6PG8csFgheIqP_HUPifp1v2GC6uJ-4wKl6DRPZwRbhctdD_MzvuwqyUJ3kWWcTdp7UJR7h_59g6ZfCjYo5V9XdpnpqrP5d2O8IZtCVnynAvaVwPzF1oMRYsxGy8hKxHoRTS65DEbea7CqrS0YrTLPZZ1rcaCgYKAVESARESFQHGX2MiJkojf95vaoyTRPBvNKzJLA0170"
  if (!user || !user.accessToken
    // || !accessToken
  ) {
    console.error("Token de acesso não encontrado")
    return
  }


  const response = await fetch(urlVolume, {
    headers: {
      'Authorization': `Bearer ${user.accessToken}`
      // 'Authorization': `Bearer ${accessToken}`
    }
  })
  const data = await response.json()
  setLivros(data.items)
  console.log(data)
}