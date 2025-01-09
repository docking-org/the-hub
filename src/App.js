import "./App.css";
import { Container, Card, Button, Row, Col } from "react-bootstrap";

function App() {
  const websiteInfo = [
    {
      name: "Smallworld Public",
      description: "A smallworld instance for the public",
      link: "sw.docking.org",
    },
    {
      name: "Smallworld Private",
      description: "A smallworld instance for private use",
      link: "swp.docking.org",
    },
    {
      name: "Arthor Test",
      description: "test 1",
      link: "test.test.com",
    },
    {
      name: "Arthor Test 2",
      description: "test 2",
      link: "test.test.com",
    },
    {
      name: "Arthor Test 3",
      description: "test 3",
      link: "test.test.com",
    },
    {
      name: "Arthor Test 4",
      description: "test 4",
      link: "test.test.com",
    },
    {
      name: "Arthor Test 5",
      description: "test 5",
      link: "test.test.com",
    },
    {
      name: "Arthor Test 6",
      description: "test 6",
      link: "test.test.com",
    },
  ];

  function ShowCards() {
    const chunks = [];

    for (let i = 0; i < websiteInfo.length; i += 5) {
      chunks.push(websiteInfo.slice(i, i + 5));
    }

    return chunks.map((chunk, rowIndex) => (
      <Row key={`row-${rowIndex}`} className="mb-4 justify-content-md-center">
        {chunk.map((website, colIndex) => (
          <Col key={website.name + colIndex} sm={12} md={6} lg={2}>
            <Card>
              <Card.Img variant="top" src="caffeine.png" />
              <Card.Header className="centerText">{website.name}</Card.Header>
              <Card.Body className="centerText">
                <Card.Text>{website.description}</Card.Text>
                <Button
                  variant="primary"
                  href={`https://${website.link}`}
                  target="_blank"
                >
                  Visit
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    ));
  }

  return (
    <Container
      style={{ margin: "auto", width: "90%" }}
      fluid
      className="hub_container"
    >
      <h1 className="centerText">Welcome To The Hub!</h1>

      <Row>
        <ShowCards />
      </Row>
    </Container>
  );
}

export default App;
