# Study Buddy  <img src="https://raw.githubusercontent.com/avaneeshp/Study-Buddy/main/frontend/src/assets/logoDump/navbarLogo.png" alt="Study Buddy Navbar Logo" width="150" align="right"/>

This is a study-helper website project made for the hackathon Google x MHacks by Aditya Patel, Avaneesh Prasad, Eshwar Kanakasabai, and Nidhil Nayudu.

## Inspiration
Lately, the EECS Office Hours queue has been busier than Ann Arbor on football gamedays. Myself and my peers alike are often in dire need of help, but can never rely on office hours to get them. For a service that is so highly encouraged, it would be nice to have availability and access. So, we sought to solve this issue by making a virtual TA, training to solve all of these issues! This feature aims to summarize any course content file provided into quick, easy flashcards to study from. 

## What it does
Study Buddy is a web platform designed for students to enhance their learning experience. It offers automated summarization of educational materials, including text documents, PDFs, and images, allowing for quick review and understanding. Additionally, it creates interactive quizzes tailored to the uploaded content for self-assessment, helping students gauge their mastery of the subject matter. This creates value for the user as it offers direct, personalized study material directly from course content the user selects.

## How we built it
On the backend, we wrote a Python file that utilizes Google Gemini which inputs files and creates summaries and quizzes base. We used Flask to manage routes and link this backend to our React frontend, which we created components that rendered the application we saw, adding style by utilizing TailwindCSS. 

## Challenges we ran into
Most of our issues were with the complexities and complications of React, especially with the handoff from Python to javascript. Our best solutions to this were researching fixes on the fly and tackling problems as they rose, navigating the ambiguity working with new technologies created. Another issue we faced was the variability of the generated text that Google Gemini outputs, as it led to issues with React when displaying our content to the website. Our primary solution to variability was refining our prompt engineering and fine tuning our model and how we wanted it to output our information. This helped us greatly create uniformity in responses, though slight variation would occur as with any LLM, but the functionality was operational. 

## Accomplishments that we're proud of
Ultimately, this is a viable tool to integrate into the EECS Office Hours queue, and a competitor to study tools such as Quizlet. Creating a true end to end product that has meaningful impacts across our CS community, including a service we intend to use ourselves, is a feat in and of itself. Additionally, we are proud of how professional and aesthetically appealing it looks, which given we had about 48 hours to develop, is a feat we are proud of. 

## What we learned
All of us were not that familiar with front-end web development, so tackling React, was a monumental learning experience for us. Also, we learned how to handle HTTP requests using routes in Flask. Finally, we added to our knowledge of Large Language Models when playing around with Google Gemini. It was an awesome weekend to learn new things.

## What's next for Study Buddy
Coming soon, we have exciting features headlined by Q&A support. We will fine tune the model with sample questions and answers trained on information from the lecture slides. So then, StudyBuddy can fulfill their dream of becoming an actual TA by learning the course content, which also gives you more course relevant feedback! Additionally, we aim to refine the quiz format to better help prepare our students, even involving features like Short Answer questions or matching. 

## Services
A user can input files of the format pdf, jpeg, jpg, png, and txt, and our website will generate and output a summary of each of the files. Then, the user can proceed to request a quiz about all the files it has inputted. On request, the website will create an interactive quiz that can test the user's knowledge.

## Logo
<img src="https://raw.githubusercontent.com/avaneeshp/Study-Buddy/main/frontend/src/assets/logoDump/mascot.jpg" alt="Study Buddy Mascot" width="200"/>
