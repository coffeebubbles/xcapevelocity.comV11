import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { AuthGuard } from './components/AuthGuard';
import { LoginPage } from './pages/auth/LoginPage';
import { RegisterPage } from './pages/auth/RegisterPage';
import { DashboardPage } from './pages/DashboardPage';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { CoursesPage } from './pages/CoursesPage';
import { ContactPage } from './pages/ContactPage';
import { SuccessStoriesPage } from './pages/SuccessStoriesPage';
import { CaseStudyPage } from './pages/CaseStudyPage';
import { AIIntegrationPage } from './pages/services/AIIntegrationPage';
import { AutomationPage } from './pages/services/AutomationPage';
import { ConsultingPage } from './pages/services/ConsultingPage';
import { OurStoryPage } from './pages/about/OurStoryPage';
import { TeamPage } from './pages/about/TeamPage';
import { CareersPage } from './pages/about/CareersPage';
import { DocumentationPage } from './pages/resources/DocumentationPage';
import { SupportPage } from './pages/resources/SupportPage';
import { BlogPage } from './pages/BlogPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { QuestionnairePage } from './pages/QuestionnairePage';
import { SEO } from './components/SEO';

function AppRoutes() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      
      {/* Protected Routes */}
      <Route path="/dashboard" element={
        <AuthGuard>
          <Layout>
            <DashboardPage />
          </Layout>
        </AuthGuard>
      } />
      
      {/* Marketing Routes */}
      <Route path="/" element={<Layout><HomePage /></Layout>} />
      <Route path="/about" element={<Layout><AboutPage /></Layout>} />
      <Route path="/services" element={<Layout><ServicesPage /></Layout>} />
      <Route path="/services/ai-integration" element={<Layout><AIIntegrationPage /></Layout>} />
      <Route path="/services/automation" element={<Layout><AutomationPage /></Layout>} />
      <Route path="/services/consulting" element={<Layout><ConsultingPage /></Layout>} />
      <Route path="/about/our-story" element={<Layout><OurStoryPage /></Layout>} />
      <Route path="/about/team" element={<Layout><TeamPage /></Layout>} />
      <Route path="/about/careers" element={<Layout><CareersPage /></Layout>} />
      <Route path="/courses" element={<Layout><CoursesPage /></Layout>} />
      <Route path="/blog" element={<Layout><BlogPage /></Layout>} />
      <Route path="/blog/:slug" element={<Layout><BlogPostPage /></Layout>} />
      <Route path="/documentation" element={<Layout><DocumentationPage /></Layout>} />
      <Route path="/support" element={<Layout><SupportPage /></Layout>} />
      <Route path="/contact" element={<Layout><ContactPage /></Layout>} />
      <Route path="/success-stories" element={<Layout><SuccessStoriesPage /></Layout>} />
      <Route path="/case-study/:id" element={<Layout><CaseStudyPage /></Layout>} />
      <Route path="/questionnaire" element={<Layout><QuestionnairePage /></Layout>} />

      {/* Catch all */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;