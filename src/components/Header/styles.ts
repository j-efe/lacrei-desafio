import styled from "styled-components";


export const Container = styled.header`
  background: #EEEEEE;
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 6.4rem;

  font-weight: 700;

  h1 {
    margin-top: 0.8rem;
    font-size: 3.2rem;
    line-height: 4.4rem;
    color: #018762;
  }
`
export const MenuHeader = styled.div`
  display: flex;
  gap: 4rem ;
  font-size: 1.6rem;
  line-height: 2.2rem;
  color: #1F1F1F;

  p{
    &:hover {
      cursor: pointer;
      color: #5E5E5E;
    }

  }
`