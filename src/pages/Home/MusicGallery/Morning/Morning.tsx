import MorningGrid from '../MorningGrid';
import MadeForYou from '../MadeForYou/MadeForYou';
import { Row, Typography } from 'antd';

const Morning = () => {
    return (
        <>
            <Typography.Title level={2} className='light-color'>Good Morning</Typography.Title>
            <Row>
                <MorningGrid />
                <MorningGrid />
                <MorningGrid />
                <MorningGrid />
                <MorningGrid />
                <MorningGrid />
            </Row>
        </>
    )
}

export default Morning
