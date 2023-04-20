# Money Talks and your bank account is deaf

<br>

_Where did the money go? Just have a look at your expenses and you will know... yes you did get extra fries Phil!!_

<br>

a simple no nonsense app for tracking expenses [here]()

<image src="Expense-app-image.png">

# Summary

The biggest challenge here really was about understanding useState. As I got through learning React, the process of import and export made more sense in terms of how to use functions across different components or from one component to another.

However, I had to keep going back and forth to see/understand how parameters passed to each function and how they were defined for when the functions were called so proper values were set.

I had a hard time with the key and id connection on each table row to ensure the delete button would remove the row it was associated with. I kept getting an error for key assignment and found the crypto.randomUUID() method. Using this method allowed me to assign a random id to each row. I was then able to callback and evaluate that id when the expenses array was returned during a deleteExpense function call.
I was challenged as well by building the parameters in the expenseInput component so they could be used when adding the values to the ExpenseItems. Making these connections and being able to map them in my mind so i could use them and produce the result took some work.

## Author

**Chris Keezer** - Full Stack Developer - [LinkedIn](https://www.linkedin.com/in/chris-keezer-890731177/)
