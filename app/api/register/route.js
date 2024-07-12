import { NextResponse } from "next/server";


export async function GET(req,res)  {
    console.log("get function works");
   return NextResponse.json({ message: 'GET request handled' }, { status: 201 });

}