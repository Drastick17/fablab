import "./App.css";
import SignIn from "./components/SingIn";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp from "./components/Register";
import EmailVerification from "./components/EmailVerification";
import ForgotPassword from "./components/ForgotPassword";
import PasswordRecovery from "./components/PasswordRecovery";
import Services from "./components/Services";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <SignIn />
        </div>
      ),
    },
    {
      path: "/sign-up",
      element: (
        <div>
          <SignUp />
        </div>
      ),
    },
    {
      path: "/email-verification",
      element: (
        <div>
          <EmailVerification />
        </div>
      ),
    },
    {
      path: "/forgot-password",
      element: (
        <div>
          <ForgotPassword />
        </div>
      ),
    },
    {
      path: "/password-recovery",
      element: (
        <div>
          <PasswordRecovery />
        </div>
      ),
    },
    {
      path: "/services",
      element: (
        <div>
          <Services />
        </div>
      ),
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
