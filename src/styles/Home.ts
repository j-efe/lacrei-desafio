import styled from "styled-components";

export const HomeLeftInfos = styled.div`
width: 100%;
height: auto;

h1 {
    font-weight: 700;
    font-size: 3rem;
    color: #1F1F1F;
    margin-bottom: 3.2rem;

  @media (min-width: 700px) {
    font-weight: 700;
    font-size: 4.8rem;
    line-height: 6.5rem;
    color: #1F1F1F;
    margin-bottom: 3.2rem;
  }
}

p {
  font-weight: 400;
  font-size: 2.4rem;
  line-height: 3.3rem;
  color: #515151;

  margin-bottom: 4.8rem;
}

div {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  @media (min-width: 700px) {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 3rem;
  }
  
  .pessoa-usuaria, .profissional {
    border: none;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 0.8rem;

    width: 15rem;
    height: 3rem;

    font-weight: 600;
    font-size: 1.4rem;

    @media (min-width: 700px) {
    width: 19.2rem;
    height: 4.8rem;

    font-weight: 700;
    font-size: 1.8rem;
    line-height: 2.5rem;
  }
  }

  .pessoa-usuaria {
    background: #018762;
    border-radius: 0.8rem;

    color: #FFF;

    &:hover {
      cursor: pointer;
      background: #4EAB91;
    }
  }

  .profissional {
    background: #FFFFFF;
    border: 2px solid #018762;

    color: #018762;

    &:hover {
      cursor: pointer;
      color: #4EAB92;
    }
  }
}
`