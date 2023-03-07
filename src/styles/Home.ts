import styled from "styled-components";

export const HomeLeftInfos = styled.div`
width: 35rem;

h1 {
  font-weight: 700;
  font-size: 4.8rem;
  line-height: 6.5rem;
  color: #1F1F1F;
  
  margin-bottom: 3.2rem;
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
  gap: 3rem;

  .pessoa-usuaria, .profissional {
    border: none;

    width: 19.2rem;
    height: 4.8rem;

    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 0.8rem;

    font-weight: 700;
    font-size: 1.8rem;
    line-height: 2.5rem;
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