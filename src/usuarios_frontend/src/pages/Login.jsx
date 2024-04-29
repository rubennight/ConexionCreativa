import { Button, Carousel, Divider, Form, Input, Layout, Space } from 'antd';
import { useNavigate } from 'react-router-dom'
import React from 'react'

function Login(){
    const navigate = useNavigate();
    const width = window.innerWidth;
    const height = window.innerHeight;

    const entrarButtonOnClick = () =>{
        navigate('/app');
    }

    return(
        <div style={{ display: 'flex', height: height }}>
            <img src='https://i.imgur.com/y38tu5w.jpeg' alt="music" style={{ flex: 1, objectFit: 'cover', width: '100%', maxHeight: '100vh' }} />
            <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{margin: 40}}>
                    <h1>Comparte tu gusto con el mundo</h1>
                    <h2>Haz tu playlist</h2>
                    <h3>Conoce artistas emergentes</h3>
                    <h3>Conoce a otros curadores</h3>
                </div>
                <div style={{ margin: 40}}>
                    <Button type="default" htmlType="submit" onClick={entrarButtonOnClick}>
                        Entrar
                    </Button>                        
                </div>
            </div>
        </div>
    );
}

export default Login;