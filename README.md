# Dmoney-REST-API-Test-Project
## Project Overview
This project focuses on testing the **Dmoney REST API** to validate its functionality, identify potential issues, and provide improvement recommendations. The testing covers the creation, management, and processing of transactions across various user roles, including Admin, System User, Agent, Customers, and Merchant.
---
## Tools and Technology
- Postman
- Newman
- Nodejs
- VSCode
---
## Tasks and Flows

### 1. **Test Cases**
Created **test cases** for the following scenarios:
- Admin creates an Agent, 2 Customers, and a Merchant.
- System deposits money to the Agent.
- Agent deposits money to a Customer.
- Check Agent's balance.
- Send money between Customers.
- Customer withdraws money to the Agent.
- Check Customer's balance and transaction statement.
- Customer makes a payment to a Merchant.
- Check balances and transaction statements for Customers,
- The Merchant checks his balance.

**The test cases are:** [Click Here to see the Test Cases](https://docs.google.com/spreadsheets/d/1tSFDXtzmnNNr_L7nLISaUuVkqhuMBBao/edit?usp=sharing&ouid=110591976413796555813&rtpof=true&sd=true)

---

### 2. **Postman Collection**
- Created a Postman collection for all the scenarios.
- Added **negative test cases** for validation and error handling.
- Collection [Click Here to see the Postman Collection](https://www.postman.com/satellite-operator-81623342/workspace/my-practice-workspace/collection/39262502-36f3c8d0-1efa-44f3-8c9d-1cefe875caab?action=share&creator=39262502)
- Endpoints Used:
  - [User API](http://dmoney.roadtocareer.net/api-docs/user)
  - [Transaction API](http://dmoney.roadtocareer.net/api-docs/transaction)
---

### 3. **Newman Report**
- Generated a report of all test cases using Newman.
- Included summary screenshots of the execution.

View the Newman report screenshots below:
![image](https://github.com/user-attachments/assets/0110de94-a956-4f0e-8b1b-8043eab8879d)


---

### 4. **Postman Documentation**
Postman documentation for the test cases and endpoints is available:  
[Click here to view Postman Documentation](https://documenter.getpostman.com/view/39262502/2sAYdmmU5c).

---

### 5. **Bug Report**
Reported **Bug or Improvements** in a Google Sheet, with details such as:
- Issue Type (Bug/Improvement)
- Issue Title
- Description and Steps to Reproduce
- Actual vs Expected Results
- Priority and Severity
- Attachments with screenshots

**To see the bug report:** [Click here to view Bug Report](https://docs.google.com/spreadsheets/d/1SAL3eGIpdNvUJiO5WvHghBv0wPedUTt7/edit?usp=sharing&ouid=110591976413796555813&rtpof=true&sd=true).

---
## Follow these instructions to set up and run the project locally.

This project is designed to test the Dmoney REST API using JavaScript. It utilizes Node.js to run the test scripts and I provide a step-by-step guide for anyone to clone and run the project on their machine.





### Prerequisites

Ensure you have the following installed on your machine:  
- [Node.js](https://nodejs.org/) (version 14.x or later)  
- [Git](https://git-scm.com/)

### Installation

1. **Clone the Repository**  
   Open your terminal and run:  
   `git clone https://github.com/faisalkabir1/Dmoney-REST-API-Test.git`

2. **Navigate to the Project Directory**  
   Change your working directory to the cloned repository:  
   `cd Dmoney-REST-API-Test`

3. **Install Dependencies**  
   Install the required dependencies using npm:  
   `npm install`

### Running the Project

Run the `Report.js` script using Node.js in the terminal:  
`npx newman run "copy & paste published collection link without inverted comma"`
Then 
`node Report.js`

### Expected Output

The script will run tests against the Dmoney REST API and display the results in the terminal.


## Contact

For any questions or issues, feel free to open an issue in the repository or contact me via [Email](onlyfaisalkabir@gmail.com)
