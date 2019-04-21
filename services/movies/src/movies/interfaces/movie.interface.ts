import { Document } from 'mongoose';

export interface Movie extends Document {
  readonly title: string;
  readonly description: string;
  readonly year: string;
}
