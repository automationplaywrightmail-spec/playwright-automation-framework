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

# Data Driven Testing - Integrating Excel 

a) create a Folder (testdata)
b) create a xlsx file inside it 
c) Install required package to read Excel 
    npm install xlsx
d) Create a Utility File to Read Excel
    /utils/excelUtils.ts

Copy this Code :- 

import * as XLSX from "xlsx";

export class ExcelUtils {

    static readExcel(filePath: string, sheetName: string) {
        const workbook = XLSX.readFile(filePath);
        const worksheet = workbook.Sheets[sheetName];
        const jsonData: any[] = XLSX.utils.sheet_to_json(worksheet, { defval: "" });
        return jsonData;
    }

}

e) Use Excel Data in Your Test


# CI/CD Integration Document Set Up

 🧭 Git & GitHub Setup for Playwright Automation Framework

 First We need a GIT Hub Account & GIT to be installed 
 To check : git -v & hit enter , if not got to https://git-scm.com and download it 
 a) Go to Git Hub repositories tab , Click New
 b) Provide repository name -> Create Repository button 
 c) After creating repository , if your project has no GIT HUB run these commands 
 => git init
 => git add README.md
 => commit -m "first commit"
 => git branch -M main // master branch creation
 => remote add orgin httpps:// etc ...
 git push -u orgin main

This guide documents all the steps taken to initialize, configure, and push the Playwright Automation Framework project to GitHub from scratch — including common errors and their solutions.

---

## 🚀 1. Install Git

### 📝 Step:
Download and install Git from the official website:

👉 [https://git-scm.com/downloads](https://git-scm.com/downloads)

### ✅ Verification:
After installation, verify Git is installed by running:

```bash
git --version
```

**Expected Output:**
```
git version x.x.x
```

---

## 🧱 2. Initialize Git in Your Project

Navigate to your Playwright project folder and initialize Git.

```bash
cd path/to/playwright-automation-framework
git init
```

**Expected Output:**
```
Initialized empty Git repository in ...
```

---

## 🧩 3. Stage All Files

Add all files in the current folder to the staging area.

```bash
git add .
```

No output means success — files are now staged for commit.

---

## 🗒️ 4. Commit the Files

Commit your staged changes with a descriptive message.

```bash
git commit -m "Initial Playwright automation framework setup"
```

**Expected Output:**
```
[main (root-commit) xxxxxx] Initial Playwright automation framework setup
```

---

## 🌐 5. Add Remote Repository

### ❌ Error Faced:
When running the command initially, this error occurred:

```
usage: git remote add [<options>] <name> <url>
```

### ✅ Solution:
Run the correct command using your repository link:

```bash
git remote add origin https://github.com/automationplaywrightmail-spec/playwright-automation-framework.git
```

This connects your local repository to the GitHub remote.

---

## 🧠 6. Verify Remote Repository

Check if your remote was added correctly:

```bash
git remote -v
```

**Expected Output:**
```
origin  https://github.com/automationplaywrightmail-spec/playwright-automation-framework.git (fetch)
origin  https://github.com/automationplaywrightmail-spec/playwright-automation-framework.git (push)
```

---

## 🔐 7. Push to GitHub

### 🧩 Step:
Push your committed code to the GitHub repository.

```bash
git push -u origin main
```

### ❌ Error Faced:
```
info: please complete authentication in your browser...
remote: Repository not found.
fatal: repository 'https://github.com/midhunK/playwright-automation-framework.git/' not found
```

### ✅ Solution:
The error occurred because the repository URL was incorrect.  
Updated to the correct one:

```bash
git remote set-url origin https://github.com/automationplaywrightmail-spec/playwright-automation-framework.git
```

Then re-run:

```bash
git push -u origin main
```

✅ Successfully pushed code to GitHub.

---

## 🪄 8. Verify on GitHub

Go to your repository URL:

👉 [https://github.com/automationplaywrightmail-spec/playwright-automation-framework](https://github.com/automationplaywrightmail-spec/playwright-automation-framework)

You should now see all your project files uploaded.

---

## 🧰 Common Git Errors & Fixes

| ❌ Error Message | 💡 Cause | ✅ Fix |
|------------------|----------|--------|
| `fatal: not a git repository (or any of the parent directories): .git` | Git not initialized | Run `git init` inside the project folder |
| `usage: git remote add [<options>] <name> <url>` | Incorrect syntax for `git remote add` | Use: `git remote add origin <repo-url>` |
| `Repository not found` | Wrong repository URL | Verify repository name or permissions |
| `info: please complete authentication in your browser` | GitHub authentication pending | Sign in via browser popup or configure a PAT (Personal Access Token) |

---

## 🧾 Final Commands Summary

```bash
# Step 1 - Initialize Git
git init

# Step 2 - Add all files
git add .

# Step 3 - Commit files
git commit -m "Initial Playwright automation framework setup"

# Step 4 - Add remote origin
git remote add origin https://github.com/automationplaywrightmail-spec/playwright-automation-framework.git

# Step 5 - Push to GitHub
git push -u origin main
```

---

## 🎯 Outcome

Your **Playwright automation framework** project is now version-controlled and available on GitHub.

You can now:
- Clone it on other machines.
- Create branches for new features.
- Track changes easily.
- Collaborate with others.

Configuring GITHUB ACTIONS for Running code on CI Server

a) Go to playwright document Setting Up CI section 
b) First we need to create .github\workflows folder
c) Create playwright.yml file 
d) By checking playwright.yml file , on every push & Pull code will automatically run on CI Server


