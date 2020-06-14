# Map

The map is made up of three technical parts allowing to visualize the movement of a person according to the power of the three signals received by the bluetooth beacons.

These three parts are:

* The API that receives the information sent by the beacons and transfers it to the front-end.
* The map, created using the *p5.js* framework, displays the beacons and connected devices as blue dots on a web page.
* *SocketIO*, which allows real-time communication with the server.

# API with NodeJS

The API is created in JavaScript using NodeJS, as well as Express and SQLite.
It is mainly used to retrieve the information sent by the bluetooth terminals, store and process it to send it to the frontend.

Three requests can be sent to it: 

* A POST request to add or replace the RSSI value of a Beacon for a MAC address.
* A DELETE request to delete a device if it comes too far from one of the terminals.
* A GET request to retrieve the information of all devices stored in the database.

# Frontend with p5.js

The visual of this project is a canvas containing, basically, three dots representing the three terminals that are supposed to be installed in real.
These points can be moved by clicking on them to reposition them to imitate the real configuration of the beacons.

As soon as the minimum information for a device to be displayed is sent by the API, a new blue point representing a device will be placed on the map.
By moving the bollards, the point will adapt to the new position directly.

A background image can be dragged and dropped to have a scale comparable to the reality.

By right-clicking on the web page, an options tab can be opened to change some display constants:

* B1 to B2 is the number of meters separating terminal 1 to terminal 2, this metric is necessary to calculate the number of pixels per meter for the display to be as realistic as possible.
* txPower is the signal power at one meter from a terminal, it is important in the trilateration calculation.
* The Environmental Factor is a variable depending on the environment in which the bollFards are placed. This value can vary between 2 and 5.

# SocketIO

SocketIO communicates between the frontend and the API in real time to send changes in information from a device to the map directly.

Each time a new value, or deletion of a value, is made in the API, the API will send information from all devices to update the map.


Translated with www.DeepL.com/Translator (free version)
