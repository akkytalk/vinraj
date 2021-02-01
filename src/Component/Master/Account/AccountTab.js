import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import GroupHook from './Accounts/GroupHook';
// import Pannel from './Pannel'

interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
}

function TabPanel(props: TabPanelProps) {
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
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: any) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function SimpleTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="Account" {...a11yProps(0)} />
                    {/* <Tab label="Account Single List" {...a11yProps(1)} /> */}
                    {/* <Tab label="Item Three" {...a11yProps(2)} /> */}
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                {/* <form>
                    <div className="form-row" style={{fontSize:"12px"}}>
                     
                        <div className="form-group col-md-3">
                            <label htmlFor="inputPassword4"> Account </label>
                            <input type="text" className="form-control" id="inputPassword4" placeholder="" />
                        </div>
                        <div className="form-group col-md-3">
                            <label htmlFor="inputPassword4">User Account SIngle</label>
                            <input type="text" className="form-control" id="inputPassword4" placeholder="" />
                        </div>


                    </div>


                    <button type="submit" className="btn btn-primary">Add Account Single</button>
                </form>
                <br />

                <hr />
                <h2>Single Account List</h2>
                <table class="table" style={{fontSize:"12px"}}>
                    <thead>
                        <tr>
                            <th scope="col">No</th>
                            <th scope="col">Account Namne</th>
                            <th scope="col">Under Account single</th>
                            <th scope="col">Delete</th>
                            <th scope="col">Add</th>
                            <th scope="col">View</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td><i class="fa fa-trash" aria-hidden="true"></i></td>
                            <td><i class="fa fa-plus" aria-hidden="true"></i></td>
                            <td><i class="fa fa-eye" aria-hidden="true"></i></td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td><i class="fa fa-trash" aria-hidden="true"></i></td>
                            <td><i class="fa fa-plus" aria-hidden="true"></i></td>
                            <td><i class="fa fa-eye" aria-hidden="true"></i>></td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td><i class="fa fa-trash" aria-hidden="true"></i></td>
                            <td><i class="fa fa-plus" aria-hidden="true"></i></td>
                            <td><i class="fa fa-eye" aria-hidden="true"></i>></td>
                        </tr>
                    </tbody>
                </table>
 */}
            <GroupHook/>
            </TabPanel>
           


        </div>
    );
}
