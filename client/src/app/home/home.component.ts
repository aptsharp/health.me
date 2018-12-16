import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/services/patient.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public messages: any[];
  public date: string;

  public questions: any = {
    text: 'Olá [name], como está se sentindo após o início da sua medicação?',
    answers: [
      {
        text: 'Estou melhorando :D',
        question: {
          text: 'Muito bom, fico feliz :D'
        }
      },
      {
        text: 'Estou me sentindo mal',
        question: {
          text: 'Gostaria que eu agende uma consulta com o médico?',
          answers: [
            {
              text: 'Sim',
              question: {
                text: 'Para qual data?',
                action: 'scheduling'
              }
            },
            {
              text: 'Não',
              question: {
                text: 'Ok, fico na torcida pela sua melhora.'
              }
            }
          ]
        }
      }
    ]
  };

  public question: any;

  constructor(public patientService: PatientService) {
    this.patientService.getMessages('5c15d243873c4854e2d08379').then(async (response: any) => {
      await this.patientService.getPatient('5c15d243873c4854e2d08379');
      this.messages = response;
      this.question.text = this.question.text.replace('[name]', this.patientService.patient.name);
    });
    this.question = JSON.parse(JSON.stringify(this.questions));
  }

  async postMessage(answer: any) {
    await this.patientService.postMessage({
      message: this.question.text,
      patient: this.patientService.patient._id,
      sender: 'bot'
    });
    await this.patientService.postMessage({
      message: answer.text,
      patient: this.patientService.patient._id,
      sender: 'patient'
    });
    await this.patientService.getMessages('5c15d243873c4854e2d08379').then((response: any) => {
      this.messages = response;
    });
    this.question = answer.question;
  }

  async schedule() {
    await this.patientService.postMessage({
      message: this.question.text,
      patient: this.patientService.patient._id,
      sender: 'bot'
    });
    await this.patientService.postMessage({
      message: new Date(this.date).toLocaleDateString(),
      patient: this.patientService.patient._id,
      sender: 'patient'
    });
    // Requisição para agendamento na Dasa
    // Sucesso na requisição
    await this.patientService.postMessage({
      message: 'Agendamento marcado para o endereço Rua Gilberto Sabino, 215 - Pinheiros - São Paulo, SP',
      patient: this.patientService.patient._id,
      sender: 'bot'
    });
    await this.patientService.getMessages('5c15d243873c4854e2d08379').then((response: any) => {
      this.messages = response;
    });
    this.question = {
      text: 'Qualquer dúvida, fique a vontade para me contatar.',
      answers: []
    };
  }

  ngOnInit() {
  }
}
