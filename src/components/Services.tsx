import { BRAND, PHONE_TEL } from "../config";
import Reveal from "./Reveal";
import "./Services.css";

const services = [
  {
    title: "Lái xe hộ về nhà",
    desc: "Đã uống rượu bia? Tài xế đến đón, đưa bạn và xe về nhà an toàn.",
  },
  {
    title: "Lái xe theo chuyến",
    desc: "Phục vụ theo lộ trình đã đặt — phù hợp tiếp khách, liên hoan, về sớm.",
  },
  {
    title: "Lái xe theo giờ",
    desc: "Gói 4h · 8h · 12h. Đi nhiều điểm trong khung giờ, linh hoạt cho cá nhân và doanh nghiệp.",
  },
  {
    title: "Lái xe theo yêu cầu",
    desc: "Công tác, về quê, chơi golf… tài xế phục vụ đúng nhu cầu đã đăng ký.",
  },
  {
    title: "Lái xe doanh nghiệp / sự kiện",
    desc: "Đặt theo giờ, theo chuyến hoặc theo ngày — họp mặt, tiệc, vận chuyển.",
  },
];

export default function Services() {
  return (
    <section className="section services" id="dich-vu">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <p className="section-label">Dịch vụ</p>
            <h2 className="section-title">
              Uống xong. Gọi {BRAND}. Về nhà an toàn.
            </h2>
            <p className="section-lead">
              Chuyên lái xe hộ khi khách đã uống bia rượu — có mặt nhanh, phục vụ
              24/7, còn lại để chúng tôi lo.
            </p>
          </div>
        </Reveal>

        <div className="services__list">
          {services.map((item, i) => (
            <Reveal key={item.title} delay={i * 60}>
              <article className="service-row">
                <span className="service-row__index">0{i + 1}</span>
                <div className="service-row__body">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
                <a className="service-row__cta" href={PHONE_TEL}>
                  Gọi ngay
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
