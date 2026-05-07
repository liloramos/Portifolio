const sketchfabModel = {
  title: "Office Interior Reception",
  embedUrl:
    "https://sketchfab.com/models/7bcd6a10de504693884af200c37d7c15/embed?ui_infos=0&ui_controls=0&ui_watermark=0",
};

function SignalWave() {
  return (
    <div className="signal-wave-card">
      <div className="signal-wave-copy">
        <p className="signal-wave-kicker">Painel visual</p>
        <h3>Visualizacao 3D profissional</h3>
        <p>
          Um modelo interativo incorporado para trazer uma leitura mais realista
          de espaço, interiores e apresentação arquitetônica.
        </p>
      </div>

      <div className="sketchfab-embed-wrapper">
        <iframe
          allow="autoplay; fullscreen; xr-spatial-tracking"
          allowFullScreen
          className="sketchfab-frame"
          execution-while-not-rendered="true"
          execution-while-out-of-viewport="true"
          frameBorder="0"
          src={sketchfabModel.embedUrl}
          title={sketchfabModel.title}
          web-share="true"
          xr-spatial-tracking="true"
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default SignalWave;
