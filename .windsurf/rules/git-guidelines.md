---
trigger: manual
---

## Git Commits

- Format: <gitmoji> type(scope): description
- Types: feat, fix, docs, style, refactor, perf, test, chore, ci, build, revert
- Subject: imperative mood, <50 chars (max 72), no period
- Separate subject from body with blank line
- Body: explains why in list format
- Make sure to check both staged and unstaged changes
- use `git status` for changes overview if there are staged and unstaged changes
- use `git --no-pager diff` to view unstaged changes
- use `git --no-pager diff --staged` to view staged changes
- generate a message only, don't commit
- Wrap it in code for easy copy

## Common Gitmojis

✨ :sparkles: New features
🐛 :bug: Bug fixes
💄 :lipstick: UI/style updates
♻️ :recycle: Refactoring
📝 :memo: Documentation
🔧 :wrench: Configuration
🎨 :art: Code structure
🚀 :rocket: Performance
🔥 :fire: Removing code
✅ :white_check_mark: Tests
🔒 :lock: Security
⬆️ :arrow_up: Upgrade deps
⬇️ :arrow_down: Downgrade deps
🎉 :tada: Initial commits
🚧 :construction: WIP
💡 :bulb: Comments/docs
🔍 :mag: SEO
📱 :iphone: Responsive
♿️ :wheelchair: Accessibility
🔀 :twisted_rightwards_arrows: Merging
🚚 :truck: Moving/renaming
💥 :boom: Breaking changes
