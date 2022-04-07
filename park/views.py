from django.shortcuts import render
import paho.mqtt.subscribe as subscribe
import paho.mqtt.publish as publish
from django.http import HttpResponse
import json

# Create your views here.
def home(request):
    return render(request,"home.html")
def getStatus(request):
    msg=subscribe.simple(["/v1.6/devices/esp32/temp","/v1.6/devices/esp32/sen1"],msg_count=1, hostname="industrial.api.ubidots.com",
    port=1883, client_id="12345", keepalive=60, will=None, auth = {'username':"BBFF-mjWuzFLYOAFGmJ3eUAEyKDX1comFsB", 'password':""})
    msg1=subscribe.simple("/v1.6/devices/esp32/sen1",msg_count=1, hostname="industrial.api.ubidots.com",
    port=1883, client_id="12345", keepalive=60, will=None, auth = {'username':"BBFF-mjWuzFLYOAFGmJ3eUAEyKDX1comFsB", 'password':""})
    # 
    # print(msg.payload)
    # print(msg1.payload)
    resp=b'{"msg":'+msg.payload+b',"msg2":'+msg1.payload+b'}'
    print(resp)
    return HttpResponse(resp)
