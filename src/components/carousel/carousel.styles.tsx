import styled from "styled-components";

export const SlideContainer = styled.section`
  width: 100%;
  height: 450px;
  border-radius: 10px;
`;

export const BaseArrow = styled.div`
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  font-size: 45px;
  color: #fff;
  z-index: 1;
  cursor: pointer;
`;

export const RightArrow = styled(BaseArrow)`
  right: 32px;
`;

export const LeftArrow = styled(BaseArrow)`
  right: 32px;
`;

export const SliderStyles = styled.div`
  position: relative;
  height: 100%;
`;

export const DotsContainerStyles = styled.div`
  display: flex;
  justify-content: center;
`;

export const DotStyle = styled.div`
  margin: 0 3px;
  cursor: pointer;
  font-size: 20px;
`;
