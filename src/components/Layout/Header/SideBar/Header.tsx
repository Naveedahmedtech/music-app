import { NavLink } from "react-router-dom"
import { GiBookshelf } from "react-icons/gi"
import { Typography } from "antd"
import { PlusCircleOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { Badge } from 'antd';


const Header = () => {
  return (
      <>
          <div className="flex justify-between">
              <div>
                  <NavLink to="/" className='flex gap-x-2'>
                      <GiBookshelf className="icon-size" />
                      <Typography.Title level={5} className="light-color">Library</Typography.Title>
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
                  backgroundColor: '#1f2937', color: '#d1d5db', fontSize: '14px', padding: '3px 10px', height: 'auto',
                  borderColor: '#1f2937', outline: 'none'
              }}
          />
      </>
  )
}

export default Header
