# ============================
# Git Commands Cheat Sheet
# ============================

# ----------------------------
# 1️⃣ Initialize a repository
# ----------------------------
git init 
# Initializes a new Git repository in the current folder (creates a .git directory)

# ----------------------------
# 2️⃣ Check repository status
# ----------------------------
git status
# Shows modified files, staged files, and untracked files

# ----------------------------
# 3️⃣ Add files to staging area
# ----------------------------
git add <file> 
# Adds a specific file to staging

git add . 
# Adds all modified/untracked files to staging

# ----------------------------
# 4️⃣ Commit changes
# ----------------------------
git commit -m "commit message"
# Commits staged changes with a descriptive message

git commit -am "commit message"
# Shortcut: add + commit for modified tracked files (does not include untracked files)

# ----------------------------
# 5️⃣ Branching
# ----------------------------
git branch 
# Lists all branches

git branch <branch-name>
# Creates a new branch

git checkout <branch-name>
# Switches to the specified branch

git checkout -b <branch-name>
# Creates a new branch and switches to it immediately

# ----------------------------
# 6️⃣ Merging
# ----------------------------
git checkout <target-branch>
# Switch to the branch you want to merge into

git merge <source-branch>
# Merges changes from source-branch into the current branch
# May require conflict resolution if changes overlap

# ----------------------------
# 7️⃣ Remote repository
# ----------------------------
git remote add origin <repo-URL>
# Links your local repo to a remote repository

git remote -v
# Shows remote repository URLs

# ----------------------------
# 8️⃣ Push and Pull
# ----------------------------
git push -u origin <branch-name>
# Pushes your branch to remote repo for the first time and sets upstream

git push
# Pushes subsequent commits to the remote branch

git pull
# Fetches and merges changes from the remote branch to your local branch

# ----------------------------
# 9️⃣ Pull Request Workflow (GitHub/GitLab)
# ----------------------------
# Step 1: Create a new branch for feature/fix
git checkout -b feature-branch

# Step 2: Make changes, add and commit
git add .
git commit -m "added new feature"

# Step 3: Push branch to remote
git push -u origin feature-branch

# Step 4: Go to GitHub/GitLab and open a Pull Request (PR) from feature-branch to main

# ----------------------------
# 🔹 Useful Commands
# ----------------------------
git log
# Shows commit history

git log --oneline --graph --all
# Compact view of commits with branch graph (colorful if terminal supports)

git diff
# Shows unstaged changes

git diff --staged
# Shows staged changes

git reset <file>
# Unstage a file

git checkout -- <file>
# Discard changes in working directory

git stash
# Temporarily save changes that are not ready to commit

git stash pop
# Restore stashed changes

git clone <repo-URL>
# Clone an existing repository from remote

git fetch
# Fetches updates from remote without merging

git rm <file>
# Removes a file from working directory and stages deletion

git mv <old> <new>
# Renames/moves a file and stages the change

git tag <tag-name>
# Create a tag at current commit (useful for releases)

git branch -d <branch-name>
# Deletes a local branch (only if fully merged)

git branch -D <branch-name>
# Force delete local branch even if unmerged

git remote remove <name>
# Remove remote repo link

# ----------------------------
# 🔹 Git Config (Optional setup)
# ----------------------------
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
# Sets global identity for commits

git config --list
# Shows current git config settings
