import { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const client = await MongoClient.connect(
    'mongodb+srv://joonhabaak:MWKYNvPyNVK1Gkw6@cluster0.rfkrpzi.mongodb.net/myTodo?retryWrites=true&w=majority'
  );
  const db = client.db();
  const todoCollection = db.collection('myTodo');

  if (req.method === 'POST') {
    console.log(req);
    const result = await todoCollection.insertOne(req.body);

    console.log('result', result);

    client.close();
    res.status(201).json({ message: 'ADD TODO' });
  }

  if (req.method === 'GET') {
    const result = await todoCollection.find().toArray();
    console.log(result);

    client.close();
    res.status(201).json({ message: 'FETCH TODO', result });
  }
};

export default handler;
