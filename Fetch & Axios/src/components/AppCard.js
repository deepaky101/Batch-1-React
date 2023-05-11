import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import noteContext from "../context/noteContext";
import "./AppCard.css";

function AppCard() {
  let D = useContext(noteContext);

  return (
    <>
      {D.api ? (
        <>
          <div className="Main">
            {D.api.map((e) => (
              <Card style={{ width: "18rem"}}>
                <Card.Img variant="top"  src={e.urlToImage} />
                <Card.Body>
                  <Card.Title>{e.title}</Card.Title>
                  <Card.Text>{e.description}</Card.Text>
                  <a href={e.url} target="_blank">
                    Go somewhere
                  </a>
                </Card.Body>
              </Card>
            ))}
          </div>
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
}

export default AppCard;
