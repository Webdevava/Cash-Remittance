Daily Cash Remittance
A React app to track my father's daily cash distribution activities.

Features
Enter daily cash distribution activities, including date, location, time-out, and time-in.
View the last 5 entries in a table format.
Getting Started
To run the app locally, follow these steps:

Clone the repository:
bash
Copy code
git clone <repository-url>
Install dependencies:
bash
Copy code
cd <repository-directory>
npm install
Run the app:
sql
Copy code
npm run dev
The app should now be running on http://localhost:5173/.

Usage
Access the app using the provided local URL.
In the form provided, enter the details for daily cash distribution activities, including the date, location, time-out, and time-in.
To select a location, use the dropdown menu that includes the pre-defined locations (Mantha, Ajanta, and Shahgad), and an "Other" option. When "Other" is selected, a text input appears for custom locations.
Click the "Submit" button to add the entry to the table.
The last 5 entries will be displayed in the table with columns for date, location, time-out, time-in, and a delete button.
To delete an entry, click the "Delete" button corresponding to the entry you want to remove from the table.
Additional Features
The app also includes the following additional features:


The app uses local storage to store the entered data, allowing access from anywhere on the same device. The data is stored as an array of objects, with each object representing an entry for a cash distribution activity.

License
This project is licensed under the MIT License.

Contributing
Contributions are welcome! Feel free to open issues and submit pull requests for any improvements or bug fixes.
