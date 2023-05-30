import React from 'react';
import { Card, Typography } from 'antd';

const PlaylistCard: React.FC = () => (
    <div>
        <Card
            id="padding-0"
            style={{
                width: '100%',
                height: '80px'
            }}
        >
            <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                style={{ width: '100px', height: '80px', objectFit: 'cover' }}
            />
            <div className="ms-2">
                <Typography.Title level={5}>Song name</Typography.Title>
                <Typography.Text>Playlist: Playlist Name</Typography.Text>
            </div>
        </Card>
    </div>
);

export default PlaylistCard;
