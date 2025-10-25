# 🌈 Git Rainbow Workflow (Branching, Merging & Visual Graph)

This guide helps you create a colorful **Git workflow graph** by working with multiple branches, making commits, and merging them back into `master` (or `main`).

---

## 🧩 Step 1 — Initialize a Git repository

```bash
git init
//💾 Step 2 — Make your first commit on master
git add .
git commit -m "Initial commit"
//🌱 Step 3 — Create a new branch and add work
git checkout -b feature-1
# (make some code changes in your files)
git add .
git commit -m "Work done in feature-1 branch"
//🌿 Step 4 — Create another branch from master
git checkout master
git checkout -b feature-2
# (make some other changes)
git add .
git commit -m "Work done in feature-2 branch"
🔄 Step 5 — Merge both branches into master
git checkout master
git merge --no-ff feature-1 -m "Merge feature-1 into master"
git merge --no-ff feature-2 -m "Merge feature-2 into master"
