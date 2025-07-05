import { NextRequest} from "next/server";
import { auth } from "@/auth";

export default function(request : NextRequest) {
   
   
    if(!request.cookies.get("authjs.session-token")) {
        console.log("Returned from the Middleware...")
        return Response.redirect(new URL("/login", request.nextUrl.origin))
    }
}

export const config= {
    matcher : ["/", "/profile"]
}

