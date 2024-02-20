import React, { useState, useEffect } from 'react';
import { Modal, Row, Col } from 'react-bootstrap';

interface CalendarioProps {
  onSelectedDayChange: (date: string) => void;
}

const Calendario: React.FC<CalendarioProps> = ({ onSelectedDayChange }) => {
  const [currMonth, setCurrMonth] = useState<number>(new Date().getMonth());
  const [currYear, setCurrYear] = useState<number>(new Date().getFullYear());
  const [dates, setDates] = useState<number[]>([]);
  const [showMonthModal, setShowMonthModal] = useState<boolean>(false);

  const isLeapYear = (year: number) => {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0);
  };

  const getFebDays = (year: number) => {
    return isLeapYear(year) ? 29 : 28;
  };

  const generateCalendar = (month: number, year: number) => {
    const daysOfMonth = [31, getFebDays(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const firstDay = new Date(year, month, 1).getDay();
    const newDates = Array.from({ length: daysOfMonth[month] + firstDay }, (_, index) => {
      return index >= firstDay ? index - firstDay + 1 : null;
    });

    setDates(newDates as any);
  };

  useEffect(() => {
    generateCalendar(currMonth, currYear);
  }, [currMonth, currYear]);

  const handleMonthPickerClick = () => {
    setShowMonthModal(true);
  };

  const handleMonthSelect = (month: number) => {
    setShowMonthModal(false);
    setCurrMonth(month);
  };

  const handleDayClick = (day: number) => {
    const selectedDate = new Date(currYear, currMonth, day).toLocaleDateString(); // Convertendo para string
    onSelectedDayChange(selectedDate);

    const dayElement = document.querySelector(`.calendar-day-hover${day}`);

    document.querySelectorAll('.active-day').forEach((el) => el.classList.remove('diaselecionado'));

    if (dayElement) {
      dayElement.classList.add('diaselecionado');
    }

    console.log(`Day ${day} clicked`);
  };

  const monthNames = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

  return (
    <div className="container text-center agendamento home">
      <div className="row">
        <label>Selecione o dia</label>
        <div className="col princ">
          <div className="light">
            <div className="calendar">
              <div className="calendar-header">
                <span className="month-picker" onClick={handleMonthPickerClick}>
                  {monthNames[currMonth]}
                </span>
                <span className="year-change" onClick={() => setCurrYear(currYear - 1)}>
                  &lt;
                </span>
                <span>{currYear}</span>
                <span className="year-change" onClick={() => setCurrYear(currYear + 1)}>
                  &gt;
                </span>
              </div>
              <div className="calendar-body">
                <div className="calendar-week-day">
                  <div>Dom</div>
                  <div>Seg</div>
                  <div>Ter</div>
                  <div>Qua</div>
                  <div>Qui</div>
                  <div>Sex</div>
                  <div>Sáb</div>
                </div>
                <div className="calendar-days">
                  {dates.map((date, index) => (
                    <div
                      key={index}
                      className={`calendar-day-hover${date} ${date !== null ? 'active-day ' : ''} ${date === new Date().getDate() && currMonth === new Date().getMonth() && currYear === new Date().getFullYear() ? 'curr-date' : ''}`}
                      onClick={() => handleDayClick(date)}
                    >
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      {date !== null ? date : ''}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal show={showMonthModal} onHide={() => setShowMonthModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Selecione o Mês</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            {monthNames.map((month, index) => (
              <Col key={index} xs={4} className="text-center month-col" onClick={() => handleMonthSelect(index)}>
                {month}
              </Col>
            ))}
          </Row>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Calendario;
