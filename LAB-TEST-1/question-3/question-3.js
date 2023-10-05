// Richard Jordan Wilson
// 101370635
// 10/5/2023

// Requiring packages
const fs = require('fs');  
const path = require('path');  

// Creating a constant "Logs" with the path of where i want the directory to always be made
const Logs = path.join(__dirname, "Logs")

function RemoveLogFilesandFolder() {
    // Checks if the logs folder already exists
    if (fs.existsSync(Logs)) {
        // Reads directory to get file names and handles any directory reading errors
        fs.readdir(Logs, (err, FilesToToss) => {
            if (err) {
                console.error("Error reading directory: " + err);
                return;
            }
            
            // Console logs the file names to be deleted
            FilesToToss.forEach((file) => {
                console.log("delete files... " + file);
            });

            // Removes the directory and contents, and handles the error if it cant
            fs.rm(Logs, { recursive: true }, (err) => {
                if (err) {
                    console.error("Error deleting directory: " + err);
                    return;
                }
                console.log("Log folder was deleted");
                CreateLogFilesandFolder(); 
            });
        });
    } else {
        // Calls the other function if the folder doesnt exist
        console.log("Log folder doesn't exist");
        CreateLogFilesandFolder(); 
    }
}

function CreateLogFilesandFolder() {
    if (!fs.existsSync(Logs)) {
        // Makes directory Logs
        fs.mkdirSync(Logs);
        console.log(`Created directory: ${Logs}`);
        // Changes current process to logs directory
        process.chdir(Logs);
        // Creates 10 files with text
        for (let i = 1; i <= 10; i++) {
            const fileName = `log${i}.txt`;
            const fileContent = `This is log file ${i} that I made`;
            fs.writeFileSync(fileName, fileContent);
            console.log(`Created file: ${fileName}`);
        }
    } else {
        // Same code from above, adds files if the log directory already exists
        process.chdir(Logs);
        for (let i = 1; i <= 10; i++) {
            const fileName = `log${i}.txt`;
            const fileContent = `This is log file ${i} that I made`;
            fs.writeFileSync(fileName, fileContent);
            console.log(`Created file: ${fileName}`);
        }
    }
}

// Was having issues with one function being called before the other because one finished faster, had to put it in
// an async function so it runs in the correct order
async function main() {
    try {
        await RemoveLogFilesandFolder();
    } catch (error) {
        console.error("Error:", error);
    }
}

main();
