# Playwright FrameWork Documentation 
This project is a Playwright automation framework built using TypeScript and designed with the Page Object Model (POM) architecture.
It supports cross-browser testing, Allure report integration, and environment-based configuration via dotenv, data driven testing using Json.

# Folder Structure
playwright-framework/
│
├── 📁 src/
│   ├── 📁 tests/                 # Contains all test files
│   │   ├── example.spec.ts
│   │   ├── login.spec.ts
│   │   └── cart.spec.ts
│   │
│   ├── 📁 pages/                 # Page Object Model (POM) files
│   │   ├── loginPage.ts
│   │   ├── homePage.ts
│   │   └── cartPage.ts
│   │
│   ├── 📁 test-data/             # Test data JSON/TS files
│   │   └── userData.json
│   │
│   ├── 📁 fixtures/              # Reusable setup (browser, context, test hooks)
│   │   └── testSetup.ts
│   │
│   ├── 📁 utils/                 # Helper functions and utilities
│   │   ├── logger.ts
│   │   └── helpers.ts
│   │
│   ├── 📁 config/                # Playwright configuration files
│   │   ├── playwright.config.ts
│   │   └── env.ts
│   │
│   ├── 📁 reports/               # Reports & screenshots output (auto-generated)
│   │   ├── playwright-report/
│   │   ├── Allure-report/
│   │   └── screenshots/
│   │
│   └── 📁 types/                 # TypeScript interfaces and type definitions
│       └── testData.d.ts
│
├── 📁 node_modules/
│
├── .env                          # Environment variables
├── .gitignore
├── package.json
├── README.md                     # Framework documentation
└── tsconfig.json                 # TypeScript configuration

# Explanation of Project Struture 

🧾 1. .gitignore
💬 Interview Explanation

“.gitignore tells Git which files or folders should not be tracked in version control.
It prevents temporary, environment-specific, or sensitive files — like reports, node_modules, and credentials — from being committed to the repository.”

🧠 Purpose

Keeps your repository clean

Avoids unnecessary large files

Protects secrets like .env or passwords

✅ Tip for interviews:

“Ignoring large or sensitive files ensures faster Git operations and prevents exposing secrets accidentally.”

📦 2. package.json
💬 Interview Explanation

“package.json is the heart of any Node.js project.
It defines project metadata (name, version, author), dependencies, scripts, and configurations used by npm or yarn.”

🧠 Purpose

Lists all dependencies & devDependencies

Defines test scripts (like npx playwright test)

Controls project version and entry point

✅ Tip for interviews:

“I use scripts inside package.json to standardize test execution across environments — for example, running all tests or generating reports with a single npm command.”


🧱 3. playwright.config.ts
💬 Interview Explanation

“playwright.config.ts is the main configuration file for Playwright.
It defines test settings such as browser type, base URL, timeout, retries, and report formats.
It helps standardize test behavior across all test files.”

🧠 Purpose

Controls browser launch settings
Sets global timeouts & retries
Configures parallel execution
Defines test reports & screenshots

✅ Tip for interviews:

“I prefer to externalize environment URLs and credentials using .env and access them in playwright.config.ts via process.env — that makes the framework more flexible for multiple environments like QA, UAT, and PROD.”



📘 4. package-lock.json
💬 Interview Explanation

“package-lock.json automatically gets created when dependencies are installed.
It locks the exact versions of each dependency and sub-dependency, ensuring the same setup on every developer’s machine or CI pipeline.”

🧠 Purpose

Prevents version conflicts
Ensures reproducible builds
Improves installation speed

✅ Tip for interviews:

“In automation frameworks, dependency stability is crucial — package-lock.json guarantees that everyone in the team runs tests with the exact same library versions.”

⚙️ 5. tsconfig.json
💬 Interview Explanation

“tsconfig.json defines how TypeScript compiles the code into JavaScript.
It includes compiler options, module formats, and paths, ensuring consistent transpilation across the framework.”

🧠 Purpose

Sets compiler behavior
Defines output directory and ES target version
Enables strict type checking for safer code

✅ Tip for interviews:

“TypeScript helps catch errors early, so I enable strict and skipLibCheck for better type safety while keeping compilation efficient.


1. Pages Folder (Page Object Model Layer)
💬 Interview Explanation

“The Pages folder implements the Page Object Model (POM) design pattern.
Each page of the application (like Login, Home) is represented by a separate class.
It contains locators and reusable functions that perform actions on that specific page.
This structure improves test readability, reusability, and maintainability.”

🧠 Purpose

Encapsulate page elements and actions
Avoid duplicate selectors across tests
Provide clean, readable, business-level methods

✅ Professional Interview Line:

“Each page class represents a single screen.
For example, the Login class contains only login-related locators and actions — this makes my tests independent of UI changes in other modules.”


🧪 2. Tests Folder (Execution Layer)
💬 Interview Explanation

“The tests folder contains the actual test scripts.
Each test imports corresponding page classes from the Pages folder and drives the user flow by calling those reusable methods.
Tests focus on business logic and verification, not UI details.”

🧠 Purpose

Orchestrate the test flow
Contain assertions and verifications
Read test data from JSON or environment files
Keep test steps readable and business-oriented

✅ Professional Interview Line:

“Tests are written in a business-readable format — each test file focuses on verifying specific flows while delegating all page-level logic to the Page Object classes.”


