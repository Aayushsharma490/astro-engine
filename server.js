Starting Container
  - POST /whatsapp/send
  - POST /whatsapp/disconnect
  - POST /whatsapp/reconnect
[astro-engine][FIX MODE] EPHE_PATH resolved to: /app/swisseph-master/ephe
[astro-engine][FIX MODE] set_ephe_path + set_sid_mode(LAHIRI)
[astro-engine] Listening on http://localhost:5005/kundali
[astro-engine] WhatsApp endpoints available:
  - GET  /whatsapp/status
[WhatsApp] Connection closed. Reconnecting: false
[astro-engine] Rahu: 317.178330° Aquarius (Shatabhisha p4)
[astro-engine] Uranus: 324.665789° Aquarius (Purva Bhadrapada p2)
[astro-engine] Neptune: 297.995281° Capricorn (Dhanishta p2)
[astro-engine] Pluto: 243.892950° Sagittarius (Mula p2)
[astro-engine] Ketu: 137.178330° Leo (Purva Phalguni p2)
[astro-engine] ASCENDANT: 75.679233° = Gemini (sign index 2) [tropical: 99.64° - ayanamsa: 23.96°]
[astro-engine] --------------------------------------------
[astro-engine] Input local time: 2007-06-11T07:00:00
[astro-engine] Parsed timezone: +05:30
[astro-engine] UTC for Swiss Ephemeris: 2007-06-11T01:30:00Z
[astro-engine] UTC parts object: { year: 2007, month: 6, day: 11, hour: 1, minute: 30, second: 0 }
[astro-engine] Ephemeris path: /app/swisseph-master/ephe
[astro-engine] Ayanamsa (Lahiri): 23.96236075
[astro-engine] Sidereal mode set to: SE_SIDM_LAHIRI
[astro-engine] Sun: 55.822738° Taurus (Mrigashira p1)
[astro-engine] Moon: 359.974166° Pisces (Revati p4)
[astro-engine] Mars: 355.903346° Pisces (Revati p3)
[astro-engine] Mercury: 76.717822° Gemini (Ardra p4)
[astro-engine] Jupiter: 230.300053° Scorpio (Jyeshtha p2)
[astro-engine] Venus: 101.155046° Cancer (Pushya p3)
[astro-engine] Saturn: 116.483649° Cancer (Ashlesha p3)
[astro-engine] birthUtcDate for Vimshottari: 2007-06-11T01:30:00Z string
[astro-engine] cursor Date object: 2007-06-11T01:30:00.000Z isValid: true
[astro-engine] Starting loop for 12 mahadashas. remainingYears: 0.03293825442666021
[astro-engine] Calculated 12 mahadashas.
[astro-engine] Calculating sunrise/sunset for: {
  jdUt: 2454262.562498845,
  latitude: 26.4667,
  longitude: 76.7167,
  timezoneOffset: 5.5
}
[astro-engine] Error calculating sunrise/sunset: TypeError: Argument 3 should be a string or NULL - target star name
    at calculateSunriseSunset (/app/server.js:712:33)
    at /app/server.js:1581:26
    at computeKundali (/app/server.js:1601:9)
    at Server.<anonymous> (/app/server.js:2160:21)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
[astro-engine] Error stack: TypeError: Argument 3 should be a string or NULL - target star name
    at calculateSunriseSunset (/app/server.js:712:33)
    at /app/server.js:1581:26
    at computeKundali (/app/server.js:1601:9)
    at Server.<anonymous> (/app/server.js:2160:21)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
