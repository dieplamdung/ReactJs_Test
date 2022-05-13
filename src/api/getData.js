import axiosClient from './axiosClient';

const getData = {
  getDeckId: () => {
    const url = 'api/deck/new/shuffle/?deck_count=1';
    return axiosClient.get(url);
  },
  getNewCard: (deck_id) => {
    const url = `api/deck/${deck_id}/draw/?count=1`;
    return axiosClient.get(url);
  }
};

export default getData;
