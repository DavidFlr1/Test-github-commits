import React, {useState} from 'react'
import axios from 'axios'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import './styles.css'

const Commits = () => {
  const [commits, setCommits] = useState([])
  const [error, setError] = useState({message: 'Lets search for commits...', additional: 'Give me the username and repository name'})
  const initialStateValues = {
    username: "DavidFlr1",
    repository: "Test-github-commits"
  };
  const [values, setValues] = useState(initialStateValues);

  const handleInputChange = e => {
    const { name, value } = e.target; // Allow acces to the control name and its value
    setValues({...values, [name]: value}) // ...values copy actual value and update the value
  };

  const getCommits = async () => {

    axios.get(`https://api.github.com/repos/${values.username}/${values.repository}/commits`)
      .then(response => {
        if(response.status === 200) {
          setCommits(response.data)
        }
      })
      .catch(error => {
        console.log(error.message)
        setError({message: 'Ops... something went wrong', additional: 'Verify the username and respository name is correct'})
        setCommits([])
      })
      

    console.log(commits)
  }

  return (
    <div>
      <Container>
      <h2 className="text-center">Commit history</h2>
        <Row>
          <Col>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>User</Form.Label>
                <Form.Control name="username" type="text" placeholder="Enter user name" onChange={handleInputChange} value={values.username} />
                <Form.Text className="text-muted">
                  The user from where we are going to search the repository
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Repository</Form.Label>
                <Form.Control name="repository" type="text" placeholder="Enter repository name" onChange={handleInputChange} value={values.repository} />
                <Form.Text className="text-muted">
                  The repository from where we are going to take the commits
                </Form.Text>
              </Form.Group>

              <Button variant="primary" onClick={() => getCommits()}>
                Get Commits
              </Button>
            </Form>
          </Col>
        </Row>
        <Row>
          <div className="commits-box">

          </div>
        </Row>
      </Container>
    </div>
  )
}

export default Commits