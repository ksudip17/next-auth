# Google OAuth Authentication Project - Simple Overview

## 🚀 What This Project Does

This is a web application that lets users sign in using their Google account. Once logged in, users can see their profile information and the app remembers them until they sign out.

## 🛠️ Tech Stack Used

### Frontend
- **Next.js 15** - React framework for building the website
- **React 19** - For creating the user interface
- **TypeScript** - Makes the code more reliable and easier to debug
- **Tailwind CSS** - For styling the website (dark/light mode support)

### Backend & Database
- **NextAuth.js 5** - Handles all the Google login magic
- **MongoDB** - Stores user information (name, email, profile picture)
- **Mongoose** - Helps talk to the database easily

### Development Tools
- **Turbopack** - Makes development faster
- **ESLint** - Keeps code clean and consistent

## 🔄 How It Works (Simple Steps)

### 1. **User Visits the App**
- If not logged in → redirected to login page
- If already logged in → goes to profile page

### 2. **Sign In Process**
- User clicks "Sign in with Google" button
- Google asks user to approve the login
- Google sends back user info (name, email, picture)
- App saves user info to database (if new user)
- User is now logged in and sees their profile

### 3. **While Logged In**
- User can see their profile page with their info
- App shows when their session will expire (1 hour)
- User can sign out anytime

### 4. **Sign Out Process**
- User clicks sign out button
- App forgets the user's session
- User is sent back to login page

## 📁 Key Files & What They Do

- **`auth.ts`** - Sets up Google login and handles user data
- **`middleware.ts`** - Protects pages from unauthorized access
- **`userModel.ts`** - Defines what user data looks like in database
- **`SignIn.tsx`** - The Google login button component
- **`SignOut.tsx`** - The sign out button component
- **`page.tsx`** - Shows user profile when logged in
- **`login/page.tsx`** - Login page for non-authenticated users

## 🔐 Security Features

- **Google OAuth** - Secure login through Google (industry standard)
- **Session Management** - Users stay logged in for 1 hour
- **Route Protection** - Can't access profile without logging in
- **Database Security** - User data stored safely in MongoDB

## 🎨 User Experience

- **One-Click Login** - Just click Google button to sign in
- **Profile Display** - Shows user's name, email, and profile picture
- **Session Info** - Tells user when they'll be logged out
- **Responsive Design** - Works on phones and computers
- **Dark/Light Mode** - Users can choose their preferred theme

## 🚀 Getting Started

1. **Setup Requirements**
   - Node.js installed
   - MongoDB database
   - Google OAuth credentials

2. **Environment Variables Needed**
   - Database connection string
   - Google client ID and secret
   - Auth secret for sessions

3. **Run the App**
   ```bash
   npm install
   npm run dev
   ```

## 🎯 What Makes This Project Good

- **Modern Tech** - Uses latest versions of everything
- **Type Safe** - TypeScript prevents many bugs
- **Secure** - Follows authentication best practices
- **User Friendly** - Simple, clean interface
- **Scalable** - Easy to add more features later

## 🔮 Easy to Extend

This project can easily be enhanced with:
- More login options (GitHub, Facebook, etc.)
- User profile editing
- Password reset features
- Role-based access control
- Email verification

---

**Bottom Line**: This is a clean, modern authentication system that lets users sign in with Google and manages their sessions securely. It's built with current best practices and is ready for production use. 
