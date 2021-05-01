import './App.css';

const task = (value) => {
  return (
    <li>{value}</li>
  )
}

function App() {
  const compromissos = ['Treino', 'Estudo', 'Jogar R6', 'Narrar RPG', 'Estudar RPG'];
  return (
    <div className="App">
      {compromissos.map((compromisso) => task(compromisso))}
    </div>
  );
}

export default App;
