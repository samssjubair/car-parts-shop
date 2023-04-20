import { NextResponse } from "next/dist/server/web/spec-extension/response";

export default function middleware(req){
    let verify = req.cookies.get("login");
    let url = req.url

    if(!verify && url.includes("admin/dashboard")){
        return NextResponse.redirect("http://localhost:3000/user/login")
    }

    if(verify && url === "http://localhost:3000/user/login"){
        return NextResponse.redirect("http://localhost:3000/admin/dashboard")
    }
}
