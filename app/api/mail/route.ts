import nodemailer from "nodemailer";
import { NextResponse, NextRequest } from "next/server";

export async  function POST(req: NextRequest) {
    const body = await req.json();
    const {content, email, subject, name} = body;
    const transporter = nodemailer.createTransport({
      host:"smtp.forwardemail.net",
      port: 465,
      secure: true,
      auth: {
         user: "truongquanglong777@gmail.com",
         pass: "n7rvQC92"
      }
    })

      const info = await transporter.sendMail({
         from: email,
         to:"truongquanglong777@gmail.com", 
         subject: subject,
         text: content
      })
      console.log("info:", info)
    return NextResponse.json({"method": "post"})
   //  const transporter = nodemailer.createTransport()

}


export async  function GET( ) {
   return NextResponse.json({"hello":"world"})

}