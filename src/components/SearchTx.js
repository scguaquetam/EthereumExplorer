import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Card from 'react-bootstrap/Card';

const SearchTx = () => {
  return (
    <Card className='search-card'>
      <Card.Body>
        <Card.Title>Search Transaction</Card.Title>
        <InputGroup className="mb-3">
          <DropdownButton
            variant="outline-secondary"
            title="Dropdown"
            id="input-group-dropdown-1"
          >
            <Dropdown.Item href="#">Action</Dropdown.Item>
            <Dropdown.Item href="#">Another action</Dropdown.Item>
            <Dropdown.Item href="#">Something else here</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#">Separated link</Dropdown.Item>
          </DropdownButton>
          <Form.Control aria-label="Text input with dropdown button" />
        </InputGroup>
      </Card.Body>
    </Card>
  )
}

export default SearchTx