import React from 'react';
import logo from '../../assets/Icon/logo.svg';
import iconBtn from '../../assets/Icon/icon-btn-restart.svg';
import { uppercaseFirstChart } from '../../utils/uppercase-first-chart';
import {
  Account,
  Button,
  ContentBottom,
  ContentTop,
  ImgUser,
  Logo,
  Root,
  Title,
  WrapName
} from './styled';

function ContentLeft({onRestartGame}) {
  return (
    <Root>
      <ContentTop>
        <Logo src={logo} />
        <Title>Admin tools</Title>
        <Button onClick={onRestartGame}>
          <img src={iconBtn} />
          Restart Game
        </Button>
      </ContentTop>
      <ContentBottom>
        <Account>
          <ImgUser
            style={{
              backgroundImage: `url(${'https://www.pngfind.com/pngs/m/470-4703547_icon-user-icon-hd-png-download.png'})`
            }}
          />
          <WrapName>
            <span className="user_name">{uppercaseFirstChart('them')}</span>
            <span className="type_account">Free account</span>
          </WrapName>
        </Account>
      </ContentBottom>
    </Root>
  );
}

export default ContentLeft;
