import './App.css';
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import GroupWorkIcon from '@mui/icons-material/GroupWork';
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import { AppBar } from '@mui/material';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function App() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="App">
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', bgColor: 'background.paper' }}>
          <AppBar position="static">
            <Tabs variant="scrollable" scrollButtons="auto" value={value} onChange={handleChange} aria-label="menu" textColor="inherit" indicatorColor="secondary">
              <Tab label="Home" icon={<HomeIcon />} iconPosition="start" {...a11yProps(0)} />
              <Tab label="About Us" icon={<GroupWorkIcon />} iconPosition="start" {...a11yProps(1)} />
              <Tab label="Contact" icon={<PhoneIcon />} iconPosition="start" {...a11yProps(2)} />
              <Tab label="News" icon={<NewspaperIcon />} iconPosition="start" {...a11yProps(3)} />
            </Tabs>
          </AppBar>
        </Box>
        <TabPanel value={value} index={0}>
          <h1>
            Welcome To Master Copyright
          </h1>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <p>
            <h3>Master Copyright - </h3>
            The Leading Brand In Indian Entertainment Now Bring You All The Updates
          </p>
          <p>
            On Our Latest And Blockbuster Hits Only On Our Official Youtube Page Master Copyright Lucknow.
          </p>
          <p>
            <b style={{ color: '#ff0000' }}>
              Stay Tuned!
            </b>
          </p>
          <p>
            Master Copyright Firms work to providing "NOC" for music's commercial purpose under the Indian
          </p>
          <p>
            copyright act 1957 and it is also works to stop the piracy of various film and album songs,
          </p>
          <p>
            commercial use without "NOC".
          </p>
          <p>
            CD, VCD, DVD, MP3, Memory chip, Downloading, D.J.System, Event Show, Clubs, Hotels are also in its working
          </p>
          <p>
            criteria. Master Copyright is working for film producers. This Firm works Delhi, Madhya Pradesh,
          </p>
          <p>
            Uttar Pradesh, Chhattisgarh, Bihar, Rajasthan, Haryana, Uttarakhand, Punjab, Himachal Pradesh and Jharkhand.
          </p>
          <p>
            Upcoming Artist Here is Your Chance To Make It Big With Us,
          </p>
          <p>
            <b>
              Send it Entries On Whatsapp Number 9425734148
            </b>
          </p>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <p>
            <b>
              ADDRESS
            </b>
          </p>
          <p>
            <b>
              Head Office:
                </b>
          </p>
          <p>
            7/738, Jankipuram Vistar,
              </p>
          <p>
            Lucknow, UTTAR PRADESH, India
              </p>
          <p>
            <b>Phone1: </b> +91 94257-34148
              </p>
          <p>
            <b>Phone2: </b> +91 74152-63331
              </p>
        </TabPanel>
        <TabPanel value={value} index={3}>

        </TabPanel>
      </Box>
      <Box sx={{ position: 'absolute', bottom: 0, textAlign: 'center', color: '#fff', width: '100%', padding: '20px 0', backgroundColor: '#1976d2'}}>
        Copyright © 2021 - 2022 Master Copyright. All Rights Reserved.
      </Box>
    </div>
  );
}

export default App;
