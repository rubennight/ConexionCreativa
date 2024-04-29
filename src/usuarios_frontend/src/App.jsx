import { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  HomeOutlined,
  UserOutlined,
  CustomerServiceOutlined,
} from '@ant-design/icons';
import { createClient } from "@connect2ic/core"
import { InternetIdentity } from "@connect2ic/core/providers/internet-identity"
import { ConnectButton, ConnectDialog, Connect2ICProvider } from "@connect2ic/react"
import { Button, Layout, Menu, theme, Modal } from 'antd';
import Home from './pages/Home';
import Artistas from './pages/Artistas';
import * as usuarios_backend from "declarations/usuarios_backend"
import { useParams } from 'react-router-dom';
import Config from './pages/Config';

const { Header, Sider, Content } = Layout;

function App() {
  const [collapsed, setCollapsed] = useState(true);
  const [selectedMenu, setSelectedMenu] = useState('nav1'); 
  const [isModalVisible, setIsModalVisible] = useState(true);
  const { userId } = useParams();

  const height = window.innerHeight;

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleMenuClick = (menuKey) => {
    setSelectedMenu(menuKey);
  };

  const renderContent = () => {
    switch (selectedMenu) {
      case 'nav1':
        return <div><Home /></div>;
      case 'nav2':
        return <div><Artistas /></div>;
      case 'nav3':
        return <div><Config /></div>;
      default:
        return null;
    }
  };

  return (
    <Connect2ICProvider client={client}>
      <Layout style={{ minHeight: height }}>
        <Sider trigger={null} collapsible collapsed={collapsed} theme='light'>
          <Menu
            theme="light"
            mode="inline"
            defaultSelectedKeys={['nav1']}
            selectedKeys={[selectedMenu]}
            onClick={({ key }) => handleMenuClick(key)}
          >
            <Menu.Item key="nav1" icon={<HomeOutlined />}>
              Home
            </Menu.Item>
            <Menu.Item key="nav2" icon={<CustomerServiceOutlined />}>
              Mis Artistas
            </Menu.Item>
            <Menu.Item key="nav3" icon={<UserOutlined />}>
              Usuario
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ padding: 0, background: colorBgContainer }}>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: '16px',
                width: 64,
                height: 64,
              }}
            />
            
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {renderContent()}
          </Content>
        </Layout>
      </Layout>
      <Modal
        title="Conectar con Internet Identity"
        open={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <ConnectDialog />
        <ConnectButton />
      </Modal>
    </Connect2ICProvider>

  );
}

const client = createClient({
  canisters: {
    usuarios_backend,
  },
  providers: [
    new InternetIdentity({ providerUrl: "http://bkyz2-fmaaa-aaaaa-qaaaq-cai.localhost:4943/" })
  ],
  globalProviderConfig: {
    dev: true,
  },
});

export default App;