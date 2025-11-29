int flame1 = 2;
int flame2 = 3;
int buzzer = 8;
int relayPin = 7;

void setup() {
  pinMode(flame1, INPUT);
  pinMode(flame2, INPUT);
  pinMode(buzzer, OUTPUT);
  pinMode(relayPin, OUTPUT);

  digitalWrite(buzzer, LOW);
  digitalWrite(relayPin, LOW);
}

void loop() {
  int f1 = digitalRead(flame1);
  int f2 = digitalRead(flame2);

  bool fire = (f1 == LOW || f2 == LOW); 

  if (fire) {
    digitalWrite(buzzer, HIGH);
    digitalWrite(relayPin, HIGH);
  } else {
    digitalWrite(buzzer, LOW);
    digitalWrite(relayPin, LOW);
  }
}
