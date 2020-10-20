import React from "react";
import { Button, Grid } from "semantic-ui-react";
const Footer = () => {
  return (
    <div className="footer">
      <br></br>
      <br></br>
      {/* <div> */}
      <Button circular color="facebook" icon="facebook" />
      <Button circular color="twitter" icon="twitter" />
      <Button circular color="linkedin" icon="linkedin" />
      <Button circular color="google plus" icon="google plus" />
    </div>
  );
};

export default Footer;
