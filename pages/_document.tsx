import Document, { Html, Head, Main, NextScript } from "next/document";

export default class extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="application-name" content="App" />
          ...
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        {/* <script
          src={`https://maps.googleapis.com/maps/api/js?key=AIzaSyAfpbhcYT99uD-t3hDAvCCk_OKgmSWtY6M&callback=initMap&libraries=&v=weekly`}
          async
        ></script> */}
      </Html>
    );
  }
}
