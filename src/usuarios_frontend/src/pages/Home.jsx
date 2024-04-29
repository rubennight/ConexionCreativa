import React from 'react'
import AddArtist from '../components/AddArtist';
import { Divider } from 'antd';
import ArtistCard from '../components/ArtistCard';

function Home(){
    const width = window.innerWidth;
    const height = window.innerHeight;

    return(
        <div>
            <h1 style={{ textAlign: 'center' }}>Bienvenido a este viaje de descubrimiento musical e inspiracional</h1>
            <br />
            <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'space-evenly' }}>
                <div style={{ width: width * 0.35 }}>
                    <h2>Primero iniciaremos con unos datos sencillos del artista ¡queremos que lo conozca el mundo!</h2>
                    <br />
                    <h2>No olvides su género musical y dar una reseña breve y concisa sobre su arte.</h2>
                    <br />
                    <h2>¡No olvides tampoco dejar una calificación para los que te siguen!</h2>
                    <br />
                    <h2>Por último necesitaremos una URL de su contenido en Spotify siguiendo las instrucciones:</h2>
                    <img src='https://i.imgur.com/kEmhRMq.png' />
                    <br />
                    <img src='https://i.imgur.com/ZF253mQ.png' />
                </div>

                <Divider type='vertical' style={{height: height * 1.5 }} />
                <div>
                    <h2 style={{ textAlign: 'center'}}>¡Agrega un Artista!</h2>
                    <br />
                    <br />
                    <AddArtist />  
                    <br />
                    <br />
                    <h2 style={{ textAlign: 'center'}}>¡El resultado debería ser así!</h2>
                    <br />
                    <br />
                    <ArtistCard
                        url={'https://open.spotify.com/embed/track/2kAHKutetqRPRtcIpYGyFQ?utm_source=generator'}
                        nombre={'Pimp Flaco'}
                        descripcion={'Artista español, activo desde el 2014, versátil con cualquier género'}
                        genero={'Trap, Reguetón e Indie'}
                        resBreve={'Pimp Flaco, un artista español que ha estado activo en la escena musical desde 2014, se destaca por su versatilidad en géneros como el trap, el reguetón e incluso el indie. Su música única y sus letras sinceras lo han convertido en un referente en la industria. Con una habilidad innata para transmitir emociones a través de sus canciones, Pimp Flaco sigue conquistando corazones y expandiendo su influencia en la música contemporánea.'}
                        calificacion={5}
                    />
                    </div>
            </div>
        </div>
    )
}

export default Home;