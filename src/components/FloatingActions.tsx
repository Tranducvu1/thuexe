import { useEffect, useState } from "react";
import { ZALO_URL } from "../config";
import "./FloatingActions.css";

export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fab">
      <a
        className="fab__zalo"
        href={ZALO_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat Zalo"
      >
        <img src="/images/zalo.png" alt="" />
      </a>
      {showTop && (
        <button
          className="fab__top"
          aria-label="Lên đầu trang"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          ↑
        </button>
      )}
    </div>
  );
}
