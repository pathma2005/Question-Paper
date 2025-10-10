 const allQuestions = [
            "What is an Algorithm? How to compute its time complexity?",
            "What is Pseudocode?",
            "Write the types of algorithm efficiencies?",
            "Define worst-case efficiency.",
            "Define best-case efficiency.",
            "Define average case efficiency.",
            "Brief about Big O-notation.",
            "Brief about Big Ω-notation.",
            "Brief about Big θ-notation.",
            "List the characteristics of an algorithm.",
            "What is a Data Structure?",
            "Why do we need data structures?",
            "List some common data structures.",
            "How data structures are classified?",
            "Define Abstract Data Type. Give any two examples.",
            "State the advantages of ADT.",
            "List the various operations that can be performed on data structure.",
            "List out the areas in which data structures are applied extensively.",
            "What do you mean by linear data structure? Give example.",
            "What do you mean by non-linear data structure? Give example.",
            "Outline a linear and non linear data structure with an example.",
            "What is stack ADT? List its operations.",
            "What are the operations of the stack?",
            "Write the routine to push a element into a stack.",
            "What are the methods to implement stack in C?",
            "Write the routine to pop a element from a stack.",
            "Define queue.",
            "What are the operations of a queue?",
            "What are the types of queue?",
            "Write the differences between stack and queue.",
            "What are the methods to implement queue?",
            "What are push and pop operations?",
            "How do you test for an empty stack?",
            "Define circular queue.",
            "Write the features of stack?",
            "Write a routine for IsEmpty condition of queue.",
            "Convert the infix (a+b)*(c+d)/f into postfix & prefix expression.",
            "Write postfix from of the expression –A+B-C+D?",
            "Given the prefix for an expression, write its postfix: -*-+abc/ef-g/hi.",
            "Describe how the following 'infix' expression is evaluated with the help of stack: 5 * ( 6 + 2 ) - 12 / 4.",
            "Mention the applications of stack.",
            "Explain the fundamental steps involved in algorithmic problem solving.",
            "Write a note on Pseudocode conventions.",
            "Describe Recursive Algorithms.",
            "Write a detailed note on Space Complexity.",
            "Describe all asymptotic notations.",
            "Write a detailed note on Time Complexities.",
            "Explain about algorithm with suitable example.",
            "Linear and Non Linear data structures.",
            "Mention some features of data structures.",
            "What are the benefits of ADT?",
            "Explain the various operations of the ADT with examples.",
            "What are the different types of data structures?",
            "What are the applications of stack?",
            "Write the routine to insert a element onto a queue.",
            "Write the routine to delete a element from a queue.",
            "What are the applications of queue?",
            "What are enqueue and dequeue operations?",
            "Distinguish between stack and queue.",
            "How do you test for an empty queue?",
            "Explain how to evaluate arithmetic expressions using stacks.",
            "What are the postfix and prefix forms of the expression? A+B*(C-D)/(P-R).",
            "Discuss the advantages and disadvantages of stacks and queues.",
            "Describe the process of postfix expression evaluation with an example.",
            "Convert the following infix expression into its equivalent postfix expression: (a+b)*(m/n)+(x+y).",
            "Explain Asymptotic Notations in detail.",
            "Discuss Fundamentals of the analysis of algorithm efficiency elaborately.",
            "What is an algorithm? Explain the algorithm specification and performance analysis.",
            "Explain the pseudocode conventions with an example.",
            "Define time and space complexity. Explain with examples.",
            "List down the applications of Data Structures.",
            "Briefly explain about the advantages and disadvantages of data structures.",
            "Discuss the basic operations of Data Structures.",
            "Explain the process of designing an algorithm with suitable example. Give characteristics of an algorithm.",
            "Describe performance analysis, space complexity and time complexity in detail.",
            "Explain array based implementation of stack.",
            "Explain linked list implementation of stack.",
            "Explain Stack ADT and its operations.",
            "Explain the applications of Stack.",
            "Explain queue ADT.",
            "Describe array based implementation of queue.",
            "Describe linked list implementation of queue.",
            "Explain the applications of queue.",
            "Discuss in detail about the circular queue and its implementation.",
            "Describe with an example how to evaluate arithmetic expressions using stack.",
            "Explain the infix, prefix and postfix expressions with an example.",
            "Write an algorithm to convert an infix expression to a postfix expression. Trace the algorithm to convert the infix expression ‘(a+b)*c/d+e/f” to a postfix expression.",
            "Develop the simulation using stack for the following expression conversion: 12 + 3 * 14 – (5 * 16) +7.",
            "Explain the insertion operation in linked list. How nodes are inserted after a specified node.",
            "What are the benefit and limitations of linked list?",
            "Explain the operation of traversing linked list. Write the algorithm and give an example.",
            "Explain the steps involved in insertion and deletion into a singly linked list.",
            "Explain the steps involved in insertion and deletion into a doubly linked list.",
            "Explain the operations of singly linked lists.",
            "Explain the operations of doubly linked lists.",
            "Explain the operations of circularly linked lists.",
            "How polynomial manipulations are performed with lists? Explain the operations.",
            "Define Tree. Explain the tree traversals with algorithms and examples.",
            "Construct an expression tree for the expression (a + b * c) +((d * e + 1) * g). Give the outputs when you apply preorder, inorder and postorder traversals.",
            "Explain the various representation of graph with example in detail."
        ];

        // Function to shuffle array
        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        }

        // Function to display questions with a delay
        function displayQuestions(elementId, questions, delay, sectionTitle, instruction) {
            const sectionElement = document.getElementById(elementId);
            sectionElement.innerHTML = `<h3>${sectionTitle}</h3><p>${instruction}</p>`; // Add section heading and instruction
            let index = 0;

            function showNextQuestion() {
                if (index < questions.length) {
                    const questionElement = document.createElement("p");
                    questionElement.className = "question";
                    questionElement.textContent = `${index + 1}. ${questions[index]}`; // Add question number
                    sectionElement.appendChild(questionElement);
                    index++;
                    setTimeout(showNextQuestion, delay); // Delay between questions
                }
            }

            showNextQuestion();
        }

        function generateQuestionPaper() {
            // Shuffle all questions
            shuffleArray(allQuestions);

            // Split questions into sections
            const sectionAQuestions = allQuestions.slice(0, 40); // First 40 questions (3 marks)
            const sectionBQuestions = allQuestions.slice(40, 70); // Next 30 questions (6 marks)
            const sectionCQuestions = allQuestions.slice(70, 100); // Last 30 questions (10 marks)

            // Clear previous content
            document.getElementById("section-a").innerHTML = "";
            document.getElementById("section-b").innerHTML = "";
            document.getElementById("section-c").innerHTML = "";

            // Display questions with a delay
            displayQuestions("section-a", sectionAQuestions.slice(0, 12), 500, "SECTION - A (10 X 3 = 30 MARKS)", "(Answer Any Ten Questions)");
            setTimeout(() => displayQuestions("section-b", sectionBQuestions.slice(0, 7), 500, "SECTION - B (5 X 6 = 30 MARKS)", "(Answer Any Five Questions)"), sectionAQuestions.slice(0, 12).length * 500 + 500); // Delay for Section B
            setTimeout(() => displayQuestions("section-c", sectionCQuestions.slice(0, 6), 500, "SECTION - C (4 X 10 = 40 MARKS)", "(Answer Any Four Questions)"), (sectionAQuestions.slice(0, 12).length + sectionBQuestions.slice(0, 7).length) * 500 + 1000); // Delay for Section C
        }