- on home page the navbar is overlapped with the word "Ethiopia's trusted healthcare partner"
- on navbar the buttons looks odd, the buttons words are unaligned make it more professional and modern
- the button request quote doesnt do anything there should be a form to fill the quote and sent to business owner email. build that and make the email placeholder empty i will add the email address later.


and after i opened the website on left bottom corner there is an error of next.js 
here is the error i copied
## Error Type
Console Error

## Error Message
A tree hydrated but some attributes of the server rendered HTML didn't match the client properties. This won't be patched up. This can happen if a SSR-ed Client Component used:

- A server/client branch `if (typeof window !== 'undefined')`.
- Variable input such as `Date.now()` or `Math.random()` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

https://react.dev/link/hydration-mismatch

  ...
    <HotReload globalError={[...]} webSocket={WebSocket} staticIndicatorState={{pathname:null, ...}}>
      <AppDevOverlayErrorBoundary globalError={[...]}>
        <ReplaySsrOnlyErrors>
        <DevRootHTTPAccessFallbackBoundary>
          <HTTPAccessFallbackBoundary notFound={<NotAllowedRootHTTPFallbackError>}>
            <HTTPAccessFallbackErrorBoundary pathname="/" notFound={<NotAllowedRootHTTPFallbackError>} ...>
              <RedirectBoundary>
                <RedirectErrorBoundary router={{...}}>
                  <Head>
                  <__next_root_layout_boundary__>
                    <SegmentViewNode type="layout" pagePath="layout.tsx">
                      <SegmentTrieNode>
                      <link>
                      <script>
                      <script>
                      <script>
                      <script>
                      <script>
                      <script>
                      <script>
                      <RootLayout>
                        <html lang="en" className="inter_c15e...">
                          <body
                            className="antialiased min-h-screen flex flex-col"
-                           cz-shortcut-listen="true"
                          >
                  ...



    at body (<anonymous>:null:null)
    at RootLayout (app\layout.tsx:58:7)

## Code Frame
  56 |   return (
  57 |     <html lang="en" className={inter.variable}>
> 58 |       <body className="antialiased min-h-screen flex flex-col">
     |       ^
  59 |         <Navbar />
  60 |         <main className="flex-1">{children}</main>
  61 |         <Footer />

Next.js version: 16.2.6 (Turbopack)


i dont know if this is duplicated or related error i copied it from the browser console
installHook.js:1 A tree hydrated but some attributes of the server rendered HTML didn't match the client properties. This won't be patched up. This can happen if a SSR-ed Client Component used:

- A server/client branch `if (typeof window !== 'undefined')`.
- Variable input such as `Date.now()` or `Math.random()` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

https://react.dev/link/hydration-mismatch

  ...
    <HotReload globalError={[...]} webSocket={WebSocket} staticIndicatorState={{pathname:null, ...}}>
      <AppDevOverlayErrorBoundary globalError={[...]}>
        <ReplaySsrOnlyErrors>
        <DevRootHTTPAccessFallbackBoundary>
          <HTTPAccessFallbackBoundary notFound={<NotAllowedRootHTTPFallbackError>}>
            <HTTPAccessFallbackErrorBoundary pathname="/" notFound={<NotAllowedRootHTTPFallbackError>} ...>
              <RedirectBoundary>
                <RedirectErrorBoundary router={{...}}>
                  <Head>
                  <__next_root_layout_boundary__>
                    <SegmentViewNode type="layout" pagePath="layout.tsx">
                      <SegmentTrieNode>
                      <link>
                      <script>
                      <script>
                      <script>
                      <script>
                      <script>
                      <script>
                      <script>
                      <RootLayout>
                        <html lang="en" className="inter_c15e...">
                          <body
                            className="antialiased min-h-screen flex flex-col"
-                           cz-shortcut-listen="true"
                          >
                  ...