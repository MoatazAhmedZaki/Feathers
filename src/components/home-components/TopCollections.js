import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductHomeCard from "../products/ProductHomeCard.js";
export default function TopCollections({
  NewArrivals,
  text,
}) {
  return (
    <Container className="my-3 top-collection">
      {console.log("new", NewArrivals)}
      <Row>
        {NewArrivals.map((item, i) =>
          i === 0 ? (
            <Col lg={6} md={12} sm={12}>
              <ProductHomeCard
                item={item}
                text={text}
              />
            </Col>
          ) : (
            <Col lg={3} md={12} sm={12}>
              <ProductHomeCard
                item={item}
                text={text}
              />
            </Col>
          )
        )}
      </Row>
    </Container>
  );
}
