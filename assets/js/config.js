/* =====================================================================
   Settings for the "Yeast, data and AI" practical. Edit and re-upload.
   ===================================================================== */
window.MG_CONFIG = {
  courseTitle: 'Yeast, data and AI',
  courseSubtitle: 'Predicting essential genes with machine learning',
  storePrefix: 'yeastai',

  /* true: students can reveal model answers after trying a question.
     false: the "Show answer" buttons are hidden (add ?answers to the address to see them).
     The answers are still in the page source, so this is not a way to keep them secret. */
  showModelAnswers: true,

  /* Python in the browser (Pyodide). To host it with the site instead of the CDN,
     download the Pyodide release, put it in assets/vendor/pyodide/ and use
     'assets/vendor/pyodide/' here (see README). */
  pyodideBase: 'https://cdn.jsdelivr.net/pyodide/v0.29.5/full/',

  /* AI assistant: the default mode for new visitors ('guided' or 'live').
     Live mode needs an API key that each user enters in the assistant's settings.
     Never put an API key in this file – anyone could copy it from a public site. */
  assistantDefaultMode: 'guided',
  anthropicModel: 'claude-sonnet-5-5',

  /* example text shown in the 3D viewer's load boxes */
  pdbExample: 'PDB ID',
  afExample: 'UniProt ID, e.g. P60010',

  preferBundledData: false,
  bundled: { pdb: {}, alphafold: {}, uniprot: {} },
  presets: {}
};
