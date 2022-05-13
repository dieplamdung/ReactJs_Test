import React from 'react';
import {
  Root,
  TitleHiName,
  TitleAction,
  WrapContent,
  WrapContentCard,
  WrapCard,
  Shadow1,
  Shadow2,
  BtnChooseCart
} from './styled';

function ContentCenter({ onGetCard, disableBtnChooseCard, itemCard }) {
  return (
    <Root>
      <TitleHiName>Hi FNAME,</TitleHiName>
      <TitleAction>Let’s Play! 👋</TitleAction>
      <WrapContent>
        <WrapContentCard>
          <WrapCard>
            {!!itemCard?.image ? (
              <img src={itemCard?.image} />
            ) : (
              <p>CARD IMAGE SHOULD BE HERE</p>
            )}
          </WrapCard>
          <Shadow1 />
          <Shadow2 />
        </WrapContentCard>
        <BtnChooseCart
          onClick={() => {
            !disableBtnChooseCard && onGetCard();
          }}>
          Choose Cart
        </BtnChooseCart>
      </WrapContent>
    </Root>
  );
}

export default ContentCenter;
