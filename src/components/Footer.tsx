export default function Footer() {
    return (
      <footer 
        className="text-center text-white py-4 mt-5"
        style={{
          background: "linear-gradient(90deg, #0d6efd, #6610f2)",
        }}
      >
        <h5 className="fw-bold mb-1">TrendHive</h5>
        <p className="mb-2 opacity-75">Delivering quality, trust, and value worldwide.</p>
  
        <div className="d-flex justify-content-center gap-3 fs-5 mb-2">
          
          <a href="mailto:support@TrendHive.com" className="text-white text-decoration-none hover-opacity">📩 Email: support@TrendHive.com </a>
         
        </div>
  
        <small className="opacity-75">
          © {new Date().getFullYear()} All Rights Reserved.
        </small>
      </footer>
    );
  }
  