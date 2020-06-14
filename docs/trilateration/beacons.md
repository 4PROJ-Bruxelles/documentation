# Beacons

The beacons are handled by a Docker container to allow the best avaibility of the beacon service.
It uses the bluetooth library to get the RSSI value. RSSI is the power of the bluetooth signal of a device, when the device is getting closer, the RSSI value go down to reach 0.

The image is based on the `bluez` library which allow the use of `btmgmt find` to get all devices near the beacon with their RSSI values.
A Python script is used to send update either if a new device is found, to update the previous value or even to let the application know if a device is gone.

To build the image, you need to execute:
```bash
docker build -t beacon-rssi-bluetooth .
```
  
To run the container, you first need to create an `.env` file.
You can copy the template by doing:
```
cp .env.template .env
```

And you can run the container with:
```bash
docker run -it --privileged --net=host --env-file=.env beacon-rssi-bluetooth
```
