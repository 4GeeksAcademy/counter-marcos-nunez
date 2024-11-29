import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

const HomePageContent = () => {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "25px" }}
    >
      <Alert variant="secondary" style={{ width: "1300px" }}>
        <h1 style={{ marginTop: "25px" }}>A Warm Welcome!</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ipsa
          cupiditate eveniet et quia, dolor velit animi, sed eligendi natus
          illum amet! Inventore minus repellendus adipisci incidunt corrupti
          quaerat ad.
        </p>
        <Button variant="primary" style={{ marginBottom: "40px" }}>
          Call to action!
        </Button>
      </Alert>
    </div>
  );
};

export default HomePageContent;
