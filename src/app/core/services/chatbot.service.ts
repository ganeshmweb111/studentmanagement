import { Injectable } from '@angular/core';
import { Student } from 'src/app/shared/models/student.model';

declare var webkitSpeechRecognition: any;

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {

  recognition: any;

  constructor() {
    const SpeechRecognition = (window as any).SpeechRecognition || webkitSpeechRecognition;
    this.recognition = new SpeechRecognition();
    this.recognition.lang = 'en-US';
    this.recognition.continuous = false;
  }

  startListening(callback: (text: string) => void) {
    this.recognition.start();

    this.recognition.onresult = (event: any) => {
      const text = event.results[0][0].transcript.toLowerCase();
      callback(text);
    };
  }

  speak(message: string) {
    const speech = new SpeechSynthesisUtterance(message);
    speech.lang = 'en-US';
    window.speechSynthesis.speak(speech);
  }

  processCommand(command: string, students: Student[]): string {

    if (command.includes('total')) {
      return `Total students are ${students.length}`;
    }

    if (command.includes('list')) {
      return students.map(s => s.firstName).join(', ');
    }

    if (command.includes('detail')) {
      const name = command.split(' ')[1];

      const student = students.find(s =>
        s.firstName.toLowerCase() === name
      );

      if (student) {
        return `${student.firstName} ${student.lastName}, email is ${student.email}`;
      }

      return 'Student not found';
    }

    return 'Sorry I did not understand';
  }

}