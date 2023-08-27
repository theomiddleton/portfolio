import styles from "../styles/admin.module.css";
import { UploadButton } from "../utils/uploadthing"
import React from "react";
import Head from "next/head";
// You need to import our styles for the button to look right. Best to import in the root /_app.tsx but this is fine
import "@uploadthing/react/styles.css";
 
const Admin = () => {
  return (
    <div className={styles.container}>
    <Head>
      <title>Drag And Drop File Upload</title>
      <meta name="description" content="Nextjs drag and drop file upload" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          // Do something with the response
          console.log("Files: ", res);
          alert("Upload Completed");
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
    </main>
  </div>
  );
}
export default Admin;