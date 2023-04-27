// import { NextResponse } from "next/server";




// const secret = process.env.SECRET;

// export default function middleware(req) {
//     const {cookies} = req;

//     const jwt = cookies.OursiteJWT;

//     const url = req.url;

//     if(url.includes("/user/login")){
//         if(jwt){
//             try{
//                 verify(jwt, secret);
    
//                 return NextResponse.redirect("/");
    
    
//             }catch (e){
//                 return NextResponse.next();
//             }
//         }


        
//     }

//     if(url.includes("/admin/dashboard")){
//         if(jwt === undefined){
//             return NextResponse.redirect("/user/login");
//         }


//         try{
//             verify(jwt, secret);

//             return NextResponse.next();


//         }catch (e){
//             return NextResponse.redirect("/user/login");
//         }
//     }

    

//     return NextResponse.next();
// }