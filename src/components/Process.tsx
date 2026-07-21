import Reveal from "./Reveal";
import "./Process.css";

const steps = [
  {
    title: "Báo giá",
    desc: "Gửi điểm đi – điểm đến – giờ đón, nhận báo giá nhanh.",
  },
  {
    title: "Tài xế đến",
    desc: "Có mặt khoảng 5–10 phút, xác nhận thông tin chuyến.",
  },
  {
    title: "Bàn giao xe",
    desc: "Kiểm tra tình trạng xe và vật chất trước khi khởi hành.",
  },
  {
    title: "Di chuyển",
    desc: "Đưa bạn và xe đến điểm yêu cầu đúng lộ trình.",
  },
  {
    title: "Hoàn tất",
    desc: "Bàn giao lại xe, kiểm tra và thanh toán cước phí.",
  },
];

export default function Process() {
  return (
    <section className="section process" id="quy-trinh">
      <div className="container">
        <Reveal>
          <div className="section-head section-head--center">
            <p className="section-label">Quy trình</p>
            <h2 className="section-title">Đặt tài xế chỉ trong vài bước</h2>
            <p className="section-lead">
              Gần nhất · Nhanh nhất · An toàn · Chuyên nghiệp
            </p>
          </div>
        </Reveal>

        <div className="process__steps">
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 70}>
              <article className="process-step">
                <div className="process-step__num">{String(i + 1).padStart(2, "0")}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
