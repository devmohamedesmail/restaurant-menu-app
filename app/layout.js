
import "./globals.css";
import { DataProvider } from "./context/DataProvider";
import ReduxProvider from "./redux/provider";







export const metadata = {
  title: "Resturant Menu",
};

export default function RootLayout({ children }) {
  return (
    
      <html lang="en" data-theme="dark">
      <body  >
        <ReduxProvider>
        <DataProvider>  {children}</DataProvider>
         </ReduxProvider>
      </body>
    </html>
   
    
  );
}
