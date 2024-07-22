import { NextResponse } from 'next/server';

export async function GET(req) {
    console.log("GET function works");
    return NextResponse.json({ message: 'GET request handled' }, { status: 201 });
}
