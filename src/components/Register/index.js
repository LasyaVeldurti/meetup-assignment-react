import Header from '../Header'

import ConfigurationContext from '../../context/ConfigurationContext'

import {
  RegisterContainer,
  RegisterImage,
  Heading,
  FormContainer,
  TextContainer,
  RegisterButton,
  CustomLabel,
  CustomInput,
  CustomSelect,
  CustomOption,
  ErrorMsg,
} from './styledComponents'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

const Register = props => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        Name,
        topic,
        showErrMsg,
        errMsg,
        onRegisterDisplayName,
        onRegisterDisplayTopic,
        onRegister,
      } = value

      const onChangeNameInput = event => {
        onRegisterDisplayName(event.target.value)
      }

      const onChangeTopicsOptionID = event => {
        const topicName = topicsList.filter(
          eachTopic => eachTopic.id === event.target.value,
        )
        console.log(topicName)
        onRegisterDisplayTopic(topicName[0].displayText)
      }

      const onSubmitRegisterForm = event => {
        event.preventDefault()

        if (Name === '') {
          showErrMsg()
        } else {
          onRegister()
          const {history} = props
          history.replace('/')
        }
      }

      return (
        <>
          <Header />
          <RegisterContainer>
            <RegisterImage
              src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
              alt=" website register"
            />
            <TextContainer>
              <Heading>Let us join</Heading>
              <FormContainer onSubmit={onSubmitRegisterForm}>
                <CustomLabel htmlFor="name">Name</CustomLabel>
                <CustomInput
                  type="text"
                  id="name"
                  value={Name}
                  onChange={onChangeNameInput}
                  placeholder="Your Name"
                />
                <CustomLabel htmlFor="select">Topics</CustomLabel>
                <CustomSelect
                  id="select"
                  value={topic}
                  onChange={onChangeTopicsOptionID}
                >
                  {topicsList.map(eachOption => (
                    <CustomOption key={eachOption.id} value={eachOption.id}>
                      {eachOption.displayText}
                    </CustomOption>
                  ))}
                </CustomSelect>
                <RegisterButton type="submit">Register Now</RegisterButton>
                {showErrMsg && <ErrorMsg>{errMsg}</ErrorMsg>}
              </FormContainer>
            </TextContainer>
          </RegisterContainer>
        </>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Register
