import React, {useState, useEffect} from 'react'
import axios from 'axios'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Button from 'react-bootstrap/Button'

import './styles.css'
const Home = () => {
  const [cursor, setCursor] = useState({})
  const [emojis, setEmojis] = useState([])

  const getEmojis = () => {
    var emojiArray = []
    axios.get(`https://api.github.com/emojis`)
    .then(response => {
      if(response.status === 200) {
        for(var i in response.data){
          if(emojis.length < 100){
            emojiArray.push([i, response.data[i]])
            setEmojis(emojiArray)
          } else { break }
        }
      }
    })
    .catch(error => {
      console.log(error.message)
    })
  }

  useEffect(() => {
    if(emojis.length === 0){
      getEmojis()
    }
  })

  return (
    <Container>
      <h1 className="text-center">CHOSEE YOUR CURSOR</h1> <br/>
      <Row>
        <Col style={{display: "flex"}}>
          <div className="emojis-container">
            {emojis.map(element => (
              <Button variant="light" onClick={() => setCursor(element[1])}><img src={element[1]} className="emojis-button"/></Button>
            ))}
          </div>
            <Button onClick={() => getEmojis()} className="emoji-button">Get Emojis</Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="cursor-container" style={{cursor: `url(${cursor}), auto`}}></div>
        </Col>
      </Row>
    </Container>
  )
}

export default Home
