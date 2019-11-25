import React, { useState } from "react";
import { Container, Row, Col } from "../../elements/elements";
import Media from "../Media";
import styled from "styled-components";
import Answer from "../Answer";
import Explanation from "../Explanation";
import Actions from "./Actions";
import { useSelector } from "react-redux";

const QuestionSingle = ({
  question,
  question: { id, t, m, v, nr, p, r, userAns }
}) => {
  const [showExplanation, setShowExplanation] = useState(false);
  const { kat } = useSelector(state => state.questionsReducer);

  return (
    <Container>
      <Row>
        <Info>
          <strong>{nr}</strong> kat. {kat.toUpperCase()}, pkt {p}
        </Info>
      </Row>
      <Row>
        <Col pr>
          <Media m={m} v={v} />
        </Col>
        <Col pl flex column>
          <div className="d-flex mt-auto justify-content-end">
            <button className="btn btn-primary">Następne</button>
          </div>
        </Col>
      </Row>
      <Row mt>
        <Col>
          <Text>{t}</Text>
          <Answer {...question} />
        </Col>
      </Row>
      {showExplanation && <Explanation {...question} />}
    </Container>
  );
};

const Text = styled.h5`
  text-align: center;
  margin: 0;
  padding: 0;
  margin-top: 5px;
  @media (${({ theme }) => theme.tablet}) {
    margin-top: 0;
  }
`;

const Info = styled.p`
  margin: 0;
  padding: 0;
  margin-bottom: 10px;
`;

export default QuestionSingle;