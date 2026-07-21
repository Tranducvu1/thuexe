import Reveal from "./Reveal";
import "./Pricing.css";

const rows = [
  {
    time: "Trước 22h",
    cells: [
      ["5km đầu", "245k"],
      ["5 – 10km", "245k (+20k/km)"],
      [">10km", "345k (+15k/km)"],
      [">30km", "Thỏa thuận"],
    ],
  },
  {
    time: "22h – 24h",
    cells: [
      ["5km đầu", "260k"],
      ["5 – 10km", "260k (+20k/km)"],
      [">10km", "360k (+15k/km)"],
      [">30km", "Thỏa thuận"],
    ],
  },
  {
    time: "Sau 24h",
    cells: [
      ["5km đầu", "299k"],
      ["5 – 10km", "299k (+20k/km)"],
      [">10km", "399k (+20k/km)"],
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
              Báo giá lái xe hộ theo chuyến
            </h2>
            <p className="section-lead pricing__lead">
              Minh bạch theo khung giờ và quãng đường. Gói theo ngày / sự kiện /
              doanh nghiệp — liên hệ để nhận báo giá.
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
            <a className="btn btn--amber" href="tel:0961132473">
              Liên hệ báo giá
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
