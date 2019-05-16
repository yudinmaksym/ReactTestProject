import React from 'react';
import {
  LogoIcon,
  MeditationIcon,
  EventsIcon,
  FloatingIcon,
  MassageIcon,
  FoodIcon,
  GameTrainIcon,
  AlfaGravityIcon,
  BlogIcon,
  ContactsIcon,
} from './svg';

const TYPES = {
  about: <LogoIcon />,
  meditation: <MeditationIcon />,
  event: <EventsIcon />,
  floating: <FloatingIcon />,
  massage: <MassageIcon />,
  food: <FoodIcon />,
  game_train: <GameTrainIcon />,
  alfagravity: <AlfaGravityIcon />,
  blog: <BlogIcon />,
  contacts: <ContactsIcon />,
};

const RenderSvg = ({ type }) => TYPES[type] || TYPES.about;

export default RenderSvg;

