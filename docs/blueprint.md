# **App Name**: AIAcademy

## Core Features:

- Role Switcher: Implement a role switcher (teacher, student, admin) without authentication to simulate different user interfaces and functionalities.
- AI-Powered Keyword Suggestion Tool: Utilize a generative AI tool to provide a tool that gives keyword suggestions when creating assignments, aiding teachers in defining grading criteria.
- AI Auto-Grading: Automatically grade student submissions by matching answers with predefined keywords, providing scores, matched keywords, status, and feedback. Returns JSON with score, matchedKeywords, status, and feedback.
- Class Management: Enable teachers to create and manage classes, including adding assignments and materials. Students can join classes and view assignments. Students can join classes and view assignments.
- Assignment Creation: Allow teachers to create assignments with various question types (short answer, multiple choice, checkbox) with AI assistance for generating questions and answer keys. Use SweetAlert or a modal for the form.
- Submission Handling: Enable students to submit answers to assignments, which are then processed by the AI for grading. Shows a loading spinner while the AI is grading. Triggers background AI grading process upon submission.
- Grading and Feedback Display: Display grading results to students, including scores, highlighted matched keywords (for short answers), and AI-generated feedback. Allows students to appeal AI grading results.
- Dark/Light Mode: Settings option for Dark/Light Mode
- AI Class Creation: Allow teachers to generate a class with a prompt, automatically creating the class name, description, and initial materials using generative AI.
- User Authentication and Roles: Implement a registration and login system with two roles: teacher and student. Registration includes full name, username, email, password, and confirm password. Login uses username/email and password with a 'show password' checkbox.
- User Profile: Allow users to customize profile information which includes a profile photo and full name.
- Student Dashboard: A dashboard for students containing a list of their classes.
- Teacher Dashboard: A dashboard for teachers containing a list of their classes.
- Class View: A detailed view of a class, with tabs for Feed, Assignments, and People.

## Style Guidelines:

- Primary color: Medium Purple (#800080) to evoke intellect and sophistication.
- Background color: Dark Gray (#333333) to complement the primary color and create a calm learning atmosphere. In light mode, use a light purple background.
- Accent color: Soft Lavender (#E6E6FA) to highlight key elements and CTAs, providing contrast and focus. Adjust for light and dark modes to maintain visibility.
- Headline font: 'Space Grotesk', a sans-serif font for a computerized, techy feel.
- Body font: 'Inter', a grotesque-style sans-serif font for a modern look. Paired with Space Grotesk for longer text.
- Use clear, minimalist icons to represent actions and content types. Ensure icons are legible and adapt well to both light and dark themes.
- Employ a modern, clean layout with Tailwind CSS for responsiveness and aesthetic appeal. Design for both light and dark mode, ensuring elements are well-placed and easily accessible.
- Incorporate subtle loading animations and transitions to enhance user experience during AI grading and content loading. Ensure animations are smooth and not distracting in both light and dark modes.