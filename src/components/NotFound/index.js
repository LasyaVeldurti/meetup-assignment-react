import {
  NotFoundContainer,
  NotFoundImage,
  Heading,
  Text,
} from './styledComponents'

const NotFound = () => (
  <NotFoundContainer>
    <NotFoundImage
      src="https://assets.ccbp.in/frontend/react-js/meetup/not-found-img.png "
      alt="not found"
    />
    <Heading>Page Not Found</Heading>
    <Text>We are sorry, the page you requested could not be found.</Text>
  </NotFoundContainer>
)
export default NotFound
