import { Layout, theme } from "antd";
import SideBar from './SideBar/SideBar';
import NavBar from "../../NavBar";
import { Outlet } from "react-router-dom";

const { Header, Content, Sider } = Layout;

const HeaderLayout = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <>
      <Layout style={{ backgroundColor: 'none' }}>
        <Header
          className="header-bg margin-zero width-100"
          style={{
            position: 'sticky',
            top: 0,
            zIndex: 1,
            width: 'calc(100% - 280px)',
            display: 'flex',
            alignItems: 'center',
            marginLeft: '280px',
          }}

        >
          <NavBar />
        </Header>
        <Layout>
          <Sider width={280}
            style={{
              overflow: 'auto',
              height: '100vh',
              position: 'fixed',
              left: 0,
              top: 0,
              bottom: 0,
              padding: '10px',
            }}
            className="side-bg side-none"
          >
            <SideBar />
          </Sider>
          <Layout className="margin-zero" style={{ marginLeft: 280, backgroundColor: '#1f2937' }}>
            <Content
              style={{
                padding: '20px'
              }}
            >
              <Outlet />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </>
  );
};

export default HeaderLayout;
