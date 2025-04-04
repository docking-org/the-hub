import "./Home.css";
import { Container, Card, Row, Col } from "react-bootstrap";

import caffeine from "./Images/caffeine.png";
import advisor from "./Images/advisor.png";
import nextmove from "./Images/arthor_nextmove.png";
import bks from "./Images/bks.jpg";
import dock from "./Images/dock.jpg";
import sea from "./Images/sea.jpg";
import amis from "./Images/amis.png";
import wiki from "./Images/wiki.jpg";
import cc from "./Images/cc.jpg";
import lsd from "./Images/lsd.png";
import aws from "./Images/aws.png";

function App() {
  const websiteInfo = [
    {
      name: "Amis",
      description:
        "TA Mouse Imaging Server (AMIS), the home for mouse imaging data generated via the NIH Common fund Program for Illuminating the Druggable Genome (IDG).",
      url: "https://amis.docking.org/",
      img: amis,
    },
    {
      name: "Cartblanche 22",
      description:
        "Cartblanche22, an interface to ZINC-22. ZINC-22 is a free database of commercially-available compounds for virtual screening.",
      url: "https://cartblanche22.docking.org/",
    },
    {
      name: "Irwin Lab",
      description:
        "We develop software tools and databases for ligand discovery and systems pharmacology.",
      url: "https://irwinlab.compbio.ucsf.edu/",
    },
    {
      name: "SEA",
      description:
        "The Similarity ensemble approach relates proteins based on the set-wise chemical similarity among their ligands.",
      url: "https://sea.docking.org/",
      img: sea,
    },
    {
      name: "Wiki",
      description: "the wiki of the Shoichet Lab and Irwin Lab at UCSF.",
      url: "https://wiki.docking.org/index.php?title=Main_Page",
      img: wiki,
    },

    {
      name: "TLDR",
      description:
        "A public access service for computational ligand discovery. ",
      url: "https://tldr.docking.org/",
    },
    {
      name: "Excipients",
      description:
        "The goal of the project is to curate and disseminate information about excipients, the assumed-inactive substances found in food and drugs.",
      url: "https://excipients.docking.org/",
    },
    {
      name: "Aggregator Advisor",
      description:
        "Aggregator Advisor identifies molecules that are known-to aggregate or may aggregate in biochemical assays.",
      url: "https://advisor.docking.org/",
      img: advisor,
    },
    {
      name: "LSD",
      description:
        "Large Scale Docking (LSD) refers to screening of virtual compound libraries (ZINC15, ZINC22) using the DOCK3.7/3.8 software.",
      url: "https://lsd.docking.org/",
      img: lsd,
    },
    {
      name: "Smallworld Public",
      description:
        "SmallWorld is a chemical database indexing technology that enables rapid 2D similarity queries based upon Graph Edit Distance (GED).",
      url: "https://sw.docking.org/search.html",
      img: nextmove,
    },
    {
      name: "Smallworld Private",
      description:
        "SmallWorld is a chemical database indexing technology that enables rapid 2D similarity queries based upon Graph Edit Distance (GED).",
      url: "https://swp.docking.org/search.html",
      img: nextmove,
    },
    {
      name: "Smallworld Building Blocks",
      description:
        "SmallWorld is a chemical database indexing technology that enables rapid 2D similarity queries based upon Graph Edit Distance (GED).",
      url: "https://swbb.docking.org/search.html",
      img: nextmove,
    },
    {
      name: "Smallworld Chemistry Commons",
      description:
        "SmallWorld is a chemical database indexing technology that enables rapid 2D similarity queries based upon Graph Edit Distance (GED).",
      url: "https://swcc.docking.org/search.html",
      img: nextmove,
    },
    {
      name: "Arthor Public",
      description:
        "NextMove Software’s Arthor suite of tools aim to provide very fast substructure and similarity searching with comparatively minimal hardware infrastructure.",
      url: "https://arthor.docking.org/index.html",
      img: nextmove,
    },
    {
      name: "Arthor Private",
      description:
        "NextMove Software’s Arthor suite of tools aim to provide very fast substructure and similarity searching with comparatively minimal hardware infrastructure.",
      url: "https://arthorp.docking.org/index.html",
      img: nextmove,
    },
    {
      name: "Arthor Building Blocks",
      description:
        "NextMove Software’s Arthor suite of tools aim to provide very fast substructure and similarity searching with comparatively minimal hardware infrastructure.",
      url: "https://arthorbb.docking.org/index.html",
      img: nextmove,
    },
    {
      name: "Arthor Chemistry Commons",
      description:
        "NextMove Software’s Arthor suite of tools aim to provide very fast substructure and similarity searching with comparatively minimal hardware infrastructure.",
      url: "https://arthorcc.docking.org/index.html",
      img: nextmove,
    },
    {
      name: "Chemistry Commons",
      description:
        "The Chemistry Commons connects synthetic organic chemists with biologists seeking new reagents for biology, each assisted by their medicinal and computational chemistry colleagues.",
      url: "https://commons.docking.org/",
      img: cc,
    },
    {
      name: "ZINC 15",
      description:
        "A free database of commercially-available compounds for virtual screening.",
      url: "https://zinc15.docking.org/",
    },
    {
      name: "ZINC 20",
      description:
        "A free database of commercially-available compounds for virtual screening.",
      url: "https://zinc20.docking.org/",
    },
    {
      name: "AWS",
      description:
        "This product is part of the AWS Open Data Sponsorship Program and contains data sets that are publicly available for anyone to access and use.",
      url: "https://aws.amazon.com/marketplace/pp/prodview-cclrxhtx5xibk#resources",
      img: aws,
    },
  ];

  const importantWebsites = [
    {
      name: "BKS Lab",
      description:
        "The Shoichet lab seeks to bring chemical reagents to biology, combining computation and experiment.",
      url: "https://bkslab.org/home",
      img: bks,
    },
    {
      name: "DOCK",
      description:
        'DOCK addresses the problem of "docking" molecules to each other.',
      url: "https://dock.docking.org/index.html",
      img: dock,
    },
  ];

  function sortData(websiteList) {
    const sortedData = [...websiteList].sort((a, b) => {
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

  function chunkData(websiteList) {
    const sortedData = sortData(websiteList);
    const chunks = [];

    for (let i = 0; i < sortedData.length; i += 5) {
      chunks.push(sortedData.slice(i, i + 5));
    }

    return chunks;
  }

  function ShowCards({ websiteList }) {
    return chunkData(websiteList).map((chunk, rowIndex) => (
      <Row key={`row-${rowIndex}`} className="mb-4 justify-content-md-center">
        {chunk.map((website, colIndex) => (
          <Col key={website.name + colIndex} sm={12} md={6} lg={2}>
            <Card
              onClick={() => window.open(website.url, "_blank")}
              style={{ height: "100%" }}
            >
              <Card.Img
                className="card-image"
                variant="top"
                src={website.img ? website.img : caffeine}
              />
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
      <h1 className="centerText">
        Welcome to docking.org, software from the Shoichet and Irwin labs at
        UCSF!
      </h1>
      <br></br>
      <Row>
        <ShowCards websiteList={importantWebsites} />
      </Row>
      <Row>
        <ShowCards websiteList={websiteInfo} />
      </Row>
    </Container>
  );
}

export default App;
