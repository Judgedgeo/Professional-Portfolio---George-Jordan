import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import LessWaste from "../assets/images/LessWaste.png";
import Cutie from "../assets/images/Cutie.png";
import DailyGrind from "../assets/images/Daily Grind.png";
import Weather from "../assets/images/Weather.png";
import Generator from "../assets/images/Generator.png";
import Brother from "../assets/images/Brother.png";

function Project() {
  return (
    <>
      <div className="container d-flex flex-wrap">
        <Card
          style={{
            display: "flex",
            flexDirection: "column",
            width: "50%",
            border: "5px solid black",
          }}
        >
          <Card.Img
            style={{ height: "85%", objectFit: "fill" }}
            variant="top"
            src={LessWaste}
          />
          <Card.Body>
            <Card.Title>Less Waste, More Taste</Card.Title>
            <Card.Text>
              Recipe App to help you use available ingredients in order to
              create you a Recipe.
            </Card.Text>
            <a
              href="https://user-images.githubusercontent.com/115055273/236050660-646ba2b4-263f-46b0-b15c-af20335dcd17.png"
              class="btn btn-primary"
            >
              Check it out Here
            </a>
            <a
              href="https://github.com/jdalfaro4/Less_Waste_More_Taste"
              class="btn btn-primary"
            >
              Check out my Repo
            </a>
          </Card.Body>
        </Card>

        <Card
          style={{
            display: "flex",
            flexDirection: "column",
            width: "50%",
            border: "5px solid black",
          }}
        >
          <Card.Img
            style={{ height: "85%", objectFit: "fill" }}
            variant="top"
            src={Cutie}
          />
          <Card.Body>
            <Card.Title>Cutie Pies</Card.Title>
            <Card.Text>
              An app that allows you to order your favorite Pies.
            </Card.Text>
            <a
              href="https://user-images.githubusercontent.com/115055273/236050540-162c8515-1c84-4618-be7f-464053b8d184.png"
              class="btn btn-primary"
            >
              Check it out Here
            </a>
            <a
              href="https://github.com/jdalfaro4/Cutie-Pies"
              class="btn btn-primary"
            >
              Check out my Repo
            </a>
          </Card.Body>
        </Card>

        <Card
          style={{
            display: "flex",
            flexDirection: "column",
            width: "50%",
            border: "5px solid blue",
          }}
        >
          <Card.Img
            style={{ height: "85%", objectFit: "fill" }}
            variant="top"
            src={DailyGrind}
          />
          <Card.Body>
            <Card.Title>The Daily Grind</Card.Title>
            <Card.Text>
              A daily calendar that helps you stay on track and on time for your
              daily reminders.
            </Card.Text>
            <a
              href="https://judgedgeo.github.io/The-Daily-Grind/"
              class="btn btn-primary"
            >
              Check it out Here
            </a>
            <a
              href="https://github.com/Judgedgeo/The-Daily-Grind"
              class="btn btn-primary"
            >
              Check out my Repo
            </a>
          </Card.Body>
        </Card>

        <Card
          style={{
            display: "flex",
            flexDirection: "column",
            width: "50%",
            border: "5px solid blue",
          }}
        >
          <Card.Img
            style={{ height: "85%", objectFit: "fill" }}
            variant="top"
            src={Weather}
          />
          <Card.Body>
            <Card.Title>The Weather Detector</Card.Title>
            <Card.Text>
              A Weatherprogram that allows you to see the weather in your area
              orcities you may visit.
            </Card.Text>
            <a
              href="https://judgedgeo.github.io/The-Weather-Detector/"
              class="btn btn-primary"
            >
              Check it out Here
            </a>
            <a
              href="https://github.com/Judgedgeo/The-Weather-Detector"
              class="btn btn-primary"
            >
              Check out my Repo
            </a>
          </Card.Body>
        </Card>

        <Card
          style={{
            display: "flex",
            flexDirection: "column",
            width: "50%",
            border: "5px solid black",
          }}
        >
          <Card.Img
            style={{ height: "85%", objectFit: "fill" }}
            variant="top"
            src={Generator}
          />
          <Card.Body>
            <Card.Title>Power Gen</Card.Title>
            <Card.Text>
              A Password Generator that helps you create secure passwords for
              your devices, websites and email.
            </Card.Text>
            <a
              href="https://judgedgeo.github.io/Power-Gen/"
              class="btn btn-primary"
            >
              Check it out Here
            </a>
            <a
              href="https://github.com/Judgedgeo/Power-Gen"
              class="btn btn-primary"
            >
              Check out my Repo
            </a>
          </Card.Body>
        </Card>

        <Card
          style={{
            display: "flex",
            flexDirection: "column",
            width: "50%",
            border: "5px solid black",
          }}
        >
          <Card.Img
            style={{ height: "85%", objectFit: "fill" }}
            variant="top"
            src={Brother}
          />
          <Card.Body>
            <Card.Title>Big Brother Employee Tracker</Card.Title>
            <Card.Text>
              A program that helps you edit and view all your employees by
              department and roles.
            </Card.Text>
            <a href="https://youtu.be/Fw4cr-QcVJs" class="btn btn-primary">
              Check it out Here
            </a>
            <a
              href="https://github.com/Judgedgeo/The-Daily-Grind"
              class="btn btn-primary"
            >
              Check out my Repo
            </a>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default Project;
