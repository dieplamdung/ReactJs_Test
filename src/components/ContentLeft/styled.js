import styled from 'styled-components';

export const Root = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  padding: 20px;

`;

export const ContentTop = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  position: relative;

  ::before {
    content: '';
    position: absolute;
    left: 10px;
    right: 10px;
    bottom: 0;
    height: 1px;
    background-color: #f0f3f6;
  }

  @media (max-width: 950px) {
    height: auto;
    margin-top: 10px;

    ::before {
      display: none;
    }
  }
`;

export const Logo = styled.img`
  width: 158px;
  height: 43px;
`;

export const Title = styled.p`
  width: 100%;
  font-family: 'inter';
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  color: var(--color-text-description);
  padding: 0 20px;
  margin-top: 32px;

  @media (max-width: 950px) {
    text-align: center;
  }
`;

export const Button = styled.button`
  width: 216px;
  min-height: 56px;
  display: flex;
  align-items: center;

  font-family: 'Inter';
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #fff;

  background: var(--color-primary);
  border: none;
  border-radius: 12px;
  margin: 16px 0;

  cursor: pointer;

  :hover {
    background: #897ce4;
  }

  img {
    margin: 0 20px;
  }

  @media (max-width: 950px) {
    min-height: 40px;
  }
`;

export const ContentBottom = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
`;

export const Account = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: auto;
  margin-bottom: 30px;

  @media (max-width: 950px) {
    justify-content: center;
    margin-top: 30px;
  }
`;

export const ImgUser = styled.div`
  width: 40px;
  height: 40px;

  border-radius: 50%;

  background-size: cover;
  background-position: center;
`;

export const WrapName = styled.div`
  display: flex;
  flex-direction: column;

  font-family: 'Inter';
  font-weight: 600;

  margin-left: 16px;

  .user_name {
    font-size: 14px;
    line-height: 20px;
    color: var(--color-text-title);
  }

  .type_account {
    font-size: 13px;
    line-height: 18px;
    color: var(--color-text-description);
  }
`;
