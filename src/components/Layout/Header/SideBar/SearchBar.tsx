import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown } from 'antd';
import { Space } from 'antd';

import SearchPlaylist from './SearchPlaylist';


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

const SearchBar = () => {
  return (
      <>
          <div className="flex items-center gap-x-3 my-5">
              <SearchPlaylist />
              <Dropdown menu={{ items }} trigger={['click']}>
                  <a onClick={(e) => e.preventDefault()}>
                      <Space>
                          Recent
                          <DownOutlined />
                      </Space>
                  </a>
              </Dropdown>
          </div>
      </>
  )
}

export default SearchBar
