import styled from "styled-components";

export const Container = styled.footer`
  width: 100vw;
  height: auto;
  padding: 0 6.4rem;
  background: #FFF;
  position: fixed;
  bottom: 0;

  h1 {
    margin-top: 3.5rem;
    margin-bottom: 0.8rem;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    
    color: #515151;
  }
  `;

export const MenuFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3.5rem;
  padding-top: 3.2rem;
  font-size: 1.6rem;
  line-height: 2.2rem;
  color: #1F1F1F;
  border-top: 1px solid #B0E0D3;
  
  p {
    &:hover {
      cursor: pointer;
      color: #5E5E5E;
    }
  }

  @media (min-width: 700px) {
    display: flex;
    flex-direction: row;
  }
`;
export const IconsFooter = styled.div`
  margin-top: 2.4rem;
  display: flex;
  gap: 3.6rem;

`