const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/api/calc', (req, res) => {
  const { op, a, b } = req.body;
  if (typeof a !== 'number' || typeof b !== 'number' || typeof op !== 'string') {
    return res.status(400).json({ error: 'Payload inválido. Use {op, a, b} onde a e b são números.' });
  }

  let result;
  switch (op) {
    case '+': result = a + b; break;
    case '-': result = a - b; break;
    case '*': result = a * b; break;
    case '/':
      if (b === 0) return res.status(400).json({ error: 'Divisão por zero' });
      result = a / b; break;
    case '^': result = Math.pow(a, b); break;
    default:
      return res.status(400).json({ error: 'Operador não suportado. Use +, -, *, /, ^' });
  }

  res.json({ result });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
