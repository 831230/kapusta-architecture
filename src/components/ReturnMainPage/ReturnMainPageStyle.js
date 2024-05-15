import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  margin-top: 16px;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    margin-bottom: 7px;
  }
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.04em;
  color: rgba(82, 85, 95, 0.7);
  padding-left: 16px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;