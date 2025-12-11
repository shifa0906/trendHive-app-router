// src/app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="hero-banner">
        <div className="container hero-banner-inner ">
          <div className="hero-text-block px-3">
            <div className="hero-kicker"> ❄️ Winter Sale is Here!</div>
            <h1 className="hero-heading">
              Warm Offers for
              <br />
              the Cold Season!
            </h1>
            <p className="hero-subtitle">Flat 25% OFF Storewide</p>
            <p className="hero-offer">
              Stay cozy this winter with stylish jackets, sweaters &
              accessories.
            </p>

            <div className="hero-cta-group d-flex gap-2">
              <Link href="/products" className="btn btn-light">
                SHOP NOW
              </Link>
              <Link href="/about" className="btn btn-outline-light">
                FIND MORE
              </Link>
            </div>
          </div>

          <div className="hero-image-wrapper d-none d-md-block">
            <img
              src="https://images.pexels.com/photos/14991377/pexels-photo-14991377.jpeg"
              width={600}
              alt="winter fashion"
            />
          </div>
        </div>
      </section>

      <section className="section-strip mt-4">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-md-6 px-3">
              <div className="section-kicker">Limited Time Offer</div>
              <h2 className="section-heading mb-3">Special Edition</h2>
              <p className="lead mb-3">
                Discover comfort, style, and premium quality in one tee. Our
                Special Edition T-shirt is made with ultra-soft fabric, perfect
                for daily wear and long-lasting freshness.
              </p>
              <p className="mb-4">
                Buy this T-shirt at <strong>20% discount</strong>, use code{" "}
                <strong>OFF20</strong>.
              </p>
              <Link href="/products" className="btn btn-primary">
                SHOP NOW
              </Link>
            </div>

            <div className="col-md-6">
              <img
                src="https://images.pexels.com/photos/7959077/pexels-photo-7959077.jpeg"
                className="img-fluid rounded-3 shadow"
                alt="Special edition"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="feature-icons-row">
        <div className="container">
          <div className="row text-center g-4">
            <div className="col-md-3 feature-card">
              <div className="feature-card-icon">🌍</div>
              <div className="feature-card-title">Worldwide Shipping</div>
              <div className="feature-card-text">
                Enjoy seamless delivery to any corner of the globe.
              </div>
            </div>
            <div className="col-md-3 feature-card">
              <div className="feature-card-icon">⭐</div>
              <div className="feature-card-title">Best Quality</div>
              <div className="feature-card-text">
                Premium fabrics and hand-picked designs for every season.
              </div>
            </div>
            <div className="col-md-3 feature-card">
              <div className="feature-card-icon">💸</div>
              <div className="feature-card-title">Best Offers</div>
              <div className="feature-card-text">
                Daily deals and exclusive discounts for our members.
              </div>
            </div>
            <div className="col-md-3 feature-card">
              <div className="feature-card-icon">🔒</div>
              <div className="feature-card-title">Secure Payments</div>
              <div className="feature-card-text">
                100% secure payment gateway for safe online shopping.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="promo-grid-section py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-12 col-sm-6 col-md-4">
              <div className="promo-card">
                <img
                  src="https://images.pexels.com/photos/14480307/pexels-photo-14480307.jpeg"
                  alt="Winter Clothes"
                />
                <div className="promo-card-body">
                  <h3 className="promo-card-title">
                    20% Off On Winter Clothes!
                  </h3>
                  <p>
                    Stay warm this season with premium jackets and stylish
                    knitted hats
                  </p>
                  <Link href="/products" className="btn btn-light btn-sm">
                    SHOP NOW
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-4">
              <div className="promo-card">
                <img
                  src="https://images.pexels.com/photos/31694612/pexels-photo-31694612.jpeg"
                  alt="Eyewear"
                />
                <div className="promo-card-body">
                  <h3 className="promo-card-title">Latest Eyewear For You</h3>
                  <p>Bold, stylish, and perfect for an edgy winter look.</p>
                  <Link href="/products" className="btn btn-light btn-sm">
                    SHOP NOW
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-4">
              <div className="promo-card">
                <img
                  src="https://images.pexels.com/photos/27352801/pexels-photo-27352801.png"
                  alt="winter Boot"
                />
                <div className="promo-card-body">
                  <h3 className="promo-card-title">Winter Boots Collection</h3>
                  <p>Stay warm and stylish with durable winter boots.</p>
                  <Link href="/products" className="btn btn-light btn-sm">
                    CHECK OUT
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-4">
              <div className="promo-card">
                <img
                  src="https://images.pexels.com/photos/9595288/pexels-photo-9595288.jpeg"
                  alt="Suit up"
                />
                <div className="promo-card-body">
                  <h3 className="promo-card-title">Fashion Essentials</h3>
                  <p>Everything you need to complete your perfect look.</p>
                  <Link href="/products" className="btn btn-light btn-sm">
                    CHECK OUT
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-4">
              <div className="promo-card">
                <img
                  src="https://images.pexels.com/photos/5632359/pexels-photo-5632359.jpeg"
                  alt="Suit up"
                />
                <div className="promo-card-body">
                  <h3 className="promo-card-title">Winter Makeup Essentials</h3>
                  <p>
                    Hydrating formulas, rich tones, and long-lasting winter
                    glam.
                  </p>
                  <Link href="/products" className="btn btn-light btn-sm">
                    CHECK OUT
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-4">
              <div className="promo-card">
                <img
                  src="https://images.pexels.com/photos/19213921/pexels-photo-19213921.jpeg"
                  alt="Winter Goodies"
                />
                <div className="promo-card-body">
                  <h3 className="promo-card-title">Winter Shop Essentials</h3>
                  <p>
                    Cozy mugs, scented candles & all your winter favorites —
                    perfect for gifting!!
                  </p>
                  <Link href="/products" className="btn btn-light btn-sm">
                    CHECK OUT
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
