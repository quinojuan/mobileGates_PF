const admin = require("firebase-admin")

const auth = admin.initializeApp().auth();

const getAllUsersFromFirebase = async (req, res) => {
	let users = await auth.listUsers()
	res.json(users)
}

const getUserByIdOfFirebase = async (req, res) => {
	const { id } = req.params
	let user = await auth.getUser(id)
	res.json(user)
}

module.exports = {
    getUserByIdOfFirebase,
    getAllUsersFromFirebase
}