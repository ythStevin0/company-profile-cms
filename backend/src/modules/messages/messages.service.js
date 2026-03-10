import Message from './messages.model.js';

const getAllMessages = async () => {
    return await Message.find().sort({ createdAt: -1 });
};

const createMessage = async (data) => {
    const message = new Message(data);
    return await message.save();
};

const deleteMessage = async (id) => {
    return await Message.findByIdAndDelete(id);
};

export default { getAllMessages, createMessage, deleteMessage };