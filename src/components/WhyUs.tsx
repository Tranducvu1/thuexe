import Reveal from "./Reveal";
import "./WhyUs.css";

const reasons = [
  {
    title: "Tư vấn 24/7",
    desc: "Chọn điểm đi, điểm đến và giờ đón — trung tâm điều phối tài xế phù hợp nhất.",
  },
  {
    title: "An toàn phương tiện",
    desc: "Kiểm tra tài sản và xe trước / sau mỗi chuyến, phục vụ chuyên nghiệp.",
  },
  {
    title: "Thái độ tận tâm",
    desc: "Lịch sự, hỗ trợ khách trong suốt hành trình — ưu tiên an toàn tuyệt đối.",
  },
  {
    title: "Tài xế giàu kinh nghiệm",
    desc: "Cung cấp thông tin tài xế rõ ràng, đủ năng lực và trách nhiệm pháp lý.",
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
              Nhanh. Chuyên nghiệp.
              <br />
              Đủ tin để giao chìa khóa.
            </h2>
            <p className="section-lead">
              CHILLGO tập trung vào trải nghiệm rõ ràng: có mặt nhanh, lái xe
              chuẩn mực, và bạn luôn biết mình đang đi với ai.
            </p>
            <a className="btn btn--ink why__btn" href="https://zalo.me/0961132473" target="_blank" rel="noreferrer">
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
