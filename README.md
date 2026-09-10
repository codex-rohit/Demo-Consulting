# Rajesh Kumar - Business Growth & Executive Coach Website

A complete, production-ready, mobile-first website for **Rajesh Kumar**, premier Business Growth & Executive Leadership Coach based in India.

---

## 🚀 How to Host on GitHub Pages

This project supports **both** standard zero-build GitHub Pages (pure HTML5 + CSS3 + Vanilla JavaScript) and automated GitHub Actions deployment.

### Option 1: Instant Zero-Build Hosting (Easiest)
GitHub Pages natively supports hosting from the `/docs` folder without running any commands:
1. Push or upload this repository to your GitHub account.
2. In your GitHub repository, go to **Settings** > **Pages** (in the left sidebar).
3. Under **Build and deployment** > **Source**, choose **Deploy from a branch**.
4. Set Branch to `main` (or `master`) and select the folder **/docs**.
5. Click **Save**. Your website will be live in ~30 seconds at `https://<your-username>.github.io/<repo-name>/`!

*(Alternatively, you can copy the contents of `docs/index.html` directly to the repository root `index.html` if you want a single standalone file).*

---

### Option 2: Automated GitHub Actions Deployment (React + Vite)
This repository includes `.github/workflows/deploy.yml` which automatically compiles the React + Vite application:
1. Push the code to GitHub.
2. Go to **Settings** > **Pages**.
3. Under **Source**, select **GitHub Actions**.
4. GitHub will automatically run the build workflow and publish your site!

---

## 📱 Mobile-First Features
- **Mobile Sticky Action Bar**: Bottom 1-tap "WhatsApp" and "Book Free Consultation" buttons with touch targets ≥ 48px.
- **Mobile Navigation Drawer**: Smooth slide-down menu with accessible tap targets.
- **Responsive Profile Highlights**: Compact headshot card on mobile and high-resolution hero frame on desktop.
- **11 Ordered Sections**:
  1. Sticky Navigation
  2. Hero Section
  3. About & Credibility
  4. Expertise Areas / Services (3x2 Grid)
  5. 3-Step Proven Process
  6. Results & Quantified Success Stories
  7. Testimonials & Social Proof
  8. Consulting Packages (INR pricing)
  9. FAQ Accordion
  10. Pre-Footer Call to Action
  11. Comprehensive Footer
- **Interactive Booking Modal**: Real-time consultation scheduler with IST slots and WhatsApp confirmation.
- **Floating WhatsApp Widget**: Positioned above the mobile bar to avoid visual overlap.
