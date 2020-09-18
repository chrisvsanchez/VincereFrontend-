import React from "react";
import { Card, Image } from "semantic-ui-react";
function Home() {
  return (
    <>
      <h1>Home</h1>
      <Image
        src={
          "https://images.unsplash.com/photo-1534787238916-9ba6764efd4f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1789&q=80"
        }
      />
      <div>
        <Card.Group itemsPerRow="3">
          <Card
            href="#card-example-link-card"
            header="Elliot Baker"
            meta="Friend"
            description="Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat."
          />
          <Card
            href="#card-example-link-card"
            header="Elliot Baker"
            meta="Friend"
            description="Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat."
          />
          <Card
            href="#card-example-link-card"
            header="Elliot Baker"
            meta="Friend"
            description="Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat."
          />
        </Card.Group>
      </div>
      <br></br>
    </>
  );
}
export default Home;
