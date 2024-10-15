// pages/_app.js
import '@fontsource/poppins/300.css'; // Weight 300
import '@fontsource/poppins/400.css'; // Weight 400
import '@fontsource/poppins/500.css'; // Weight 500
import '@fontsource/poppins/600.css'; // Weight 600
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import '@/styles/style.css'; // Import your custom styles

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
