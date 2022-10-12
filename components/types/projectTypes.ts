import { StaticImageData } from 'next/image';
import React from 'react';

export interface projectType {
  title: string;
  id: string;
  summary: string;
  description?: string;
  tags: string[];
  image: StaticImageData;
  repo: string;
  live: string;
  children?: React.ReactNode;
}
