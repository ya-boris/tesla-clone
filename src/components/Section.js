import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

function Section({ title, description, backgroundImg, leftBtnText, rightBtnText, downArrow }) {
  return (
    <Wrap bgImage={backgroundImg}>
      <Fade bottom>
        <ItemText>
          <h1>{ title }</h1>
          { description &&
            <h2>{ description }</h2>
          }
        </ItemText>
      </Fade>

      <Fade bottom>
        <Buttons>
          <ButtonGroup>
            <LeftButton>
              { leftBtnText }
            </LeftButton>
            { rightBtnText &&
              <RightButton>
                { rightBtnText }
              </RightButton>
            }
          </ButtonGroup>
          <DownArrowGroup>
            { downArrow &&
              <DownArrow src="/images/down-arrow.svg" />
            }
          </DownArrowGroup>
        </Buttons>
      </Fade>
    </Wrap>
  )
}

export default Section;

const Wrap = styled.section`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: ${props => `url("/images/${ props.bgImage }")` }
`
const ItemText = styled.h1`
  padding-top: 16vh;
  text-align: center;
`

const Buttons = styled.div`
  text-align: center;
`

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`
const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  width: 256px;
  height: 40px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: var(--border-radius);
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 10px;
`
const RightButton = styled(LeftButton)`
  background: white;
  opacity: 0.65;
  color: black;
`

const DownArrowGroup = styled.div`
  height: 85px;
`

const DownArrow = styled.img`
  height: 25px;
  margin: 10px 0 50px;
  overflow-x: hidden;
  animation: animateDown infinite 1.5s;
`