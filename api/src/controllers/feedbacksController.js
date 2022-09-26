const { Feedbacks } = require('../db');

const getAllFeedbacks = (req, res) => {
	//
	try {
		//
	} catch (e) {
		console.log(e);
	}
};

const updateFeedback = (req, res) => {
	const { id } = req.query;
	try {
		//
	} catch (e) {
		console.log(e);
	}
};

const postFeedback = (req, res) => {
	const {
		/* ... */
	} = req.body;
	try {
		//
	} catch (e) {
		console.log(e);
	}
};

const deleteFeedback = (req, res) => {
	const { id } = req.params;
	try {
		//
	} catch (e) {
		//
	}
};

module.exports = {
	getAllFeedbacks,
	updateFeedback,
	postFeedback,
	deleteFeedback,
};
