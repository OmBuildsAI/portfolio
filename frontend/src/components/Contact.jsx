import { useState, useEffect, useRef } from "react";

const contactCards = [
  {
    label: "Email",
    value: "omnaitam635@gmail.com",
    href: "mailto:omnaitam635@gmail.com",
    accentColor: "#6bff8f",
    shadow: "4px 4px 0px 0px #6bff8f",
  },
  {
    label: "WhatsApp",
    value: "+91 9960852898",
    href: "https://wa.me/919960852898",
    accentColor: "#00f0ff",
    shadow: "4px 4px 0px 0px #00f0ff",
  },
  {
    label: "GitHub",
    value: "github.com/OmBuildsAI",
    href: "https://github.com/OmBuildsAI",
    accentColor: "#ff6b00",
    shadow: "4px 4px 0px 0px #ff6b00",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/om-naitam",
    href: "https://linkedin.com/in/om-naitam",
    accentColor: "#bc00ff",
    shadow: "4px 4px 0px 0px #bc00ff",
  },
];

const Contact = () => {
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  // Scroll fade-in
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    const fadeEls = sectionRef.current?.querySelectorAll(".fade-in");
    fadeEls?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("sent");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 3000);
      }
    } catch (err) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative pt-24 pb-0 px-4 md:px-16 min-h-screen"
    >
      {/* AVAILABLE NOW floating tag */}
      <div
        className="absolute top-28 right-4 md:right-16 rotate-6
          hover:rotate-0 transition-transform cursor-default z-10"
      >
        <div
          className="bg-[#6bff8f] text-black px-4 py-2 font-black text-xl
            border-2 border-black"
          style={{
            fontFamily: "Anton, sans-serif",
            boxShadow: "4px 4px 0px 0px #000",
          }}
        >
          AVAILABLE NOW
        </div>
      </div>

      {/* ── HERO HEADING ── */}
      <header className="mb-20 fade-in">
        <h1
          className="text-[64px] md:text-[120px] font-black uppercase
            leading-none tracking-tighter"
          style={{ fontFamily: "Anton, sans-serif" }}
        >
          LET'S BUILD
          <br />
          <span style={{ color: "#00f0ff" }}>SOMETHING FAST.</span>
        </h1>
        <p
          className="font-mono text-2xl mt-4"
          style={{ color: "#6bff8f" }}
        >
          OPEN_FOR_FREELANCE://2025
        </p>
      </header>

      {/* ── MAIN GRID ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start fade-in">

        {/* LEFT — Contact Cards */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {contactCards.map((card) => (
            <a
              key={card.label}
              href={card.href}
              target="_blank"
              rel="noreferrer"
              className="group bg-[#201f1f] border-2 border-white p-6
                flex justify-between items-center
                transition-all duration-100
                hover:translate-x-[4px] hover:translate-y-[4px]"
              style={{
                borderLeftWidth: "12px",
                borderLeftColor: card.accentColor,
                boxShadow: card.shadow,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0px 0px 0px 0px transparent";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = card.shadow;
              }}
            >
              <div>
                <span className="font-mono text-xs uppercase opacity-60 block mb-1">
                  {card.label}
                </span>
                <h3
                  className="font-black text-xl md:text-2xl text-white"
                  style={{ fontFamily: "Anton, sans-serif" }}
                >
                  {card.value}
                </h3>
              </div>
              <span
                className="text-3xl text-white group-hover:translate-x-2
                  transition-transform duration-300"
              >
                →
              </span>
            </a>
          ))}
        </div>

        {/* RIGHT — CTA Box */}
        <div className="lg:col-span-7">
          <div
            className="bg-[#00f0ff] p-8 md:p-12 border-4 border-black text-black
              flex flex-col justify-center gap-8 h-full"
            style={{ boxShadow: "4px 4px 0px 0px #ffffff" }}
          >
            <div>
              <h2
                className="text-4xl md:text-5xl font-black uppercase leading-none mb-4"
                style={{ fontFamily: "Anton, sans-serif" }}
              >
                Ready to start a project?
              </h2>
              <p className="text-xl font-bold">
                I build fast. I build smart.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:omnaitam635@gmail.com"
                className="bg-white text-black font-black text-xl px-8 py-4
                  border-2 border-black flex items-center justify-center gap-2
                  transition-all duration-100 hover:translate-x-[4px] hover:translate-y-[4px]"
                style={{
                  fontFamily: "Anton, sans-serif",
                  boxShadow: "4px 4px 0px 0px #000",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0px 0px 0px 0px transparent";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "4px 4px 0px 0px #000";
                }}
              >
                HIRE ME NOW →
              </a>
              <a
                href="#work"
                className="bg-transparent text-black font-black text-xl px-8 py-4
                  border-2 border-black flex items-center justify-center gap-2
                  hover:bg-black hover:text-white transition-all"
                style={{ fontFamily: "Anton, sans-serif" }}
              >
                VIEW WORK
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── CONTACT FORM ── */}
      <section className="mt-24 max-w-4xl mx-auto fade-in">
        <div
          className="bg-[#201f1f] border-2 border-white p-8 md:p-12"
          style={{ boxShadow: "4px 4px 0px 0px #ffffff" }}
        >
          {/* Form header */}
          <div className="mb-10 flex items-center justify-between border-b-2 border-white pb-4">
            <h2 className="font-mono text-2xl uppercase text-white">
              SEND A MESSAGE_
            </h2>
            <span className="text-[#6bff8f] text-2xl">{">"}_</span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              {/* Name */}
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder=" "
                  required
                  className="peer w-full bg-transparent border-b-2 border-white/40
                    py-3 outline-none text-white font-['Hanken_Grotesk'] text-lg
                    focus:border-[#00f0ff] transition-colors"
                />
                <label
                  htmlFor="name"
                  className="absolute left-0 top-3 font-mono text-xs uppercase
                    text-white/40 transition-all duration-200
                    peer-focus:-top-4 peer-focus:text-[#00f0ff]
                    peer-[:not(:placeholder-shown)]:-top-4"
                >
                  Name
                </label>
              </div>

              {/* Email */}
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder=" "
                  required
                  className="peer w-full bg-transparent border-b-2 border-white/40
                    py-3 outline-none text-white font-['Hanken_Grotesk'] text-lg
                    focus:border-[#00f0ff] transition-colors"
                />
                <label
                  htmlFor="email"
                  className="absolute left-0 top-3 font-mono text-xs uppercase
                    text-white/40 transition-all duration-200
                    peer-focus:-top-4 peer-focus:text-[#00f0ff]
                    peer-[:not(:placeholder-shown)]:-top-4"
                >
                  Email
                </label>
              </div>
            </div>

            {/* Message */}
            <div className="relative">
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                placeholder=" "
                rows={4}
                required
                className="peer w-full bg-transparent border-b-2 border-white/40
                  py-3 outline-none text-white font-['Hanken_Grotesk'] text-lg
                  focus:border-[#00f0ff] transition-colors resize-none"
              />
              <label
                htmlFor="message"
                className="absolute left-0 top-3 font-mono text-xs uppercase
                  text-white/40 transition-all duration-200
                  peer-focus:-top-4 peer-focus:text-[#00f0ff]
                  peer-[:not(:placeholder-shown)]:-top-4"
              >
                Project Description
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full md:w-auto font-black text-2xl px-12 py-5
                border-2 border-black flex items-center justify-center gap-4
                transition-all duration-100 hover:translate-x-[4px] hover:translate-y-[4px]
                disabled:opacity-60 disabled:cursor-not-allowed"
              style={{
                fontFamily: "Anton, sans-serif",
                backgroundColor:
                  status === "sent"
                    ? "#ffffff"
                    : status === "error"
                    ? "#ff6b00"
                    : "#6bff8f",
                color: "black",
                boxShadow: "4px 4px 0px 0px #000",
              }}
              onMouseEnter={(e) => {
                if (status === "idle")
                  e.currentTarget.style.boxShadow = "0px 0px 0px 0px transparent";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "4px 4px 0px 0px #000";
              }}
            >
              {status === "idle" && "SEND IT →"}
              {status === "sending" && "SENDING..."}
              {status === "sent" && "✓ SENT!"}
              {status === "error" && "ERROR — TRY AGAIN"}
            </button>
          </form>
        </div>
      </section>

      {/* ── MARQUEE BANNER ── */}
      <div className="w-full bg-[#141313] border-y-2 border-white overflow-hidden py-4 mt-20">
        <div
          className="flex whitespace-nowrap"
          style={{ animation: "marquee 20s linear infinite" }}
        >
          {[...Array(3)].map((_, i) => (
            <span
              key={i}
              className="font-mono text-xl uppercase px-4 text-white flex-shrink-0"
            >
              📧 OMNAITAM635@GMAIL.COM — +91 9960852898 — OPEN FOR FREELANCE ⚡ — LET'S BUILD SOMETHING AMAZING —&nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* ── FOOTER ── */}
      <footer className="bg-[#141313] px-4 md:px-16 py-6 border-t-2 border-white mt-0">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col gap-1 items-center md:items-start">
            <span className="font-mono text-sm uppercase text-white">
              © Om Naitam | B.Tech CT | KITS Ramtek
            </span>
            <span className="font-mono text-[10px] text-white/30">
              2025 ALL RIGHTS RESERVED
            </span>
          </div>
          <div className="flex gap-6 font-mono text-sm uppercase">
            <a
              href="https://github.com/OmBuildsAI"
              target="_blank"
              rel="noreferrer"
              className="text-white/50 hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/om-naitam"
              target="_blank"
              rel="noreferrer"
              className="text-white/50 hover:text-white transition-colors"
            >
              LinkedIn
            </a>
          </div>
          <div className="font-mono text-sm text-white uppercase text-center md:text-right">
            Building AI-powered products fast
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .fade-in {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        .fade-in.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
};

export default Contact;