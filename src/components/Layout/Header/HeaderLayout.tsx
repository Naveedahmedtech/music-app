import { Breadcrumb, Layout, theme } from "antd";
import SideBar from './SideBar/SideBar';
import NavBar from "../../NavBar";


const { Header, Content, Sider } = Layout;






const HeaderLayout = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();



  return (
    <>
      <Layout style={{ backgroundColor: 'none' }}>
        <Header
          className="header-bg"
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
              padding: '10px'
            }}
            className="side-bg"
          >
            <SideBar />


          </Sider>
          <Layout style={{ padding: "0 24px 24px", marginLeft: 280, backgroundColor: 'white' }}>
            <Content
              style={{
                padding: 24,
                margin: 0,
                // background: colorBgContainer,
              }}
            >
              content
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </>
  );
};

export default HeaderLayout;
