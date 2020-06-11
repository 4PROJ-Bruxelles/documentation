# Introduction 

The Beacon Trilateration is a project of localization via Bluetooth of a phone thanks to a triangulation of it.

This project contains two distinct parts:
* A Python code to implement a bluetooth terminal on a GNU/Linux system. 
* An interactive map on a web browser allowing to visualize the movement of a phone in real time by receiving data from Bluetooth terminals via its API.
	
For the project to work properly, a minimum of three Bluetooth terminals must be configured to send their data to the API
of the interactive map.

The interactive map will only display the elements if three RSSI signals from three terminals are received with the same MAC address.

The installation of a Bluetooth terminal can be done either by the source code or by the Docker image present in the project.

The map can be access at this URL: `https://trilateration.4proj.tools/map`
