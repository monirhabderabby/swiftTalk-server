const { createConversation, getConversation } = require("../services/conversation.services");

exports.createConversation = async (req, res) => {
    try {
        const result = await createConversation(req.body);

        return res.status(200).json({
            success: true,
            result: result,
        });
    } catch (error) {
        res.status(400).json({
            status: "failed",
            message: "Failed to create conversation",
            error: error.message,
        });
    }
};

exports.getConversations = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await getConversation(id);
        res.status(200).json({
            success: true,
            data: result,
        });
    } catch (error) {
        res.status(400).json({
            status: "failed",
            message: "Failed to get conversation",
            error: error.message,
        });
    }
};
