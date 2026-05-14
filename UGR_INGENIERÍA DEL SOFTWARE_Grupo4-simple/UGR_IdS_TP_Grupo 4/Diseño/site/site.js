const VIEWS = [
  { key: 'dashboard_ejecutivo', label: 'Dashboard ejecutivo', file: '../HTML/dashboard_ejecutivo.html' },
  { key: 'prediccion_individual', label: 'Predicción individual', file: '../HTML/prediccion_individual.html' },
  { key: 'clientes_en_riesgo', label: 'Clientes en riesgo', file: '../HTML/clientes_en_riesgo.html' },
  { key: 'detalle_cliente', label: 'Detalle cliente', file: '../HTML/detalle_cliente.html' },
  { key: 'scoring_masivo', label: 'Scoring masivo', file: '../HTML/scoring_masivo.html' },
  { key: 'campanas_retencion', label: 'Campañas', file: '../HTML/campanas_retencion.html' },
  { key: 'analisis_features_desarrollo', label: 'Análisis de producto', file: '../HTML/analisis_features_desarrollo.html' },
];

function getViewKeyFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get('view');
}

function setViewKeyInUrl(key) {
  const url = new URL(window.location.href);
  url.searchParams.set('view', key);
  window.history.replaceState({}, '', url);
}

async function loadView(key) {
  const view = VIEWS.find(v => v.key === key) || VIEWS[0];

  // update nav styles
  document.querySelectorAll('.nav__item').forEach(btn => {
    btn.classList.toggle('is-active', btn.dataset.view === view.key);
  });

  const titleEl = document.getElementById('viewerTitle');
  const mountEl = document.getElementById('mount');
  const openRaw = document.getElementById('openRaw');

  if (!titleEl || !mountEl || !openRaw) {
    return;
  }

  titleEl.textContent = view.label;
  openRaw.href = view.file;

  try {
    const res = await fetch(view.file, { cache: 'no-store' });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const html = await res.text();

    // The design files are fragments (style + markup). We mount them as-is.
    mountEl.innerHTML = html;
  } catch (e) {
    mountEl.innerHTML = `
      <div style="padding:14px;border:1px solid rgba(15,23,42,0.12);border-radius:12px;background:#fff;max-width:980px;margin:0 auto;">
        <div style="font-weight:600;">No se pudo cargar la vista.</div>
        <div style="margin-top:6px;color:rgba(15,23,42,0.62);font-size:12px;line-height:1.5;">
          Revisá que existan los archivos en <code>../HTML/</code> y que el sitio esté siendo servido por HTTP.
          Si abrís el archivo directamente con <code>file://</code>, el navegador puede bloquear <code>fetch()</code>.
        </div>
      </div>
    `;
    // eslint-disable-next-line no-console
    console.error(e);
  }

  setViewKeyInUrl(view.key);
}

function wireNav() {
  document.querySelectorAll('.nav__item').forEach(btn => {
    btn.addEventListener('click', () => {
      loadView(btn.dataset.view);
    });
  });
}

wireNav();
loadView(getViewKeyFromUrl() || VIEWS[0].key);
