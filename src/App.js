import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [token, setToken] = useState({});
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setToken({});
    window.otpless = (otplessUser) => {
      setToken(otplessUser);
      setIsVisible(true);
      alert("Registration and Signup Successfully");
      console.log(token);
    };
  }, []);

  return (
    <div className="container">
      {isVisible && (
        <div className="card">
          <p> Token- {token.token}</p>
          <p> Time- {token.timestamp}</p>
          <p> Timezone- {token.timezone}</p>
          <p>Name- {token.email.name ? token.email.name : null}</p>
          <p>Email- {token.email.email}</p>
          <p>waNumber- +{token.waNumber}</p>
        </div>
      )}
    </div>
  );
}