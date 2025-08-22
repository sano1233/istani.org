git init
git add .
git commit -m "Deploy ISTANI"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/istani-org.git
git push -u origin main
rm -f .git/index.lock
git config --global user.name "Your Name"
git config --global user.email "your-email@example.com"
# Add all files git add .
# Create commit git commit -m "Deploy ISTANI Fitness Platform - Enterprise Ready"
