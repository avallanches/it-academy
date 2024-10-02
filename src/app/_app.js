import { useEffect } from 'react';
import Script from 'next/script';
import '../styles/globals.css'; // Import global styles if any

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.youplatform_callback = function () {
        try {
          window.II = new youplatformIntegration('62EzRANEEnZrzQrKz6r8EtyHs53TDR9G');
        } catch (e) {
          console.log(e);
        }
      };
    }
  }, []);

  return (
    <>
      <Component {...pageProps} />
      <Script
        type="text/javascript"
        strategy="afterInteractive"
        src="https://youplatform.ru/admin/js/api_v4/youplatform_cookie.js"
      />
    </>
  );
}

export default MyApp;
