particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 100,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#5e00eb", //random // #FFFFFF
      },
      "shape": {
        "type": "triangle", // circle edge triangle polygon star 
        "stroke": {
          "width": 50,
          "color": "#ff00d9"
        },
        "polygon": {
          "nb_sides": 1000
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 6,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 90,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 4,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance":3,
        "color": "#ffffff",
        "opacity": 45,
        "width": 1000
      },
      "move": {
        "enable": true,
        "speed": 4,
        "direction": "left", // none top top-right right bottom-right bottom bottom-left left top-left
        "random": true,
        "straight": true,
        "out_mode": "out", // out bounce
        "attract": {
          "enable": true,
          "rotateX": 1600,
          "rotateY": 1200
        }
      }
    },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "grab" //grab bubble repulse
      },
      "onclick": {
        "enable": true,
        "mode": "bubble" // push remove bubble repulse
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 600,
        "line_linked": {
          "opacity": 0.5
        }
      },
      "bubble": {
        "distance": 400,
        "size": 4,
        "duration": 0.3,
        "opacity": 1,
        "speed": 3
      },
      "repulse": {
        "distance": 100,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  }
  }

);