import axios from "axios";
const { REACT_APP_BASE_URL } = process.env;

export const getMessageAllByRoom = async (formdata) => {
  const messageChat = await axios.post(
    `${REACT_APP_BASE_URL}/api/v1/message`,
    formdata
  );
  return messageChat.data;
};

export const getExistUsername = async (formdata) => {
  const messageChat = await axios.post(
    `${REACT_APP_BASE_URL}/api/v1/username-message`,
    formdata
  );
  return messageChat.data;
};

export const createMessageChat = async (formdata) => {
  const messageChat = await axios.post(
    `${REACT_APP_BASE_URL}/api/v1/create`,
    formdata
  );
  return messageChat.data;
};
