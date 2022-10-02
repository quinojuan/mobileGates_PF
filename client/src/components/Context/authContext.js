import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../../firebase";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "../../redux/Actions";

const authContext = createContext();
export const useAuth = () => {
  const userLogeado = useSelector((state) => state.loggedUser);
  const dispatch = useDispatch();
  const context = useContext(authContext);
  const { user } = context;

  if (user) {
    //console.log("Entro a user del primer if", userLogeado)
    if (!Object.keys(userLogeado).length) {
    //console.log("Entro a userlogeado del 2do if")
      dispatch(getUserData(user));
    }
  }
  if (!context) throw new Error("There is no Auth provider");
  return context;
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signup = (email, password) => {
    // console.log(email,password, "SIGN UP")
    return createUserWithEmailAndPassword(auth, email, password);
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
