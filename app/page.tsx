import styles from "./page.module.css";
import Avatar from "./Avatar";

const STAR_POINTS =
  "10,1 11.9,7.1 18.5,7.1 13.2,11 15.4,17.2 10,13.5 4.6,17.2 6.8,11 1.5,7.1 8.1,7.1";

const SKYLINE_PATH =
  "M0,110 L0,92 L25,92 L25,85 L45,85 L45,78 L62,78 L62,70 L75,70 L75,65 L88,65 L88,58 L98,58 L98,52 L108,52 L108,44 L115,44 L115,36 L121,36 L121,28 L125,28 L125,24 L127,24 L127,4 L128,4 L128,0 L129,0 L129,4 L130,4 L130,24 L132,24 L132,4 L133,4 L133,0 L134,0 L134,4 L135,4 L135,24 L137,24 L137,28 L141,28 L141,36 L147,36 L147,44 L154,44 L154,52 L162,52 L162,55 L170,55 L170,48 L178,48 L178,40 L184,40 L184,34 L191,34 L191,40 L197,40 L197,48 L204,48 L204,55 L216,55 L216,60 L228,60 L228,54 L238,54 L238,46 L245,46 L245,38 L250,38 L250,46 L257,46 L257,54 L267,54 L267,60 L280,60 L280,64 L295,64 L295,58 L305,58 L305,50 L312,50 L312,58 L322,58 L322,64 L335,64 L335,68 L350,68 L350,62 L360,62 L360,56 L368,56 L368,50 L374,50 L374,44 L380,44 L380,50 L386,50 L386,56 L394,56 L394,62 L404,62 L404,68 L418,68 L418,72 L432,72 L432,66 L442,66 L442,60 L452,60 L452,54 L458,54 L458,60 L468,60 L468,66 L478,66 L478,72 L492,72 L492,76 L508,76 L508,70 L518,70 L518,64 L527,64 L527,58 L535,58 L535,64 L543,64 L543,70 L553,70 L553,76 L568,76 L568,80 L582,80 L582,74 L592,74 L592,66 L600,66 L600,58 L607,58 L607,50 L613,50 L613,42 L618,42 L618,36 L620,36 L621,32 L624,26 L627,20 L630,14 L633,10 L634,10 L634,2 L635,2 L635,0 L636,0 L636,2 L637,2 L637,10 L639,10 L639,2 L640,2 L640,0 L641,0 L641,2 L642,2 L642,10 L643,10 L646,14 L649,20 L652,26 L655,32 L656,36 L658,36 L658,42 L663,42 L663,50 L669,50 L669,58 L677,58 L677,66 L687,66 L687,74 L697,74 L697,80 L712,80 L712,85 L730,85 L730,78 L748,78 L748,70 L763,70 L763,62 L775,62 L775,54 L784,54 L784,46 L790,40 L793,34 L795,28 L796,22 L797,16 L797,10 L798,6 L799,3 L799,1 L800,1 L800,0 L801,0 L801,1 L802,1 L803,1 L803,0 L804,0 L804,1 L805,1 L805,3 L806,6 L806,10 L807,16 L808,22 L809,28 L811,34 L814,40 L814,46 L821,46 L821,52 L830,52 L830,58 L830,52 L839,52 L839,46 L847,46 L847,40 L854,40 L854,34 L861,34 L861,28 L868,28 L868,22 L875,22 L875,28 L882,28 L882,34 L889,34 L889,40 L896,40 L896,46 L905,46 L905,52 L916,52 L916,58 L929,58 L929,64 L945,64 L945,70 L966,70 L966,76 L993,76 L993,82 L1030,82 L1030,87 L1080,87 L1080,91 L1145,91 L1145,95 L1238,95 L1238,99 L1360,99 L1360,104 L1400,110 Z";

