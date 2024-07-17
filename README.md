# Monorepo for OPAC, Flow Manager and Flow Client apps

## Overview

This monorepo will contain three main Next.js applications :

- **OPAC** : set up and monitor installations equipped with OnePark devices to which companies and carparks can be associated with
- **Flow manager** : a dashboard app to manage one or several carpark owned by a company and to control financial flows
- **Flow client** : a user interface that customer can access to book parkings

Along with these applications, you'll have a doc application that details how is built this monorepo and what or why some technologies were picked.

This monorepo is managed by [Turborepo](https://turbo.build/repo), a powerful tool that aims at optimizing the tasks we need to run throughout the whole repo (lint, build, test etc.) to improve DX, remove maintenance burden and overhead due to scaling project, stop battling with tooling and speed up CI.

## Set up

### What you'll need

- [Node.js](https://nodejs.org/en/download/) version 18.0 or above:
  - When installing Node.js, you are recommended to check all checkboxes related to dependencies.

### Clone repo

```sh
git clone https://github.com/Onepark/opac-flow.git
```

### Install dependencies

```sh
pnpm run install
```

### Lauch applications

```sh
turbo dev
```

You can choose to lauch only one application by using `--filter` flag followed by application name. For example :

```sh
turbo dev --filter flow-client
```

## Workflow

### 1. Create a new branch from develop

Ensure you're on the `develop` branch before you begin.

```sh
git switch develop
```

Then you can opt for `better-branch` over the basic `git switch -c <branchname>`.

```sh
better-branch
```

`better-branch` will launch an interactive prompt, guiding you through creating a well-defined branch. This includes specifying the branch type (feat, fix, etc.), linking a relevant JIRA ticket (e.g., OPAC-2734), and providing a concise description of your development's purpose that will be converted to a valid branch name.

### 2. Add and commit changes

Once required changes are made, you can commit :

```sh
better-commits
```

> [!TIP]
> To stick with the [Conventional Commits specification](https://www.conventionalcommits.org/en/v1.0.0-beta.4/#summary), instead of `git add <filename> && git commit -m <commit-message>` we strongly recommend using [better-commits package](https://github.com/Everduin94/better-commits). As for `better-branch`, it opens an interactive prompt that will help you formatting your commit message in line with the project's specific requirements.

### 3. Push to GitHub repository

To push your branch with new commits to the remote repository for the first time :

```sh
git push origin -u OPAC-XXX/feat/my-awesome-feature
```

This will create a remote branch linked to your local branch.

> [!NOTE]
> It is generally better to name your remote branch the same as your local branch to avoid any confusion between local and remote branches.

If you need later to push other commits and an upstream branch is already set, you can simply run :

```sh
git push origin
```

> [!TIP]
> In case you've rebased your branch, as it alters your commit history because rebased commit have an unique hash, you will need to add `--force` or `-f` flag to keep pushing those changes to your remote branch.
>
> ```sh
> git push origin -f
> ```

### 4. Create a pull request

Once 1/ you're satisfied with what you've done 2/ you've pushed it to the GitHub repository and 3/ you're ready for it to be reviewed (or roasted) by your peers, open a [Pull request from GitHub](https://github.com/Onepark/opac-flow/pulls/) to **merge your feature branch into develop**.

Don't forget to **add reviewers** (top right section of your pull request page) to notify them.

> [!TIP]
> You can refer to the [Conventional Comments](https://conventionalcomments.org/) to improve communication and readibility throughout the review.

When asked for, **make requested changes** and **push them to new commits** (`git commit -m "PR fixs #1"` for instance) so your reviewer can clearly see the difference between the last state of the code he checked and what you've changed since then.

### 5. Merge pull request

If your pull request is approved, click on `Squash and merge` button. This will turn all your commits into a single one by letting you choose a unique commit message and merge it into the develop branch.

## Useful Links

Learn more about Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
