import { BRAND, EMAIL, PHONE_DISPLAY, PHONE_TEL, ZALO_URL } from "../config";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <p className="footer__logo">
            <span>24/7</span> {BRAND}
          </p>
          <p>
            Dịch vụ lái xe hộ chuyên nghiệp.
            <br />
            Đưa bạn và xe về nhà an toàn — phục vụ 24/7.
          </p>
        </div>

        <div>
          <h4>Liên hệ</h4>
          <ul>
            <li>
              <a href={PHONE_TEL}>{PHONE_DISPLAY}</a>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </li>
            <li>
              <a href={ZALO_URL} target="_blank" rel="noreferrer">
                Zalo hỗ trợ
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4>Dịch vụ</h4>
          <ul>
            <li>
              <a href="#dich-vu">Theo chuyến</a>
            </li>
            <li>
              <a href="#dich-vu">Theo giờ</a>
            </li>
            <li>
              <a href="#dich-vu">Doanh nghiệp</a>
            </li>
            <li>
              <a href="#dich-vu">Sự kiện</a>
            </li>
          </ul>
        </div>

        <div>
          <h4>Khám phá</h4>
          <ul>
            <li>
              <a href="#top">Trang chủ</a>
            </li>
            <li>
              <a href="#bang-gia">Bảng giá</a>
            </li>
            <li>
              <a href="#quy-trinh">Quy trình</a>
            </li>
            <li>
              <a href="#feedback">Feedback</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__copy">
        © {new Date().getFullYear()} {BRAND} — Lái xe hộ 24/7
      </div>
    </footer>
  );
}
