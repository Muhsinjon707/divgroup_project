import { NextResponse } from "next/server";

import data from "@/src/assets/data.json"

export function GET(){
  return NextResponse.json({data}, {status: 200});
}