"use client";

export default function Contact() {
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you — contact message sent!.");
  };

  return (
    <div className="card p-4">
      <h2>Contact Us</h2>
      <form onSubmit={submit} className="mt-3">
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input className="form-control" type="email" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea className="form-control" rows={4} required></textarea>
        </div>
        <button className="btn btn-primary" type="submit">
          Send
        </button>
      </form>
    </div>
  );
}
