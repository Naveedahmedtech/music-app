import MadeForYouGallery from './MadeForYouGallery';
import { Row, Typography } from 'antd';

const MadeForYou = () => {
    return (
        <>
            <Typography.Title level={2} className='light-color'>Made For You</Typography.Title>
            <Row>
                <MadeForYouGallery />
                <MadeForYouGallery />
                <MadeForYouGallery />
                <MadeForYouGallery />
                <MadeForYouGallery />
                <MadeForYouGallery />
                <MadeForYouGallery />
                <MadeForYouGallery />
            </Row>
        </>
    )
}


export default MadeForYou
