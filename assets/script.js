
const projects = {
  buck5v:{
    icon:"⚡", title:"5V / 3A Buck Converter — TPS5430",
    client:"Power Electronics · Freelance",
    desc:"Custom step-down power supply module designed entirely in KiCad using Texas Instruments TPS5430. Wide input range 6–36V validated on 2S Li-ion pack (7.4V nominal). All SMD components hand-soldered including the SOIC-8 TPS5430, Schottky diode CR1, and SRP7028CC-150M inductor. Output verified with oscilloscope — 5V ±2% at full 3A load.",
    specs:[
      {l:"IC",v:"TI TPS5430DDA"},{l:"Input Voltage",v:"6–36V"},
      {l:"Output",v:"5V / 3A"},{l:"Topology",v:"Non-sync Buck"},
      {l:"Inductor",v:"SRP7028CC 15µH"},{l:"Output Cap",v:"220µF polymer"},
      {l:"Feedback",v:"R1=10K, R2=3.24K"},{l:"Tool",v:"KiCad 8.0.7"},
    ],
    tags:["TPS5430","KiCad","SMD","Buck Converter","6–36V Input","3A Output","Assembled & Tested"],
    tagColors:["yellow","","","","blue","gray","pro"],
    images:[ASSEMBLED, FRONT3D, BOTTOM3D],
    link:"https://github.com/AMAR124595/Buck-converter-5.v"
  },
  senseplugin:{
    icon:"🔩", title:"Custom Plugin PCB — SenseAbility Innovations",
    client:"SenseAbility Innovations · @KellerAdapt",
    desc:"Professional embedded hardware designed and delivered at SenseAbility Innovations for the KellerAdapt product line. Full prototype-to-production cycle covering schematic capture, PCB layout, SMD assembly, bring-up, debug, and client delivery.",
    specs:[
      {l:"Role",v:"Electronics Engineer"},{l:"Tool",v:"KiCad"},
      {l:"Stage",v:"Prototype → Production"},{l:"Type",v:"Plugin PCB"},
    ],
    tags:["Professional","KiCad","PCB Design","SMD Assembly","Client Delivery"],
    tagColors:["yellow","","","gray","blue"],
    images:["assets/sense_plugin_1.jpg", "assets/sense_plugin_2.jpg"],
    link:"https://www.linkedin.com/in/amar-gangadhar-6b25a5267"
  },
  buck10a:{
    icon:"⚡", title:"5V / 10A Synchronous Buck Converter",
    client:"Power Electronics · GitHub",
    desc:"4-layer PCB design using the TPS51397A/RJER synchronous buck controller. High-current design with optimised power planes, copper pours for thermal dissipation, and carefully routed switching node to minimise EMI.",
    specs:[
      {l:"IC",v:"TPS51397A/RJER"},{l:"Layers",v:"4-layer PCB"},
      {l:"Output",v:"5V / 10A"},{l:"Topology",v:"Synchronous Buck"},
      {l:"Tool",v:"KiCad"},
    ],
    tags:["KiCad","4-Layer PCB","TPS51397A","Synchronous","10A"],
    tagColors:["","","yellow","","gray"],
    images:[],
    link:"https://github.com/AMAR124595/5V_10A-Buck-converter"
  },
  buck3v3:{
    icon:"🔋", title:"3.3V Buck Converter — TPS56S201DCR",
    client:"Power Electronics · GitHub",
    desc:"Compact 3V3 power supply designed for MCU and sensor rail applications. Minimal BOM count with small PCB footprint. Uses TPS56S201DCR in SOT-23 package — suitable for space-constrained embedded designs.",
    specs:[
      {l:"IC",v:"TPS56S201DCR"},{l:"Output",v:"3.3V"},
      {l:"Package",v:"SOT-23"},{l:"Tool",v:"KiCad"},
    ],
    tags:["KiCad","TPS56S201DCR","SMD","3.3V","Compact"],
    tagColors:["","yellow","gray","","gray"],
    images:[],
    link:"https://github.com/AMAR124595/3V3-Buck_converter"
  },
  i2samp:{
    icon:"🎛️", title:"Class D I²S Amplifier — MAX98357A",
    client:"Audio Electronics · GitHub",
    desc:"Custom PCB for the Maxim MAX98357AETE+T mono Class D amplifier IC. Receives digital audio directly over I²S bus and drives a speaker — no external DAC or analog signal chain required. Designed to pair with ESP32 I²S audio output.",
    specs:[
      {l:"IC",v:"MAX98357AETE+T"},{l:"Class",v:"Class D"},
      {l:"Interface",v:"I²S"},{l:"Output",v:"3.2W @ 4Ω"},
      {l:"Tool",v:"KiCad"},
    ],
    tags:["KiCad","MAX98357A","I²S","Class D","Audio"],
    tagColors:["","yellow","blue","gray","gray"],
    images:[],
    link:"https://github.com/AMAR124595/MAX98357A-I2S-Amp"
  },
  esp32audio:{
    icon:"🔊", title:"ESP32 I²S Audio Streaming",
    client:"Firmware · C++ · GitHub",
    desc:"Firmware for streaming audio from ESP32 over I²S to a MAX98357A Class D amplifier. Audio files stored in SPIFFS flash filesystem. Implements I²S peripheral init, DMA buffer management, and real-time playback control.",
    specs:[
      {l:"MCU",v:"ESP32"},{l:"Protocol",v:"I²S"},
      {l:"Storage",v:"SPIFFS"},{l:"Language",v:"C++"},
      {l:"Amp",v:"MAX98357A"},
    ],
    tags:["ESP32","I²S","C++","SPIFFS","Audio","DMA"],
    tagColors:["blue","blue","","gray","gray","gray"],
    images:[],
    link:"https://github.com/AMAR124595/ESP32_I2S-Audio"
  },
  neopixel:{
    icon:"💡", title:"NeoPixel LED Control — ESP32 + Firebase",
    client:"IoT · ESP32 · GitHub",
    desc:"WS2812B NeoPixel LED control using ESP32 and Firebase Realtime Database. Mobile app sends color and pattern commands via Firebase, ESP32 listens over Wi-Fi and updates LEDs in real time. Demonstrates complete cloud-to-hardware IoT pipeline.",
    specs:[
      {l:"MCU",v:"ESP32"},{l:"LED",v:"WS2812B NeoPixel"},
      {l:"Backend",v:"Firebase Realtime DB"},{l:"Protocol",v:"Wi-Fi / HTTP"},
      {l:"Language",v:"C++"},
    ],
    tags:["ESP32","Firebase","Wi-Fi","WS2812B","IoT","C++"],
    tagColors:["blue","blue","blue","gray","",""],
    images:[],
    link:"https://github.com/AMAR124595/NeoPixel-LED-Control-with-ESP32-and-Firebase"
  },
  gesture:{
    icon:"🌈", title:"RGB Lighting — Hand Gesture Recognition",
    client:"IoT · ESP · GitHub",
    desc:"RGB LED lighting system controlled by hand gestures detected via sensor input. Intuitive gesture-to-color mapping with real-time response. Each gesture triggers a different color or pattern on the RGB output.",
    specs:[
      {l:"MCU",v:"ESP"},{l:"Control",v:"Hand Gesture"},
      {l:"Output",v:"RGB LED"},{l:"Response",v:"Real-time"},
    ],
    tags:["ESP","Gesture","RGB LED","Sensor Fusion","IoT"],
    tagColors:["blue","","gray","gray",""],
    images:[],
    link:"https://github.com/AMAR124595/Smart-RGB-Lighting-Control-with-Hand-Gesture-Recognition"
  },
  dht11:{
    icon:"🌡️", title:"DHT11 IoT Monitor — Firebase",
    client:"IoT · ESP8266 · GitHub",
    desc:"IoT system reading temperature and humidity from DHT11 sensor over I²C. Displays live values on an I²C LCD and simultaneously pushes data to Firebase Realtime Database for remote monitoring from any device.",
    specs:[
      {l:"MCU",v:"ESP8266"},{l:"Sensor",v:"DHT11"},
      {l:"Display",v:"I²C LCD"},{l:"Backend",v:"Firebase"},
      {l:"Protocol",v:"I²C"},
    ],
    tags:["ESP8266","Firebase","I²C","DHT11","LCD","IoT"],
    tagColors:["blue","blue","blue","gray","gray",""],
    images:[],
    link:"https://github.com/AMAR124595/DHT-11-WITH-FIREBASE"
  },
  fbcount:{
    icon:"🔢", title:"ESP8266 Push-Button Counter — Firebase",
    client:"IoT · ESP8266 · GitHub",
    desc:"Demonstrates event-triggered cloud data upload from ESP8266. A push button press increments a counter stored in Firebase Realtime Database. Clean baseline architecture for any IoT event pipeline.",
    specs:[
      {l:"MCU",v:"ESP8266"},{l:"Backend",v:"Firebase"},
      {l:"Input",v:"GPIO Push Button"},{l:"Language",v:"C++"},
    ],
    tags:["ESP8266","Firebase","GPIO","IoT","C++"],
    tagColors:["blue","blue","gray","",""],
    images:[],
    link:"https://github.com/AMAR124595/Firebase-Count"
  },
  smarthome:{
    icon:"🏠", title:"Smart Home Lighting Control — ESP8266",
    client:"IoT · Soften Technologies",
    desc:"ESP8266-based smart lighting system with LDR ambient light sensor for automatic brightness detection. Built during Junior Embedded Developer role at Soften Technologies. LED output controlled based on LDR threshold with manual Wi-Fi override.",
    specs:[
      {l:"MCU",v:"ESP8266"},{l:"Sensor",v:"LDR"},
      {l:"Control",v:"Wi-Fi"},{l:"Role",v:"Soften Technologies"},
    ],
    tags:["ESP8266","Wi-Fi","LDR","Smart Home","IoT"],
    tagColors:["blue","blue","gray","gray",""],
    images:[],
    link:"https://github.com/AMAR124595/Smart-Home-Lighting-Control-System-in-ESP8266"
  },
  roomauto:{
    icon:"🏢", title:"Room Automation System",
    client:"IoT · ESP · GitHub",
    desc:"Room automation system with 16×2 LCD display and matrix keypad interface. Users select rooms and control lighting and fan states. System displays real-time on/off status for each zone on the LCD.",
    specs:[
      {l:"MCU",v:"ESP"},{l:"Display",v:"16×2 I²C LCD"},
      {l:"Input",v:"Matrix Keypad"},{l:"Zones",v:"Multi-room"},
    ],
    tags:["ESP","LCD","Keypad","Automation","Multi-room"],
    tagColors:["blue","gray","gray","gray","gray"],
    images:[],
    link:"https://github.com/AMAR124595/PROJECT-ROOM-AUTOMATION"
  },
  cubsat:{
    icon:"🛰️", title:"CubeSat — Nano Satellite",
    client:"Space · College Project",
    desc:"Nano satellite system for monitoring environmental parameters from orbit. Sensors track weather conditions, cosmic radiation levels, and Earth's magnetic field. Covers full embedded pipeline: sensor integration, onboard data logging, and telemetry downlink.",
    specs:[
      {l:"Type",v:"CubeSat"},{l:"Sensors",v:"Weather, Radiation, Magnetic"},
      {l:"Data",v:"Logging + Telemetry"},{l:"Context",v:"College Project"},
    ],
    tags:["CubeSat","Space","Telemetry","Sensors","Data Logging"],
    tagColors:["yellow","gray","blue","","gray"],
    images:[],
    link:"https://github.com/AMAR124595/CUBSAT"
  },
  wifirecon:{
    icon:"📶", title:"ESP32 Wi-Fi Auto-Reconnect + Firebase",
    client:"Firmware · ESP32 · GitHub",
    desc:"Robust Wi-Fi connection manager for ESP32 with Firebase integration. Handles network drops gracefully — queues sensor data locally during outages and automatically resumes Firebase upload on reconnection. Essential pattern for reliable field-deployed IoT devices.",
    specs:[
      {l:"MCU",v:"ESP32"},{l:"Backend",v:"Firebase"},
      {l:"Language",v:"C++"},{l:"Pattern",v:"Queue + Retry"},
    ],
    tags:["ESP32","Firebase","C++","Wi-Fi","Resilience","IoT"],
    tagColors:["blue","blue","","blue","gray",""],
    images:[],
    link:"https://github.com/AMAR124595/AMAR124595-WIFI_RECONNECTION_ON_ESP32_FIREBASE"
  },
  rover:{
    icon:"🤖", title:"Face Tracking Rover",
    client:"Robotics · LinkedIn",
    desc:"Autonomous ground rover that detects and tracks a human face in real time using computer vision. Motor driver adjusts rover heading continuously to keep the detected face centred in the camera frame.",
    specs:[
      {l:"Type",v:"Autonomous Rover"},{l:"Vision",v:"Face Detection"},
      {l:"Control",v:"Motor Driver"},{l:"Mode",v:"Autonomous"},
    ],
    tags:["Robotics","Vision","Motor Control","Autonomous","OpenCV"],
    tagColors:["yellow","","gray","gray","gray"],
    images:[],
    link:"https://www.linkedin.com/in/amar-gangadhar-6b25a5267"
  },
  i2clcd:{
    icon:"📺", title:"I²C LCD + DHT11 Display",
    client:"Firmware · ESP8266 · GitHub",
    desc:"Clean I²C LCD driver implementation with DHT11 temperature and humidity sensor. Covers I²C peripheral initialisation, LCD command vs data mode switching, cursor positioning, and continuous sensor polling loop.",
    specs:[
      {l:"MCU",v:"ESP8266"},{l:"Protocol",v:"I²C"},
      {l:"Display",v:"16×2 LCD"},{l:"Sensor",v:"DHT11"},
    ],
    tags:["ESP8266","I²C","LCD","DHT11","C++"],
    tagColors:["blue","blue","gray","gray",""],
    images:[],
    link:"https://github.com/AMAR124595/i2c-LCD-DHT-11"
  },
};

