import { MongoClient } from 'mongodb';

const MONGO_URI = process.env.MONGO_URI as string;

const client = new MongoClient(MONGO_URI);

async function main() {
    
}