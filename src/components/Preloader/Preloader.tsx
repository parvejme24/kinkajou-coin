import { useEffect, useState } from "react";
import LOGO_ICON from "../../assets/logo-icon.png";
import "./Preloader.css";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time and hide preloader
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds loading time

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;
  return (
    <div className="preloader">
      <div className="loader">
        <div className="logo-container">
          <img
            src={LOGO_ICON}
            alt="KinkajouCoin"
            className="logo mx-auto mt-10"
          />
          <div className="loading-bar">
            <div className="loading-progress"></div>
          </div>
        </div>
        <p className="loading-text">Loading KinkajouCoin</p>
      </div>
    </div>
  );
}
