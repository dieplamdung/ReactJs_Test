export const getTime = () => {
    const today = new Date();
    const y = today.getFullYear();
    const m = ('0' + (today.getMonth() + 1)).slice(-2);
    const d = ('0' + today.getDate()).slice(-2);
    const h = today.getHours();
    const mu = today.getMinutes();

    return `${d}/${m}/${y} ${h}:${mu}`;
  };
