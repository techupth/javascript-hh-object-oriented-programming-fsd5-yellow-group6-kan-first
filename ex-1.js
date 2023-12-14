class EmailNotification { 
    constructor(notificationId, createdTime, content, receiver) {
        this.notificationId = notificationId;
        this.createdTime = createdTime;
        this.content = content;
        this.receiver = receiver;
    }
    send() {
        console.log(`Notification has been sent to ${this.receiver}`);
    }
}

class SMSNotification { 
    constructor(notificationId, createdTime, content, phoneNumber) {
        this.notificationId = notificationId;
        this.createdTime = createdTime;
        this.content = content;
        this.phoneNumber = phoneNumber;
      }
    
      send() {
        console.log(`Notification has been sent to ${this.phoneNumber}`);
      }
}

const emailNotification = new EmailNotification(
    "email123",
    "2023-12-14 09:00",
    "This is an email notification",
    "receiver@example.com"
  );

const smsNotification = new SMSNotification(
    "sms456",
    "2023-12-14 10:00",
    "This is an SMS notification",
    "+1234567890"
  );

  emailNotification.send();
  smsNotification.send();