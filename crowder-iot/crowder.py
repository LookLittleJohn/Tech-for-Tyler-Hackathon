import RPi.GPIO as GPIO
import time
import json
import requests
GPIO.setmode(GPIO.BCM)
GPIO.setup(18, GPIO.IN, pull_up_down=GPIO.PUD_UP)
GPIO.setup(16, GPIO.IN, pull_up_down=GPIO.PUD_UP)
lastpressed = 0
while True:
 input_state = GPIO.input(18)
 order = 0
 if input_state == False:
   postdata = {'id': 1, 'event': 'exit'}
   url = 'http://e24990e2.ngrok.io/event'
   r = requests.post(url, params=postdata)
   print(r.text)
   time.sleep(3)
   lastpressed=1
 _input_state = GPIO.input(16)
 if _input_state == False:
   postdata = {'id': 1, 'event': 'enter'}
   url = 'http://e24990e2.ngrok.io/event'
   r = requests.post(url, params=postdata)
   print(r.text)
   time.sleep(3)
   lastpressed=2
