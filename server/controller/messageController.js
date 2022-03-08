import message from "../model/Message.js";

export const newMessage = async (req, res) => {
  const newTextMessage = new message(req.body);
  try {
    await newTextMessage.save();
    res.status(200).json("message saves successfully");
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getMessage = async (req, res) => {
  try {
    const messages = await message.find({ conversationId: req.params.id });
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json(error);
  }
};
