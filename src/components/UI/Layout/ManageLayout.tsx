// import classes from './ManageLayout.module.scss';

import Header from "./Header";
import Toolbar from "@material-ui/core/Toolbar";
import React, {FC} from "react";
import Drawer from "./Drawer";

const ManageLayout: FC = ({children}) => (
  <>
    <Header/>
    <Toolbar/>
    <Drawer/>
    {children}
  </>
);

export default ManageLayout;
