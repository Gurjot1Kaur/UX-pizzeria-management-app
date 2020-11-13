/*eslint-disable*/
import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import Button from "components/CustomButtons/Button.js";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Tasks from "components/Tasks/Tasks.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import SnackbarContent from "components/Snackbar/SnackbarContent.js";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts.js";

import styles from "assets/jss/material-dashboard-react/views/rtlStyle.js";

import avatar from "assets/img/faces/marc.jpg";

let bugs = [
  "Graphic designer of this text as an element of composition to fill?",
  "Do they first use experimental and meaningless texts to show only to their client or employer?",
  "At the same time, their work is somewhat text-dependent.",
  "They use the dummy content to customize their graphic page."
];
let website = [
  "What the text looks like after it is inserted and what the fonts and scales are like",
  "Does it use the original appearance and general design of the ordered design?"
];
let server = [
  "Graphics indicate the type and size of the font and the appearance of the text. Usually graphic designers for page layouts, first of the experimental texts?",
  "Uses this text as an element of composition to fill the page and present the initial appearance of the custom design, to graphically indicate the type and size of the font and the appearance of the text. Usually graphic designers for page layout, First of the experimental texts? ",
  "Do they use nonsensical texts to show only to their client or employer?"
];

const useStyles = makeStyles(styles);

export default function RTLPage() {
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <Icon>content_copy</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>space consumed </p>
              <h3 className={classes.cardTitle}>
                49/50 <small>GB</small>
              </h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Danger>
                  <Warning />
                </Danger>
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  Have more space ...
                </a>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <Store />
              </CardIcon>
              <p className={classes.cardCategory}>Profit</p>
              <h3 className={classes.cardTitle}>$34,245</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <DateRange />
                The last 24 hours
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="danger" stats icon>
              <CardIcon color="danger">
                <Icon>info_outline</Icon>
              </CardIcon>
              <p className = {classes.cardCategory}> Problems Resolved </p>
              <h3 className={classes.cardTitle}>75</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <LocalOffer />
                By Github
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <Accessibility />
              </CardIcon>
              <p className = {classes.cardCategory}> Follower </p>
              <h3 className={classes.cardTitle}>+245</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Update />
                right now
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
                data={dailySalesChart.data}
                type="Line"
                options={dailySalesChart.options}
                listener={dailySalesChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className = {classes.cardTitle}> Daily Sales </h4>
              <p className={classes.cardCategory}>
                <span className={classes.successText}>
                  <ArrowUpward className={classes.upArrowCardCategory} /> 55%
                </span>{" "}
                Growth in sales today.
              </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
              <AccessTime /> 4 minutes ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="warning">
              <ChartistGraph
                className="ct-chart"
                data={emailsSubscriptionChart.data}
                type="Bar"
                options={emailsSubscriptionChart.options}
                responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                listener={emailsSubscriptionChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className = {classes.cardTitle}> Email Followers </h4>
              <p className = {classes.cardCategory}> Last Campaign Performance </p>            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> The campaign was launched two days ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="danger">
              <ChartistGraph
                className="ct-chart"
                data={completedTasksChart.data}
                type="Line"
                options={completedTasksChart.options}
                listener={completedTasksChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className = {classes.cardTitle}> Tasks Done </h4>
              <p className = {classes.cardCategory}> Last Campaign Performance </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> The campaign was launched two days ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <CustomTabs
            title="Tasks"
            headerColor="primary"
            rtlActive
            tabs={[
              {
                tabName: "Bug",
                tabIcon: BugReport,
                tabContent: (
                  <Tasks
                    checkedIndexes={[0, 3]}
                    tasksIndexes={[0, 1, 2, 3]}
                    tasks={bugs}
                    rtlActive
                  />
                )
              },
              {
                tabName: "Notes",
                tabIcon: Code,
                tabContent: (
                  <Tasks
                    checkedIndexes={[0]}
                    tasksIndexes={[0, 1]}
                    tasks={website}
                    rtlActive
                  />
                )
              },
              {
                tabName: "Cloud",
                tabIcon: Cloud,
                tabContent: (
                  <Tasks
                    checkedIndexes={[1]}
                    tasksIndexes={[0, 1, 2]}
                    tasks={server}
                    rtlActive
                  />
                )
              }
            ]}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="warning">
              <h4 className = {classes.cardTitleWhite}> Staff Statistics </h4>
              <p className={classes.cardCategoryWhite}>
                New employees from November 6, 2017
              </p>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="warning"
                tableHead={["Notes", "Name", "Net Value", "City"]}
                tableData={[
                  ["1", "Eric Chen", "$36,738", "Las Vegas"],
                  ["2", "Gurjot Kaur", "$32,148", "Las Vegas"],
                  ["3", "Terrence Townsend", "$23,218", "Las Vegas"],
                  ["4", "Tommy Lee", "$54,438", "Las Vegas"],
                ]}
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Announcements </h4>
              <p className={classes.cardCategoryWhite}>
              Handmade by our friends from {" "}  
                <a
                  target="_blank"
                  href="https://material-ui-next.com/?ref=creativetime"
                >
                Physical user interface
                </a>{" "}
                And installed before {" "}
                <a
                  target="_blank"
                  href="https://www.creative-tim.com/?ref=mdr-rtl-page"
                >
                Creative Tim
                </a>
                . Please check {" "}
                <a href="#pablo" target="_blank">
                Complete documentation
               </a>
                .
              </p>
            </CardHeader>
            <CardBody>
              <SnackbarContent
                message={
                  'This is a notification created with the color = "warning" class.'
                }
                close
                rtlActive
                color="warning"
              />
              <SnackbarContent
                message={
                  'This is a notification created with the color = "primary" class.'                
                }
                close
                rtlActive
                color="primary"
              />
              <SnackbarContent
                message={"This is a notification with a close button and an icon"}
                close
                rtlActive
                color="info"
              />
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <Card profile>
            <CardAvatar profile>
              <a href="#pablo" onClick={e => e.preventDefault()}>
                <img src={avatar} alt="..." />
              </a>
            </CardAvatar>
            <CardBody profile>
              <h6 className={classes.cardCategory}>Manager</h6>
              <h4 className={classes.cardTitle}>John Doe</h4>
              <p className={classes.description}>
              Graphics of this text as an element of composition to fill
                 Page and initial presentation of the appearance and general design of the ordered design used
                 To graphically indicate how the font type and size and
                 The appearance of the text. Usually graphic designers for page layouts, from
                 They use experimental and meaningless texts ...
              </p>
              <Button color="primary" round>
                Following
              </Button>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
