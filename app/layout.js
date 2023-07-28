/* eslint-disable @next/next/no-head-element */
import '../styles/globals.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function RootLayout({ children }) {
  /* Add global nav and footer here */


  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/> 
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      
      <body>  

        <main>
          <nav>
           <Navbar />
          </nav>

          <div className={'container'}>
            {children}
          </div>
          
        </main>

         <footer>
          <Footer />
        </footer>
      </body>


     
    </html>
  );
}
