import { ContactService } from './../../services/contact.service';
import { Contact } from './../../models/contact';
import { Component, OnInit } from '@angular/core';
import './../../../assets/js/smtp.js'; //path might change
declare let Email: any;

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contact: Contact = {
    nom: "",
    email: "",
    message: "",
  }
  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
  }
  // addMessage() {
  //   console.log(this.contact)
  //   this.contactService.addCours(this.contact)
  // }
  sendMessage() {
    Email.send({
      Host: "https://smtp.elasticemail.com",
      Username: " abdosaid07@gmail.com",
      Password: "F35E9B656FD5A52C257B073D50279AB0FD40",
      To: "abdosaid07@gmail.com",
      From: "abdosaid07@gmail.com",
      Subject: "this.model.subject",
      Port:2525,
      Body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    })
    .then(message => {
      console.log(message)
      alert(message)
    }).catch(error => console.log(error))
  }
}
