// app/api/services/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server';

const AIRTABLE_PAT = process.env.AIRTABLE_PAT;
const BASE_ID = process.env.AIRTABLE_BASE_ID;
const SERVICES_TABLE = "Talent";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const url = `https://api.airtable.com/v0/${BASE_ID}/${SERVICES_TABLE}/${id}`;
  
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${AIRTABLE_PAT}`,
    },
    next: { revalidate: 300 }, // Cache for 5 minutes
  });
  
  if (!res.ok) {
    return NextResponse.json({ error: 'Service not found' }, { status: 404 });
  }
  
  const data = await res.json();
  return NextResponse.json(data);
}