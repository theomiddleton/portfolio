import styles from "../styles/admin.module.css";
import { UploadButton } from "../utils/uploadthing"
import React, { use, useEffect, useState } from "react";
import Head from "next/head";
// You need to import our styles for the button to look right. Best to import in the root /_app.tsx but this is fine
import "@uploadthing/react/styles.css";
import Loading from "@/components/Loading";

import { useOrganizationList } from "@clerk/nextjs";
import router, { useRouter } from "next/router";

const Admin = () => {
  
  const router = useRouter();
  
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 5000);

    return () => clearTimeout(timer); 
  }, []);

  const { organizationList, isLoaded, setActive } = useOrganizationList();

  useEffect(() => {
    if (isLoaded) {
      const adminOrg = organizationList.find(
        (org) => org.membership.role === "admin"
      );
    
      if (!adminOrg || adminOrg.membership.role !== "admin") {
        router.push("/"); // Redirect to home page
      } else {
        setShowLoader(false);
      }
    }
  }, [isLoaded, organizationList, router]);

  const adminOrganization = isLoaded
  ? organizationList.find((org) => org.membership.role === 'admin')
  : null;

  const adminName = adminOrganization
  ? adminOrganization.organization.name
  : 'N/A';
  const adminRole = adminOrganization
  ? adminOrganization.membership.role
  : 'N/A';
  const adminImageUrl = adminOrganization
  ? adminOrganization.organization.imageUrl
  : '/admin.jpeg';

  if (showLoader) {
    return <Loading />;
  }

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
