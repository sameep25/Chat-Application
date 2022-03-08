import axios from "axios";

const URL = "http://localhost:8000";

export const addUser = async (data) => {
  try {
    return await axios.post(`${URL}/add`, data);
  } catch (error) {
    console.log("error while calling addUser api ", error);
  }
};

export const getUsers = async () => {
  try {
    let response = await axios.get(`${URL}/users`);
    return response.data;
  } catch (error) {
    console.log("error while calling getUsers api ", error);
  }
};

export const setConversation = async (data) => {
  try {
    await axios.post(`${URL}/conversation/add`, data);
  } catch (error) {
    console.log("error while calling setConversation api ", error);
  }
};

export const getConversation = async (data) => {
  try {
    let response = await axios.post(`${URL}/conversation/get`, data);
    return response;
  } catch (error) {
    console.log("error while calling getConversation api", error);
  }
};

export const newMessage = async (data) => {
  try {
    await axios.post(`${URL}/message/add`, data);
  } catch (error) {
    console.log("error while calling newMeassage api", error);
  }
};

export const getMessages = async (id) => {
  try {
    let response = await axios.get(`${URL}/message/get/${id}`);
    return response;
  } catch (error) {
    console.log("error while calling getMessages Api", error);
  }
};
