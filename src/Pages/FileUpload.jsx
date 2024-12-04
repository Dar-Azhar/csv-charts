import React, { useState } from "react";
import Papa from "papaparse";
import { useDispatch } from "react-redux";
import { setCsvData } from "../slices/csvDataSlice";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";

const FileUpload = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleFileChange = (e) => {
        setError("");
        const selectedFile = e.target.files[0];

        if (!selectedFile) {
            setError("Please select a file.");
            return;
        }

        if (selectedFile.type !== "text/csv") {
            setError("Please upload a valid CSV file.");
            return;
        }

        setFile(selectedFile); // Store the selected file for further processing
    };

    const handleUploadClick = () => {
        if (!file) {
            setError("Please select a file before uploading.");
            return;
        }
        // parsing data into json
        Papa.parse(file, {
            header: true,
            skipEmptyLines: true,
            complete: (result) => {
                dispatch(setCsvData(result.data));
                navigate("/graphs");
            },
            error: (err) => {
                setError("Error parsing file: " + err.message);
            },
        });
    };

    return (
        <div className="flex flex-col items-center p-4 h-screen justify-center gap-3">
            <h1 className="text-3xl">Assignment</h1>
            <div className="Wrapper flex flex-col shadow-custom-xl rounded-lg p-10 gap-10">
                <input
                    type="file"
                    accept=".csv"
                    onChange={handleFileChange}
                    className="cursor-pointer"
                />
                {error && <p className="text-red-500">{error}</p>}
                <Button handleClick={handleUploadClick} text='Upload' />
                <a
                    className="text-orange-500"
                    href="https://drive.google.com/file/d/1k2pO7dsGh3bmLulutN1NoPrLbO0SXOhy/view?usp=drive_link"
                    download="sample.csv"
                >
                    Sample CSV file
                </a>
            </div>
        </div>
    );
};

export default FileUpload;
