const { createMessage } = require("../services/message.services");

exports.createMessage = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await createMessage({
            message: req.body,
            conversationId: id,
        });
        return res.status(200).json({
            success: true,
            data: result,
        });
    } catch (error) {
        res.status(400).json({
            status: "failed",
            message: "Failed to create conversation",
            error: error.message,
        });
    }
};
