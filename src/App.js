import React, { Component } from 'react';
import Counter from './component/Counter.jsx';
import { Container, Row, Card } from 'react-bootstrap'
//import CounterTwo from './CounterTwo.jsx';
//import '../App.css';



class App extends Component {
  constructor() {
    super();
    this.state = { countone: 0, countwo: 0 };
    this.decrementCountOne = this.decrementCountOne.bind(this)
    this.incrementCountOne = this.incrementCountOne.bind(this)
    this.decrementCountTwo = this.decrementCountTwo.bind(this)
    this.incrementCountTwo = this.incrementCountTwo.bind(this)
  }

  decrementCountOne() {
    if (this.state.countone > 0) {
      this.setState({ countone: this.state.countone - 1 })
    }
  }

  incrementCountOne() {
    if (this.state.countone < 10) {
      this.setState({ countone: this.state.countone + 1 })
    }
  }

  decrementCountTwo() {
    if (this.state.countwo > 0) {
      this.setState({ countwo: this.state.countwo - 1 })
    }
  }

  incrementCountTwo() {
    if (this.state.countwo < 10) {
      this.setState({ countwo: this.state.countwo + 1 })
    }
  }

  render() {
    return (
      <div>
        <Container>
          <Row className="justify-content-md-center">
            <Card className="text-center" style={{ width: '18rem' }}>
              <Card.Body className="rounded mx-auto d-block">
                <div>
                  <p>Count 1</p>
                  <Counter
                    id="moinsUn"
                    count={this.state.countone}
                    addFunction={this.incrementCountOne}
                    substractFunction={this.decrementCountOne}
                  />
                </div>

                <div>
                  <p className="mt-4" >Count 2</p>
                  <Counter
                    id="moinsUn"
                    count={this.state.countwo}
                    addFunction={this.incrementCountTwo}
                    substractFunction={this.decrementCountTwo}
                  />
                </div>
              </Card.Body>
            </Card>
          </Row>
        </Container>
      </div>

    )
  }
}


export default App
