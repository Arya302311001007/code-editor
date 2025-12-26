🚀 Web-Based Collaborative Code Editor

A full-stack online code editor similar to CodeSandbox that allows users to write, compile, and execute code for multiple programming languages with a clean and interactive interface.

📌 Features

🧑‍💻 Monaco Editor Integration (VS Code–like editor)

🌐 Multi-language Support

C++

Java

Python

JavaScript

HTML

CSS

▶️ Run & Compile Code Online

📤 Backend Compilation & Execution

📟 Output Console Panel

🌙 Modern Dark UI

⚡ Fast and Responsive Interface

🛠 Tech Stack
Frontend

React.js

Monaco Editor

Axios

CSS (Custom Dark Theme)

Backend

Node.js

Express.js

Child Process (for code execution)

Languages Supported

C++ (g++)

Java (javac)

Python

JavaScript

HTML & CSS

🧱 Project Structure
code-editor/
│
├── client/                 # React Frontend
│   ├── src/
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.js
│   └── package.json
│
├── server/                 # Node.js Backend
│   ├── index.js
│   └── package.json
│
└── .gitignore

⚙️ How It Works

Web languages (HTML, CSS, JavaScript) are handled directly in the browser.

System languages (C++, Java, Python) are sent to the backend.

The backend compiles and executes code using native compilers.

Output is returned and displayed in the console panel.

▶️ How to Run Locally
1️⃣ Clone the Repository
git clone https://github.com/<your-username>/code-editor.git
cd code-editor

2️⃣ Start Backend
cd server
npm install
node index.js


Backend runs on:

http://localhost:5000

3️⃣ Start Frontend
cd client
npm install
npm start


Frontend runs on:

http://localhost:3000

🧪 Sample Code
C++
#include <iostream>
using namespace std;

int main() {
    cout << "Hello World";
    return 0;
}

Python
print("Hello World")

Java
class Main {
    public static void main(String[] args) {
        System.out.println("Hello World");
    }
}

🔒 Security Note

⚠️ This project is intended for educational and local use only.
For production deployment, additional security measures are required such as:

Docker sandboxing

Execution time limits

Memory limits

Input validation

📚 Learning Outcomes

Full-stack application development

Client–server communication

Code compilation & execution

React UI design

Git & GitHub workflow
