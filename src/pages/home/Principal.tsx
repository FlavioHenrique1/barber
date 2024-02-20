import Topo from "@/components/topo/Topo"
import Carrosel from "@/components/Carrosel"
import Link from 'next/link';

export default function Principal() {
    return(
        <div>
            <Topo/>
            <Carrosel/>
            <div className="principalDados">
            <div className="tituloPrincipal">
                <h2>Barbearia Inova</h2>
                <button>Aberto</button>
            </div>
                <div className="endereco">
                    <p><img src="img/location.svg" alt="" className="iconEnd"/>Av. Nossa Sra. do Bom Conselho, 74 - Pte. dos Carvalhos, Cabo - PE</p>
                    <p className="fw-bold">Contato</p>
                    <p className="numeroTel fw-bold"><img src="img/call.svg" alt="" className="iconEnd"/>(81) 97845-1234</p>
                </div>
                <div className="hrIndex">
                    <hr/>
                </div>
                <div className="especialista">
                    <p className="fw-bold">Especialista</p>
                    <div className="imgEspeci">
                        <img className="imgEsp" src="img/_6d811d12-7a7b-4b8f-8f63-82e75d14fd0e.jpeg" alt=""/>
                    </div>
                    <div className="textoInto">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo, harum non cum at dolorem porro, ullam in, tempore voluptatum accusantium ducimus? Cupiditate quibusdam quae quod inventore pariatur cumque incidunt maxime.
                    </div>
                </div>
                <div className="hrIndex">
                    <hr/>
                </div>
                <span className="fw-bold">Horário de funcionamento:</span>
                <div className="horario">
                    <p>Segunda - Sexta  : <span>08:00 AM - 18:00 PM</span></p>
                    <p>Sabado - Domingo : <span>08:00 AM - 18:00 PM</span></p>
                </div>
                <div className="btnPrinc">
                    <Link href={"/Agendamento/Agendamento"} className="btn btnAgendamento" id="btnAgendamento">
                    <span>Agendamento</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}