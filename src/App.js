import { useEffect, useState } from 'react';
import styled from 'styled-components';
import getData from './api/getData';
import ContentCenter from './components/ContentCenter';
import ContentLeft from './components/ContentLeft';
import ContentRight from './components/ContentRight';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
import { getTime } from './utils/get-time';

const App = () => {
  const [deckId, setDeckId] = useState('');
  const [itemCard, setItemCard] = useState({});
  const [historyCard, setHistoryCard] = useState([]);
  const [remaining, setRemaining] = useState(52);
  const [disableBtnChooseCard, setDisableBtnChooseCard] = useState(false);

  useEffect(() => {
    handleGetDeckId();
  }, []);

  const handleGetDeckId = () => {
    getData
      .getDeckId()
      .then((res) => {
        if (!res.success) {
          throw res;
        }
        const { deck_id } = res;
        setDeckId(deck_id);
      })
      .catch((error) => {
        toast.error(error?.msg || 'Error!');
      });
  };

  const handleRestartGame = () => {
    handleGetDeckId();
    setItemCard('');
    setHistoryCard([]);
    setRemaining(52);
  };

  const handleGetCard = () => {
    if (remaining === 0)
      return toast.warning('No more cards to withdraw! Pls Restart Game.');
    setDisableBtnChooseCard(true);
    getData
      .getNewCard(deckId)
      .then((res) => {
        if (!res.success) {
          throw res;
        }

        const { cards, remaining } = res;

        setRemaining(remaining);
        handleAddCardToHistory(itemCard);

        setItemCard({
          ...cards[0],
          time: getTime()
        });
      })
      .catch((error) => {
        toast.error(error?.error || 'Error!');
      })
      .finally(() => {
        setDisableBtnChooseCard(false);
      });
  };

  const handleAddCardToHistory = (card) => {
    if (!card?.code) return;
    if (historyCard.length >= 3) {
      historyCard.pop();
    }
    setHistoryCard([card, ...historyCard]);
  };

const handleSelectCardHistory = (card,index)=>{
  historyCard.splice(index,1);
  historyCard.unshift(itemCard);
  setItemCard(card);
}

  return (
    <Root>
      <ContentLeft onRestartGame={handleRestartGame} />
      <ContentCenter
        onGetCard={handleGetCard}
        disableBtnChooseCard={disableBtnChooseCard}
        itemCard={itemCard}
      />
      <ContentRight historyCard={historyCard} onSelectCardHistory={handleSelectCardHistory}/>
      <ToastContainer
        position="top-right"
        hideProgressBar
        toastClassName="toast"
        limit={3}
        autoClose={3000}
      />
    </Root>
  );
};

export default App;

const Root = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  min-height: 100vh;
  background-color: var(--background-primary);

  @media (max-width: 950px) {
    flex-direction: column;
    padding: 20px;
  }
`;
