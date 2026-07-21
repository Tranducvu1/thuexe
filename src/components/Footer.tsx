import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <img src="/images/logo-footer.png" alt="CHILLGO" />
          <p>
            Công ty Cổ phần CHILLGO
            <br />
            S1.02 Vinhomes Smart City, Tây Mỗ, Nam Từ Liêm, Hà Nội
          </p>
        </div>

        <div>
          <h4>Liên hệ</h4>
          <ul>
            <li>
              <a href="tel:0961132473">0961 132 473</a>
            </li>
            <li>
              <a href="mailto:goilai24h@gmail.com">goilai24h@gmail.com</a>
            </li>
            <li>
              <a href="https://zalo.me/0961132473" target="_blank" rel="noreferrer">
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
        © {new Date().getFullYear()} Công ty Cổ phần CHILLGO
      </div>
    </footer>
  );
}
