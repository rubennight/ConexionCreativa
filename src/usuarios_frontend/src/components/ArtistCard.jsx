import React from 'react'
import CorrectedIframe from './CorrectedIframe';
import { Button, Descriptions, message } from 'antd'
import { useCanister, useConnect } from '@connect2ic/react';

const ArtistCard = ({id, url, nombre, descripcion, genero, resBreve, calificacion}) => {
    const width = window.innerWidth;
    const [usuariosBackend] = useCanister("usuarios_backend");

    const deleteArtist = async () => {
        try{
            await usuariosBackend.deleteArtist(id);   
            message.success('Artista borrado correctamente'); 
        } catch (error) {
            message.error('Error al borrar el artista');
        }
    }

    

    const items = [
        {
            key: '1',
            label: 'Descripción',
            children: descripcion
        },
        {
            key: '2',
            label: 'Género',
            children: genero
        },
        {
            key: '3',
            label: 'Calificación',
            children: calificacion
        },
        {
            key: '4',
            label: 'Reseña breve',
            children: resBreve
        },
    ]

    const cardStyle ={
        width: width * 0.4,
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
        borderRadius: 8,
        overflow: 'hidden',
        padding: 20,
        backgroundColor: '#f5f5f5'
    }

    return(
        <div style={cardStyle}>
            <CorrectedIframe src={url} />
            <Descriptions 
                title={nombre} 
                layout='vertical' 
                items={items} 
                bordered/>
            <br />
            <br />    
            <div style={{ justifyContent: 'center'}}>
                <Button onClick={() => deleteArtist(id)}>Borrar Registro</Button>                
            </div>

        </div>
    )
}

export default ArtistCard;