import styled from 'styled-components';

export const Root = styled.div`
  flex: 5;
  display: flex;
  flex-direction: column;
  border: 1px solid;
  border-color: transparent #e4e4e4 transparent #e4e4e4;

  @media (max-width: 950px) {
    border-color: #e4e4e4 transparent #e4e4e4 transparent;
  }
`;

export const TitleHiName = styled.p`
  font-family: 'Poppins';
  font-weight: 500;
  font-size: var(--heading2);
  line-height: 32px;

  margin: 48px 30px 0 30px;
`;

export const TitleAction = styled.h2`
  font-family: 'Poppins';
  font-weight: 500;
  font-size: var(--heading1);
  line-height: 72px;
  color: var(--color-text-title);
  margin: 0 30px 0 30px;
`;

export const WrapContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 40px;
`;

export const WrapContentCard = styled.div`
  width: 100%;
  max-width: 350px;
  min-height: 420px;
`;

export const WrapCard = styled.div`
  flex: 1;
  min-height: 420px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 24px;
  background: var(--color-primary);
  z-index: 9;
  position: relative;

  img {
    width: 100%;
    height: auto;
  }

  p {
    font-family: 'Poppins';
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
    color: #fff;

    padding: 0 32px;
  }
`;

export const Shadow1 = styled.div`
  width: 96%;
  height: 50px;
  background-color: #cfc8ff;

  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;

  margin: 0 auto;

  transform: translateY(-40px);

  z-index: 8;
  position: relative;
`;

export const Shadow2 = styled.div`
  width: 90%;
  height: 50px;
  background-color: #cfc8ff;

  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;

  margin: 0 auto;

  transform: translateY(-80px);

  z-index: 7;

  -webkit-box-shadow: 1px 10px 11px -8px rgba(0, 0, 0, 0.6);
  box-shadow: 1px 10px 11px -8px rgba(0, 0, 0, 0.6);

  position: relative;
`;

export const BtnChooseCart = styled.button`
  width: 306px;
  height: 56px;

  border: none;
  border-radius: 16px;

  font-family: 'Inter';
  font-weight: 700;
  font-size: 14px;
  color: #fff;

  background: #1b1d21;
  margin: 70px 0 40px 0;

  cursor: pointer;

  @media (max-width: 950px) {
    margin-top: 0;
  }
`;
