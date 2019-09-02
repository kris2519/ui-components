// @flow

import type { LogoImg } from 'flow-types/img';

export type Team = {
  name: string,
  avatar: LogoImg,
  icon?: string,
  country: string
};
export type Player = {
  id: number,
  img: string,
  nick: string,
  role: string,
  firstName: string,
  lastName: string,
  country: string
};

export type TeamRoster = Array<Player>;
