const getGifs = async (category: string) => {
        
    const apiKey = '3Hcm3hS5y2Ht4xIa8ficDE6dI8UH5Fcn'
    const limit = 20

    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=${limit}`

    const resp = await fetch(url)

    const { data } = await resp.json()
    
    const gifs = data.map((img: any) => ({
        id: img.id,
        title: img.title,
        url: img.images.fixed_height.url
    }))
    
    return gifs
}

export default getGifs