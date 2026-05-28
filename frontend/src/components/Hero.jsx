import { useEffect, useRef } from "react";

const Hero = () => {
  const heroTextRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const moveX = (e.clientX - window.innerWidth / 2) / 100;
      const moveY = (e.clientY - window.innerHeight / 2) / 100;
      if (heroTextRef.current) {
        heroTextRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const stickers = document.querySelectorAll(".sticker:not(.animate-float)");
    stickers.forEach((sticker) => {
      const randomRot = (Math.random() * 10 - 5).toFixed(2);
      sticker.style.transform = `rotate(${randomRot}deg)`;
    });
  }, []);

  return (
    <>
      {/* ── HERO SECTION ── */}
      <main
        className="relative min-h-screen pt-32 pb-16 px-4 md:px-16 flex flex-col justify-center items-center z-10"
        id="home"
      >
        {/* Left vertical text */}
        <div className="absolute left-16 top-1/2 -translate-y-1/2 hidden lg:block">
          <p
            className="text-xs font-mono text-white/30 tracking-widest uppercase rotate-180"
            style={{ writingMode: "vertical-lr" }}
          >
            Om Naitam | B.Tech CT | KITS Ramtek
          </p>
        </div>

        {/* Right vertical text */}
        <div className="absolute right-16 top-1/2 -translate-y-1/2 hidden lg:block">
          <p
            className="text-xs font-mono text-white/30 tracking-widest uppercase"
            style={{ writingMode: "vertical-lr" }}
          >
            Building AI-powered products fast
          </p>
        </div>

        {/* ── STICKER BADGES ── */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="sticker absolute top-[25%] left-[10%] pointer-events-auto -rotate-12
              bg-[#00ff88] text-black px-4 py-2 border-2 border-white font-mono font-bold text-sm
              cursor-pointer transition-transform duration-300 hover:scale-110 hover:z-50"
            style={{ boxShadow: "8px 8px 0px 0px #000" }}
          >
            Python &amp; Flask
          </div>
          <div
            className="sticker absolute top-[20%] right-[15%] pointer-events-auto rotate-6
              bg-[#00e5ff] text-black px-4 py-2 border-2 border-white font-mono font-bold text-sm
              cursor-pointer transition-transform duration-300 hover:scale-110 hover:z-50"
            style={{ boxShadow: "8px 8px 0px 0px #000" }}
          >
            Claude AI
          </div>
          <div
            className="sticker absolute bottom-[30%] left-[15%] pointer-events-auto rotate-12
              bg-[#ff6b00] text-black px-4 py-2 border-2 border-white font-mono font-bold text-sm
              cursor-pointer transition-transform duration-300 hover:scale-110 hover:z-50"
            style={{ boxShadow: "8px 8px 0px 0px #000" }}
          >
            React.js
          </div>
          <div
            className="sticker absolute top-[60%] right-[10%] pointer-events-auto -rotate-6
              bg-[#ffd600] text-black px-4 py-2 border-2 border-white font-mono font-bold text-sm
              cursor-pointer transition-transform duration-300 hover:scale-110 hover:z-50"
            style={{ boxShadow: "8px 8px 0px 0px #000" }}
          >
            Bolt.new &amp; Lovable
          </div>
          <div className="sticker animate-float absolute bottom-[15%] right-[20%] pointer-events-auto">
            <div className="rounded-full border-2 border-white/30 w-24 h-24 flex items-center justify-center text-center">
              <p className="font-mono text-[10px] uppercase text-white/60 leading-tight">
                Vibe Coding<br />©2025
              </p>
            </div>
          </div>
        </div>

        {/* ── CENTRAL HERO TEXT ── */}
        <div className="text-center relative z-20 max-w-5xl mx-auto">
          <h1
            ref={heroTextRef}
            className="text-[72px] md:text-[130px] font-black text-white uppercase
              tracking-tighter leading-none mb-4 transition-transform duration-75"
            style={{ fontFamily: "Anton, sans-serif" }}
          >
            VIBE CODER
          </h1>
          <p
            className="text-2xl md:text-4xl text-[#00e5ff] mb-12 tracking-tight"
            style={{ fontFamily: "Anton, sans-serif" }}
          >
            &amp; AI App Developer
          </p>

          {/* Hero image frame */}
          <div className="relative w-full max-w-2xl mx-auto h-[300px] mb-12 group">
            <div
              className="absolute inset-0 bg-[#201f1f] border-2 border-white overflow-hidden"
              style={{ boxShadow: "4px 4px 0px 0px #fff" }}
            >
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXaFuGi6XaRMmoreL0kai1G3IofFmfpkgVye7Y3h9LJtj25NZZsa5DrO7wjLODjgB_uiAMbhTbifWtIPeBCYUZKtdfcmx7X0qDYJaCANtx3kQmtZBjuhjQnmukWfjsYtJA2hvzo86elwX8nrEZcEYPS9TEsQ0UBHwSC3awkMDosq5EWraSTULa-ZF5nVGs-p8tdL-eu9FpqtHfuAv3br3VDzgWMn-ywZTbIQGvEpbnbr4tYdNrV61LT2Q_MZAfgIZbF5UWwn1FnG0"
                alt="Tech workstation"
                className="w-full h-full object-cover grayscale contrast-125 opacity-50
                  group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-700"
              />
            </div>
            <div
              className="absolute -top-4 -right-4 bg-white text-black px-3 py-1
                font-mono text-xs font-bold border border-black"
              style={{ boxShadow: "4px 4px 0px 0px #000" }}
            >
              SYSTEM_INIT://STABLE
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <a
              href="#contact"
              className="group relative bg-white text-black px-10 py-5 font-black text-2xl
                uppercase border-2 border-white flex items-center gap-4
                transition-all duration-100 active:translate-x-1 active:translate-y-1
                hover:bg-[#00e5ff] hover:border-[#00e5ff]"
              style={{ fontFamily: "Anton, sans-serif", boxShadow: "6px 6px 0px 0px #00e5ff" }}
            >
              GET IN TOUCH
              <span className="group-hover:translate-x-2 transition-transform">→</span>
            </a>
            <a
              href="#work"
              className="bg-transparent text-white px-10 py-5 font-black text-2xl
                uppercase border-2 border-white
                transition-all duration-100 active:translate-x-1 active:translate-y-1
                hover:bg-white hover:text-black"
              style={{ fontFamily: "Anton, sans-serif", boxShadow: "6px 6px 0px 0px #ff6b00" }}
            >
              VIEW WORK
            </a>
          </div>
        </div>
      </main>

      {/* ── PROJECTS BENTO GRID ── */}
      <section
        className="relative z-10 px-4 md:px-16 py-24 bg-[#1c1b1b] border-y-2 border-white"
        id="work"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <h2
              className="text-4xl md:text-5xl font-black uppercase text-white"
              style={{ fontFamily: "Anton, sans-serif" }}
            >
              Selected Projects
            </h2>
            <p className="font-mono text-sm text-[#00ff88] tracking-wider">
              LATEST_DEPLOYMENTS_v2.1
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

            {/* ── CARD 1: CyberShield AI ── */}
            <div
              className="md:col-span-8 group relative border-2 border-white
                transition-all duration-300 hover:border-[#00e5ff]"
              style={{ boxShadow: "8px 8px 0px 0px #000" }}
            >
              <div className="aspect-video overflow-hidden bg-[#0a0a0a] relative">
                <img
                  src="/assets/cybershield.png"
                  alt="CyberShield AI"
                  className="w-full h-full object-cover opacity-80
                    group-hover:opacity-100 group-hover:scale-105
                    transition-all duration-700"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
                {/* Prize badge */}
                <div
                  className="absolute top-4 left-4 bg-[#00ff88] text-black px-3 py-1
                    font-mono text-xs font-bold border-2 border-black"
                  style={{ boxShadow: "3px 3px 0px 0px #000" }}
                >
                  🏆 2ND PRIZE — INNO VISION 2025
                </div>
                {/* Arrow */}
                <div className="absolute top-4 right-4 text-white text-2xl
                  group-hover:rotate-45 transition-transform duration-300">
                  ↗
                </div>
              </div>
              <div className="p-6 bg-[#141313]">
                <p className="font-mono text-sm text-white/50 mb-2">
                  2025 / AI SECURITY APP
                </p>
                <h3
                  className="text-2xl font-black uppercase text-white mb-3"
                  style={{ fontFamily: "Anton, sans-serif" }}
                >
                  CyberShield AI
                </h3>
                <p className="font-mono text-xs text-white/40 mb-3">
                  3-in-1 cybersecurity solution: URL Phishing Detector, QR Scanner & Deepfake Detector
                </p>
                <div className="flex gap-2 flex-wrap mb-3">
                  {["Python", "Flask", "Claude AI"].map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-xs border border-[#00e5ff]/40 px-2 py-1
                        text-[#00e5ff]/80 hover:border-[#00e5ff] hover:text-[#00e5ff]
                        transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href="https://bit.ly/4rxJ0Cg"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block font-mono text-xs text-[#00e5ff]
                    border-b border-[#00e5ff] hover:text-white hover:border-white
                    transition-colors"
                >
                  LIVE DEMO: bit.ly/4rxJ0Cg ↗
                </a>
              </div>
            </div>

            {/* ── CARD 2: ML Sandbox ── */}
            <div
              className="md:col-span-4 group border-2 border-white
                transition-all duration-300 hover:border-[#ff6b00]"
              style={{ boxShadow: "8px 8px 0px 0px #000" }}
            >
              <div className="h-full flex flex-col">
                <div className="flex-1 relative overflow-hidden bg-[#0a0a0a]"
                  style={{ minHeight: "240px" }}
                >
                  <img
                    src="/assets/mlsandbox.png"
                    alt="ML Sandbox"
                    className="w-full h-full object-cover opacity-90
                      group-hover:opacity-100 group-hover:scale-105
                      transition-all duration-700"
                  />
                  {/* Orange tint overlay */}
                  <div className="absolute inset-0 bg-[#ff6b00]/20 group-hover:bg-[#ff6b00]/10
                    transition-colors duration-300" />
                  <div
                    className="absolute top-3 right-3 bg-black text-white px-2 py-1
                      font-mono text-[10px] border border-white/30"
                  >
                    YASH 26.0 | IEEE &amp; ACM
                  </div>
                  <div className="absolute top-4 left-4 text-white text-xl
                    group-hover:rotate-45 transition-transform duration-300">
                    ↗
                  </div>
                </div>
                <div className="p-6 bg-[#141313] border-t-2 border-white">
                  <p className="font-mono text-sm text-white/50 mb-2">
                    2026 / HACKATHON
                  </p>
                  <h3
                    className="text-2xl font-black uppercase text-white mb-3"
                    style={{ fontFamily: "Anton, sans-serif" }}
                  >
                    ML Sandbox
                  </h3>
                  <div className="flex gap-2 flex-wrap">
                    {["React.js", "Flask", "scikit-learn"].map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-xs border border-[#ff6b00]/40 px-2 py-1
                          text-[#ff6b00]/80 hover:border-[#ff6b00] hover:text-[#ff6b00]
                          transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* ── CARD 3: BizEvent Collector ── */}
            <div
              className="md:col-span-4 group border-2 border-white
                transition-all duration-300 hover:border-[#00ff88]"
              style={{ boxShadow: "8px 8px 0px 0px #000" }}
            >
              <div className="relative overflow-hidden bg-[#0a0a0a]"
                style={{ aspectRatio: "1/1" }}
              >
                <img
                  src="/assets/bizevent.png"
                  alt="BizEvent Collector"
                  className="w-full h-full object-cover opacity-90
                    group-hover:opacity-100 group-hover:scale-105
                    transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
                <div className="absolute top-4 right-4 text-white text-xl
                  group-hover:rotate-45 transition-transform duration-300">
                  ↗
                </div>
              </div>
              <div className="p-6 bg-[#141313]">
                <p className="font-mono text-sm text-white/50 mb-2">
                  2025 / DASHBOARD
                </p>
                <h3
                  className="text-2xl font-black uppercase text-white mb-3"
                  style={{ fontFamily: "Anton, sans-serif" }}
                >
                  BizEvent Collector
                </h3>
                <div className="flex gap-2 flex-wrap mb-3">
                  {["Flask", "SocketIO", "Python"].map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-xs border border-[#00ff88]/40 px-2 py-1
                        text-[#00ff88]/80 hover:border-[#00ff88] hover:text-[#00ff88]
                        transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href="https://github.com/OmBuildsAI"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block font-mono text-xs text-[#00ff88]
                    border-b border-[#00ff88] hover:text-white hover:border-white
                    transition-colors"
                >
                  GITHUB.COM/OmBuildsAI ↗
                </a>
              </div>
            </div>

            {/* ── CARD 4: CTA Cyan ── */}
            <div
              className="md:col-span-8 flex flex-col justify-center border-2 border-white
                p-8 bg-[#00e5ff] text-black relative overflow-hidden group"
              style={{ boxShadow: "8px 8px 0px 0px #000" }}
            >
              {/* Background decorative arrow */}
              <div className="absolute right-8 top-1/2 -translate-y-1/2 text-[120px]
                text-black/10 font-black group-hover:text-black/20 transition-colors
                select-none pointer-events-none"
                style={{ fontFamily: "Anton, sans-serif" }}
              >
                ▶
              </div>
              <p className="font-mono text-xs uppercase tracking-widest mb-3 text-black/60">
                READY TO START A PROJECT?
              </p>
              <h3
                className="text-4xl md:text-5xl font-black uppercase leading-none mb-6"
                style={{ fontFamily: "Anton, sans-serif" }}
              >
                READY TO BUILD SOMETHING FAST?
              </h3>
              <div className="flex items-center gap-4">
                <a
                  href="#contact"
                  className="font-mono font-bold text-sm border-b-2 border-black
                    cursor-pointer hover:opacity-70 transition-opacity uppercase tracking-wider"
                >
                  HIRE ME NOW
                </a>
                <span className="text-2xl font-bold">→</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </>
  );
};

export default Hero;