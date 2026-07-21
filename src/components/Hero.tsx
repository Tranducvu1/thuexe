import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__media" aria-hidden>
        <img src="/images/hero-bg.jpg" alt="" className="hero__img" />
        <div className="hero__shade" />
        <div className="hero__grain" />
      </div>

      <div className="container hero__content">
        <p className="hero__brand">CHILLGO</p>
        <h1 className="hero__title">
          Thuê tài xế
          <br />
          an tâm về nhà
        </h1>
        <p className="hero__desc">
          Dịch vụ lái xe hộ chuyên nghiệp — nhanh, lịch sự, bảo mật thông tin
          khách hàng.
        </p>
        <div className="hero__actions">
          <a className="btn btn--amber" href="tel:0961132473">
            Gọi ngay 0961 132 473
          </a>
          <a className="btn btn--ghost" href="#dich-vu">
            Xem dịch vụ
          </a>
        </div>
      </div>
    </section>
  );
}
