import React, { SyntheticEvent, useState} from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import {
  Search as SearchIcon,
  Subscriptions as SubscriptionsIcon,
  Favorite as FavoriteIcon,
  CheckCircle as CheckCircleIcon
} from "@mui/icons-material";
import SearchTab from './tabs/SearchTab';
import StoredVideoTab from './tabs/StoredVideoTab';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Box>{children}</Box>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `${index}`,
  };
}

export default function MainTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (e: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', mb: "10px"}}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', }}>
        <Tabs value={value} onChange={handleChange} variant="scrollable">
          <Tab icon={<SearchIcon />} iconPosition="start" label="검색" {...a11yProps(0)} />
          <Tab icon={<SubscriptionsIcon />} iconPosition="start" label="볼 영상" {...a11yProps(1)} />
          <Tab icon={<CheckCircleIcon />} iconPosition="start" label="본 영상" {...a11yProps(2)} />
          <Tab icon={<FavoriteIcon />} iconPosition="start" label="좋아요 한 영상" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <SearchTab />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <StoredVideoTab />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <StoredVideoTab tab="watch" />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <StoredVideoTab tab="like" />
      </TabPanel>
    </Box>
  );
}