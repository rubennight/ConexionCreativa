import React, { useState, useEffect } from 'react'; 
import ArtistCard from '../components/ArtistCard';
import { useCanister, useConnect } from '@connect2ic/react';

function Artistas() {
    const [usuariosBackend] = useCanister("usuarios_backend");
    const [artistas, setArtistas] = useState([]);

    const obtenerArtistas = async () => {
        try {
            var artistsRes = await usuariosBackend.readArtists();
            setArtistas(artistsRes);
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        obtenerArtistas();
    }, []);

    return (
        <div style={{ display: 'flex', margin: 20}}>
            {artistas.map((artista) => (
                <ArtistCard
                    key={artista.id} 
                    id={artista.id}
                    nombre={artista.nombre}
                    descripcion={artista.descripcion}
                    genero={artista.genero}
                    resBreve={artista.resBreve}
                    calificacion={artista.calificacion}
                    url={artista.url}
                />
            ))}
        </div>
    );
}

export default Artistas;
