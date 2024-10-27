import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      username: string;
      name?: string;
    };
    accessToken: string;
  }

  interface User {
    id: string;
    username: string;
    accessToken: string;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id: string;
    username: string;
    accessToken: string;
  }
}
