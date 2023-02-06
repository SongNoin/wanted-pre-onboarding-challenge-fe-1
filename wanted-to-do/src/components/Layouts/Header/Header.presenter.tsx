import styled from "styled-components";
import { colors } from "../../../commons/styles/color";

export default function HeaderPresenter() {
  return <Wrap>To Do</Wrap>;
}
const Wrap = styled.div`
  height: 48px;
  background-color: ${colors.main};
  color: ${colors.white};
  display: flex;
  align-items: center;
  padding: 0px 30px;
`;
