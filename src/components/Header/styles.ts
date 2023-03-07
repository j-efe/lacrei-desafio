import styled from "styled-components";
import { PropsColor } from "./props";


export const Container = styled.header`
  width: 100%;
  height: auto;
  padding: 1rem 6.4rem;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: #EEEEEE;

  @media (min-width: 700px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  h1 {
    margin-top: 0.8rem;
    font-size: 3.2rem;
    line-height: 4.4rem;
    color: #018762;

    &:hover {
      cursor: pointer;
      color: #49A68C;
    }
  }
`

export const MenuHeader = styled.div`
  display: flex;
  gap: 3rem;
`

export const MenuItem = styled.p<PropsColor>`
  font-size: 1.6rem;
  line-height: 2.2rem;

  color: ${({ color }) => color};
  transition: color 0.3s;
  &:hover {
    color: ${({ color }) => color === "#018762" ? "#6CB5A1" : "#CACACA"};
  }
`