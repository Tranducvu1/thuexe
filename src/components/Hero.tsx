import { BRAND, PHONE_DISPLAY, PHONE_TEL } from "../config";
import "./Hero.css";

const highlights = [
  "Có mặt sau 15–20 phút",
  "Phục vụ 24/7",
  "Giá từ 199.000đ",
];

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__media" aria-hidden>
        <img src="/images/hero-driver.jpg" alt="" className="hero__img" />
        <div className="hero__shade" />
        <div className="hero__grain" />
      </div>

      <div className="container hero__content">
        <p className="hero__brand">{BRAND}</p>
        <h1 className="hero__title">
          Dịch vụ
          <span className="hero__title-accent"> lái xe hộ 24/7</span>
        </h1>
        <p className="hero__hook">
          Đã uống rượu bia?{" "}
          <strong>Chúng tôi đưa bạn và xe về nhà an toàn.</strong>
        </p>

        <ul className="hero__points">
          {highlights.map((item) => (
            <li key={item}>
              <span className="hero__check" aria-hidden>
                ✓
              </span>
              {item}
            </li>
          ))}
        </ul>

        <div className="hero__actions">
          <a className="btn btn--amber" href={PHONE_TEL}>
            ☎ Gọi ngay {PHONE_DISPLAY}
          </a>
          <a className="btn btn--ghost" href="#dich-vu">
            Xem dịch vụ
          </a>
        </div>
      </div>
    </section>
  );
}
