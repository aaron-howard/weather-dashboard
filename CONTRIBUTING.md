# Contributing to Weather Dashboard

Thank you for your interest in contributing to the Weather Dashboard! This document provides guidelines and information for contributors.

## 🤝 How to Contribute

### Reporting Bugs

1. **Check existing issues** - Make sure the bug hasn't been reported already
2. **Use the bug report template** - Provide detailed information about the issue
3. **Include steps to reproduce** - Help us understand how to reproduce the bug
4. **Add screenshots** - Visual evidence is always helpful

### Suggesting Features

1. **Check the roadmap** - See if your feature is already planned
2. **Use the feature request template** - Provide detailed information about the feature
3. **Explain the use case** - Help us understand why this feature would be valuable
4. **Consider implementation** - If you have ideas about how to implement it, share them!

### Code Contributions

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Make your changes** - Follow our coding standards
4. **Test your changes** - Ensure everything works as expected
5. **Commit your changes** (`git commit -m 'Add amazing feature'`)
6. **Push to the branch** (`git push origin feature/amazing-feature`)
7. **Open a Pull Request** - Use our PR template

## 📋 Development Setup

### Prerequisites

- Modern web browser
- Git
- OpenWeatherMap API key (free)
- Python 3.x or Node.js (for local development)

### Local Development

1. **Clone your fork**
   ```bash
   git clone https://github.com/yourusername/weather-dashboard.git
   cd weather-dashboard
   ```

2. **Set up configuration**
   ```bash
   cp config.template.js config.js
   # Edit config.js with your API key
   ```

3. **Start development server**
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npm install
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:8000`

## 🎨 Coding Standards

### JavaScript
- Use ES6+ features
- Follow consistent naming conventions (camelCase for variables/functions)
- Add comments for complex logic
- Use meaningful variable and function names
- Handle errors gracefully

### CSS
- Use consistent indentation (2 spaces)
- Group related properties together
- Use meaningful class names
- Follow BEM methodology when appropriate
- Use CSS custom properties for theming

### HTML
- Use semantic HTML elements
- Include proper accessibility attributes
- Keep markup clean and readable
- Use consistent indentation

### General
- Write clear, descriptive commit messages
- Keep functions small and focused
- Add comments for complex algorithms
- Test your changes thoroughly

## 🧪 Testing

### Manual Testing
- Test on different browsers (Chrome, Firefox, Safari, Edge)
- Test on different screen sizes (mobile, tablet, desktop)
- Test with different API responses
- Test error handling scenarios

### Automated Testing
- We're working on adding automated tests
- For now, please test manually and document your testing process

## 📝 Pull Request Guidelines

### Before Submitting
- [ ] Code follows our coding standards
- [ ] Changes are tested thoroughly
- [ ] No console errors or warnings
- [ ] Responsive design works on all screen sizes
- [ ] API key configuration is properly handled
- [ ] Documentation is updated if needed

### PR Description
- Clearly describe what changes you made
- Explain why you made these changes
- Include screenshots if applicable
- Reference any related issues
- List any breaking changes

### Review Process
- All PRs require review before merging
- Address feedback promptly
- Keep PRs focused and small when possible
- Be open to suggestions and improvements

## 🐛 Bug Report Template

```markdown
**Bug Description**
A clear and concise description of what the bug is.

**To Reproduce**
Steps to reproduce the behavior:
1. Go to '...'
2. Click on '....'
3. Scroll down to '....'
4. See error

**Expected Behavior**
A clear and concise description of what you expected to happen.

**Screenshots**
If applicable, add screenshots to help explain your problem.

**Environment**
- OS: [e.g. Windows 10, macOS, Linux]
- Browser: [e.g. Chrome, Firefox, Safari]
- Version: [e.g. 22]
- Screen Size: [e.g. Desktop, Mobile, Tablet]

**Additional Context**
Add any other context about the problem here.
```

## 💡 Feature Request Template

```markdown
**Feature Description**
A clear and concise description of what you want to happen.

**Use Case**
Describe the problem this feature would solve or the value it would add.

**Proposed Solution**
Describe your proposed solution or implementation ideas.

**Alternatives**
Describe any alternative solutions or features you've considered.

**Additional Context**
Add any other context or screenshots about the feature request here.
```

## 🏷️ Issue Labels

We use the following labels to categorize issues:

- `bug` - Something isn't working
- `enhancement` - New feature or request
- `documentation` - Improvements or additions to documentation
- `good first issue` - Good for newcomers
- `help wanted` - Extra attention is needed
- `question` - Further information is requested
- `wontfix` - This will not be worked on

## 📞 Getting Help

- 💬 [GitHub Discussions](https://github.com/yourusername/weather-dashboard/discussions)
- 🐛 [GitHub Issues](https://github.com/yourusername/weather-dashboard/issues)
- 📧 Email: [your-email@example.com]

## 📄 License

By contributing to this project, you agree that your contributions will be licensed under the MIT License.

## 🙏 Recognition

Contributors will be recognized in:
- README.md contributors section
- Release notes
- Project documentation

Thank you for contributing to the Weather Dashboard! 🎉
