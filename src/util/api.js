import axios from "axios";
import { Base } from "./base";

// Create card
const createCard = async (author, recipient, message, audioFile, sticker) => {
  console.log("Creating new card");

  const data = new FormData();
  data.append("author", author);
  data.append("recipient", recipient);
  data.append("message", message);
  data.append("sticker", sticker);
  if (audioFile) {
    data.append("file", audioFile, "sample");
  }

  axios.post(`${Base}/card/new`, data);
};

//  Fetch single card
const fetchCard = async (id) => {
  let fetchedCard = await axios.get(`${Base}/card/single/${id}`);

  if (fetchedCard) {
    return fetchedCard.data.data;
  }
  return null;
};

// Fetch all students
const fetchStudents = async () => {
  let fetchedStudentList = await axios.get(`${Base}/card/allstudents`);

  if (fetchedStudentList) {
    return fetchedStudentList.data.data;
  }
};

// Set letter to "sent" status
const setOpened = async (id) => {
  await axios.post(`${Base}/card/opened`, { _id: id });
};

export { createCard, fetchCard, fetchStudents, setOpened };