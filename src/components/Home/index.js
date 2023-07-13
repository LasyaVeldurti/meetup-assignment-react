import {Link} from 'react-router-dom'

import Header from '../Header'

import ConfigurationContext from '../../context/ConfigurationContext'

import {
  HomeContainer,
  Heading,
  Text,
  HomeImage,
  RegisterButton,
  Welcome,
} from './styledComponents'

const Home = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {isRegistered, Name, topic} = value

      return (
        <>
          <Header />
          <HomeContainer>
            {isRegistered ? (
              <>
                <Welcome>Hello {Name} </Welcome>
                <Heading>Welcome to {topic} </Heading>
              </>
            ) : (
              <>
                <Heading>Welcome to Meetup</Heading>
                <Text>Please register for the topic</Text>
                <Link to="/register">
                  <RegisterButton type="button">Register</RegisterButton>
                </Link>
              </>
            )}

            <HomeImage
              src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
              alt="meetup"
            />
          </HomeContainer>
        </>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default Home
