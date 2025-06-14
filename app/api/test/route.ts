import { NextResponse } from 'next/server';
// import { NextApiRequest, NextApiResponse } from 'next'

export async function POST(request: Request) {
    console.log('Entered api/test... ');
    // const requestBodyJson = JSON.stringify(req.body);
    // const data = await req.json();
    const { question } = await request.json();

    return NextResponse.json({
        role: 'assistant',
        content: question
    });
    // const response = await fetch('https://api.example.com/data');
    // const data = await response.json();
    // res.status(200).json(data);
}