import { StaticImageData } from 'next/image';
import React from 'react';

export interface projectType {
  title: string;
  description: string;
  tags: string[];
  image: StaticImageData;
  repo: string;
  live: string;
  children?: React.ReactNode;
}
