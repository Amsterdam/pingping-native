## Git Style Guide & Conventions

Follow this style guide in order to keep branches, commits and folders uniform.

### Commits:

```
Commit early and often. Small, self-contained commits are easier to understand and revert when something goes wrong.
```

### Branches:

#### Branch Folders:

###### We use branch folders in order to keep track of what the purpose of a new branch is. A branch may have a few different purposes, it can create a new Feature, fix an existing feature, refactoring existing production code or be a hotfix on a pressing bug.

```
Folders to be used when branching:
    fix/
    feature/
    refactor/
    hotfix/
    doc/

Example:

    fix/#53-fix-view-crash
```

#### Branch Naming:

###### Try to keep your branch name as short and accurate as possible.

###### Use the following naming convention when creating a branch:

```
feature/#[IssueNumber]-Description

Example:
feature/#213-Add-User-Menu

```

### Pull Requests:

#### Pull Requests are supplied with a clear and brief explanation which is not longer than 50 characters.

###### Use the supplied template when creating a Pull Request. Also make sure to tag a reviewer along with creating your request.

```
What kind of change does this PR introduce?

Summary of the changes

Does this PR introduce a breaking change?

Other information

```
