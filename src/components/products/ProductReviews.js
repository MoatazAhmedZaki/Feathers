import React from "react";
import { Row, Col, Media, ProgressBar, Button } from "react-bootstrap";
import "../../stylesheets/ProductReviews.css";
import Rate from "rc-rate";

export default function ProductReviews({ addReview, text }) {
  return (
    <Row className=" py-5 ProductReviews ">
      <Col md={6} sm={12} className="text-center py-5">
        <Row>
          <Col md={6} sm={12}>
            <h2>4.5</h2>

            <p className="stars-rate mb-0 ">
              <Rate
                value={4.5}
                style={{ fontSize: 40 }}
                allowHalf
                disabled={true}
              />
            </p>
            <p>
              <small>
                {3} {text.AllOpinions}
              </small>
            </p>
          </Col>

          <Col md={6} sm={12}>
            <div className="w-25 inline-block">
              <p>
                <i className="fas fa-star"></i>1
              </p>
            </div>
            <div className="w-75 inline-block">
              <ProgressBar now={10} />
            </div>
            <div className="w-25 inline-block">
              <p>
                <i className="fas fa-star"></i> 2
              </p>
            </div>
            <div className="w-75 inline-block">
              <ProgressBar now={0} />
            </div>
            <div className="w-25 inline-block">
              <p>
                <i className="fas fa-star"></i> 3
              </p>
            </div>
            <div className="w-75 inline-block">
              <ProgressBar now={40} />
            </div>
            <div className="w-25 inline-block">
              <p>
                <i className="fas fa-star"></i> 4
              </p>
            </div>
            <div className="w-75 inline-block">
              <ProgressBar now={80} />
            </div>
            <div className="w-25 inline-block">
              <p>
                <i className="fas fa-star"></i> 5
              </p>
            </div>
            <div className="w-75 inline-block">
              <ProgressBar now={60} />
            </div>
          </Col>
        </Row>
        <Button className="add-comment-btn mt-3 px-4 " onClick={addReview}>
          {text.AddOpinion}
        </Button>
      </Col>

      <Col md={6} sm={12}>
        {[1, 2, 5].map((info) => (
          <Media>
            <img
              width={64}
              height={64}
              className="align-self-start mr-3 pp-img"
              src={require("../../imgs/pp.png")}
              // src={baseUrl + info.user.image}
              alt="Generic placeholder"
            />
            <Media.Body>
              <h5 className="pp-name">User Name {info}</h5>
              <p className="stars-rate mb-0">
                <Rate
                  value={info}
                  style={{ fontSize: 20 }}
                  allowHalf
                  disabled={true}
                />
              </p>
              <p className="pp-comment">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
            </Media.Body>
          </Media>
        ))}

        {/* 
        
        <Media>
          <img
            width={64}
            height={64}
            className="align-self-start mr-3 pp-img"
            src={require("../../imgs/pp.png")}
            alt="Generic placeholder"
          />
          <Media.Body>
            <h5 className="pp-name">John Doe</h5>
            <p className="stars-rate mb-0">
              <i className="fas fa-star"></i> <i className="fas fa-star"></i>
              <i className="fas fa-star"></i> <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </p>
            <p className="pp-comment">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </Media.Body>
        </Media>

        <Media>
          <img
            width={64}
            height={64}
            className="align-self-start mr-3 pp-img"
            src={require("../../imgs/pp.png")}
            alt="Generic placeholder"
          />
          <Media.Body>
            <h5 className="pp-name">John Doe</h5>
            <p className="stars-rate mb-0">
              <i className="fas fa-star"></i> <i className="fas fa-star"></i>
              <i className="fas fa-star"></i> <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </p>
            <p className="pp-comment">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </Media.Body>
        </Media>
        <Media>
          <img
            width={64}
            height={64}
            className="align-self-start mr-3 pp-img"
            src={require("../../imgs/pp.png")}
            alt="Generic placeholder"
          />
          <Media.Body>
            <h5 className="pp-name">John Doe</h5>
            <p className="stars-rate mb-0">
              <i className="fas fa-star"></i> <i className="fas fa-star"></i>
              <i className="fas fa-star"></i> <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </p>
            <p className="pp-comment">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </Media.Body>
        </Media> */}
      </Col>
    </Row>
  );
}
