import Reveal from "./Reveal";
import "./CtaBand.css";

export default function CtaBand() {
  return (
    <section className="cta-band" id="tai-app" aria-label="Đặt tài xế ngay">
      <div className="container cta-band__inner">
        <Reveal>
          <div className="cta-band__copy">
            <p className="section-label cta-band__label">Sẵn sàng xuất phát</p>
            <h2 className="cta-band__title">
              Đặt tài xế ngay.
              <span>An tâm về nhà.</span>
            </h2>
            <p className="cta-band__desc">
              Gọi hotline hoặc quét QR Zalo để được hỗ trợ nhanh nhất.
            </p>
            <div className="cta-band__actions">
              <a className="btn btn--amber" href="tel:0961132473">
                0961 132 473
              </a>
              <a
                className="btn btn--ghost"
                href="https://zalo.me/0961132473"
                target="_blank"
                rel="noreferrer"
              >
                Chat Zalo
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="cta-band__qr">
            <img src="/images/qr-support.jpg" alt="QR hỗ trợ Zalo CHILLGO" />
            <p>Quét mã để được hỗ trợ</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
