import React from 'react'
import styled from "styled-components"
import FormHeader from './FormHeader'
const Form = () => {
    return (
        <Container>
            <FormHeader/>
        <Wrapper>
            <LeftItem>
                <FacebookHelp>
                    Facebook helps you connect and 
                    share with the people in your life.
                </FacebookHelp>
                <Image/>
            </LeftItem>
            <RightItem>
                <CreateAccount>Create an account</CreateAccount>
                <QuickEasy>It's quick and easy</QuickEasy>
               <InputHolder>
               <NamesInput>
                   <Inputs placeholder="First name"/>
                   <Inputs placeholder="Surname"/>
                </NamesInput>
                <Inputs placeholder="Mobile number or email address"/>
                <Inputs placeholder="New password" type="password"/>
               </InputHolder>
              <BirthdayHolder>
              <Birhday>Birthday</Birhday>
               <BirthdayInputHolder>
                   <Date type="check"/>
                   <Month type="check"/>
                   <Year type="check"/>
                   <QuestionIcon>?</QuestionIcon>
               </BirthdayInputHolder>
              </BirthdayHolder>
              <GenderHolder>
                <Gender>Gender</Gender>
                <GenderInputHolder>
                    <FemaleInputs>
                        <GenderInput type="radio"/>
                        <TheGender>Female</TheGender>
                    </FemaleInputs>
                    <FemaleInputs>
                        <GenderInput type="radio"/>
                        <TheGender>Male</TheGender>
                    </FemaleInputs>
                    <FemaleInputs>
                        <GenderInput type="radio"/>
                        <TheGender>Custom</TheGender>
                    </FemaleInputs>
                    <QuestionIcon>?</QuestionIcon>
                </GenderInputHolder>
              </GenderHolder>
              <Rules>
                  By clicking Sign Up, you agree to our <span>Terms, Data Policy</span>
                  and  <span>Cookie Policy.</span> You may recieve SMS notifications 
                  from us and can opt out at any time
              </Rules>
              <SignUp>Sign Up</SignUp>
              <LastThing>
                  <span>Create a Page</span> for a celebrity, band or business.
              </LastThing>
            </RightItem>
        </Wrapper>
    </Container>
    )
}

export default Form

const LastThing = styled.div``
const SignUp = styled.div``
const Rules = styled.div`
width: 50%;
font-size: 13px;
`
const TheGender = styled.div``
const GenderInput = styled.input``
const FemaleInputs = styled.div``
const GenderInputHolder = styled.div``
const Gender = styled.div``
const GenderHolder = styled.div``
const QuestionIcon = styled.div``
const Year = styled.input``
const Month = styled.input``
const Date = styled.input``
const BirthdayInputHolder = styled.div``
const Birhday = styled.div``
const BirthdayHolder = styled.div``
const Inputs = styled.input``
const NamesInput = styled.div``
const InputHolder = styled.div``
const QuickEasy = styled.div``
const CreateAccount = styled.div`

`
const Image = styled.img`
width: 100%;
object-fit: cover;
`
const FacebookHelp = styled.div`
width: 80%;

margin-bottom: 5px;

font-family: Roboto, HelveticaNeue, Arial, sans-serif;
font-size: 20px;
font-weight: 400;

color: #1877f2;

`
const RightItem = styled.div`
width: 40%;
`
const LeftItem = styled.div`
display: flex;
width:50%; 
/* background-color: blue; */
flex-direction: column;
`
const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
`
const Wrapper = styled.div`
width: 90%;
display: flex;
/* background-color: red; */
height: calc(100vh - 70px);
display: flex;
justify-content: space-between;
`