import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

export default function Dashboard() {
  return (
    <div>
      Username: <input/>
      Password: <input/>
          </div>
  );
}
