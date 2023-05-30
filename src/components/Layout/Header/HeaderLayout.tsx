import { Typography } from 'antd';
import { Breadcrumb, Layout, theme } from "antd";
import { NavLink } from "react-router-dom";
import { GiBookshelf } from "react-icons/gi";
import { PlusCircleOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown } from 'antd';
import { Badge } from 'antd';
import Search from './Search';
import PlaylistCard from './PlaylistCard';
import { Input, Space } from 'antd';


const { Header, Content, Sider } = Layout;


// drop down
const items: MenuProps['items'] = [
  {
    label: <p>Recently Added</p>,
    key: '0',
  },
  {
    label: <p>New</p>,
    key: '1',
  }
];



const HeaderLayout = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  
  const { Title } = Typography;
  const { Search } = Input;
  const onSearch = (value: string) => console.log(value);
  
  return (
    <Layout >
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
        <div className="demo-logo pt-2" />
        <div className="flex justify-between items-center">
          <div>
          <NavLink to="/">
            <Title level={5}>Home</Title>
          </NavLink>
          </div>
          <div> 
          <Search
            placeholder="input search text"
            allowClear
            enterButton="Search"
            size="large"
            onSearch={onSearch}
          />
          </div>
        </div>
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
          <div className="flex justify-between">
            <div>
              <NavLink to="/" className='flex gap-x-2'>
                <GiBookshelf className="icon-size" />
                <Title level={5}>Library</Title>
              </NavLink>
            </div>
            <div>
              <PlusCircleOutlined className="mr-3 icon-size cursor-pointer" />
              <ArrowRightOutlined className="icon-size cursor-pointer" />
            </div>
          </div>
          <Badge
            className="mt-5"
            count="PlayList"
            style={{
              backgroundColor: 'rgb(165 180 252)', color: '#000', fontSize: '14px', padding: '3px 10px', height: 'auto',
              borderColor: 'rgb(165 180 252)', outline: 'none'
            }}
          />
          <div className="flex items-center gap-x-3 my-5">
            <Search />
            <Dropdown menu={{ items }} trigger={['click']}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  Recent
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
          </div>
          <div>
            <PlaylistCard />
          </div>
        </Sider>
        <Layout style={{ padding: "0 24px 24px", marginLeft: 280 }}

        >
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            style={{
              padding: 24,
              margin: 0,
              background: colorBgContainer,
            }}
          >
            content
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default HeaderLayout;
