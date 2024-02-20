import Topo from "@/components/topo/Topo";
import Calendario from "@/components/Calendario";
import { useState } from "react";

export default function Agendamento() {
  const [prof, setProf] = useState<string>('');
  const [obs, setObs] = useState<string>('');
  const [horario, setHorario] = useState<string>('');
  const [selectedDateFromChild, setSelectedDateFromChild] = useState<string | null>(null);

  const handleSelectedDateChange = (date: string | null) => {
    setSelectedDateFromChild(date);
  };

  const sendDados = (e: any) => {
    e.preventDefault();

    // Verifica se uma data foi selecionada antes de prosseguir
    if (selectedDateFromChild === null) {
      alert('Selecione uma data no calendário antes de enviar os dados.');
      return;
    }

    // Aqui você pode usar 'selectedDateFromChild' ao enviar os dados do formulário
    console.log(`Data Completa: ${selectedDateFromChild}`);
    console.log(`Profissional: ${prof}`);
    console.log(`Horário: ${horario}`);
    console.log(`Observações: ${obs}`);
  };

  return (
    <div>
      <div>
        <Topo/>
      </div>
      <div>
        <Calendario onSelectedDayChange={handleSelectedDateChange} />
      </div>
      <div className="form">
        <form onSubmit={sendDados}>
          <div className="mb-3">
            <label className="form-label">Selecione o profissional:</label>
            <select className="form-select form-select-lg mb-3" aria-label="Large select example" value={prof} onChange={(evt)=>setProf(evt.target.value)}>
              <option selected>Selecione o profissional</option>
              <option value="1">Jose</option>
              <option value="2">João</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Selecione o horário:</label>
            <select className="form-select form-select-lg mb-3" aria-label="Large select example" value={horario} onChange={(evt)=>setHorario(evt.target.value)}>
              <option selected>Selecione o horário</option>
              <option value="1">08:00</option>
              <option value="2">09:00</option>
              <option value="3">10:00</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Observações:</label>
            <input type="text" className="form-control" name="" id="" value={obs} onChange={(evt)=>setObs(evt.target.value)}/>
          </div>
          <label className="form-label">digitado: {obs}</label>
          <label className="form-label">digitado: {horario}</label>
          <div className="col d-flex align-items-center justify-content-center">
            <button className="btn btnAgendamento">Agendar Horário</button>
          </div>
        </form>
      </div>
    </div>
  );
}
