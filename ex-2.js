class Notification {
  constructor (notificationId, createdTime, content, receiver){
    this.notificationId = notificationId;
    this.createdTime = createdTime;
    this.content = content;
    this.receiver = receiver;
  }
  send(){
    return "Notification has been sent to "+this.receiver
  }
}

class EmailNotification extends Notification{
  constructor (notificationId, createdTime, content, receiver){
    super(notificationId, createdTime, content, receiver)
  }
 }

class SMSNotification extends Notification{
  constructor (notificationId, createdTime, content, receiver){
    super(notificationId, createdTime, content, receiver)
  }
 }

 const mail = new EmailNotification(1234555, 14.30, "Sawadee", "noppadon@gmail")
 const sms = new SMSNotification(1234555, 14.30, "Sawadee", "099015896")

console.log(mail)
console.log(sms)
console.log(mail.send())
console.log(sms.send())