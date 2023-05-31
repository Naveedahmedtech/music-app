import {
    List,
    ListItem,
    ListItemPrefix,
    Avatar,
    Card,
} from "@material-tailwind/react";
import { Typography } from 'antd';



const Playlist: React.FC = () => {
    return (
        <Card className="w-29">
            <List style={{ display: 'flex', flexDirection: 'column' }}>
                <ListItem className="mt-5">
                    <ListItemPrefix>
                        <Avatar width={80} variant="circular" alt="candice" src="https://plus.unsplash.com/premium_photo-1674939148088-d71acc1541ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60" />
                    </ListItemPrefix>
                    <div style={{ marginLeft: '20px' }}>
                        <Typography.Title level={5} style={{ margin: '0' }}>
                            Song Name
                        </Typography.Title>
                        <Typography.Text >
                            Playlist Name
                        </Typography.Text>
                    </div>
                </ListItem>
                <ListItem className="mt-5">
                    <ListItemPrefix>
                        <Avatar width={80} variant="circular" alt="candice" src="https://plus.unsplash.com/premium_photo-1674939148088-d71acc1541ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60" />
                    </ListItemPrefix>
                    <div style={{ marginLeft: '20px' }}>
                        <Typography.Title level={5} style={{ margin: '0' }}>
                            Song Name
                        </Typography.Title>
                        <Typography.Text >
                            Playlist Name
                        </Typography.Text>
                    </div>
                </ListItem>
                <ListItem className="mt-5">
                    <ListItemPrefix>
                        <Avatar width={80} variant="circular" alt="candice" src="https://plus.unsplash.com/premium_photo-1674939148088-d71acc1541ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60" />
                    </ListItemPrefix>
                    <div style={{ marginLeft: '20px' }}>
                        <Typography.Title level={5} style={{ margin: '0' }}>
                            Song Name
                        </Typography.Title>
                        <Typography.Text >
                            Playlist Name
                        </Typography.Text>
                    </div>
                </ListItem>
                <ListItem className="mt-5">
                    <ListItemPrefix>
                        <Avatar width={80} variant="circular" alt="candice" src="https://plus.unsplash.com/premium_photo-1674939148088-d71acc1541ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60" />
                    </ListItemPrefix>
                    <div style={{ marginLeft: '20px' }}>
                        <Typography.Title level={5} style={{ margin: '0' }}>
                            Song Name
                        </Typography.Title>
                        <Typography.Text >
                            Playlist Name
                        </Typography.Text>
                    </div>
                </ListItem>
                <ListItem className="mt-5">
                    <ListItemPrefix>
                        <Avatar width={80} variant="circular" alt="candice" src="https://plus.unsplash.com/premium_photo-1674939148088-d71acc1541ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60" />
                    </ListItemPrefix>
                    <div style={{ marginLeft: '20px' }}>
                        <Typography.Title level={5} style={{ margin: '0' }}>
                            Song Name
                        </Typography.Title>
                        <Typography.Text >
                            Playlist Name
                        </Typography.Text>
                    </div>
                </ListItem>
            </List>
        </Card>
    );
}


export default Playlist;