export default function Page() {
  return (
    <>
      {/* ══════════════ HERO ══════════════ */}
      <div className={styles.H} data-screen-label="Hero">
        <div className={styles.Hdither}></div>

        <div className={styles.Hi}>
          <div className={styles.Hb}>
            <span className={styles.dt}></span>July 20 – 24, 2026 · Chicago Tech Week
          </div>

          <div className={styles.chiStars}>
            {Array.from({ length: 4 }).map((_, i) => (
              <div className={styles.chiStar} key={i}>
                <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <polygon points={STAR_POINTS} fill="#E25B3A" />
                </svg>
              </div>
            ))}
          </div>

          <h1>
            Rho on the Rhoad
            <span className={styles.sub}>Chicago Tech Week 2026</span>
          </h1>
          <span className={styles.cityName}>CHICAGO</span>

          <div className={styles.coords}>
            <span>41.88° N</span>
            <span className={styles.coordsDot}></span>
            <span>87.63° W</span>
            <span className={styles.coordsDot}></span>
            <span>Chicago, IL</span>
          </div>

          <p className={styles.Hs}>
            Founded in 2018 by Everett Cook, <strong>Rho</strong> is a modern business banking
            platform on a mission to make finance frictionless for organizations. Trusted by
            companies like Glimpse, Integral, Perplexity, and thousands of other startups, Rho
            brings commercial banking, corporate cards, treasury, expense management, and bill pay
            automation into one integrated platform — so founders can focus on building, not
            banking.
          </p>
          <p className={styles.Hs}>
            This week, we&apos;re deepening Rho&apos;s presence across <strong>Chicago</strong>{" "}
            during Tech Week 2026 — building VC partnerships and connecting early and growth-stage
            founders with a relationship-driven banking experience that scales with them.
          </p>

          <div className={styles.Hp}>
            <a href="https://www.rho.co/partner/drive-capital" target="_blank">
              <span className={styles.pp}>D</span> Drive Capital
            </a>
            <a href="https://www.rho.co/partner/superior-studios" target="_blank">
              <span className={styles.pp}>D</span> x Superior Studios
            </a>
            <a href="https://www.rho.co/partner/longjump" target="_blank">
              <span className={styles.pp}>L</span> Long Jump Capital
            </a>
            <span className={styles.Hpbreak} aria-hidden="true"></span>
            <a href="https://www.rho.co/partner/fifty-three-stations" target="_blank">
              <span className={styles.pp}>5</span> 53 Stations
            </a>
            <a href="https://www.rho.co/partner/supply-chain-capital" target="_blank">
              <span className={styles.pp}>S</span> Supply Change
            </a>
          </div>
        </div>

        {/* Chicago skyline silhouette */}
        <div className={styles.skylineWrap}>
          <svg
            viewBox="0 0 1400 110"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMax meet"
          >
            <path d={SKYLINE_PATH} fill="rgba(21,23,22,0.10)"></path>
          </svg>
        </div>
      </div>

      {/* ════════ MAIN CONTENT ════════ */}
      <div className={styles.C}>
        {/* WHY RHO */}
        <div className={styles.S} data-screen-label="Why Rho">
          <div className={styles.eyebrow}>/ 001 · Why Rho</div>
          <div className={styles.St}>
            The banking platform built for <span className={styles.ital}>ambitious founders</span>
          </div>
          <div className={styles.Sd}>
            One platform to manage end-to-end startup finances. Open accounts in minutes, earn yield
            on idle cash, and manage cards, bills, and expenses — all in one place.
          </div>
          <div className={styles.Ag}>
            <div className={styles.Sc}>
              <div className={styles.Sn}>$0</div>
              <div className={styles.Sla}>ACH, wire, and platform fees</div>
            </div>
            <div className={styles.Sc}>
              <div className={styles.Sn}>$75M</div>
              <div className={styles.Sla}>FDIC insurance coverage</div>
            </div>
            <div className={styles.Sc}>
              <div className={styles.Sn}>1.5–2%</div>
              <div className={styles.Sla}>Cashback on Rho cards</div>
            </div>
            <div className={styles.Sc}>
              <div className={styles.Sn}>Up to 4.0%</div>
              <div className={styles.Sla}>Treasury yield on idle cash</div>
            </div>
          </div>
        </div>

        {/* SCHEDULE */}
        <div className={styles.S} data-screen-label="Schedule">
          <div className={styles.eyebrow}>/ 002 · This Week</div>
          <div className={styles.St}>Chicago Event Schedule</div>
          <div className={styles.Sd}>
            Join us for dinners, conversations, and connections with the investors and founders
            shaping Chicago&apos;s startup ecosystem.
          </div>
          <div className={styles.T}>
            <div className={`${styles.E} ${styles.dep}`}>
              <div className={styles.Et}>
                <span className={styles.Ed}>Monday, July 20</span>
                <span className={`${styles.Eb} ${styles.alt}`}>Arrival</span>
              </div>
              <h3>Welcome to Chicago</h3>
              <div className={styles.Eds}>
                <div className={styles.Er}>
                  <span className={styles.lab}>Note</span>
                  <span>Touching down — Chicago Tech Week kicks off this week.</span>
                </div>
              </div>
            </div>
            <div className={styles.E}>
              <div className={styles.Et}>
                <span className={styles.Ed}>Tuesday, July 21</span>
                <span className={styles.Eb}>Founder Dinner</span>
              </div>
              <h3>
                Rho <span>×</span> Gustavo Casas
              </h3>
              <div className={styles.Eds}>
                <div className={styles.Er}>
                  <span className={styles.lab}>Location</span>
                  <span>Chicago, IL (venue TBD)</span>
                </div>
                <div className={styles.Er}>
                  <span className={styles.lab}>Time</span>
                  <span>Evening</span>
                </div>
                <div className={styles.Er}>
                  <span className={styles.lab}>Hosts</span>
                  <span>
                    Hosted by Gustavo Casas &amp; Dylan Johnson + Cristian Raygoza (Rho) · 15 exited
                    founders on their second venture
                  </span>
                </div>
                <div className={styles.Er}>
                  <span className={styles.lab}>RSVP</span>
                  <a href="https://luma.com/j0v75ew5" target="_blank">
                    RSVP here
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.E}>
              <div className={styles.Et}>
                <span className={styles.Ed}>Wednesday, July 22</span>
                <span className={styles.Eb}>Founder Dinner</span>
              </div>
              <h3>
                Rho <span>×</span> Superior Studios
              </h3>
              <div className={styles.Eds}>
                <div className={styles.Er}>
                  <span className={styles.lab}>Location</span>
                  <span>Chicago, IL (venue TBD)</span>
                </div>
                <div className={styles.Er}>
                  <span className={styles.lab}>Time</span>
                  <span>Evening</span>
                </div>
                <div className={styles.Er}>
                  <span className={styles.lab}>Hosts</span>
                  <span>
                    Hosted by Danny Goodman (Superior Studios) &amp; Dylan Johnson + Cristian
                    Raygoza (Rho) · 15 portfolio founders
                  </span>
                </div>
                <div className={styles.Er}>
                  <span className={styles.lab}>Link</span>
                  <a href="https://www.rho.co/partner/superior-studios" target="_blank">
                    rho.co/partner/superior-studios
                  </a>
                </div>
                <div className={styles.Er}>
                  <span className={styles.lab}>RSVP</span>
                  <a href="https://luma.com/5qrz8x5b" target="_blank">
                    RSVP here
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.E}>
              <div className={styles.Et}>
                <span className={styles.Ed}>Thursday, July 23</span>
                <span className={styles.Eb}>VIP Dinner</span>
              </div>
              <h3>
                Rho <span>×</span> Drive Capital
              </h3>
              <div className={styles.Eds}>
                <div className={styles.Er}>
                  <span className={styles.lab}>Location</span>
                  <span>Chicago, IL (venue TBD)</span>
                </div>
                <div className={styles.Er}>
                  <span className={styles.lab}>Time</span>
                  <span>Evening</span>
                </div>
                <div className={styles.Er}>
                  <span className={styles.lab}>Hosts</span>
                  <span>
                    Hosted by Landon Campbell (Drive Capital) &amp; Dylan Johnson + Cristian Raygoza
                    (Rho) · 25 founders &amp; investors — VIP dinner ahead of the 300-person Chicago
                    Tech Week event
                  </span>
                </div>
                <div className={styles.Er}>
                  <span className={styles.lab}>Link</span>
                  <a href="https://www.rho.co/partner/drive-capital" target="_blank">
                    rho.co/partner/drive-capital
                  </a>
                </div>
                <div className={styles.Er}>
                  <span className={styles.lab}>RSVP</span>
                  <a href="https://luma.com/5ch2liwi" target="_blank">
                    RSVP here
                  </a>
                </div>
              </div>
            </div>
            <div className={`${styles.E} ${styles.dep}`}>
              <div className={styles.Et}>
                <span className={styles.Ed}>Friday, July 24</span>
                <span className={`${styles.Eb} ${styles.alt}`}>Departure</span>
              </div>
              <h3>Heading Home</h3>
              <div className={styles.Eds}>
                <div className={styles.Er}>
                  <span className={styles.lab}>Note</span>
                  <span>Safe travels — until next time, Chicago.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ════════ CITY PHOTO PANEL ════════ */}
      <div className={styles.cityPanel} data-screen-label="City panel">
        <div className={styles.cityPanelImg}></div>
        <div className={styles.cityPanelGrade}></div>
        <div className={styles.cityPanelTag}>Chicago Tech Week · 2026</div>
        <div className={styles.cityPanelLabel}>
          <span className={styles.coord}>41.88° N · 87.63° W</span>
          <span className={styles.place}>Chicago · Illinois</span>
        </div>
      </div>

      <div className={styles.C}>
        {/* PEOPLE */}
        <div className={styles.S} data-screen-label="People">
          <div className={styles.eyebrow}>/ 003 · People</div>
          <div className={styles.St}>Who You Should Know</div>
          <div className={styles.Sd}>Connect with the people making this week happen.</div>
          <div className={styles.Hg}>
            <a
              href="https://www.linkedin.com/in/dylan-johnson-4b5bb71b4/"
              target="_blank"
              className={styles.Hc}
            >
              <div className={styles.Ha} style={{ background: "linear-gradient(135deg,#05A689,#022F27)" }}>
                <Avatar src="https://unavatar.io/linkedin/dylan-johnson-4b5bb71b4" alt="DJ" />
              </div>
              <div className={styles.Hin}>
                <div className={styles.Hn}>Dylan Johnson</div>
                <div className={styles.Hr}>Startup Banking · Rho</div>
              </div>
              <div className={styles.Hl}>LinkedIn ↗</div>
            </a>
            <a
              href="https://www.linkedin.com/in/cristianraygoza/"
              target="_blank"
              className={styles.Hc}
            >
              <div className={styles.Ha} style={{ background: "linear-gradient(135deg,#05A689,#39EFCD)" }}>
                <Avatar src="https://unavatar.io/linkedin/cristianraygoza" alt="CR" />
              </div>
              <div className={styles.Hin}>
                <div className={styles.Hn}>Cristian Raygoza</div>
                <div className={styles.Hr}>VC Partnerships Lead · Rho</div>
              </div>
              <div className={styles.Hl}>LinkedIn ↗</div>
            </a>
            <a href="https://www.linkedin.com/in/landon20s/" target="_blank" className={styles.Hc}>
              <div className={styles.Ha} style={{ background: "#212423" }}>
                <Avatar src="https://unavatar.io/linkedin/landon20s" alt="LC" />
              </div>
              <div className={styles.Hin}>
                <div className={styles.Hn}>Landon Campbell</div>
                <div className={styles.Hr}>Drive Capital</div>
              </div>
              <div className={styles.Hl}>LinkedIn ↗</div>
            </a>
            <a
              href="https://www.linkedin.com/in/danielericgoodman/"
              target="_blank"
              className={styles.Hc}
            >
              <div className={styles.Ha} style={{ background: "#212423" }}>
                <Avatar src="https://unavatar.io/linkedin/danielericgoodman" alt="DG" />
              </div>
              <div className={styles.Hin}>
                <div className={styles.Hn}>Danny Goodman</div>
                <div className={styles.Hr}>Superior Studios</div>
              </div>
              <div className={styles.Hl}>LinkedIn ↗</div>
            </a>
            <a href="https://www.linkedin.com/in/tinahrabak" target="_blank" className={styles.Hc}>
              <div className={styles.Ha} style={{ background: "#212423" }}>
                <Avatar src="https://unavatar.io/linkedin/tinahrabak" alt="TH" />
              </div>
              <div className={styles.Hin}>
                <div className={styles.Hn}>Tina Hrabak</div>
                <div className={styles.Hr}>Long Jump Capital</div>
              </div>
              <div className={styles.Hl}>LinkedIn ↗</div>
            </a>
            <a
              href="https://www.linkedin.com/in/gustavo-casas/"
              target="_blank"
              className={styles.Hc}
            >
              <div className={styles.Ha} style={{ background: "#212423" }}>
                <Avatar src="https://unavatar.io/linkedin/gustavo-casas" alt="GC" />
              </div>
              <div className={styles.Hin}>
                <div className={styles.Hn}>Gustavo Casas</div>
                <div className={styles.Hr}>Founder &amp; Ecosystem Builder</div>
              </div>
              <div className={styles.Hl}>LinkedIn ↗</div>
            </a>
          </div>
        </div>

        {/* PLATFORM */}
        <div className={styles.S} data-screen-label="Platform">
          <div className={styles.eyebrow}>/ 004 · Platform</div>
          <div className={styles.St}>Everything founders need in one place</div>
          <div className={styles.Sd}>
            Cultivate a culture of frugality and focus. Extend your runway, keep spend controlled,
            and automate finance busywork.
          </div>
          <div className={styles.Fg}>
            <div className={styles.F}>
              <div className={styles.Fi}>01</div>
              <div className={styles.Ft}>Checking &amp; Savings</div>
              <div className={styles.Fd}>
                Fee-free payments, accept investor checks, and manage cash — all in one place.
              </div>
            </div>
            <div className={styles.F}>
              <div className={styles.Fi}>02</div>
              <div className={styles.Ft}>Corporate Cards</div>
              <div className={styles.Fd}>
                Startup-friendly underwriting, up to 1.5–2% cashback, and automated spend controls.
              </div>
            </div>
            <div className={styles.F}>
              <div className={styles.Fi}>03</div>
              <div className={styles.Ft}>Treasury</div>
              <div className={styles.Fd}>
                Earn up to 4.0% on idle cash with U.S. Treasury Bills, Morgan Stanley MULSX, or
                Vanguard VFSTX.
              </div>
            </div>
            <div className={styles.F}>
              <div className={styles.Fi}>04</div>
              <div className={styles.Ft}>Bill Pay</div>
              <div className={styles.Fd}>
                Pay hundreds of vendors in minutes with zero platform fees.
              </div>
            </div>
            <div className={styles.F}>
              <div className={styles.Fi}>05</div>
              <div className={styles.Ft}>Expense Management</div>
              <div className={styles.Fd}>
                Eliminate expense reports. Automate receipt capture and policy enforcement.
              </div>
            </div>
            <div className={styles.F}>
              <div className={styles.Fi}>06</div>
              <div className={styles.Ft}>Accounting Integrations</div>
              <div className={styles.Fd}>
                Connect to QuickBooks and NetSuite. Close the books faster.
              </div>
            </div>
          </div>
        </div>

        {/* RESOURCES */}
        <div className={styles.S} data-screen-label="Resources">
          <div className={styles.eyebrow}>/ 005 · Resources</div>
          <div className={styles.St}>Helpful Partner Links</div>
          <div className={styles.Sd}>
            Exclusive welcome offers for Chicago-area founders and portfolio companies making the
            switch to Rho.
          </div>
          <div className={styles.Rwrap}>
            <a href="https://www.rho.co/partner/drive-capital" target="_blank" className={styles.Rl}>
              <span className={styles.Rn}>Rho × Drive Capital</span>
              <span className={styles.Rc}>View Offer ↗</span>
            </a>
            <a
              href="https://www.rho.co/partner/superior-studios"
              target="_blank"
              className={styles.Rl}
            >
              <span className={styles.Rn}>Rho × Superior Studios</span>
              <span className={styles.Rc}>View Offer ↗</span>
            </a>
            <a href="https://www.rho.co/partner/longjump" target="_blank" className={styles.Rl}>
              <span className={styles.Rn}>Rho × Long Jump Capital</span>
              <span className={styles.Rc}>View Offer ↗</span>
            </a>
            <a
              href="https://www.rho.co/partner/fifty-three-stations"
              target="_blank"
              className={styles.Rl}
            >
              <span className={styles.Rn}>Rho × 53 Stations</span>
              <span className={styles.Rc}>View Offer ↗</span>
            </a>
            <a
              href="https://www.rho.co/partner/supply-chain-capital"
              target="_blank"
              className={styles.Rl}
            >
              <span className={styles.Rn}>Rho × Supply Change</span>
              <span className={styles.Rc}>View Offer ↗</span>
            </a>
          </div>
        </div>
      </div>

      {/* CTA (dark) */}
      <div className={styles.darkWrap} data-screen-label="CTA">
        <div className={styles.Cs}>
          <div className={styles.Csdither}></div>
          <div className={styles.CsInner}>
            <h2>
              Ready to bank <span className={styles.ital}>with Rho?</span>
            </h2>
            <p>
              Open your account in minutes. No fees, no friction — just a better way to manage your
              startup&apos;s finances.
            </p>
            <div className={styles.Cb}>
              <a
                href="https://signup.rho.co/?utm_source=dylan_johnson&utm_campaign=2025_sales_outbound&utm_medium=sales_outreach&utm_term=dylan_johnson"
                target="_blank"
                className={`${styles.B} ${styles.Bg}`}
              >
                Open an Account →
              </a>
              <a href="https://www.rho.co/startups" target="_blank" className={`${styles.B} ${styles.Bo}`}>
                Rho for Startups
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.C}>
        <div className={styles.Ch}>
          <div className={styles.Cht}>Want to learn more?</div>
          <div className={styles.Chd}>
            Chat with Dylan or Cristian about how Rho can work for your startup.
          </div>
          <a href="https://rho.cal.com/dylan.johnson/chicago" target="_blank" className={styles.Bc}>
            Get in touch →
          </a>
        </div>
      </div>

      {/* Footer */}
      <div className={styles.Fo}>
        <p className={styles.hosted}>
          Hosted by{" "}
          <a href="https://www.rho.co" target="_blank">
            Rho
          </a>
        </p>
        <p className={styles.legal}>
          Rho is a fintech company, not a bank. Checking and card services are provided by Webster
          Bank, N.A., member FDIC; savings account services are provided by American Deposit
          Management Co. and its partner banks. For full terms, rates, and pricing, visit{" "}
          <a href="https://www.rho.co" target="_blank">
            rho.co
          </a>
          .
        </p>
        <div className={styles.markrow}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/Rho-Logo-Black.svg" alt="Rho" />
        </div>
      </div>
    </>
  );
}
