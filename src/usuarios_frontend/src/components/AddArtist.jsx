import { useCanister } from '@connect2ic/react';
import { Button, Form, Input, Select, message } from 'antd';
import React, { useRef } from 'react';

const { Option } = Select;

const AddArtist = () =>{
    
    const width = window.innerWidth;
    const height = window.innerHeight;
    const [usuarios_backend] = useCanister("usuarios_backend");

    const formRef = useRef(null);

    const onFinish = async (values) => {
        const { nombreArtista, descripcionArtista, generoMusical, resBreve, calificacion, urlSpotify } = values;

        try {
            await usuarios_backend.createArtist(nombreArtista, descripcionArtista, generoMusical, resBreve, calificacion, urlSpotify);
            
            formRef.current.resetFields();
            
            message.success('Artista agregado correctamente');
        } catch (error) {
            message.error('Error al agregar el artista');
        }
    };

    return(
        <Form
            name='AddArtist'
            autoComplete='off'
            ref={formRef}
            onFinish={onFinish}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <Form.Item
                        label='Nombre del Artista'
                        name='nombreArtista'   
                        style={{ width: width*0.35 }}    
                        rules={[{ required: true, message: '¡Necesitamos el nombre del artista!'}]}>
                            <Input />
                    </Form.Item>
                    <Form.Item
                        label='Descripción del artista'
                        name='descripcionArtista'   
                        style={{ width: width*0.35 }}    
                        rules={[{ required: true, message: '¡Necesitamos el nombre del artista!'}]}>
                            <Input />
                    </Form.Item>
                    <Form.Item
                        label='Género musical'
                        name='generoMusical'
                        style={{ width: width*0.35 }}
                        rules={[{ required: true, message: '¡Necesitamos el género musical!'}]}>
                            <Input />
                    </Form.Item>
                    <Form.Item
                        label='Reseña breve'
                        name='resBreve'
                        style={{ width: width*0.35 }}
                        rules={[{ required: true, message: '¡Necesitamos una reseña breve!'}]}>
                            <Input />
                    </Form.Item>
                    <Form.Item
                        label='Calificación'
                        name='calificacion'
                        style={{ width: width*0.35 }}
                        rules={[{ required: true, message: '¡Necesitamos una calificación!'}]}>
                            <Select
                                placeholder="Escoge una calificación para que los demás usuarios la vean">
                                    <Option value={1}>¡Meh!</Option>
                                    <Option value={2}>No es mi onda</Option>
                                    <Option value={3}>Dale chance</Option>
                                    <Option value={4}>¡Que buen rollo!</Option>
                                    <Option value={5}>¡Lo mejor que he escuchado!</Option>
                            </Select>
                    </Form.Item>
                    <Form.Item
                        label='URL de Spotify'
                        name='urlSpotify'
                        style={{ width: width*0.35 }}
                        rules={[{ required: true, message: '¡Necesitamos un URL!'}]}>
                            <Input />
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="default" htmlType="submit">
                            Agregar Artista
                        </Button>
                    </Form.Item>
                </div>
        </Form>
    );
}

export default AddArtist;