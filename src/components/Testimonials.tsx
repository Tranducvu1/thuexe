import Reveal from "./Reveal";
import "./Testimonials.css";

const feedbacks = [
  {
    name: "Ông Trần Kim Trung",
    role: "Chủ tịch CT Group",
    photo: "/images/testimonial-1.jpg",
    quote:
      "Trải nghiệm chuyên nghiệp, thân thiện và hoàn hảo. Sẽ tiếp tục ủng hộ và giới thiệu CHILLGO.",
  },
  {
    name: "Ông Bùi Quang Vũ",
    role: "TGĐ Công ty Phát Đạt",
    photo: "/images/testimonial-2.jpg",
    quote:
      "Trải nghiệm đi lại tuyệt vời. Tôi tin tưởng kỹ năng và tinh thần phục vụ của đội ngũ Chill Go.",
  },
  {
    name: "Ông Đỗ Việt Dũng",
    role: "CEO Amai Agency",
    photo: "/images/testimonial-3.jpg",
    quote:
      "Chuyên nghiệp, tiện lợi. Tài xế đến đúng giờ và mang lại cảm giác an toàn suốt hành trình.",
  },
  {
    name: "Bà Dương Mai Hoa",
    role: "TGĐ Sunshine Home",
    photo: "/images/testimonial-4.jpg",
    quote:
      "Giải pháp hoàn hảo khi muốn thư giãn trên đường — tập trung công việc, không lo lái xe.",
  },
];

export default function Testimonials() {
  return (
    <section className="section testimonials" id="feedback">
      <div className="container">
        <Reveal>
          <div className="section-head section-head--center">
            <p className="section-label">Feedback</p>
            <h2 className="section-title">Khách hàng nói gì</h2>
          </div>
        </Reveal>

        <div className="testimonials__grid">
          {feedbacks.map((item, i) => (
            <Reveal key={item.name} delay={i * 70}>
              <article className="quote-card">
                <p className="quote-card__text">“{item.quote}”</p>
                <div className="quote-card__person">
                  <img src={item.photo} alt={item.name} />
                  <div>
                    <h3>{item.name}</h3>
                    <p>{item.role}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
