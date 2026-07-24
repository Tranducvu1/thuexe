import Reveal from "./Reveal";
import "./Testimonials.css";

const feedbacks = [
  {
    name: "Anh Minh",
    role: "Khách thường xuyên",
    photo: "/images/testimonial-1.jpg",
    quote:
      "Gọi một cái là có tài xế. Xe về nhà an toàn, mình yên tâm.",
  },
  {
    name: "Chị Hương",
    role: "Văn phòng quận Cầu Giấy",
    photo: "/images/testimonial-2.jpg",
    quote:
      "Hay gọi Tài xế 247 sau giờ làm. Đến nhanh, thái độ lịch sự, giá rõ ràng.",
  },
  {
    name: "Anh Đức",
    role: "Khách Hà Nội",
    photo: "/images/testimonial-3.jpg",
    quote:
      "Nửa đêm vẫn gọi được. Tài xế đưa mình và xe về tận nhà, rất chuyên nghiệp.",
  },
  {
    name: "Chị Lan",
    role: "Khách doanh nghiệp",
    photo: "/images/testimonial-4.jpg",
    quote:
      "Đặt cho cả team sau họp mặt. Phục vụ nhanh, đúng giờ, sẽ giới thiệu thêm.",
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
