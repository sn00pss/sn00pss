exports.success = (res, message, data = null) => {
    res.status(200).json({ success: true, message, data });
};

exports.error = (res, message, error = null) => {
    res.status(500).json({ success: false, message, error });
};
