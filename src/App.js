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
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="menu" textColor="secondary" indicatorColor="secondary">
            <Tab label="Home" icon={<HomeIcon />} iconPosition="start" {...a11yProps(0)} />
            <Tab label="About Us" icon={<GroupWorkIcon />} iconPosition="start" {...a11yProps(1)} />
            <Tab label="Contact" icon={<PhoneIcon />} iconPosition="start" {...a11yProps(2)} />
            <Tab label="News" icon={<NewspaperIcon />} iconPosition="start" {...a11yProps(3)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>

        </TabPanel>
        <TabPanel value={value} index={1}>
          <p>
            Master Copyright-The Leading Brand In Indian Entertainment Now Bring You All The Updates
          </p>  
          <p>
            On Yours Our Latest And Blockmaster Hits Only On Our OFficial Youtube Page Master Copyright Lucknow.
          </p>  
          <p>
            Stay Tuned!
          </p>
          <p>
            Master Copyright Firms work to providing "NOC" for music's commercial purpose under the Indian
          </p>
          <p>
            copy right act 1957  and it is also work to stop the piracy  of various film andalbum song,
          </p>
          <p>
            commercial use without "NOC".
          </p> 
          <p>
            CD,VCD,DVD,MP3,Memory chip,Downloading D.J.System.Event Show Club, Hotels are also in its working
          </p>
          <p>
            criteria. Master Copyright is working for films producers.The Firm works Delhi, Madhya Pradesh,
          </p>
          <p>
            Uttar Pradesh, Chhattisgarh, Bihar, Rajasthan, Haryana, Uttarakhand, Punjab, Himachal Pradesh and
          </p>
          <p>
            Jharkhand.
          </p>

          <p>
            Upcoming Artist Here is Your Chance To Make It Big With us, Send it Entries On Whatsapp Number 9425734148
          </p>          
        </TabPanel>
        <TabPanel value={value} index={2}>
          <p>
            ADDRESS
          </p>
          <p>
            Head Office:
          </p>
          <p>
            7/738, Jankipuram Vistar,
          </p>
          <p>
            Lucknow, UTTAR PRADESH, India
          </p>
          <p>
            Phone1: +91 94257-34148
          </p>
          <p>
            Phone2: +91 74152-63331
          </p>
        </TabPanel>
        <TabPanel value={value} index={3}>

        </TabPanel>
      </Box>
    </div>
  );
}

export default App;
