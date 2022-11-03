#include <Servo.h>

Servo myservo;

int cerrado, abierto, pos = 0;

void setup() {
  Serial.begin(9600);
  myservo.attach(9);
  pinMode(3, INPUT);
  pinMode(5, INPUT);
}

void loop() {
  abierto = digitalRead(5);
  cerrado =  digitalRead(3);

  if (abierto == 0)
  {
    Serial.println("adelante");
    pos = 0;
  }

  if (cerrado == 0)
  {
    Serial.println("atras");
    pos = 90;
  }

  myservo.write(pos);
  delay(15);
  
}
