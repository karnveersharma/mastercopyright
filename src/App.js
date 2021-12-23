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
        <TabPanel value={value} index={1} className="tab-1">
          <img src="about-us-logo.png" width={200} />
          <p>
            master copyright provides N.O.C.(License) for commercial use of music under the Indian Copyright Act 1957.
          </p>
          <p>
            It works to prevent plagiarism of various film and album songs commercial use without N.O.C.(License).
          </p>
          <p>
            N.O.C.(License) is provided from our organization for Memory Chip Downloading, DJ System, 
          </p>
            <p>
              Event Show, Club, Hotel etc.
            </p>
          <p>
            <b>
              Territory -
            </b> Master Copyright is works Delhi, Madhya Pradesh, Uttar Pradesh, Chhattisgarh, Bihar, Rajasthan,
          </p>
          <p>
            Haryana, Uttarakhand, Punjab, Himachal Pradesh and Jharkhand.
          </p> 
          <p>
            <b>
              Send it Entries On Whatsapp Number 9425734148
            </b>
          </p>
          <p>
            <b>How to get a License (N.O.C.)</b> - To get the N.O.C.(License) from our organization, the applicant has to give his
          </p>
          <p>
            ID and related information such as shop name, shop address, person's name, GST number (if any) on the  
          </p>
          <p>
            given number of the organization and send a receipt for the amount sent through the organization's bank
          </p>
          <p>
            account / Google Pay. Then the person’s N.O.C.(License) is sent to the concerned person on his WhatsApp
          </p>
          <p>
            number or given mail id on behalf of the organization. If any Query to contact us on +91 8081254542(whatsapp)
          </p>
          <p>
            
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
      <Box sx={{ position: 'fixed', bottom: 0, textAlign: 'center', color: '#fff', width: '100%', padding: '20px 0', backgroundColor: '#1976d2'}}>
        Copyright © 2021 - 2022 Master Copyright. All Rights Reserved.
      </Box>
    </div>
  );
}

export default App;
