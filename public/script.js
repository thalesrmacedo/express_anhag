const el = (id) => document.getElementById(id);

el('calc').addEventListener('click', async () => {
  const a = parseFloat(el('a').value);
  const b = parseFloat(el('b').value);
  const op = el('op').value;
  const out = el('output');

  if (Number.isNaN(a) || Number.isNaN(b)) {
    out.textContent = 'Preencha A e B com números válidos.';
    return;
  }

  try {
    const resp = await fetch('/api/calc', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ op, a, b })
    });

    const data = await resp.json();
    if (!resp.ok) throw new Error(data.error || 'Erro');

    out.textContent = 'Resultado: ' + data.result;
  } catch (err) {
    out.textContent = 'Erro: ' + err.message;
  }
});