import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Placeholder from 'react-bootstrap/Placeholder';

function LastBlockInfo(props) {
  const { blockInfo } = props;
  return (
    <Card>
      <Card.Header>Last Block Info</Card.Header>
      <Card.Body>
        <Card.Title>Main Info</Card.Title>
        {blockInfo ?
          <div>
            <Row>
              <Col>Block Number :</Col>
              <Col>{blockInfo.number}</Col>
            </Row>
            <Row>
              <Col>Block Hash :</Col>
              <Col>{blockInfo.hash}</Col>
            </Row>
          </div>
          :
          <div>
            <Row>
              <Col>
                <Placeholder as={Card.Text} animation="glow">
                  <Placeholder xs={3} />
                </Placeholder>
              </Col>
              <Col>
                <Placeholder as={Card.Text} animation="glow">
                  <Placeholder xs={6} />
                </Placeholder>
              </Col>
            </Row>
            <Row>
            <Col>
                <Placeholder as={Card.Text} animation="glow">
                  <Placeholder xs={3} />
                </Placeholder>
              </Col>
              <Col>
                <Placeholder as={Card.Text} animation="glow">
                  <Placeholder xs={8} />
                </Placeholder>
              </Col>
            </Row>
          </div>
        }
        <Button className='button-card' variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default LastBlockInfo;