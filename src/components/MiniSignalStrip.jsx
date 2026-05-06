function MiniSignalStrip() {
  return (
    <div className="mini-signal-strip" aria-hidden="true">
      <div className="mini-signal-head">
        <span className="mini-signal-dot" />
        <span className="mini-signal-label">Fluxo BIM</span>
      </div>

      <div className="mini-signal-screen">
        <svg
          className="mini-signal-svg"
          preserveAspectRatio="none"
          viewBox="0 0 100 24"
        >
          <defs>
            <linearGradient id="signal-line" x1="0%" x2="100%" y1="0%" y2="0%">
              <stop offset="0%" stopColor="#8a6f4d" />
              <stop offset="30%" stopColor="#c08f5d" />
              <stop offset="62%" stopColor="#8fb3a0" />
              <stop offset="100%" stopColor="#476b78" />
            </linearGradient>
          </defs>

          <path
            className="mini-signal-grid"
            d="M0 4 H100 M0 12 H100 M0 20 H100 M14 0 V24 M28 0 V24 M42 0 V24 M56 0 V24 M70 0 V24 M84 0 V24"
          />
          <path
            className="mini-signal-path"
            d="M0 18 L12 18 L12 10 L25 10 L25 15 L40 15 L40 6 L56 6 L56 13 L72 13 L72 8 L88 8 L88 4 L100 4"
          />
          <circle className="mini-signal-pulse pulse-one" cx="40" cy="6" r="1.2" />
          <circle className="mini-signal-pulse pulse-two" cx="88" cy="4" r="1.2" />
        </svg>
      </div>
    </div>
  );
}

export default MiniSignalStrip;
