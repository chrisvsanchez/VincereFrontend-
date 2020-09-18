import React from "react";
import { Button } from "semantic-ui-react";
const Footer = () => {
  return (
    <div style={{ backgroundColor: "lightgreen" }}>
      <h1>Footer</h1>
      <div>
        <Button circular color="facebook" icon="facebook" />
        <Button circular color="twitter" icon="twitter" />
        <Button circular color="linkedin" icon="linkedin" />
        <Button circular color="google plus" icon="google plus" />
      </div>
      <br></br>
      <br></br>
    </div>
  );
};

export default Footer;