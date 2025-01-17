import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import JobList from "./JobList";
import Applicants from "./Applicants";
import {Grid} from "@material-ui/core";
import CompanyManagement from "../CompanyManagement";

function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    {children}
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        height: 'auto',
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
    },
}));

export default function VerticalTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <Grid
                item
                lg={2}
                md={2}
                xl={2}
                xs={2}
            >
                <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    value={value}
                    onChange={handleChange}
                    aria-label="Vertical tabs example"
                    className={classes.tabs}
                >
                    <Tab label="Bài đăng" {...a11yProps(0)} />
                    <Tab label="Hồ sơ ứng tuyển" {...a11yProps(1)} />
                    {/* <Tab label="Quản lý nhân viên" {...a11yProps(2)} /> */}
                </Tabs>
            </Grid>
            <Grid
                item
                lg={10}
                md={10}
                xl={10}
                xs={10}
            >
                <TabPanel value={value} index={0}>
                    <JobList/>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Applicants/>
                </TabPanel>
                {/* <TabPanel value={value} index={2}>
                    <CompanyManagement/>
                </TabPanel> */}
            </Grid>
        </div>
    );
}