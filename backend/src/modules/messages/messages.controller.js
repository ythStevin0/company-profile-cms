import messageService from './messages.service.js';

export const getMessages = async (req, res) => {
    try {
        const messages = await messageService.getAllMessages();
        res.json({ success: true, data: messages });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

export const createMessage = async (req, res) => {
    try {
        const message = await messageService.createMessage(req.body);
        res.status(201).json({ success: true, data: message });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

export const deleteMessage = async (req, res) => {
    try {
        await messageService.deleteMessage(req.params.id);
        res.json({ success: true, message: 'Message deleted' });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};