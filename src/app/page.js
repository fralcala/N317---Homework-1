"use client";
import homeStyles from "@/app/page.module.css";

export default function Home() {
  return (
    <main>
      <nav className={homeStyles.homeNav}>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
      </nav>
      <section className={homeStyles.section}>
        <div>
          <img
            style={{ height: "350px" }}
            src="https://cdn.shopify.com/s/files/1/0822/4115/files/aquamarine_2913x_e608c1ad-9126-4ba3-ba80-22cdf59a022d.jpg?v=1704821074"
          />
          <h3>Aquamarine</h3>
          <p>Starting at $11.99</p>
        </div>
        <div>
          <img
            style={{ height: "350px" }}
            src="https://cdn.shopify.com/s/files/1/0822/4115/files/ArcticFox_Ecom_Frose_front_swatch.jpg?v=1710350064"
          />
          <h3>Frosé</h3>
          <p>Starting at $11.99</p>
        </div>
      </section>
      <footer className={homeStyles.homeFooter}>2024</footer>
    </main>
  );
}
