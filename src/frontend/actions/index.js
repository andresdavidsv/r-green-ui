import axios from 'axios';

export const setFavorite = payLoad => ({
  type: 'SET_FAVORITE',
  payLoad,
})

export const loginRequest = payLoad => ({
  type: 'LOGIN_REQUEST',
  payLoad,
})

export const logoutRequest = payLoad => ({
  type: 'LOGOUT_REQUEST',
  payLoad,
})

export const registerRequest = payLoad => ({
  type: 'REGISTER_REQUEST',
  payLoad,
})

export const setError = payload => ({
  type: 'SET_ERROR',
  payload,
});

export const registerUser = (payLoad, redirectUrl) => {
  return (dispatch) => {
    axios.post('/auth/sign-up', payLoad)
      .then(({ data }) => dispatch(registerRequest(data)))
      .then(() => {
        window.location.href = redirectUrl
      })
      .catch(error => dispatch(setError(error)))
  };
};

export const loginUser = ({ email, password }, redirectUrl) => {
  return (dispatch) => {
    axios({
      url: '/auth/sign-in',
      method: 'post',
      auth: {
        username: email, password
      }
    })
      .then(({ data }) => {
        document.cookie = `email=${data.user.email}`;
        document.cookie = `first_name=${data.user.name}`;
        document.cookie = `last_name=${data.user.name}`;
        document.cookie = `user_name=${data.user.name}`;
        document.cookie = `id=${data.user.id}`;
        document.cookie = `token=${data.user.token}`;
        dispatch(loginRequest(data.user));
      })
      .then(() => {
        window.location.href = redirectUrl;
      })
      .catch(error => dispatch(setError(error)))
  }
};

