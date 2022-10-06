import { createContext, useContext, useEffect, useState } from 'react';
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
	GoogleAuthProvider,
	signInWithPopup,
	sendPasswordResetEmail,
	sendEmailVerification,
} from 'firebase/auth';
import { auth } from '../../firebase';
import { useDispatch, useSelector } from 'react-redux';
import { getUserData, setUserDisplayName } from '../../redux/Actions';

const authContext = createContext();

export const useAuth = () => {
	const dispatch = useDispatch();
	const context =  useContext(authContext);
	const userLogeado =  useSelector((state) => state.loggedUser);


	const { user } = context;
	if (user) {
		if (!Object.keys(userLogeado).length) {
			dispatch(getUserData(user));
		} else {
			if (!userLogeado.displayName)
				dispatch(setUserDisplayName(userLogeado.email));
		}
	}
	if (!context) throw new Error('There is no Auth provider');
	return context;
};

export function AuthProvider({ children }) {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	const signup = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password);
	};

	const verifyEmail = () => {
		return sendEmailVerification(auth.currentUser);
	};

	const login = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password);
	};

	const loginWithGoogle = () => {
		const googleProvider = new GoogleAuthProvider();
		return signInWithPopup(auth, googleProvider);
	};

	const logout = () => signOut(auth);

	const resetPassword = async (email) => sendPasswordResetEmail(auth, email);

	useEffect(() => {
		const currentUser = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
			// console.log(currentUser, "CURRENT USER")
			setLoading(false);
		});
		return () => currentUser();
	}, []);
	//console.log(user, "el user")
	return (
		<authContext.Provider
			value={{
				signup,
				login,
				user,
				logout,
				loading,
				loginWithGoogle,
				resetPassword,
			}}
		>
			{children}
		</authContext.Provider>
	);
}