import { Col } from 'antd';

const MorningGrid = () => {
    return (
        <>
            <Col className='my-5 side-bg' xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }}
                >
                <div className='flex items-center'>
                    <img src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                        style={{ marginRight: '15px' }}
                        alt="img-blur-shadow" width={130} />
                    <p>Hello song wpd sdf </p>
                </div>
            </Col>
        </>
    )
}

export default MorningGrid
