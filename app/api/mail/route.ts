import nodemailer from "nodemailer";
import { NextApiRequest, NextApiResponse } from 'next';

export default async  function POST(req: NextApiRequest, res: NextApiResponse ) {

    const transporter = nodemailer.createTransport()

}