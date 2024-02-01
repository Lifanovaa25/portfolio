import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim"; 

const ParticlesBg = () => {
    const particlesInit = useCallback(async (engine: any) => {
        console.log(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: any) => {
        await console.log(container);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={

                {
                    "particles": {
                      "number": {
                        "value": 187,
                        "density": {
                          "enable": true,
                          "value_area": 639.7441023590567
                        }
                      },
                      "color": {
                        "value": "#88ac52"
                      },
                      "shape": {
                        "type": "polygon",
                        "stroke": {
                          "width": 1,
                          "color": "#a8e800"
                        },
                        "polygon": {
                          "nb_sides": 3
                        },
                        "image": {
                          "src": "img/github.svg",
                          "width": 50,
                          "height": 10
                        }
                      },
                      "opacity": {
                        "value": 0.231907237105158,
                        "random": true,
                        "anim": {
                          "enable": false,
                          "speed": 0.5,
                          "opacity_min": 0.1,
                          "sync": false
                        }
                      },
                      "size": {
                        "value": 1,
                        "random": true,
                        "anim": {
                          "enable": false,
                          "speed": 0.5,
                          "size_min": 0.5,
                          "sync": false
                        }
                      },
                      "line_linked": {
                        "enable": true,
                        "distance": 150,
                        "color": "#34f4ff",
                        "opacity": 0.35185925629748116,
                        "width": 0.6397441023590567
                      },
                      "move": {
                        "enable": true,
                        "speed": 0.85,
                        "direction": "none",
                        "random": false,
                        "straight": false,
                        "out_mode": "out",
                        "bounce": false,
                        "attract": {
                          "enable": false,
                          "rotateX": 600,
                          "rotateY": 1200
                        }
                      }
                    },
                    "interactivity": {
                      "detect_on": "window",
                      "events": {
                        "onhover": {
                          "enable": true,
                          "mode": "repulse"
                        },
                        "onclick": {
                          "enable": true,
                          "mode": "push"
                        },
                        "resize": true
                      },
                      "modes": {
                        "grab": {
                          "distance": 400,
                          "line_linked": {
                            "opacity": 1
                          }
                        },
                        "bubble": {
                          "distance": 400,
                          "size": 40,
                          "duration": 2,
                          "opacity": 8,
                          "speed": 0.5
                        },
                        "repulse": {
                          "distance": 200,
                          "duration": 0.4
                        },
                        "push": {
                          "particles_nb": 4
                        },
                        "remove": {
                          "particles_nb": 2
                        }
                      }
                    },
                    "retina_detect": false
                  }}
        />
    );
};

export default ParticlesBg