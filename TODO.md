# TODO: Remove .env from GitHub Repo

## Steps:

### 1. Update .gitignore (add .env protection)
- [x] Edit root .gitignore to include `*.env` and `backend/.env`

### 2. Verify local status
- [ ] Confirm backend/.env untracked

### 3. Install git-filter-repo
- [ ] Check/install via pip (in venv)

### 4. Purge .env from history
- [ ] `git filter-repo --path backend/.env --invert-paths`

### 5. Force push to GitHub
- [ ] `git push origin --force-with-lease main`

### 6. Verify
- [ ] `git log --all --full-history -- backend/.env`
- [ ] Check GitHub repo

### 7. Regenerate secrets & test
- [ ] New local .env
- [ ] `cd backend && npm start`

---
*Approved plan after user confirmation. Progress tracked here.*
