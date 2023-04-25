// import { useSession } from 'next-auth'

// // import Layout from '../components/Layout'

// export default function ProtectedPage() {
//   const [session, loading] = useSession()

//   if (loading) {
//     return <p>Loading...</p>
//   }

//   if (!session) {
//     return <p>You are not authenticated</p>
//   }

//   return (
//     <div>
//       <h1>Protected Page</h1>
//       <p>Welcome, {session.user.email}</p>
//     </div>
//   )
// }
