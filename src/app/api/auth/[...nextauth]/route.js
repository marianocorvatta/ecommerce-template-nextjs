import NextAuth from 'next-auth'
import { authOptions } from '../../../../../lib/auth'

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }

// TODO
// import { authOptions } from '@/app/lib/auth';
// import { getServerSession } from 'next-auth';
// import { NextResponse } from 'next/server';

// export async function GET(request: Request) {
//   const session = await getServerSession(authOptions);
//   console.log(session);
//   return NextResponse.json({
//     id: 1,
//   });
// }
