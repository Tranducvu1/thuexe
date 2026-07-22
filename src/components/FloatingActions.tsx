import { useEffect, useState } from "react";
import { PHONE_DISPLAY, PHONE_TEL, ZALO_URL } from "../config";
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
        className="fab__call"
        href={PHONE_TEL}
        aria-label={`Gọi ngay ${PHONE_DISPLAY}`}
      >
        <span className="fab__call-icon" aria-hidden>
          <svg viewBox="0 0 24 24" fill="none">
            <path
              d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.2 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1L6.6 10.8Z"
              fill="currentColor"
            />
          </svg>
        </span>
        <span className="fab__call-pulse" aria-hidden />
      </a>

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
