export default class Funcionamento {
  constructor(funcionamento, activeClass) {
    this.funcionamento = document.querySelector(funcionamento);
    this.activeClass = activeClass;
  }

  dadosFuncionamento() {
    this.diasSemana = this.funcionamento.dataset.semana.split(",").map(Number);
    this.horaroSemana = this.funcionamento.dataset.horario
      .split(",")
      .map(Number);
  }

  dadosAgora() {
    this.dataAgota = new Date();
    this.diaAgora = this.dataAgota.getDay();
    this.horarioAgora = this.dataAgota.getUTCHours() - 3;
  }

  estaAberto() {
    const semanaAberta = this.diasSemana.indexOf(this.diaAgora) !== -1;
    const horaAberto =
      this.horarioAgora >= this.horaroSemana[0] &&
      this.horarioAgora < this.horaroSemana[1];

    return semanaAberta && horaAberto;
  }

  ativarAberto() {
    if (this.estaAberto()) {
      this.funcionamento.classList.add(this.activeClass);
    }
  }

  init() {
    if (this.funcionamento) {
      this.dadosFuncionamento();
      this.dadosAgora();
      this.ativarAberto();
    }
  }
}
