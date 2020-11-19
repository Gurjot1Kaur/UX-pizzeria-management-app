import React from "react";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";

export default function Login() {
  return (
    <div style={{marginLeft: "200px"}}>
      <h4 >Pizzeria Management App Login</h4>
      <GridContainer >
        <GridItem xs={12} sm={12} md={8}>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Username"
                    id="username"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Password"
                    id="password"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
              </GridContainer>
              <a href="/admin/dashboard"><Button>Login</Button></a>
        </GridItem>

      </GridContainer>
      <GridContainer >
        <Card></Card>
        <GridItem xs={12} sm={12} md={8}>
              <h4>Forgot password?</h4>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Email"
                    id="email"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
              </GridContainer>
              <a href="/admin/dashboard"><Button>Submit</Button></a>
        </GridItem>
      </GridContainer>
          </div>
  );
}
