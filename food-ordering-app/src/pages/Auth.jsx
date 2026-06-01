import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { auth } from "../utils/firebase";
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  updateProfile 
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { logIn } from "../store/slices/userSlice";

const Auth = () => {
  // 1. SIMPLE STATE
  const [isLoginView, setIsLoginView] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // 2. VERY SIMPLE AUTHENTICATION LOGIC
  const handleAuthSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(""); // Clear old errors
    setIsLoading(true); // Start loading

    try {
      if (isLoginView) {
        // --- LOG IN ---
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        // --- SIGN UP ---
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        // Save name to Firebase
        await updateProfile(userCredential.user, { displayName: name });
        
        // --- FIX: MANUALLY UPDATE REDUX ---
        // We do this because onAuthStateChanged triggers BEFORE the name is saved above.
        const { uid, email: userEmail } = auth.currentUser;
        dispatch(
          logIn({ uid: uid, email: userEmail, name: name })
        );
      }
      
      // If success, simply go to Home page
      navigate("/");

    } catch (error) {
      // If error, just show the message Firebase gives us (like "Invalid password")
      setErrorMessage(error.message);
      setIsLoading(false); // Stop loading so user can try again
    }
  };

  // 3. UI RENDER (Simple Tailwind Form)
  return (
    <div className="w-full min-h-screen bg-gray-50 flex items-center justify-center p-4">
      
      {/* Container */}
      <div className="bg-white p-8 rounded-4xl shadow-lg w-full max-w-[400px] border border-gray-100">
        
        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-black text-swiggy-dark">
            {isLoginView ? "Sign In" : "Sign Up"}
          </h1>
          <p className="text-gray-400 mt-2 font-medium">
            {isLoginView ? "Welcome back!" : "Create a new account"}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleAuthSubmit} className="space-y-4">
          
          {/* Show Name input only if Signing Up */}
          {!isLoginView && (
            <div>
              <label className="text-sm font-bold text-swiggy-dark ml-1">Full Name</label>
              <input
                type="text"
                className="w-full bg-gray-50 px-5 py-3 rounded-xl outline-none border focus:border-swiggy-orange"
                placeholder="Ex: Md Mustafa"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          )}

          <div>
            <label className="text-sm font-bold text-swiggy-dark ml-1">Email</label>
            <input
              type="email"
              className="w-full bg-gray-50 px-5 py-3 rounded-xl outline-none border focus:border-swiggy-orange"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="text-sm font-bold text-swiggy-dark ml-1">Password</label>
            <input
              type="password"
              className="w-full bg-gray-50 px-5 py-3 rounded-xl outline-none border focus:border-swiggy-orange"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Error Message */}
          {errorMessage && (
            <p className="text-red-500 font-bold text-sm text-center bg-red-50 p-2 rounded-lg">
              {errorMessage}
            </p>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full ${isLoading ? "bg-gray-400 cursor-not-allowed" : "bg-swiggy-orange hover:bg-orange-600 cursor-pointer"} text-white py-4 rounded-xl font-bold text-lg transition-all mt-2`}
          >
            {isLoading ? "Processing..." : (isLoginView ? "Log In" : "Create Account")}
          </button>
        </form>

        {/* Toggle Login/Signup */}
        <div className="mt-8 text-center border-t border-gray-100 pt-6">
          <p className="text-gray-500 text-sm">
            {isLoginView ? "Don't have an account? " : "Already have an account? "}
            <span 
               onClick={() => {
                 setIsLoginView(!isLoginView);
                 setErrorMessage(""); // clear errors on toggle
               }}
               className="text-swiggy-orange font-bold cursor-pointer hover:underline"
            >
              {isLoginView ? "Sign up here" : "Log in here"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
