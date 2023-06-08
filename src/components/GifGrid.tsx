import GifItem from "./GifItem"
import { useFetchGifs } from "../hooks/useFetchGifs"

const GifGrid = ({ category }: {category: string}) => {

    const {images, isLoading} = useFetchGifs(category)
    
    console.log(isLoading);
    

    return (
        <>
            <h3>{category}</h3>
            <div className="card-grid">
                {
                    (isLoading) ? <h1>Cargando</h1> : 
                    images.map(img => (
                        <GifItem key={img.id} gif={img} />
                    ))
                }
            </div>
        </>
    )
}


export default GifGrid