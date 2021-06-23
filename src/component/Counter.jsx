import React from 'react'
import Button from 'react-bootstrap/Button'

class Counter extends React.Component {

  render() {
    return (
      <div>
        <h2>{this.props.count}</h2>
        <Button className="m-2" style={{ borderRadius: '50px', height: '50px', width: '50px' }}
          variant="outline-danger"
          onClick={this.props.substractFunction}
        >-</Button>
        <Button className="m-2" style={{ borderRadius: '50px', height: '50px', width: '50px' }}
          variant="outline-success"
          onClick={this.props.addFunction}
        >+</Button>
      </div>
    )
  }
}

export default Counter