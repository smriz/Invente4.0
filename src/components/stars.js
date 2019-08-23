import React from 'react';
import Particles from 'react-particles-js';

class Stars extends React.Component {
  render() {
    return (
      <Particles
        style={{ height: '100vh', overflowStyle: 'fixed' }}
        height="800px"
        params={{
          particles: {
            number: {
              value: 355,
              density: {
                enable: true,
                value_area: 789.1476416322727
              }
            },
            color: {
              value: '#ff9800'
            },
            shape: {
              type: 'circle',
              stroke: {
                width: 0,
                color: '#000000'
              },
              polygon: {
                nb_sides: 5
              }
            },
            opacity: {
              // "value": 0.48927153781200905,
              value: 0.5,
              random: false,
              anim: {
                enable: true,
                speed: 0.2,
                opacity_min: 0,
                sync: false
              }
            },
            size: {
              value: 2.5,
              random: true,
              anim: {
                enable: true,
                speed: 2,
                size_min: 0,
                sync: false
              }
            },
            line_linked: {
              enable: false,
              distance: 150,
              color: '#ffffff',
              opacity: 0.4,
              width: 1
            },
            move: {
              enable: true,
              speed: 1.2,
              direction: 'none',
              random: true,
              straight: false,
              out_mode: 'out',
              bounce: true,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
              }
            }
          },
          interactivity: {
            detect_on: 'window',
            events: {
              onhover: {
                enable: true,
                mode: 'repulse'
              },
              onclick: {
                enable: true,
                mode: 'push'
              },
              resize: true
            },
            modes: {
              grab: {
                distance: 150,
                line_linked: {
                  opacity: 1
                }
              },
              bubble: {
                distance: 83.91608391608392,
                size: 1,
                duration: 3,
                opacity: 1,
                speed: 3
              },
              repulse: {
                distance: 30,
                duration: 0.4
              },
              push: {
                particles_nb: 40
              },
              remove: {
                particles_nb: 2
              }
            }
          },
          retina_detect: true
        }}
      />
    );
  }
}

export default Stars;
