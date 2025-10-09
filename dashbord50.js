   const partAQuestions = [
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
        "Convert the infix (a+b)*(c+d)/f into postfix & prefix expression",
        "Write postfix form of the expression –A+B-C+D?",
        "Given the prefix for an expression, write its postfix: -*-+abc/ef-g/hi",
        'Describe how the following "infix" expression is evaluated with the help of stack : 5 * ( 6 + 2 ) - 12 / 4',
        "Mention the applications of stack.",
        "Write the applications of queue.",
        "Differentiate simple queue with circular queue.",
        "Define non-linear data structure",
        "What is a linked list?",
        "Define singly linked list.",
        "Define doubly linked list.",
        "What are the pitfalls encountered in singly linked list?",
        "Write down the steps to modify a node in linked lists.",
        "What are the advantages of doubly linked list over singly linked list?",
        "What is the circular linked list?",
        "Why is the linked list used for polynomial arithmetic?",
        "What is static linked list? State any two applications of it.",
        "Define tree?",
        "Define Height of tree?",
        "Define Depth of tree?",
        "List the application of tree.",
        "Define binary tree?",
        "Define Graph?",
        "What is a directed graph?",
        "What is an undirected graph?",
        "What is a simple graph?",
        "List down the applications of List.",
        "What are the advantages of linked list?",
        "Define shortest path problem?",
        "Mention the graph traversal methods.",
        "What are the pitfalls encountered in singly linked list?",
        "What is Knapsack Problem?",
        "What is divide-and-conquer strategy?",
        "What is merging?",
        "Define Quick sort.",
        "What is partitioning?",
        "Give the general recurrence for divide and conquer algorithms.",
        "What is feasible solution?",
        "List the general method of divide and conquer algorithm.",
        "List out the Advantages in Quick Sort",
        "What is job sequencing with deadlines?",
        "Give the difference between Merge and Quick sort.",
        "What is greedy method?",
        "Write the importance of Pivot element in Quick sort.",
      ];

      const partBQuestions = [
        "Explain the fundamental steps involved in algorithmic problem solving.",
        "Write a note on Pseudocode conventions.",
        "Describe Recursive Algorithms.",
        "Write a detailed note on Space Complexity.",
        "Describe all asymptotic notations.",
        "Write a detailed note on Time Complexities.",
        "Explain about algorithm with suitable example.",
        "Differentiate Linear and Non Linear data structures.",
        "Mention some features of data structures.",
        "What are the benefits of ADT?",
        "Explain the various operations of the ADT with examples.",
        "What are the different types of data structures?",
        "Write the routine to insert a element onto a queue.",
        "Write the routine to delete a element from a queue.",
        "What are the applications of queue?",
        "What are enqueue and dequeue operations?",
        "Distinguish between stack and queue.",
        "How do you test for an empty queue?",
        "Explain how to evaluate arithmetic expressions using stacks.",
        "What are the postfix and prefix forms of the expression? A+B*(C-D)/(P-R)",
        "Discuss the advantages and disadvantages of stacks and queues.",
        "Describe the process of postfix expression evaluation with an example.",
        "Convert the following infix expression into its equivalent postfix expression: (a+b)*(m/n)+(x+y)",
        "Write an algorithm to insert a node at the beginning of list?",
        "Discuss the merge operation in circular linked lists.",
        "What are the applications of linked list in dynamic storage management?",
        "How polynomial expression can be represented using linked list?",
        "Define the deletion operation from a linked list.",
        "Explain the tree traversals with algorithms.",
        "Write the routine for insertion operation of singly linked list.",
        "Write an algorithm for In order tree traversal.",
        "Write the advantages and disadvantages of Linked List over an Array.",
        "Write an algorithm for Pre order tree traversal.",
        "Write an algorithm for Post order tree traversal.",
        "Explain the various representation of graph with an example.",
        "Define Linked list. Explain different types of linked list in detail.",
        "Explain the various applications of Graphs.",
        "Describe the DFS algorithm.",
        "Write the general method of branch and bound.",
        "Explain BFS algorithm.",
        "What are biconnected components? Explain.",
        "Explain backtracking general method.",
        "Discuss in detail about Sum of subset.",
        "State dynamic programming. Explain with one application.",
        "Discuss about single source shortest path in detail.",
      ];

      const partCQuestions = [
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
        "Explain the insertion operation in linked list. How nodes are inserted after a specified node.",
        "What are the benefits and limitations of linked list?",
        "Explain the operation of traversing linked list. Write the algorithm and give an example.",
        "Explain the steps involved in insertion and deletion into a singly linked list.",
        "Explain the steps involved in insertion and deletion into a doubly linked list.",
        "Explain the operations of singly linked lists.",
        "Explain the operations of doubly linked lists.",
        "Explain the operations of circularly linked lists.",
        "How polynomial manipulations are performed with lists? Explain the operations.",
        "Define Tree. Explain the tree traversals with algorithms and examples.",
        "Construct an expression tree for the expression (a + b * c) + ((d * e + 1) * g). Give the outputs when you apply preorder, inorder and postorder traversals.",
        "Explain the various representation of graph with example in detail.",
        "Explain Multi stage graph pseudocode for forward and backward approach.",
        "Design an algorithm to find the maximum and minimum element in a given list of n numbers using divide and conquer method.",
        "Write a note on 0/1 Knapsack.",
        "Explain Greedy method and how knapsack problem can be solved using Greedy method.",
        "Write a note on Job sequencing with deadlines.",
        "Illustrate Merge sort algorithm and discuss its time complexity.",
        "Discuss Quick Sort Algorithm and Explain it with example. Derive Worst case and Average Case Complexity.",
        "Write a greedy algorithm for sequencing unit time jobs with deadlines and profits.",
        "Simulate Quick sort algorithm for the following example 25,36,12,4,5,16,58,54,24,16,9,65,78.",
        "Define Greedy knapsack. Find the optimal solution of the Knapsack instance n= 7, M=15, (p1, p2,……p7) = (10,5,15,7,6,18,3) and (w1,w2,. ...w7)=(2,3,5,7,1,4,1).",
        "Briefly discuss about the search techniques for graphs.",
        "Describe about Backtracking general method.",
        "Explain DFS and BFS algorithm.",
        "What is connected and biconnected components? Explain.",
        "Write short note on Sum of Subset with an example.",
        "With an example explain how the branch and -bound technique is used to solve travelling salesman problem.",
        "Write a note on String editing.",
        "Discuss in detail the string editing problem using dynamic programming.",
        "Write down and explain the algorithm to solve all pairs of shortest path problem.",
        "Explain how dynamic programming is applied to solve knapsack problem.",
        "With an example Explain Dijkstra's algorithm.",
        "Explain how solution will be provided for all pairs shortest path problem using dynamic programming.",
      ];

      function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
      }

      function displayQuestions(
        elementId,
        questions,
        sectionTitle,
        instruction
      ) {
        const sectionElement = document.getElementById(elementId);
        sectionElement.innerHTML = `<h3>${sectionTitle}</h3><p>${instruction}</p>`;
        let index = 0;

        function showNextQuestion() {
          if (index < questions.length) {
            const questionElement = document.createElement("p");
            questionElement.className = "question";
            questionElement.textContent = `${index + 1}. ${questions[index]}`;
            sectionElement.appendChild(questionElement);
            index++;
            setTimeout(showNextQuestion, 1000); // Delay of 0.1 second between questions
          }
        }

        showNextQuestion(); // Start displaying questions
      }

      function generateQuestionPaper() {
        // Shuffle questions within their respective sections only
        shuffleArray(partAQuestions);
        shuffleArray(partBQuestions);
        shuffleArray(partCQuestions);

        // Select questions for each section
        const selectedPartA = partAQuestions.slice(0, 7); // 7 questions for Section A (3 Marks)
        const selectedPartB = partBQuestions.slice(0, 5); // 5 questions for Section B (6 Marks)
        const selectedPartC = partCQuestions.slice(0, 4); // 4 questions for Section C (10 Marks)

        // Clear previous content
        document.getElementById("section-a").innerHTML = "";
        document.getElementById("section-b").innerHTML = "";
        document.getElementById("section-c").innerHTML = "";

        // Display questions under respective sections
        displayQuestions(
          "section-a",
          selectedPartA,
          "SECTION - A (5 X 3 = 15 MARKS)",
          "(Answer Any Five Questions)"
        );
        setTimeout(() => {
          displayQuestions(
            "section-b",
            selectedPartB,
            "SECTION - B (3 X 5 = 15 MARKS)",
            "(Answer Any Three Questions)"
          );
        }, (selectedPartA.length + 2) * 1000); // Delay after Section A
        setTimeout(() => {
          displayQuestions(
            "section-c",
            selectedPartC,
            "SECTION - C (2 X 10 = 20 MARKS)",
            "(Answer Any Two Questions)"
          );
        }, (selectedPartA.length + selectedPartB.length + 4) * 1000); // Delay after Section B
      }