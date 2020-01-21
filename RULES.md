# Santatecla development and deployment rules

## Git

### **Git flow** branching model:

* **Master:** stores the official release history. All commits will be tagged with a version number.

* **Develop:** serves as an integration branch for features. Must be stable.

* **Feature:** these branches use develop as their parent branch. When a feature is complete, it gets merged back into develop (Pull request must be approved). Features should never interact directly with master.

* **Release:** only bug fixes, documentation generation, and other release-oriented tasks should go in this branch. Once it's ready to ship, the release branch gets merged into master and tagged with a version number. In addition, it should be merged back into develop.

* **Hotfix:** used to quickly patch production releases. This is the only branch that should fork directly off of master. As soon as the fix is complete, it should be merged into both master and develop, and master should be tagged with an updated version number.

### Commits:



### Branches name:

* (type of branch)/name-of-the-branch
* Cannot use capital letters
* Each word must be separated by "-"

* Example: feature/added-index-in-lesson-view

### Pull requests:

### Versions:

