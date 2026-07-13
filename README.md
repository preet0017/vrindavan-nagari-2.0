# GItHUb CHeat SHeet

> A complete Git & GitHub cheat sheet with the most commonly used commands, workflow, and examples.

---

# Table of Contents

1. Configure Git
2. Create Repository
3. Clone Repository
4. Check Status
5. Git Add
6. Commit
7. Branches
8. Switching Branches
9. Pull Latest Changes
10. Push Changes
11. Merge Branches
12. Delete Branches
13. Stash Changes
14. Undo Changes
15. View History
16. Remote Repository
17. Complete Workflow
18. Common Git Commands
19. Best Practices

---

# 1. Configure Git

## Check Git Version

```bash
git --version
```

Example:

```bash
git --version
```

---

## Set Username

```bash
git config --global user.name "Your Name"
```

Example

```bash
git config --global user.name "Preet Bansal"
```

---

## Set Email

```bash
git config --global user.email "example@gmail.com"
```

Example

```bash
git config --global user.email "preet@gmail.com"
```

---

## Check Configuration

```bash
git config --list
```

---

# 2. Create Repository

## Initialize Git

```bash
git init
```

Example

```bash
git init
```

---

# 3. Clone Repository

```bash
git clone <repository-url>
```

Example

```bash
git clone https://github.com/preetbansal/project.git
```

---

# 4. Check Status

```bash
git status
```

Shows

- Modified files
- New files
- Deleted files
- Staged files

---

# 5. Git Add

## Add Everything

```bash
git add .
```

Stages all modified and new files.

Example

```bash
git add .
```

---

## Add Specific File

```bash
git add filename
```

Example

```bash
git add README.md
```

Example

```bash
git add src/App.jsx
```

Example

```bash
git add package.json
```

---

## Add Multiple Files

```bash
git add file1 file2 file3
```

Example

```bash
git add README.md package.json src/App.jsx
```

---

# 6. Commit

## Commit

```bash
git commit -m "Your message"
```

Example

```bash
git commit -m "Added login page"
```

Example

```bash
git commit -m "Fixed navbar bug"
```

---

## Add + Commit (Tracked Files Only)

```bash
git commit -am "message"
```

Example

```bash
git commit -am "Updated styles"
```

> This does NOT add newly created files.

---

# 7. Branches

## See All Branches

```bash
git branch
```

Current branch has *

Example

```
* main
  develop
  feature/login
```

---

## Create New Branch

```bash
git branch branch-name
```

Example

```bash
git branch feature/login
```

Creates branch only.

You are STILL on your current branch.

---

## Create and Switch Together

```bash
git checkout -b branch-name
```

OR

```bash
git switch -c branch-name
```

Example

```bash
git checkout -b feature/dashboard
```

Example

```bash
git switch -c feature/dashboard
```

This creates AND switches to the new branch.

---

# 8. Switching Branches

## Old Method

```bash
git checkout branch-name
```

Example

```bash
git checkout main
```

---

## New Method (Recommended)

```bash
git switch branch-name
```

Example

```bash
git switch develop
```

Example

```bash
git switch feature/login
```

---

## Return to Previous Branch

```bash
git switch -
```

---

# 9. Pull Latest Changes

Before starting work every day:

```bash
git pull origin main
```

Example

```bash
git pull origin main
```

---

If working on another branch:

```bash
git pull origin develop
```

---

# 10. Push Changes

## First Push

```bash
git push -u origin branch-name
```

Example

```bash
git push -u origin feature/login
```

`-u` sets upstream.

Future pushes only need:

```bash
git push
```

---

## Push Main

```bash
git push origin main
```

---

# 11. Merge Branches

Suppose you have

```
main

feature/login
```

After completing feature/login

Switch to main

```bash
git switch main
```

Pull latest changes

```bash
git pull origin main
```

Merge

```bash
git merge feature/login
```

Push

```bash
git push origin main
```

Done.

---

## Example

```
main
    |
feature/login
```

Commands

```bash
git switch main

git pull origin main

git merge feature/login

git push origin main
```

---

# 12. Delete Branches

## Delete Local Branch

```bash
git branch -d branch-name
```

Example

```bash
git branch -d feature/login
```

---

## Force Delete

```bash
git branch -D branch-name
```

Example

```bash
git branch -D feature/login
```

---

## Delete Remote Branch

```bash
git push origin --delete branch-name
```

Example

```bash
git push origin --delete feature/login
```

---

# 13. Stash Changes

Temporarily save work

```bash
git stash
```

---

View stashes

```bash
git stash list
```

---

Restore stash

```bash
git stash pop
```

---

# 14. Undo Changes

## Unstage File

```bash
git restore --staged filename
```

Example

```bash
git restore --staged README.md
```

---

## Discard Changes

```bash
git restore filename
```

Example

```bash
git restore App.jsx
```

---

# 15. View History

## Commit History

```bash
git log
```

---

Short History

```bash
git log --oneline
```

---

Pretty Graph

```bash
git log --oneline --graph --all
```

---

# 16. Remote Repository

## Show Remote

```bash
git remote -v
```

---

## Add Remote

```bash
git remote add origin repository-url
```

Example

```bash
git remote add origin https://github.com/preet/project.git
```

---

## Change Remote URL

```bash
git remote set-url origin new-url
```

---

# 17. Complete Workflow

## Starting a New Day

```bash
git switch main

git pull origin main
```

---

## Create New Feature

```bash
git checkout -b feature/navbar
```

OR

```bash
git switch -c feature/navbar
```

---

## Work on Code

Edit files...

---

## Check Changes

```bash
git status
```

---

## Stage Files

Everything

```bash
git add .
```

Specific file

```bash
git add README.md
```

---

## Commit

```bash
git commit -m "Added responsive navbar"
```

---

## Push First Time

```bash
git push -u origin feature/navbar
```

Future

```bash
git push
```

---

## Merge into Main

```bash
git switch main

git pull origin main

git merge feature/navbar

git push origin main
```

---

## Delete Branch

```bash
git branch -d feature/navbar

git push origin --delete feature/navbar
```

---

# 18. Common Git Commands

| Command | Purpose |
|----------|----------|
| `git init` | Initialize repository |
| `git clone URL` | Clone repository |
| `git status` | Check status |
| `git add .` | Stage all files |
| `git add file` | Stage specific file |
| `git commit -m ""` | Commit changes |
| `git pull origin main` | Get latest changes |
| `git push` | Push commits |
| `git branch` | List branches |
| `git branch name` | Create branch |
| `git checkout -b name` | Create & switch branch |
| `git switch name` | Switch branch |
| `git merge branch` | Merge branch |
| `git branch -d name` | Delete local branch |
| `git push origin --delete name` | Delete remote branch |
| `git stash` | Save unfinished work |
| `git stash pop` | Restore stash |
| `git log --oneline` | View history |

---

# 19. Best Practices

## Before Starting Work

```bash
git switch main
git pull origin main
```

---

## Before Creating a New Branch

Always update your main branch first.

```bash
git switch main

git pull origin main

git checkout -b feature/new-feature
```

---

## Before Pushing

Always check:

```bash
git status
```

Review changes:

```bash
git diff
```

Stage:

```bash
git add .
```

Commit:

```bash
git commit -m "Meaningful commit message"
```

Push:

```bash
git push
```

---

## Before Merging

1. Switch to main

```bash
git switch main
```

2. Pull latest changes

```bash
git pull origin main
```

3. Merge

```bash
git merge feature/your-branch
```

4. Push

```bash
git push origin main
```

---

## Good Commit Messages

✅ Good

```text
feat: add login page

fix: resolve navbar overlap

docs: update README

style: improve button spacing

refactor: simplify authentication logic

chore: update dependencies
```

❌ Bad

```text
update

changes

fixed

done

final

abc
```

---

# Recommended Daily Workflow

```text
Start Day
    │
    ▼
git switch main
    │
    ▼
git pull origin main
    │
    ▼
git checkout -b feature/xyz
    │
    ▼
Write Code
    │
    ▼
git status
    │
    ▼
git add .
(or git add filename)
    │
    ▼
git commit -m "Meaningful message"
    │
    ▼
git push -u origin feature/xyz
    │
    ▼
Create Pull Request (PR) on GitHub
    │
    ▼
Merge into main
    │
    ▼
git switch main
    │
    ▼
git pull origin main
    │
    ▼
git branch -d feature/xyz
    │
    ▼
git push origin --delete feature/xyz
```

---

# Quick Reference

```bash
# Check status
git status

# Pull latest code
git pull origin main

# Create and switch branch
git checkout -b feature/name

# OR
git switch -c feature/name

# Switch branch
git switch main

# Add everything
git add .

# Add one file
git add README.md

# Commit
git commit -m "Your message"

# Push
git push

# First push
git push -u origin feature/name

# Merge
git switch main
git pull origin main
git merge feature/name
git push origin main

# Delete local branch
git branch -d feature/name

# Delete remote branch
git push origin --delete feature/name

# History
git log --oneline

# Stash
git stash
git stash pop
```

---

**Happy Coding! 🚀**