import React, {useState, useEffect} from 'react'
import axios from 'axios'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserFriends, faUserPlus, faMapMarkedAlt, faLink, faCode, faEye } from '@fortawesome/free-solid-svg-icons'

import './styles.css'
const Profile = () => {
  // Declaring user and repos array and error message to handle empty arrays feedback
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState({message: 'Lets search an user profile...', additional: 'Give me the git user name'})
    // Setting initial values to fetch user and its repos
  const initialStateValues = {
    username: 'DavidFlr1'
  };
  const [values, setValues] = useState(initialStateValues);

  const handleInputChange = e => {
    const { name, value } = e.target; // Allow acces to the control name and its value
    setValues({...values, [name]: value}) // ...values copy actual value and update the value
  };

  // Fetching user from git api and set them into an array
  // Then fetch repos from git api and set them into an array
  // If error set commits to empty and display error message
  const getUser = async () => {
    axios.get(`https://api.github.com/users/${values.username}`)
      .then(response => {
        if(response.status === 200) {
          setUser(response.data)
          getRepos()
        }
      })
      .catch(error => {
        console.log(error.message)
        setError({message: 'Ops... something went wrong', additional: 'Verify if the git user profile exist'})
        setUser({})
      })
  }
  const getRepos = async () => {
    axios.get(`https://api.github.com/users/${values.username}/repos`)
      .then(response => {
        if(response.status === 200) {
          setRepos(response.data)
        }
      })
      .catch(error => {
        console.log(error.message)
        setRepos({})
      })
    console.log("Repositories", repos)
  }

  // Fetch user and repos with initial values and handle callbacks
  useEffect(() => {
    if(user.length === 0 || repos.length === 0){
      getUser()
      getRepos()
    }
  })

  return (
    <Container className="profile-container">
      <h1 className="text-center">PROFILE</h1> <br/>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>   
          <InputGroup className="mb-3">
            <Form.Control name="username" type="text" placeholder="Enter username profile" onChange={handleInputChange} value={values.username} />
            <Button variant="outline-secondary" id="button-addon2" onClick={() => getUser()}>Find</Button>
          </InputGroup> 
        </Col>
      </Row>
      <br/>
      <Row>
        {Object.keys(user).length !== 0
        ? 
        <>
          <Col md="3">
            <div className="profile-picture text-center">
              <img src={user.avatar_url !== null ? user.avatar_url : ''} className="profile-picture"/>
            </div>
            <br/>
            <div>
              <h4>{user.name}</h4>
              <p>{user.name}</p>
              <span>{user.bio}</span>
            </div>
            <br/>
            <div>
              <p>
                <FontAwesomeIcon icon={faUserFriends} style={{color: "gray"}}/> {user.followers} Followers 
                &nbsp;&nbsp;&nbsp;
                <FontAwesomeIcon icon={faUserPlus} style={{color: "gray"}}/> {user.following} Following
              </p>
              <p>
                <FontAwesomeIcon icon={faMapMarkedAlt} style={{color: "gray"}}/> {user.location}
                <br/>
                <FontAwesomeIcon icon={faLink} style={{color: "gray"}}/> {user.blog}
                <br/>
                <FontAwesomeIcon icon={faEye} style={{color: "gray"}}/> {user.public_repos} Public repositories
              </p>
            </div>
          </Col>
          <Col md="9" className="repositorie-container">
            <h4>Repositories</h4> <br/>
            <Container>
              <Row>
                {repos.map(element => (
                  <Col md="5" className="repositorie-box">
                    <a href={element.html_url} target="_blank">{element.name}</a>
                    <p className="repo-text" style={{height: "30px"}}>{element.description}</p>
                    <p className="repo-text"> <FontAwesomeIcon icon={faCode} style={{color: "darkgoldenrod"}}/> {element.language}</p>
                  </Col>
                ))}
              </Row>
            </Container>
          </Col>
        </>
        : <div><h4>{error.message} </h4><p>{error.additional}</p></div>
        }
      </Row>
    </Container>
  )
}

export default Profile
