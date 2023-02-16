     function displayTime() {
        const date = new Date();
        const timezone = "America/New_York";
        const timezoneOffset = -300;
        date.setMinutes(date.getMinutes() + date.getTimezoneOffset() + timezoneOffset);

        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();

        document.getElementById("time").innerHTML =
          hours.toString().padStart(2, "0") +
          ":" +
          minutes.toString().padStart(2, "0") +
          ":" +
          seconds.toString().padStart(2, "0");
      }
      setInterval(displayTime, 1000);