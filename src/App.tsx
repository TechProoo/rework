import { Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Route } from "react-router-dom";
import { About } from "./Pages/About";
import { Contact } from "./Pages/Contact";
import { Courses } from "./Pages/Courses";
import { Jobs } from "./Pages/Jobs";
import { Login } from "./Pages/Login";
import Signup from "./Pages/Signup";
import { Consultation } from "./Pages/Consultation";
import { DashboardHome } from "./Pages/Users/DashboardHome";
import { Profile } from "./Pages/Users/Profile";
import { Settings } from "./Pages/Users/Settings";
import { ProtectedRoute } from "./Components/ProtectedRoute";
import { PublicOnlyRoute } from "./Components/PublicOnlyRoute";
import { CompanyProtectedRoute } from "./Components/CompanyProtectedRoute";
import { CoursesPage } from "./Pages/Users/Courses_page";
import { JobsPage } from "./Pages/Users/Jobs_page";
import ConsultationPage from "./Pages/Users/ConsultationPage";
import { MessagesPage } from "./Pages/Users/MessagesPage";
import { Notification } from "./Pages/Users/Notification";
import EnrollmentPage from "./Pages/Users/EnrollmentPage";
import CategoryPage from "./Pages/Users/CategoryPage";
import LearningGoals from "./Pages/Users/LearningGoals";
import Community from "./Pages/Users/Community";
import SkillAssessmentPage from "./Pages/Users/SkillAssessmentPage";
import PopularCoursesPage from "./Pages/Users/PopularCoursesPage";
import TutorialViewPage from "./Pages/Users/TutorialViewPage";
import CompanyDashboard from "./Pages/Company/DashboardPage";
import CompanyLogin from "./Pages/Company/LoginPage";
import CompanySignup from "./Pages/Company/SignupPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route
          path="/login"
          element={
            <PublicOnlyRoute>
              <Login />
            </PublicOnlyRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <PublicOnlyRoute>
              <Signup />
            </PublicOnlyRoute>
          }
        />
        <Route
          path="/signup/student"
          element={
            <PublicOnlyRoute>
              <Signup />
            </PublicOnlyRoute>
          }
        />
        <Route path="/consultation" element={<Consultation />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardHome />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/courses"
          element={
            <ProtectedRoute>
              <CoursesPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/jobs"
          element={
            <ProtectedRoute>
              <JobsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/consultations"
          element={
            <ProtectedRoute>
              <ConsultationPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/messages"
          element={
            <ProtectedRoute>
              <MessagesPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/notifications"
          element={
            <ProtectedRoute>
              <Notification />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/settings"
          element={
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/courses/enroll/:courseId"
          element={
            <ProtectedRoute>
              <EnrollmentPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/tutorial/:courseId"
          element={
            <ProtectedRoute>
              <TutorialViewPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/category/:categoryId"
          element={
            <ProtectedRoute>
              <CategoryPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/goals"
          element={
            <ProtectedRoute>
              <LearningGoals />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/community"
          element={
            <ProtectedRoute>
              <Community />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/skill-assessment"
          element={
            <ProtectedRoute>
              <SkillAssessmentPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/popular-courses"
          element={
            <ProtectedRoute>
              <PopularCoursesPage />
            </ProtectedRoute>
          }
        />

        {/* Company Routes */}
        <Route
          path="/company/login"
          element={
            <PublicOnlyRoute>
              <CompanyLogin />
            </PublicOnlyRoute>
          }
        />
        <Route
          path="/company/signup"
          element={
            <PublicOnlyRoute>
              <CompanySignup />
            </PublicOnlyRoute>
          }
        />
        <Route
          path="/company/dashboard"
          element={
            <CompanyProtectedRoute>
              <CompanyDashboard />
            </CompanyProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
