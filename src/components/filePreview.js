import React from "react";
import styles from "../styles/filePreview.module.css";

const FilePreview = ({ fileData }) => {
    return (
        <div className={styles.fileList}>
            <div className={styles.fileListContainer}>
                {}
                {fileData.fileList.map((f) => {
                    return (
                        <>
                            <ol>
                                <li key={f.name} className={styles.fileList}>
                                    {}
                                    <div key={f.name} className={styles.fileName}>
                                        {f.name}
                                    </div>
                                </li>
                            </ol>
                        </>
                    );
                })}
            </div>
        </div>
    );
};

export default FilePreview;
