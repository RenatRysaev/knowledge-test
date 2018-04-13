export const isThereUser = ({ db = {}, login, password }) => (
  Boolean(db.login === String(login) && db.password === String(password))
);
