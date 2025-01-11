import "./App.css";
import { Container, Card, Row, Col } from "react-bootstrap";
import caffeine from "./caffeine.png";
import { useState } from "react";

function App() {
  const [websiteInfo, setWebsiteInfo] = useState([
    {
      name: "BKS Lab",
      description:
        "The Shoichet lab seeks to bring chemical reagents to biology, combining computation and experiment.",
      url: "https://bkslab.org/home",
      img: caffeine,
    },
    {
      name: "Cartblanche 22",
      description:
        "Cartblanche22, an interface to ZINC-22. ZINC-22 is a free database of commercially-available compounds for virtual screening.",
      url: "https://cartblanche22.docking.org/",
      img: caffeine,
    },

    {
      name: "Irwin Lab",
      description:
        "We develop software tools and databases for ligand discovery and systems pharmacology.",
      url: "https://irwinlab.compbio.ucsf.edu/",
      img: caffeine,
    },
    {
      name: "SEA",
      description:
        "The Similarity ensemble approach relates proteins based on the set-wise chemical similarity among their ligands.",
      url: "https://sea.docking.org/",
      img: caffeine,
    },
    {
      name: "ZINC 15",
      description:
        "A free database of commercially-available compounds for virtual screening.",
      url: "https://zinc15.docking.org/",
      img: caffeine,
    },
    {
      name: "ZINC 20",
      description:
        "A free database of commercially-available compounds for virtual screening.",
      url: "https://zinc20.docking.org/",
      img: caffeine,
    },
  ]);

  function sortData() {
    const sortedData = [...websiteInfo].sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });

    return sortedData;
  }

  function chunkData() {
    const sortedData = sortData();
    const chunks = [];

    for (let i = 0; i < sortedData.length; i += 5) {
      chunks.push(sortedData.slice(i, i + 5));
    }

    return chunks;
  }

  function ShowCards() {
    return chunkData().map((chunk, rowIndex) => (
      <Row key={`row-${rowIndex}`} className="mb-4 justify-content-md-center">
        {chunk.map((website, colIndex) => (
          <Col key={website.name + colIndex} sm={12} md={6} lg={2}>
            <Card
              onClick={() => window.open(website.url, "_blank")}
              style={{ height: "100%" }}
            >
              <Card.Img variant="top" src={website.img} />
              <Card.Header className="centerText">{website.name}</Card.Header>
              <Card.Body className="centerText">
                <Card.Text>{website.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    ));
  }

  return (
    <Container style={{ margin: "auto" }} fluid className="hub_container">
      <br></br>
      <h1 className="centerText">Welcome To The Hub!</h1>
      <br></br>

      <Row>
        <ShowCards />
      </Row>
    </Container>
  );
}

export default App;
