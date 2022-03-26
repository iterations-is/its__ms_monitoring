import { MongoClient } from 'mongodb';
import { MONGO_URL } from '../constants';

export const mongoClient = new MongoClient(MONGO_URL);
