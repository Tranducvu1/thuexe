import { PHONE_TEL } from "../config";
import Reveal from "./Reveal";
import "./Pricing.css";

const rows = [
  {
    time: "Trước 22h",
    cells: [
      ["5km đầu", "199k"],
      ["5 – 10km", "199k (+20k/km)"],
      [">10km", "299k (+15k/km)"],
      [">30km", "Thỏa thuận"],
    ],
  },
  {
    time: "22h – 24h",
    cells: [
      ["5km đầu", "229k"],
      ["5 – 10km", "229k (+20k/km)"],
      [">10km", "329k (+15k/km)"],
      [">30km", "Thỏa thuận"],
    ],
  },
  {
    time: "Sau 24h",
    cells: [
      ["5km đầu", "259k"],
      ["5 – 10km", "259k (+20k/km)"],
      [">10km", "359k (+20k/km)"],
      [">30km", "Thỏa thuận"],
    ],
  },
];

export default function Pricing() {
  return (
    <section className="section pricing" id="bang-gia">
      <div className="pricing__bg" aria-hidden />
      <div className="container pricing__inner">
        <Reveal>
          <div className="section-head section-head--center">
            <p className="section-label pricing__label">Bảng giá</p>
            <h2 className="section-title pricing__title">
              Giá từ 199.000đ — minh bạch theo chuyến
            </h2>
            <p className="section-lead pricing__lead">
              Báo giá rõ theo khung giờ và quãng đường. Gói theo ngày / sự kiện /
              doanh nghiệp — gọi để nhận báo giá nhanh.
            </p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="pricing__table-wrap pricing__desktop">
            <table className="pricing__table">
              <thead>
                <tr>
                  <th>Thời gian</th>
                  <th>5km đầu</th>
                  <th>5 – 10km</th>
                  <th>&gt;10km</th>
                  <th>&gt;30km</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.time}>
                    <td>{row.time}</td>
                    {row.cells.map(([label, value]) => (
                      <td key={label}>{value}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="pricing__cards pricing__mobile">
            {rows.map((row) => (
              <article key={row.time} className="price-card">
                <h3>{row.time}</h3>
                <ul>
                  {row.cells.map(([label, value]) => (
                    <li key={label}>
                      <span>{label}</span>
                      <strong>{value}</strong>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="pricing__footer">
            <a className="btn btn--amber" href={PHONE_TEL}>
              ☎ Gọi báo giá
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
