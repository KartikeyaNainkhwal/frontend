# **Portfolio Website - Kartikeya Nainkhwal**  


## **🌐 Live Demo**  
🔗 **[View Portfolio](https://frontend-virid-sigma.vercel.app/)**  

## **📝 Description**  
A modern, responsive, and animated portfolio website built with **React, Next.js, Tailwind CSS, and Framer Motion**. This portfolio showcases my projects, skills, and contact information with smooth animations and a clean UI.  

### **✨ Key Features**  
✅ **Dark/Light Mode Toggle** – User-friendly theme switching  
✅ **Smooth Animations** – Powered by **Framer Motion**  
✅ **Responsive Design** – Works on all devices (Mobile, Tablet, Desktop)  
✅ **Interactive Sections** – Projects, Skills, About Me, and Contact Form  
✅ **Chatbot Integration** – AI-powered chatbot for engagement  

---

## **🛠️ Technologies Used**  

| Category       | Technologies |
|---------------|-------------|
| **Frontend**  | React, Next.js, Tailwind CSS |
| **Animations**| Framer Motion, React Intersection Observer |
| **Icons**     | Lucide React |
| **Form Handling** | React Hook Form |
| **Chatbot**   | Custom AI chatbot integration |
| **Deployment**| Vercel / Netlify |

---

## **🚀 Getting Started**  

### **Prerequisites**  
- Node.js (v16 or later)  
- npm / yarn  

### **Installation**  
1. **Clone the repository**  
   ```bash
   git clone https://github.com/KartikeyaNainkhwal/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**  
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**  
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**  
   Visit `http://localhost:3000`  

---

## **📂 Project Structure**  

```bash
portfolio/
├── node_modules/          # Dependencies
├── public/                # Static files
│   ├── resume (1).pdf     # Resume file
│   ├── vite.svg           # Vite logo
├── src/                   # Source files
│   ├── assets/            # Images & icons
│   │   ├── a.jpg          
│   │   ├── react.svg      
│   │   ├── resume (1).pdf 
│   │   ├── Screenshot-*.png
│   ├── components/        # Reusable UI components
│   │   ├── AboutSection.jsx 
│   │   ├── AnimatedSection.jsx
│   │   ├── animations.jsx
│   │   ├── Certificate.jsx
│   │   ├── Chatbot.jsx
│   │   ├── Chatbott.jsx   # (Check if this is a duplicate)
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── HeroSection.jsx
│   │   ├── ModeToggle.jsx
│   │   ├── ProjectSection.jsx
│   │   ├── SkillsSection.jsx
│   ├── pages/             # Page components
│   │   ├── Home.jsx
│   ├── css/               # Stylesheets
│   │   ├── App.css
│   │   ├── index.css
│   ├── App.jsx            # Main React component
└── package.json           # Dependencies & scripts

```

---

## **🎨 Customization**  

### **1. Change Personal Info**  
- Update `HeroSection.js` with your name and bio.  
- Modify `AboutSection.js` with your details.  

### **2. Add/Edit Projects**  
Edit `ProjectsSection.js` to include your projects:  
```js
const projects = [
  {
    title: "Portfolio Website",
    description: "Simple Portfolio Website",
    tags: ["React", "Next.js", "Tailwind"],
    codeLink: "https://github.com/KartikeyaNainkhwal/frontend",
    demoLink: "https://frontend-virid-sigma.vercel.app/"
  },
  // Add more projects...
];
```

### **3. Update Skills**  
Edit `SkillsSection.js` to list your skills:  
```js
const skills = [
  "React", "Next.js", "Node.js", 
  "TypeScript", "Tailwind CSS", "Docker"
];
```

### **4. Change Theme Colors**  
Modify `tailwind.config.js` to customize colors:  
```js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: "#3B82F6", // Change blue to your preferred color
        dark: "#1E293B",    // Dark mode background
      },
    },
  },
};
```

---

## **🔌 Integrations**  

### **1. Chatbot**  
- Uses a custom AI chatbot (update in `Chatbot.js`).  
- Replace with **Dialogflow, OpenAI, or any other API**.  

### **2. Contact Form**  
- Currently uses a simple form .  

---

## **🚀 Deployment**  

### **Vercel (Recommended)**  
1. Push to GitHub.  
2. Import the repo in **[Vercel](https://vercel.com/)**.  
3. Deploy with default settings.  


## **📜 License**  
This project is licensed under the **MIT License**.  

---

## **📬 Contact Me**  
📧 **Email:** (kartikeyak@iitbhilai.ac.in)  
🔗 **LinkedIn:** [Your LinkedIn](https://www.linkedin.com/in/kartikeya-nainkhwal-6493402b0/)  
🐱 **GitHub:** [@KartikeyaNainkhwal](https://github.com/KartikeyaNainkhwal)  

---

### **🌟 Show Your Support**  
If you like this portfolio, give it a ⭐ on GitHub!  

Happy Coding! 🚀