function openModal(id){
  const p = projects[id];
  if(!p) return;
  let galleryHTML = "";
  if(p.images && p.images.length){
    galleryHTML = '<div class="modal-gallery">';
    p.images.forEach((src,i)=>{
      galleryHTML += `<img src="${src}" alt="Project image ${i+1}" onclick="openLightbox(this.src)" style="cursor:zoom-in"/>`;
    });
    galleryHTML += "</div>";
  }
  let specsHTML = "";
  if(p.specs && p.specs.length){
    specsHTML = '<div class="modal-specs"><h4>// SPECIFICATIONS</h4><div class="modal-specs-grid">';
    p.specs.forEach(s=>{
      specsHTML += `<div class="spec-item"><div class="spec-label">${s.l}</div><div class="spec-value">${s.v}</div></div>`;
    });
    specsHTML += "</div></div>";
  }
  let tagsHTML = '<div class="modal-tags">';
  p.tags.forEach((t,i)=>{
    const c = p.tagColors[i]||"";
    tagsHTML += `<span class="pb ${c}">${t}</span>`;
  });
  tagsHTML += "</div>";

  document.getElementById("modalBody").innerHTML = `
    ${galleryHTML}
    <div class="modal-icon">${p.icon}</div>
    <div class="modal-title">${p.title}</div>
    <div class="modal-client">// ${p.client}</div>
    <div class="modal-desc">${p.desc}</div>
    ${specsHTML}
    ${tagsHTML}
    <div class="modal-actions">
      <a href="${p.link}" target="_blank" class="btn btn-primary">View on ${p.link.includes("github")?"GitHub":"LinkedIn"} ↗</a>
    </div>
  `;
  document.getElementById("modalOverlay").classList.add("open");
  document.body.style.overflow="hidden";
}

