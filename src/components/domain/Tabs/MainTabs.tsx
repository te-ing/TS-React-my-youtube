import React, { SyntheticEvent, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import {
  Search as SearchIcon,
  Subscriptions as SubscriptionsIcon,
  Favorite as FavoriteIcon,
  CheckCircle as CheckCircleIcon,
} from "@mui/icons-material";
import SearchTab from "./Search/SearchTab";
import LikeVideoTab from "./Like/LikeVideoTab";
import NotWatchTab from "./NotWatch/NotWatchTab";
import WatchTab from "./Watch/WatchTab";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} id={`${index}`} {...other}>
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
    <Box sx={{ width: "100%", mb: "10px" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange} variant="scrollable">
          <Tab
            icon={<SearchIcon />}
            iconPosition="start"
            label="검색"
            {...a11yProps(0)}
            data-testid="searchTab"
          />
          <Tab
            icon={<SubscriptionsIcon />}
            iconPosition="start"
            label="볼 영상"
            {...a11yProps(1)}
            data-testid="notWatchTab"
          />
          <Tab
            icon={<CheckCircleIcon />}
            iconPosition="start"
            label="본 영상"
            {...a11yProps(2)}
            data-testid="watchTab"
          />
          <Tab
            icon={<FavoriteIcon />}
            iconPosition="start"
            label="좋아요 한 영상"
            {...a11yProps(3)}
            data-testid="likeVideoTab"
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <SearchTab />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <NotWatchTab />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <WatchTab />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <LikeVideoTab />
      </TabPanel>
    </Box>
  );
}
