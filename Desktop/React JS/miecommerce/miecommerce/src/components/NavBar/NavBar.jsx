import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import CartWidget from '../cartWidget/cartWidget';

const items = [
    {
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          Home
        </a>
      ),
      key: '0',
    },
    {
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          Productos
        </a>
      ),
      key: '1',
    },
    {
      type: 'divider',
    },
    {
      label: '3rd menu item（disabled）',
      key: '3',
      disabled: true,
    },
  ];

const NavBar = () => {
    return (
        <div>
            <p>Green To Go</p>
            <Dropdown menu={{ items }}>
                <a onClick={(e) => e.preventDefault()}>
                    <Space>
                        Hover me
                        <DownOutlined />
                    </Space>
                </a>
            </Dropdown>
            <CartWidget />
           
       </div>
    )
}
export default NavBar