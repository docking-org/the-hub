import "./Home.css";
import { Container, Card, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";

/*
Icon Imports
*/
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
import files from "./Images/files.png"
import files2 from "./Images/files2.png"
import docs from "./Images/docs.png"
import props from "./Images/props.png"
import tldr from  "./Images/tldr.png"
import excipients from "./Images/excipients.png"
import irwinlab from "./Images/irwinlab.png"
import cartblanche from "./Images/cartblance.png"
import zinc15 from "./Images/zinc15.svg"
import zinc20 from "./Images/zinc20.svg"

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const year = new Date().getFullYear();
  
  // Add resize listener
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Determine columns based on screen size
  const getColumnCount = () => {
    if (windowWidth < 576) return 1;      // Mobile
    if (windowWidth < 768) return 2;      // Small tablets
    if (windowWidth < 992) return 3;      // Large tablets
    if (windowWidth < 1200) return 4;     // Small desktops
    return 5;                             // Large desktops
  };

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
      img: cartblanche,
    },
    {
      name: "Irwin Lab",
      description:
        "We develop software tools and databases for ligand discovery and systems pharmacology.",
      url: "https://irwinlab.compbio.ucsf.edu/",
      img: irwinlab,
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
      img: tldr,
    },
    {
      name: "Excipients",
      description:
        "The goal of the project is to curate and disseminate information about excipients, the assumed-inactive substances found in food and drugs.",
      url: "https://excipients.docking.org/",
      img: excipients,
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
        "NextMove Software's Arthor suite of tools aim to provide very fast substructure and similarity searching with comparatively minimal hardware infrastructure.",
      url: "https://arthor.docking.org/index.html",
      img: nextmove,
    },
    {
      name: "Arthor Private",
      description:
        "NextMove Software's Arthor suite of tools aim to provide very fast substructure and similarity searching with comparatively minimal hardware infrastructure.",
      url: "https://arthorp.docking.org/index.html",
      img: nextmove,
    },
    {
      name: "Arthor Building Blocks",
      description:
        "NextMove Software's Arthor suite of tools aim to provide very fast substructure and similarity searching with comparatively minimal hardware infrastructure.",
      url: "https://arthorbb.docking.org/index.html",
      img: nextmove,
    },
    {
      name: "Arthor Chemistry Commons",
      description:
        "NextMove Software's Arthor suite of tools aim to provide very fast substructure and similarity searching with comparatively minimal hardware infrastructure.",
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
      img: zinc15,
    },
    {
      name: "ZINC 20",
      description:
        "A free database of commercially-available compounds for virtual screening.",
      url: "https://zinc20.docking.org/",
      img: zinc20,
    },
    {
      name: "AWS",
      description:
        "This product is part of the AWS Open Data Sponsorship Program and contains data sets that are publicly available for anyone to access and use.",
      url: "https://aws.amazon.com/marketplace/pp/prodview-cclrxhtx5xibk#resources",
      img: aws,
    },
    {
      name: "Docs",
      description:
        "A virtual document that provides a guide on running a large-scale virtual screen using the DOCK software suite.",
      url: "https://docs.docking.org/index.html",
      img: docs,
    },
    {
      name: "Files",
      description:
        "A file server that contains static files to support ZINC, DOCK, DUDE, SEA, DUC, DOCK Blaster and other products.",
      url: "https://files.docking.org/",
      img: files,
    },
    {
      name: "Files 2",
      description:
        "A second file server that contains static files to support ZINC, DOCK, DUDE, SEA, DUC, DOCK Blaster and other products.",
      url: "https://files2.docking.org/",
      img: files2,
    },
    {
      name: "Props",
      description:
        "A web service for simplifying the calculation of molecular properties.",
      url: "https://files2.docking.org/",
      img: props,
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
    return [...websiteList].sort((a, b) => {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });
  }

  function chunkData(websiteList) {
    const sortedData = sortData(websiteList);
    const columnCount = getColumnCount();
    const chunks = [];

    for (let i = 0; i < sortedData.length; i += columnCount) {
      chunks.push(sortedData.slice(i, i + columnCount));
    }

    return chunks;
  }

  function ShowCards({ websiteList }) {
    return chunkData(websiteList).map((chunk, rowIndex) => (
      <Row key={`row-${rowIndex}`} className="mb-4 justify-content-center g-3">
        {chunk.map((website, colIndex) => (
          <Col 
            key={website.name + colIndex} 
            xs={12} 
            sm={6} 
            md={getColumnCount() === 3 ? 4 : 6} 
            lg={getColumnCount() === 5 ? 2 : 3}
          >
            <Card
              onClick={() => window.open(website.url, "_blank")}
              className="h-100"
            >
              <div className="card-image-container">
                <Card.Img
                  className="card-image"
                  src={website.img ? website.img : caffeine}
                  alt={website.name}
                />
              </div>
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
    <Container fluid className="hub_container py-4">
      <h1 className="centerText mb-4">
        Welcome to docking.org, software from the Shoichet and Irwin labs at
        UCSF!
      </h1>
      
      <div >
        <ShowCards websiteList={importantWebsites} />
      </div>
      
      <div>
        <ShowCards websiteList={websiteInfo} />
      </div>


      {/* 
      
      Footer

      */}
      <footer className="footer centerText">
      < hr />

      <Row >
        <Col>
          <span>
            <a target="_blank" rel="noopener noreferrer" href="https://discord.gg/4MpD6UF5AN">
              Discord
            </a>
            &nbsp;|&nbsp;
            <a target="_blank" rel="noopener noreferrer" href="https://forms.gle/LZV1FCmLWxUWznVi9">Contact Us</a>
            &nbsp;|&nbsp;
            <a target="_blank" rel="noopener noreferrer" href="https://wiki.docking.org/index.php/Privacy_policy">
              Privacy Policy
            </a>
            &nbsp;|&nbsp;
            <a target="_blank" rel="noopener noreferrer" href="https://wiki.docking.org/index.php/Terms_And_Conditions">
              Terms of Use
            </a>
            &nbsp;|&nbsp; © {year} <a target="_blank" rel="noopener noreferrer" href="https://irwinlab.compbio.ucsf.edu/">Irwin</a> and <a target="_blank" rel="noopener noreferrer" href="https://bkslab.org/">Shoichet</a> Labs and the UC Regents
          </span>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="small muted">This is not an official UCSF website. The opinions or statements expressed herein should not be taken as a position of or endorsement by the University of California, San Francisco.</p>

        </Col>
      </Row>
    </footer>
    </Container>
  );
}

export default App;