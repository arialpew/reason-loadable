# Install

```sh
git clone git@github.com:kMeillet/reasonml-code-split.git
cd reasonml-code-split
npm install
```

# Script

Parcel Prod :

```sh
npm run build:parcel
```

Parcel dev :

```sh
npm run dev:parcel
```

Webpack Prod :

```sh
npm run make
npm run build:webpack
```

Webpack dev :

```sh
npm run makew
npm run dev:webpack
```

Test :

```sh
npm run test
npm run testw
```

Format code :

```sh
npm run format
```

Clean BuckleScript artifact (.bs.js files and lib/) :

```sh
npm run clean
```

Generate interface from header file (Cmi) :

```sh
npm run interface lib/bs/src/Module.cmi
```

Update all dependencies :

```sh
npm run up
```