!To Push Latest change 
git staus 
git add .
git commit -m "Email notification"
git push


!Adding Email Notification on Deployement 

📧 CI/CD Email Notification Integration

This framework includes an automated Email Notification System as part of the CI/CD pipeline. After every pipeline execution on GitHub Actions, an email is delivered to the QA/Dev team with a detailed summary of the test run and a direct link to the hosted Playwright HTML Report.

🔔 What the Email Contains

Each notification email includes:

✔ CI/CD Execution Status (Success / Failure)

🔁 Branch used

👤 Triggered By (the user who pushed the commit)

🔗 Commit SHA

📄 Direct Link to Playwright HTML Report (GitHub Pages)

Example of the email received:

⚙️ How Email Notification Works

A dedicated job (notify) runs after:

Tests are executed

The Playwright HTML report is generated

The report is successfully deployed to GitHub Pages

This job uses the GitHub Action:

dawidd6/action-send-mail@v3


It sends a fully formatted HTML email to the configured recipient.

🔐 Required GitHub Secrets

Configure these secrets in:

Settings → Secrets and variables → Actions → New repository secret

Secret Name	Description
SMTP_SERVER	SMTP server (e.g., smtp.gmail.com)
SMTP_PORT	SMTP port (465 for SSL)
SMTP_USERNAME	Your email address
SMTP_PASSWORD	App password (Gmail / Outlook app password)
EMAIL_TO	Email address that receives the notifications
📄 Email Notification Code (Used in deploy.yml)

Here is the exact job used:

notify:
  needs: deploy_pages
  runs-on: ubuntu-latest

  steps:
    - name: Send Email Notification
      uses: dawidd6/action-send-mail@v3
      with:
        server_address: ${{ secrets.SMTP_SERVER }}
        server_port: ${{ secrets.SMTP_PORT }}
        username: ${{ secrets.SMTP_USERNAME }}
        password: ${{ secrets.SMTP_PASSWORD }}
        subject: "Playwright Report Deployment - ${{ github.repository }}"
        to: ${{ secrets.EMAIL_TO }}
        from: Playwright CI <${{ secrets.SMTP_USERNAME }}>
        secure: true
        html_body: |
          <h2>Playwright CI/CD Execution Summary</h2>
          <p><b>Status:</b> ${{ job.status }}</p>
          <p><b>Branch:</b> ${{ github.ref }}</p>
          <p><b>Triggered By:</b> ${{ github.actor }}</p>
          <p><b>Commit:</b> ${{ github.sha }}</p>

          <h3>▶ View HTML Report</h3>
          <a href="https://${{ github.repository_owner }}.github.io/${{ github.event.repository.name }}/">
            🔗 Click here to open Playwright Report
          </a>

          <br/><br/>
          <i>This is an automated message sent by your CI/CD pipeline.</i>

🎯 Benefits of This Integration

Automated report sharing — no manual steps

Ideal for distributed QA teams

Perfect for MNC/Mid-MNC CI/CD standards

Enables faster debugging and visibility

Works with any Playwright test suite



PR ( Pull Request Workflow)

✅ Pull Request (PR) Workflow – Step-by-Step

Below are the exact steps followed in most MNCs and Mid-MNCs for raising and merging Pull Requests in a CI/CD pipeline.

1️⃣ Create a New Branch

Always create a separate branch for every new feature, bug fix, or test addition.

git checkout -b feature/your-branch-name

Examples:

feature/add-login-tests

bugfix/fix-locator-issue

enhancement/improve-page-objects

2️⃣ Make Code Changes

Add/update your:

Test cases

Page Objects

Utilities

Config files

Workflows (if required)

3️⃣ Commit Your Changes
git add .
git commit -m "Added login test and updated POM structure"

4️⃣ Push Branch to Remote
git push origin feature/your-branch-name

5️⃣ Create a Pull Request (PR)

Go to your GitHub repository → navigate to:

Pull Requests → New Pull Request


Choose:

Base branch → main

Compare branch → feature/your-branch-name

Add:

Title

Description

Screenshots (if UI change)

Test evidence

Jira ID (if applicable)

6️⃣ PR Triggers CI Pipeline

In your workflow:

pull_request:
  branches: [ main, master ]


Whenever a PR is created or updated:

Playwright tests run

Report is generated

Status checks must pass

Email/Slack notifications can be sent (optional)

Deployment does NOT happen (good practice)

This ensures quality before merging.

7️⃣ Code Review

Your teammates or lead reviewers:

Review code

Suggest changes

Approve the PR

You fix changes and push again:

git push


Pipeline runs again until everything passes.

8️⃣ Merge PR

After approvals + passing checks:

Click:

Merge Pull Request → Confirm Merge

9️⃣ Cleanup

After merging:

git checkout main
git pull
git branch -d feature/your-branch-name


(Removes old branch)

🔟 CI Deploys Latest Changes (Post-Merge)

Because your main workflow contains:

on:
  push:
    branches: [ main ]


Whenever PR is merged →
GitHub Pages deployment starts automatically and the Playwright HTML report is updated.