git init
git add .
git commit -m "Deploy ISTANI"
git branch -M main
git remote add origin https://github.com/sano1233/istani-org.git
git push -u origin main
rm -f .git/index.lock
git config --global user.name "Sano"
git config --global user.email ".com"
