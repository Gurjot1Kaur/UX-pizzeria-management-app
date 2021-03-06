import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import {
  dailySalesChart as dummyData1,
  emailsSubscriptionChart as dummyData2,
  completedTasksChart as dummyData3
} from "variables/charts.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import { ArrowDownward } from "@material-ui/icons";

const useStyles = makeStyles(styles);

export default function Dashboard() {
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <Store />
              </CardIcon>
              <p className={classes.cardCategory}>Orders Completed</p>
              <h3 className={classes.cardTitle}>9,284</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
              <AccessTime />
                Last Updated 5 mins ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>

        <GridItem xs={12} sm={12} md={4}>
          <Card>
            <CardHeader color="danger" stats icon>
              <CardIcon color="danger">
                <Icon>info_outline</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Open orders</p>
              <h3 className={classes.cardTitle}>245</h3>
            </CardHeader>
            <CardFooter stats>
            <div className={classes.stats}>
              <AccessTime />
              Just Updated
              </div>
            </CardFooter>
          </Card>
        </GridItem>


        <GridItem xs={12} sm={12} md={4}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <Accessibility />
              </CardIcon>
              <p className={classes.cardCategory}>Customers satisfied</p>
              <h3 className={classes.cardTitle}>9,102,456</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Update />
                Last Updated 2 mins ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="success">
              <ChartistGraph
                className="ct-chart"
                data={dummyData1.data}
                type="Line"
                options={dummyData1.options}
                listener={dummyData1.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Daily Sales</h4>
              <p className={classes.cardCategory}>
                <span className={classes.successText}>
                  <ArrowUpward className={classes.upArrowCardCategory} /> 55%
                </span>{" "}
                increase
              </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> updated 4 minutes ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="warning">
              <ChartistGraph
                className="ct-chart"
                data={dummyData2.data}
                type="Bar"
                options={dummyData2.options}
                responsiveOptions={dummyData2.responsiveOptions}
                listener={dummyData2.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Deliveries</h4>
              <p className={classes.cardCategory}>
                <span className={classes.successText}>
                  <ArrowUpward className={classes.upArrowCardCategory} /> 28%
                </span>{" "}
                increase
              </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> updates 4 hours ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="danger">
              <ChartistGraph
                className="ct-chart"
                data={dummyData3.data}
                type="Line"
                options={dummyData3.options}
                responsiveOptions={dummyData3.responsiveOptions}
                listener={dummyData3.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Dine-In</h4>
              <p className={classes.cardCategory}>
                <span className={classes.dangerText}>
                  <ArrowDownward className={classes.upArrowCardCategory} /> 5%
                </span>{" "}
                decrease
              </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> updates 1 hour ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="info">
              <ChartistGraph
                className="ct-chart"
                data={dummyData2.data}
                type="Bar"
                options={dummyData2.options}
                responsiveOptions={dummyData2.responsiveOptions}
                listener={dummyData2.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Pick ups</h4>
              <p className={classes.cardCategory}>
                <span className={classes.successText}>
                  <ArrowUpward className={classes.upArrowCardCategory} /> 49%
                </span>{" "}
                increase
              </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> updates 10 mins ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
       </GridContainer>
      
    </div>
  );
}
