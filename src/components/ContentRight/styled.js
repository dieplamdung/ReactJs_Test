import styled from 'styled-components';

export const Root = styled.div`
  flex: 3;
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 20px;
`;

export const ContentHistoryCart = styled.div`
  width: 285px;
  min-height: 398px;
  display: flex;
  flex-direction: column;

  background: #ffffff;
  border-radius: 24px;

  padding: 32px 0;
  margin: 20px 0;

  -webkit-box-shadow: 0px 2px 12px -7px rgba(0, 0, 0, 0.4);
  box-shadow: 0px 2px 12px -7px rgba(0, 0, 0, 0.4);
`;

export const Title = styled.p`
  font-family: 'Poppins';
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  color: var(--color-text-title);
  padding: 0 32px;
  margin-bottom: 12px;
`;

export const WrapItemCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 10px 20px;
  margin: 10px 10px;
  border-radius: 6px;
  cursor: pointer;

  :hover {
    background-color: #bdbdbd40;
  }
`;

export const ImgCard = styled.img`
  width: 56px;
  min-width: 56px;
  height: auto;
  min-height: 56px;
  margin-right: 24px;
  border: none;
`;

export const WrapInfoCard = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const NameCard = styled.p`
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-family: 'Inter';
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: var(--color-text-title);
`;

export const Description = styled.p`
  font-family: 'Inter';
  font-weight: 600;
  font-size: 13px;
  line-height: 18px;
  color: var(--color-text-description);
`;
