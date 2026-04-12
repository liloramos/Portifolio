function MiniSignalStrip() {
  return (
    <div className="mini-signal-strip" aria-hidden="true">
      <div className="mini-signal-head">
        <span className="mini-signal-dot" />
        <span className="mini-signal-label">Modo tatico</span>
      </div>

      <div className="mini-signal-screen">
        <svg
          className="mini-signal-svg"
          preserveAspectRatio="none"
          viewBox="0 0 100 24"
        >
          <defs>
            <linearGradient id="signal-line" x1="0%" x2="100%" y1="0%" y2="0%">
              <stop offset="0%" stopColor="#0f172a" />
              <stop offset="18%" stopColor="#38bdf8" />
              <stop offset="52%" stopColor="#93c5fd" />
              <stop offset="100%" stopColor="#1d4ed8" />
            </linearGradient>
          </defs>

          <path
            className="mini-signal-grid"
            d="M0 12 H100 M0 6 H100 M0 18 H100 M20 0 V24 M40 0 V24 M60 0 V24 M80 0 V24"
          />
          <path
            className="mini-signal-path"
            d="M0 15 L8 15 L14 10 L20 17 L28 8 L36 12 L43 5 L50 14 L58 9 L65 18 L73 7 L82 11 L90 6 L100 6"
          />
          <circle className="mini-signal-pulse pulse-one" cx="28" cy="8" r="1.2" />
          <circle className="mini-signal-pulse pulse-two" cx="73" cy="7" r="1.2" />
        </svg>
      </div>
    </div>
  );
}

export default MiniSignalStrip;
