# 1.0.0

**24 May 2020**

**Note :** Only ReasonReact JSX v3 is supported.

Please consider migrating to JSX v3 (new ReasonReact hook components).

- Update all devDependencies (bs-platform@7.3.2, @glennsl/bs-jest@0.5.1, babel-jest@26.0.1, jest@26.0.1, @babel/core@7.9.6, babel-preset-react-app@9.1.2, react@16.13.1, react-dom@16.13.1, reason-react >= 0.8).
- Remove "bs-dynamic-import" dependency.
- Remove "bs-react-test-renderer" devDependency.
- Move "react" & "react-dom" into devDependencies.
- Add "@komponente/react-hello-world" in devDependency (used for testing external component). 
- Use "bs-react-testing-library" for testing instead of "bs-react-test-renderer".
- Add "reason-react" in peerDependencies to avoid package duplication. #84
- Support "reason-react" >= 0.8.0. #84
- Ensure top level binding in ReasonReact component is preserved. #83
- Reintroduce lockfiles (package-json.lock & yarn.lock).
- Add npmignore file (prevent tests & examples to be part of npm artifacts).
- Update travis configuration to run tests against Node.js v12 (latest LTS).
- Update refmt shell script to use node_modules bsrefmt instead of globally installed bsrefmt.
- Update documentation.
- Update examples.

# 0.6.2

**13 Jul 2019**

- Repository chore (doc update with non-ReasonReact component import, remove lockfiles, upgrade all devDependencies).

# 0.6.1

**12 Jun 2019**

- Support JSX v3 (hook component), with React Suspense/Lazy.
- Add JSX v3 examples (Parcel/Webpack).

# 0.5.0

**11 Jun 2019**

- Update all dependencies (support bs-platform@5 and reason-react@0.7). #72 #70
- Repository chore (package audit, renovate bot removed, avoid dependency pin).

# 0.4.0

**20 Mar 2018**

- Initial release.