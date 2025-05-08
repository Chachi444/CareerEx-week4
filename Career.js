alert ("Welcome to the CareerEx");

/*Write a function that takes a student’s score and logs "Passed" if it’s 180 and above, else logs "Failed". (JAMB-style)*/  
const jambScore = 180

if(jambScore < 200 ) {
    console.log("failed")
} else if (jambScore >= 180 && jambScore <= 200) {
    console.log("passed")
} else if (jambScore > 200 && jambScore <= 250) {
    console.log("passed with distinction")
} else if (jambScore > 250 && jambScore <= 300) {
    console.log("passed with high distinction")
} else if (jambScore > 300) {
    console.log("passed with high distinction and scholarship")
} else {
    console.log("invalid score")
}

/*Write a function that accepts an age and returns "You are eligible to vote" if the age is 18 or above, otherwise "Not eligible".*/

let age = 18;
function checkEligibility(age) {
    if (age >= 18) {
        return "You are eligible to vote";
    } else {
        return "Not eligible";
    }
}
console.log(checkEligibility(age));

/*  Write a function that takes a name and score, then returns:
"Excellent" if score >= 90
"Good" if score >= 75
"Average" if score >= 50
"Fail" otherwise
*/

function evaluateScore(name, score) {
    let result;
  
    if (score >= 90) {
      result = "Excellent";
    } else if (score >= 75) {
      result = "Good";
    } else if (score >= 50) {
      result = "Average";
    } else {
      result = "Fail";
    }
  
    return `${name}: ${result}`;
  }
  
  
  console.log(evaluateScore("Alice", 92)); 
    console.log(evaluateScore("Bob", 78));



/*Write a function that takes two boolean values: hasID and isAbove18. Return "Access granted" only if both are true.*/
function checkAccess(hasID, isAbove18) {
    return hasID && isAbove18 ? "Access granted" : "Access denied";
}
 
// Example usage
console.log(checkAccess(true, true));
console.log(checkAccess(true, false));
console.log(checkAccess(false, true)); 
console.log(checkAccess(false, false)); 

/*Use a for loop to go through an array of student scores. For each score, print "Pass" if it’s above 50 or "Fail" if it’s 50 or below.*/
const scores = [45, 67, 89, 32, 50, 76, 90];
if (scores.length === 0) {
    console.log("No scores available.");
}
for (let i = 0; i < scores.length; i++) {
    if (scores[i] > 50) {
        console.log("Pass");
    } else {
        console.log("Fail");
    }
}

/*Write an arrow function that returns "Yes" if a student passed both Math and English (score ≥ 50), else "No".*/
const checkPass = (mathScore, englishScore) => {
    return (mathScore >= 50 && englishScore >= 50) ? "Yes" : "No";
}

console.log(checkPass(60, 70)); 
console.log(checkPass(40, 80)); 
console.log(checkPass(50, 50)); 


/*Create a function that checks if a user has either an email or a phone number before signing up.*/
function checkUserInfo(email, phone) {
    if (email || phone) {
        return "User can sign up";
    } else {
        return "User must provide either an email or a phone number";
    }
}

console.log(checkUserInfo("Please enter your email", "Please enter your phone number"));
console.log(checkUserInfo("", "Please enter your phone number"));


/*Write a function that takes username and password. If either one is empty, return "Invalid input" using the || operator. If both are filled, return "Login successful".*/
function validateLogin(username, password) {
    if (!username || !password) {
        return "Invalid input";
    } else {
        return "Login successful";
    }
}

console.log(validateLogin("user", "pass"));
console.log(validateLogin("", "pass"));

/*Write a function that accepts hours worked. If hours ≥ 40, return "Full-time", else "Part-time" using a ternary operator.*/
function checkWorkHours(hours) {
    return (hours >= 40) ? "Full-time" : "Part-time";
}

console.log(checkWorkHours(45));
console.log(checkWorkHours(35)); 

/* Write an arrow function that takes two numbers and returns the larger one.*/
const findLarger = (num1, num2) => {
    return (num1 > num2) ? num1 : num2;
}

console.log(findLarger(10, 20));
console.log(findLarger(30, 25));