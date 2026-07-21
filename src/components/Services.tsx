import Reveal from "./Reveal";
import "./Services.css";

const services = [
  {
    title: "Lái xe theo chuyến",
    desc: "Phục vụ theo lộ trình đã đặt — phù hợp tiếp khách, liên hoan, chúc Tết.",
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
    title: "Lái xe doanh nghiệp",
    desc: "Đặt theo giờ, theo chuyến hoặc theo ngày — họp mặt, sự kiện, vận chuyển hàng hóa.",
  },
  {
    title: "Lái xe sự kiện",
    desc: "Điều phối theo lộ trình và khung giờ đã chốt cho tiệc, hội nghị, tổ chức sự kiện.",
  },
];

export default function Services() {
  return (
    <section className="section services" id="dich-vu">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <p className="section-label">Dịch vụ</p>
            <h2 className="section-title">Một tài xế. Mọi nhu cầu di chuyển.</h2>
            <p className="section-lead">
              Từ chuyến ngắn trong phố đến lịch trình cả ngày — chọn gói phù hợp,
              còn lại để CHILLGO lo.
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
                <a className="service-row__cta" href="tel:0961132473">
                  Đặt ngay
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
