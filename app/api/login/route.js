import { NextResponse } from 'next/server';

export async function GET(req) {
    console.log("GET function works ");
    return NextResponse.json({ message: 'GET function works in login' }, { status: 201 });
}
