import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import { UserProvider } from '@auth0/nextjs-auth0'
import { io, Socket } from "socket.io-client"
import { createContext } from 'react'
import { DefaultEventsMap } from '@socket.io/component-emitter'

export const socketContext = createContext<Socket<DefaultEventsMap, DefaultEventsMap>>(io("http://localhost:8081"));
const socket = io("http://localhost:8081");

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <socketContext.Provider value={socket}>
      <UserProvider>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </UserProvider>
    </socketContext.Provider>
  )
}

export default MyApp
