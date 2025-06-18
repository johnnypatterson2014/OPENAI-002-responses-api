import { NextResponse } from 'next/server';
// import { NextApiRequest, NextApiResponse } from 'next'

export async function POST(request: Request) {
    console.log('Entered api/test... ');
    // const requestBodyJson = JSON.stringify(req.body);
    // const data = await req.json();
    const { content, role, previousResponseId } = await request.json();

    const apiKey = process.env.OPENAI_API_KEY
    // const url = 'http://localhost:8080/rag/qa-over-pdf' 
    const url = 'https://api.openai.com/v1/responses'

    let bodyContent = '';
    if (role == 'devloper') {
        bodyContent = JSON.stringify({
            model: "gpt-4.1",
            input: [
                {
                    role: role,
                    content: content,
                }
            ],
            previous_response_id: previousResponseId ? previousResponseId : null
        });
    } else {
        bodyContent = JSON.stringify({
            model: "gpt-4.1",
            input: content,
            previous_response_id: previousResponseId ? previousResponseId : null
        });
    }

    try {

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X_CONV_ID': 'convo-id-123456',
                Authorization: `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: "gpt-4.1",
                input: [
                    {
                        role: role,
                        content: content,
                    }
                ],
                previous_response_id: previousResponseId ? previousResponseId : null
            }),
        })
        const data = await response.json()
        // res.status(200).json({ data })
        return NextResponse.json(data);
    } catch (error) {
        // TODO - log error
    }


    // return NextResponse.json({
    //     role: 'assistant',
    //     content: question
    // });
    // const response = await fetch('https://api.example.com/data');
    // const data = await response.json();
    // res.status(200).json(data);
}