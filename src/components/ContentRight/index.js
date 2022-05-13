import React from 'react';
import iconArrowRight from '../../assets/Icon/arrow-right.svg';
import {
  Root,
  ContentHistoryCart,
  Title,
  WrapItemCard,
  ImgCard,
  WrapInfoCard,
  NameCard,
  Description
} from './styled';

function ContentRight({ historyCard, onSelectCardHistory }) {
  return (
    <Root>
      <ContentHistoryCart>
        <Title>Your last cards</Title>

        {historyCard.map((elm, index) => {
          return (
            <WrapItemCard onClick={() => onSelectCardHistory(elm, index)}>
              <ImgCard src={elm?.image} />
              <WrapInfoCard>
                <NameCard>
                  {elm?.value}
                  {elm?.suit}
                  <img src={iconArrowRight} />
                </NameCard>
                <Description>{elm?.time}</Description>
              </WrapInfoCard>
            </WrapItemCard>
          );
        })}
      </ContentHistoryCart>
    </Root>
  );
}

export default ContentRight;
