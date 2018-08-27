/*
 Name:		arduinonodejs.ino
 Created:	8/27/2018 7:48:48 PM
 Author:	NOUARET
*/

// the setup function runs once when you press reset or power the board
int analogPin = 0;     
int val = 0;           
String thisString;
void setup() {
	Serial.begin(115200);          
}

// the loop function runs over and over again until power down or reset
void loop() {
	val = analogRead(analogPin);   
	thisString = String(val);
	Serial.println(val);             
	delay(200);
}
