// Подключаем библиотеку SoftwareSerial для Bluetooth HC-05
#include <SoftwareSerial.h>

// Создаём Bluetooth-порт на пинах 10 (RX) и 11 (TX)
SoftwareSerial bt(10, 11);

// Указываем аналоговый пин для дополнительного датчика огня (A0)
const int flamePinAnalog = A0;

// Указываем цифровые датчики огня
int flame1 = 2;   // Первый датчик огня (цифровой)
int flame2 = 3;   // Второй датчик огня (цифровой)

// Пин для буззера
int buzzer = 8;

// Пин реле (управление насосом/вентилятором)
int relayPin = 7;

// Строка для приёма команд с телефона
String cmd = "";

void setup() {
  // Настраиваем скорость передачи данных в монитор порта
  Serial.begin(9600);

  // Настраиваем скорость Bluetooth-соединения
  bt.begin(9600);

  // Настраиваем пины датчиков огня как входы
  pinMode(flame1, INPUT);
  pinMode(flame2, INPUT);

  // Настраиваем буззер как выход
  pinMode(buzzer, OUTPUT);

  // Настраиваем реле как выход
  pinMode(relayPin, OUTPUT);

  // Выключаем буззер и реле в начале работы
  digitalWrite(buzzer, LOW);
  digitalWrite(relayPin, LOW);

  // Встроенный LED (не обязателен, но может показывать команды)
  pinMode(LED_BUILTIN, OUTPUT);
}

void loop() {
  // Чтение цифровых датчиков огня
  int f1 = digitalRead(flame1);
  int f2 = digitalRead(flame2);

  // Чтение аналогового датчика огня
  int flameAnalog = analogRead(flamePinAnalog);

  // Условие наличия огня: один из цифровых датчиков = LOW
  bool fire = (f1 == LOW || f2 == LOW);

  // Если огонь обнаружен — включаем сирену и реле
  if (fire) {
    digitalWrite(buzzer, HIGH);
    digitalWrite(relayPin, HIGH);
  } else {
    // Если огня нет — выключаем всё
    digitalWrite(buzzer, LOW);
    digitalWrite(relayPin, LOW);
  }

  // Отправляем значения аналогового датчика в приложение
  bt.print("FLAME:");
  bt.println(flameAnalog);

  // Проверяем, есть ли команды от телефона
  while (bt.available()) {
    char c = (char)bt.read();

    // Команда доходит до \n = завершение строки
    if (c == '\n') {
      processCommand(cmd); // Отправляем команду на обработку
      cmd = "";            // Очищаем командную строку
    } else {
      cmd += c;            // Дописываем символ в команду
    }
  }

  // Небольшая задержка
  delay(300);
}

// Функция обработки команд, пришедших с Bluetooth
void processCommand(String s) {
  // Убираем лишние пробелы
  s.trim();

  // Команда "вперёд"
  if (s == "FWD") {
    bt.println("STATE:MOVING");
    digitalWrite(LED_BUILTIN, HIGH); // чисто визуально
  } 
  // Команда "назад"
  else if (s == "BACK") {
    bt.println("STATE:BACK");
  } 
  // Поворот влево
  else if (s == "LEFT") {
    bt.println("STATE:TURNLEFT");
  } 
  // Поворот вправо
  else if (s == "RIGHT") {
    bt.println("STATE:TURNRIGHT");
  } 
  // Стоп
  else if (s == "STOP") {
    bt.println("STATE:STOP");
    digitalWrite(LED_BUILTIN, LOW);
  } 
  // Автоматический режим тушения
  else if (s == "AUTO") {
    bt.println("STATE:AUTO");

    // Включаем реле как тушение (можешь потом добавить движение)
    digitalWrite(relayPin, HIGH);
  }
}
