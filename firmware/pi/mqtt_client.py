import paho.mqtt.client as mqtt
import serial
import json
from time import sleep

def on_connect(client, userdata, flags, rc):
    print("Connected with result code "+str(rc))    
    client.subscribe("notabug/tree/setanimation")

def on_message(client, userdata, msg):
    print('topic: '+msg.topic+" payload: "+str(msg.payload))
    data = json.loads(msg.payload.decode())
    code = '0'+str(data['code']) + '\n'
    print(code.encode('ascii'))
    ser = serial.Serial('/dev/ttyACM1', 9600)
    ser.flush()
    ser.write(code.encode('ascii'))
    sleep(10)
    ser.write(b'00\n')
    
client = mqtt.Client('raspberry_01')
client.on_connect = on_connect
client.on_message = on_message
client.username_pw_set(username='yiqndlhw',password='YBpbuT-Di4Nw')

client.connect("m20.cloudmqtt.com", 16027, 60)

client.loop_forever()