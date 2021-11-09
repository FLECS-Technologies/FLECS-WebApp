import React from "react";
import Card from "./Card";
import Grid from "@mui/material/Grid";

export default function MarketplaceList(props) {
  var appList = [];
  if (props.appData) {
    appList = props.appData.map((app) => (
      <Card
        id={app.id}
        avatar={app.avatar}
        title={app.title}
        vendor={app.vendor}
        version={app.version}
        description={app.description}
        status={app.status}
      />
    ));
  }

  return (
    <Grid
      container
      spacing={2}
      direction="row"
      justify="flex-start"
      alignItems="flex-start"
    >
      {appList}
    </Grid>
  );
}
