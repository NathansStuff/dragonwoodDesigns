import { TryCatchMiddleware } from '@/backend/middleware/tryCatchMiddleware';
import { NextApiRequest, NextApiResponse } from 'next';
import { sendEmail } from './emailerService';

export async function sendEmailHandler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  await TryCatchMiddleware(async () => {
    await new Promise((resolve) => setTimeout(resolve, 100));
    console.log('req.body', req.body);
    const { name, email, message } = req.body;
    const emailService = await sendEmail(name, email, message);
    return res.status(201).json(emailService);
  }, res);
}
