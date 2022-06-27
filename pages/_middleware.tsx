import { NextResponse, NextRequest } from 'next/server'
// redirect old netlify deploy to new vercel deploy
export async function middleware(req: NextRequest) {
    console.log(req.nextUrl.hostname)
    if(req.nextUrl.hostname.toLowerCase().includes("netlify")){
      return NextResponse.redirect("https://lohit244.vercel.app")
    }
    return NextResponse.next()
}