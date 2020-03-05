import React from 'react'
import { ToastProvider } from 'react-toast-notifications'
import Page from './page/Page'

export default function App() {
  // prepare state connections
  return <ToastProvider placement="bottom-right" autoDismiss><Page /></ToastProvider>
}
