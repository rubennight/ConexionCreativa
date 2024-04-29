import { useState } from 'react';
import { Button, Descriptions, Form, Input, Modal } from 'antd';
import { useCanister } from '@connect2ic/react';

function Config(){
    const [usuarioExiste, setUsuarioExiste] = useState(false);
    const [usuario, setUsuario] = useState();
    const [usuariosBackend] = useCanister("usuarios_backend");

    const AddUser = () =>{
        const [isModalVisible, setIsModalVisible] = useState(true);
        
        const handleCancel = () => {
            setIsModalVisible(false);
        };
    
        const onFinish = async (values) => {
            const { nombre, apellidos, email, usuario, password } = values;
    
            try {
                const usuarioCreado = await usuariosBackend.createUser(nombre, apellidos, email, usuario, password);              
                setIsModalVisible(false);
                setUsuario(usuarioCreado);
                setUsuarioExiste(true);
                message.success('Usuario registrado correctamente');
            } catch (error) {
                message.error('Error al registrar usuario');
            }
        };  
    
        return(
            <Modal
                    title="Crea un nuevo usuario"
                    open={isModalVisible}
                    onCancel={handleCancel}
                    footer={null}
                >
                    <Form
                        name='login'
                        labelCol={{span: 8}}
                        wrapperCol={{ span: 16}}
                        initialValues={{ remember: true }}
                        autoComplete='off'
                        onFinish={onFinish}>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <Form.Item
                                label="Nombre"
                                name="nombre"
                                rules={[{ required: true, message: 'Por favor ingresa tu nombre'}]}>
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="Apellidos"
                                name="apellidos"
                                rules={[{ required: true, message: 'Por favor ingresa tus apellidos'}]}>
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="Email"
                                name="email"
                                rules={[{ required: true, message: 'Por favor ingresa tu correo electrónico'}]}>
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="Usuario"
                                name="usuario"
                                rules={[{ required: true, message: 'Por favor ingresa tu correo electrónico'}]}>
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="Contraseña"
                                name="password"
                                rules={[{ required: true, message: 'Por favor ingresa tu contraseña'}]}>
                                <Input.Password />
                            </Form.Item>
                            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                                <Button type="default" htmlType="submit" onClick={handleCancel}>
                                    Entrar
                                </Button>
                            </Form.Item>
                        </div>
                    </Form>              
                </Modal>
        )
    }

    const ConfigUsuario = () =>{
    
        const usuarioData = [
            {
                key: '1',
                label: 'Nombre',
                children: usuario.nombre
            },
            {
                key: '2',
                label: 'Apellidos',
                children: usuario.apellidos
            },
            {
                key: '3',
                label: 'Correo Electrónico',
                children: usuario.email
            },
            {
                key: '4',
                label: 'Nombre de usuario',
                children: usuario.usuario
            },
            {
                key: '5',
                label: 'Contraseña',
                children: usuario.password
            }
        ]
    
        return(
            <>
                <Descriptions
                title={usuario.usuario}
                layout='vertical'
                items={usuarioData} />
            </>
        );
    }    

    return(
        <>
            { usuarioExiste ? (
                <ConfigUsuario />
            ) : (
                <AddUser />
            )}
        </>
    )
}

export default Config;