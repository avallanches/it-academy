// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        {/* Other head content */}
      </Head>
      <body>
        <Main />
        <NextScript />
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `(function(d, w, k) {
              w.youplatform_callback = function() {
                try {
                  w.II = new youplatformIntegration(k);
                } catch (e) { console.log(e); }
              };
              var n = d.getElementsByTagName("script")[0],
              e = d.createElement("script");
              e.type = "text/javascript";
              e.async = true;
              e.src = "https://youplatform.ru/admin/js/api_v4/youplatform_forms.js";
              n.parentNode.insertBefore(e, n);
            })(document, window, '62EzRANEEnZrzQrKz6r8EtyHs53TDR9G');`,
          }}
        />
      </body>
    </Html>
  )
}
