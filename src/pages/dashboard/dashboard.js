import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import Analytics from './analytics';
import Query from './query';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import Home from './home';
import Settings from './settings';
import Notfound from '../notfound';
import Comments from './comments';
import Photo from './photo';
import Users from './users';
import Todo from './todo';
import Album from './album';
import Post from './post';



const actions = [
  { icon: <FileCopyIcon />, name: 'Copy' },
  { icon: <SaveIcon />, name: 'Save' },
  { icon: <PrintIcon />, name: 'Print' },
  { icon: <ShareIcon />, name: 'Share' },
];


const drawerWidth = 240;

function Dashboard(props) {

  const location = useLocation();
  console.log(location);


  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };


  const pageLink = [{
    name : 'Home',
    url : '/dashboard/home',
  },{
    name : 'Analytics',
    url : '/dashboard/analytics',
  },{
    name : 'Query',
    url : '/dashboard/query',
  },{
    name : 'Settings',
    url : '/dashboard/settings',
  },{
    name : 'Comments',
    url : '/dashboard/comments',
  }
  ,{
    name : 'Photo',
    url : '/dashboard/photo',
  }
  ,{
    name : 'Users',
    url : '/dashboard/users',
  } ,{
    name : 'Todo',
    url : '/dashboard/todo',
  },{
    name : 'Album',
    url : '/dashboard/album',
  },{
    name : 'Post',
    url : '/dashboard/post',
  }]

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {pageLink.map((text, index) => (
          <Link to={text.url}>
          <ListItem key={text.name} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text.name} />
            </ListItemButton>
          </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
     
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
           Menu
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          color='danger'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Routes>
            <Route path="/home" element={<Home  data={location.state} />} />
            <Route path="/analytics" element={<Analytics  />} />
            <Route path="/query" element={< Query  />} />
            <Route path="/comments" element={< Comments  />} />
            <Route path="/photo" element={< Photo  />} />
            <Route path="/users" element={< Users  />} />
            <Route path="/todo" element={< Todo  />} />
            <Route path="/album" element={< Album  />} />
            <Route path="/post" element={< Post  />} />
            <Route path="/settings" element={< Settings  />} />            
            <Route path="*" element={<Notfound />} />    
        </Routes>

        <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
      </Box>
    </Box>

    </>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
