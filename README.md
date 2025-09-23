# Calculadora Express (GitHub Codespaces)

Projeto simples de calculadora usando **Express** e front-end estático.

## Como usar

1. Abra este repositório no GitHub Codespaces
2. Rode `npm install` (se não rodar automaticamente)
3. Rode `npm start`
4. Acesse a aplicação pela porta **3000**

## Teste via curl

```bash
curl -X POST http://localhost:3000/api/calc \
  -H "Content-Type: application/json" \
  -d '{"op":"+","a":10,"b":5}'
```
