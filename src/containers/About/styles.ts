import styled from 'styled-components'

export const GithubSecao = styled.div`
  margin-top: 32px;
  margin-bottom: 64px;
  width: 100%;
  display: flex;
  justify-content: space-evenly;

  @media (max-width: 768px) {
    display: block;

    img {
      width: 100%;
      height: 157px;
    }
  }

  img {
    height: 157px;
  }
`
