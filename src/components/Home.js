import React from "react";
import { Card, Image, Icon } from "semantic-ui-react";
import Typical from "react-typical";
function Home() {
  return (
    <>
      <Typical
        center
        steps={[
          "Vincere ",
          1000,
          "Vincere Cycling",
          1000,
          "Vincere Cycling Club",
          1000,
          "Win",
          1000,
          "Win Against",
          1000,
          "Win Against All",
          1000,
          "Win Against All Odds",
          1000,
        ]}
        loop={Infinity}
        wrapper="h1"
        Aligntext="center"
      />
      <br></br>
      <Image
        size="massive"
        src={
          "https://images.unsplash.com/photo-1534787238916-9ba6764efd4f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1789&q=80"
        }
      />
      <br></br>
      <br></br>
      <div>
        <Card.Group centered itemsPerRow="3">
          <Card>
            <Image
              src={
                "https://images.unsplash.com/photo-1511877150299-3622fc88aee3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
              }
              wrapped
              ui={false}
            />
            <Card.Content>
              <Card.Header>Vincere Cycling Club</Card.Header>
              <Card.Meta>Since in 2020</Card.Meta>
              <Card.Description>Cycling against all odds</Card.Description>
            </Card.Content>
            <Card.Content extra></Card.Content>
          </Card>
          <Card>
            <Image
              size="medium"
              src={
                "https://images.unsplash.com/photo-1510784371530-c769d6544caf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
              }
              wrapped
              ui={false}
            />
            <Card.Content>
              <Card.Header>Vincere Cycling Club</Card.Header>
              <Card.Meta>Since in 2020</Card.Meta>
              <Card.Description>Cycling against all odds</Card.Description>
            </Card.Content>
            <Card.Content extra></Card.Content>
          </Card>
          <Card>
            <Image
              src={
                "https://images.unsplash.com/photo-1552402896-0c6cd7cdecf3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
              }
              wrapped
              ui={false}
            />
            <Card.Content>
              <Card.Header>Vincere Cycling Club</Card.Header>
              <Card.Meta>Since in 2020</Card.Meta>
              <Card.Description>Cycling against all odds</Card.Description>
            </Card.Content>
            <Card.Content extra></Card.Content>
          </Card>
        </Card.Group>
      </div>
      <br></br>
    </>
  );
}
export default Home;
