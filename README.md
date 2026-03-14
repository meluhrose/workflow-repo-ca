# Workflow repo for the CA
The goal of this course assignment is to fork an existing project repository and configure development tools*(ESLing, Prettier, pre-commit hooks) and testing frameworks such as Vitest for unit tests and Playwright for end-to-end tests. 

## Setup

Clone the repository and install dependencies

```bash
git clone https://github.com/meluhrose/workflow-repo-ca.git
cd workflow-repo-ca
npm install
```

## Run unit tests - Vitest
Runs all unit tests located in the tests/unit folder

```bash
npm run test
```

**Test the isActivePath function:** 
Returns true when current path matches href exactly 
Returns true for root path ("/") when path is "/" or "/index.html" 
Returns true when current path includes the href 
Returns false when paths don't match

**Test the getUserName function:**
Returns the name from the user object in storage (first save a user object to storage) 
Returns null when no user exists in storage 

## Run e2e tests - Playwright
Runs all end-to-end tests located in the tests/e2e folder.

```bash
npm run test:e2e
```

**Test login functionality:**

-User can successfully log in with valid credentials from environment variables.

-User sees an error message with invalid credentials.

-Include .env in .gitignore and include a .env.example in the branch.

**Test navigation functionality:** 
-Navigates to the home page 

-Waits for the venue list to load 

-Clicks the first venue 

-Verifies that the venue details page loads with "Venue details" in the heading

## Enviornment Variables
Create a `.env` file in the project root.

# Required Variables:
- `TEST_EMAIL`
- `TEST_PASSWORD`

These variables are used by the Playwright login tests. 
A template file `.env.example` is included in the repository.