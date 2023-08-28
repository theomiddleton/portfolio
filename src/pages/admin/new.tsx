import React from "react";

//import upload, { UploadButton } from "@uploadthing/react";
import Upload from "@/components/Upload";

import { UploadButton, UploadDropzone } from "@/utils/uploadthing";
import "@uploadthing/react/styles.css";

const Admin = () => {
    return(
        <>
            <div className="admin-container">
                <Upload rootClassName="upload-container" />
            </div>
            <div className="uploadthing-container">
                <main className="flex min-h-screen flex-col items-center justify-between p-24">
                    <UploadDropzone endpoint={"imageUploader"}>
                        <UploadButton
                            endpoint="imageUploader"
                            onClientUploadComplete={(res) => {
                                console.log("Files: ", res);
                                alert("Upload Completed");
                            }}
                            onUploadError={(error: Error) => {
                                alert(`ERROR! ${error.message}`);
                            }}
                        />
                    </UploadDropzone>
                </main>
            </div>
        </>
    )
}

export default Admin;