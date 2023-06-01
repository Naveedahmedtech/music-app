import { Col, Typography } from 'antd';


const MadeForYouGallery = () => {
  return (
      <>
          <Col className='my-5 side-bg' xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 6 }}
      >
          <div className=''>
              <img src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                      alt="img-blur-shadow" />
                  <div style={{padding: '10px'}}>
                      
              <Typography.Title level={5} className='light-color margin-zero' style={{margin: '0'}}>Hello song wpd sdf </Typography.Title>
                  <Typography className='light-color'>Hello song wpd sdf </Typography>
                  </div>
          </div>
          </Col>
      </>
  )
}

export default MadeForYouGallery
