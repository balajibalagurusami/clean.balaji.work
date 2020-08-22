import React, { Component } from 'react';
import Section from './../section';
import Card from './../card';

class Projects extends Component {
  state = {
    projects: [
      {
        title: 'Touch Connect Four',
        detail:
          'Multi-touch pad device that optically recognizes finger contours and tracks movements as different gestures for specific Connect Four moves on the built-in app.',
        img: 'touch-connect-four.png',
        color: 'blue',
        video:
          'https://drive.google.com/file/d/1Kqm7AtSdRUlBKvHngXRKjAbsgC3Nt1FF/view',
      },
      {
        title: 'UFO',
        detail:
          'High-altitude device launched 26,822 meters into the stratosphere to measure and store pressure, temperature, humidity, UV index, and GPS data for weather analysis.',
        img: 'ufo.png',
        color: 'green',
        link:
          'https://docs.google.com/gview?url=https://github.com/slau8/ufo/raw/master/ufo.pdf&embedded=true',
      },
      {
        title: 'Park Finder',
        detail:
          'Online National Parks Service kiosk and search tool to discover national parks with in-depth information on visitor centers, campgrounds, news, and educational materials.',
        img: 'park-finder.png',
        color: 'yellow',
        github: 'https://github.com/slau8/park-finder',
        link: 'http://shanlau.pythonanywhere.com',
      },
      {
        title: 'Jimmy Jams',
        detail:
          'Web application to streamline Spotify song requests into various music rooms.',
        img: 'jimmy-jams.png',
        color: 'red',
        github: 'https://github.com/slau8/xx4',
        video: 'https://www.youtube.com/watch?9=&v=YgQWEBAO9NE',
      },
    ],
  };
  render() {
    return (
      <Section title='projects'>
        <div className='row'>
          {this.state.projects.map((project) => (
            <Card project={project} />
          ))}
        </div>
      </Section>
    );
  }
}

export default Projects;
