import styled from "styled-components";
import { PropsColor } from "./props";


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

    &:hover {
      cursor: pointer;
      color: #49A68C;
    }
  }
`

export const MenuHeader = styled.div`
  display: flex;
  gap: 4rem ;
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