
const express = require('express');
const app = express();

app.use(express.json());

let agendamentos = [
 {
  id: 1,
  cliente: "João Silva",
  ervico: "Corte de cabelo",
  horario: "29/10/2026 14:00"
},
{
id: 2,
cliente: "Pedro Santos",
servico: "Barba",
horario: "29/10/2026 15:00"
}
];

app.get('/', (req, res) => {
  res.send('Bem-vindo à Barbearia!');
});
app.get('/agendamentos', (req, res) => {
  res.json(agendamentos);
});
app.post('/agendamentos', (req, res) => {
  let novoAgendamento = req.body;
  novoAgendamento.id = agendamentos.length + 1;
  agendamentos.push(novoAgendamento);
  res.json(novoAgendamento);
});
module.exports = app;

//testado no thunder cliente