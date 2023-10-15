# Components Used

## ESP32

![ESP32-Pinout](https://github.com/anish-patil/smart-agriculture/assets/101693650/1d898db7-c8d1-4181-af2a-6fc231be57e0)

The ESP32 is a powerful microcontroller that serves as the brains of this project. It plays a pivotal role in collecting data from various sensors, hosting a web server for data visualization, and controlling connected devices. Here's how it contributes to the project:

**Data Collection:** The ESP32 interfaces with sensors like the DHT11 to collect environmental data, such as temperature and humidity, and with soil moisture sensors (e.g., YL-38 and YL-69) to monitor soil conditions. It reads analog and digital signals from these sensors to gather real-time information.

**Data Processing:** Collected sensor data is processed and analyzed by the ESP32. It may perform calculations, handle data conversions, and prepare the data for display.

**Web Server:** The ESP32 hosts a web server using libraries like WebServer and ESPmDNS. This allows users to access the data remotely through a web browser. The web server displays data in a user-friendly format and provides a real-time dashboard for monitoring conditions.

**Wireless Connectivity:** The ESP32 has built-in Wi-Fi capabilities, enabling it to connect to your local network and the internet. It can send data to cloud platforms, trigger alerts, or enable remote control of connected devices.

**Integration and Automation:** The ESP32 can be integrated with other smart devices and systems. For example, it can control irrigation systems based on soil moisture readings, send notifications when environmental conditions change, or interact with other IoT devices.

**Customization:** Users can customize the ESP32's behavior by modifying the project's source code to meet their specific requirements. This flexibility allows for a wide range of applications.

**Energy Efficiency:** The ESP32 is known for its low power consumption, making it suitable for battery-powered and solar-powered projects.

**Limitations:** While versatile, the ESP32's capabilities may require careful resource management and power considerations for optimal performance in your project.

## DHT 11- Humidity and Temperature Sensor

![DHT-11](https://github.com/anish-patil/smart-agriculture/assets/101693650/7ddc9968-86d2-4c87-93ff-fb682560ff71)

The DHT11 is a basic and inexpensive digital temperature and humidity sensor. It is widely used in various applications, especially in the field of electronics and microcontroller-based projects. Here are some key characteristics and information about the DHT11 sensor:

1. It provides temperature readings with a resolution of 1°C and humidity readings with a resolution of 1% RH (Relative Humidity).

2. The sensor's temperature measurement range is from 0°C to 50°C (32°F to 122°F). The humidity measurement range is from 20% to 90% RH.

3. It provides a temperature accuracy of ±2°C and a humidity accuracy of ±5% RH.

4. The sensor communicates with microcontrollers or other digital devices using a digital signal. It utilizes a single-wire communication protocol, which makes it relatively simple to interface with microcontrollers like Arduino.

## YL-69 and YL-38 - Moisture Detection  

![Soil-Moisture-Sensor-Pinout](https://github.com/anish-patil/smart-agriculture/assets/101693650/7f8d1084-f0bb-41a9-b8a5-78d9b02461b3)

The YL-38 and YL-69 soil moisture sensors are commonly used in agriculture and gardening projects to monitor soil moisture levels. They operate based on the principle of electrical conductivity in the soil. Here's how they work:

**Measurement Principle:** These sensors measure soil moisture indirectly by assessing the electrical resistance or conductivity of the soil. When soil is dry, it has high resistance, while wet soil has low resistance due to its higher conductivity.

**Probe Design:** The sensor consists of a pair of metal probes that are inserted into the soil. One probe is connected to the ground (GND), and the other is used to measure the resistance or voltage across the soil.

**Analog Output:** The sensors provide an analog output that corresponds to the soil's electrical resistance. Dry soil results in a higher analog value, while wet soil yields a lower value.

**Digital Output (YL-69):** The YL-69 variant includes a digital output. When the soil is wet enough to surpass a user-defined threshold, the digital output becomes HIGH; otherwise, it remains LOW.

**Calibration:** To obtain meaningful moisture readings, a calibration process is often required. You need to relate the sensor's analog or digital output to actual moisture levels in your specific soil conditions.

**Limitations:** While these sensors provide a cost-effective solution for soil moisture monitoring, they have limitations in accuracy and may require recalibration if soil conditions change significantly.
