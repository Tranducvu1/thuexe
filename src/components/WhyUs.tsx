import { BRAND, ZALO_URL } from "../config";
import Reveal from "./Reveal";
import "./WhyUs.css";

const reasons = [
  {
    title: "Có mặt 15–20 phút",
    desc: "Gọi là có — tài xế gần nhất được điều phối đến vị trí của bạn nhanh chóng.",
  },
  {
    title: "Phục vụ 24/7",
    desc: "Ban ngày hay nửa đêm sau tiệc — luôn sẵn sàng đưa bạn và xe về nhà.",
  },
  {
    title: "An toàn tuyệt đối",
    desc: "Bạn nghỉ trên ghế phụ, tài xế chuyên nghiệp lái xe của bạn về đúng điểm.",
  },
  {
    title: "Giá rõ ràng từ 199k",
    desc: "Báo giá minh bạch theo quãng đường và khung giờ — không phát sinh ẩn.",
  },
];

export default function WhyUs() {
  return (
    <section className="section why" id="tai-sao">
      <div className="container why__grid">
        <Reveal>
          <div className="why__intro">
            <p className="section-label">Vì sao chọn chúng tôi</p>
            <h2 className="section-title">
              Đã uống?
              <br />
              Đừng tự lái.
            </h2>
            <p className="section-lead">
              {BRAND} chuyên lái xe hộ cho khách đã uống rượu bia — nhanh, lịch
              sự, bảo mật, đưa bạn và xe về nhà an toàn.
            </p>
            <a
              className="btn btn--ink why__btn"
              href={ZALO_URL}
              target="_blank"
              rel="noreferrer"
            >
              Nhắn Zalo tư vấn
            </a>
          </div>
        </Reveal>

        <div className="why__cards">
          {reasons.map((item, i) => (
            <Reveal key={item.title} delay={i * 70}>
              <article className="why-card">
                <span className="why-card__num">0{i + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
