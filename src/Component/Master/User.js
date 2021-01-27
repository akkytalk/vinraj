import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Pannel from './Pannel'
import GrpHookMaster from './UserMasterHooks/GrpHook'
import DynamicPannel from './DynamicPannel';
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
                    <Tab label="Add User" {...a11yProps(0)} />
                    <Tab label="Rights" {...a11yProps(1)} />
                    {/* <Tab label="Item Three" {...a11yProps(2)} /> */}
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                {/* <form>
                    <div className="form-row" style={{ fontSize: "12px" }}>
                        <div className="form-group col-md-3">
                            <label htmlFor="inputEmail4">Name</label>
                            <input type="name" className="form-control" id="inputEmail4" placeholder="Email" />
                        </div>
                        <div className="form-group col-md-3">
                            <label htmlFor="inputPassword4">Email</label>
                            <input type="email" className="form-control" id="inputPassword4" placeholder="email" />
                        </div>
                        <div className="form-group col-md-3">
                            <label htmlFor="inputPassword4">password</label>
                            <input type="email" className="form-control" id="inputPassword4" placeholder="password" />
                        </div>

                        <div className="form-group col-md-3">
                            <label htmlFor="inputAddress">Address</label>
                            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                        </div>
                    </div>
                    <div className="form-row" style={{ fontSize: "12px" }}>
                        <div className="form-group col-md-3">
                            <label htmlFor="inputCity">Phone</label>
                            <input type="phone" className="form-control" id="inputCity" />
                        </div>
                        <div className="form-group col-md-3">
                            <label htmlFor="inputCity">City</label>
                            <input type="text" className="form-control" id="inputCity" />
                        </div>
                        <div className="form-group col-md-3">
                            <label htmlFor="inputState">State</label>
                            <select id="inputState" className="form-control">
                                <option selected>Choose...</option>
                                <option>...</option>
                            </select>
                        </div>
                        <div className="form-group col-md-3">
                            <label htmlFor="inputZip">Zip</label>
                            <input type="text" className="form-control" id="inputZip" />
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary">Add User</button>
                </form>
                <hr />

                <table className="table table-striped" style={{ size: "10px;" }}>
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Email</th>
                            <th scope="col">phone</th>
                            <th scope="col">Delete</th>
                            <th scope="col">edit</th>
                            <th scope="col">view</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td><i class="fa fa-trash" aria-hidden="true"></i></td>
                            <td><i class="fa fa-plus" aria-hidden="true"></i></td>
                            <td><i class="fa fa-eye" aria-hidden="true"></i></td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td><i class="fa fa-trash" aria-hidden="true"></i></td>
                            <td><i class="fa fa-plus" aria-hidden="true"></i></td>
                            <td><i class="fa fa-eye" aria-hidden="true"></i></td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                            <td><i class="fa fa-trash" aria-hidden="true"></i></td>
                            <td><i class="fa fa-plus" aria-hidden="true"></i></td>
                            <td><i class="fa fa-eye" aria-hidden="true"></i></td>
                        </tr>
                    </tbody>
                </table> */}

                    <GrpHookMaster/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <DynamicPannel />
            </TabPanel>


        </div>
    );
}
