import { NavLink } from "react-router-dom";
import { Typography, Input } from "antd";

const NavBar = () => {
    const { Search } = Input;
    const onSearch = (value: string) => console.log(value);
  return (
      <>
          <div className="demo-logo pt-2" />
          <div className="flex justify-between items-center" style={{ width: '100%' }}>
              <div>
                  <NavLink to="/">
                      <Typography.Title level={5}>Home</Typography.Title>
                  </NavLink>
              </div>
              <div
                  style={{ marginTop: '20px' }}>
                  <Search
                      placeholder="input search text"
                      allowClear
                      enterButton="Search"
                      size="large"
                      onSearch={onSearch}
                  />
              </div>
          </div>
      </>
  )
}

export default NavBar