function closeModal(e,force){
  if(force || e.target===document.getElementById("modalOverlay")){
    document.getElementById("modalOverlay").classList.remove("open");
    document.body.style.overflow="";
  }
}

function openLightbox(src){
  document.getElementById("lightboxImg").src = src;
  document.getElementById("lightbox").classList.add("open");
}

function closeLightbox(){
  document.getElementById("lightbox").classList.remove("open");
}

document.addEventListener("keydown",e=>{
  if(e.key==="Escape"){
    closeModal(null,true);
    closeLightbox();
  }
});

function filterProjects(cat,btn){
  document.querySelectorAll(".filter-btn").forEach(b=>b.classList.remove("active"));
  btn.classList.add("active");
  document.querySelectorAll(".project-card").forEach(card=>{
    if(cat==="all") card.classList.remove("hidden");
    else card.classList.toggle("hidden",!(card.dataset.cat||"").includes(cat));
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const imgAssembled = document.getElementById("imgBuckAssembled");
  const imgFront = document.getElementById("imgBuckFront");
  const imgBottom = document.getElementById("imgBuckBottom");
  if (imgAssembled) imgAssembled.src = ASSEMBLED;
  if (imgFront) imgFront.src = FRONT3D;
  if (imgBottom) imgBottom.src = BOTTOM3D;
});
