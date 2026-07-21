import { PHONE_DISPLAY, PHONE_TEL, ZALO_URL } from "../config";
import Reveal from "./Reveal";
import "./CtaBand.css";

export default function CtaBand() {
  return (
    <section className="cta-band" id="tai-app" aria-label="Gọi tài xế ngay">
      <div className="container cta-band__inner">
        <Reveal>
          <div className="cta-band__copy">
            <p className="section-label cta-band__label">Sẵn sàng về nhà</p>
            <h2 className="cta-band__title">
              Đã uống rượu bia?
              <span>Gọi Tài xế 247 ngay.</span>
            </h2>
            <p className="cta-band__desc">
              Có mặt sau 15–20 phút · Phục vụ 24/7 · Giá từ 199.000đ
            </p>
            <div className="cta-band__actions">
              <a className="btn btn--amber" href={PHONE_TEL}>
                ☎ Gọi ngay {PHONE_DISPLAY}
              </a>
              <a
                className="btn btn--ghost"
                href={ZALO_URL}
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
            <img
              src="/images/qr-zalo.jpg"
              alt="QR Zalo Lái Xe Thuê — quét để kết bạn"
            />
            <p>Quét mã Zalo để được hỗ trợ nhanh</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
