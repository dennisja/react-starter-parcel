# React Starter

## Requirements

- A Package Manager e.g [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Parcel](https://parceljs.org/getting_started.html) - A blazing fast, zero configuration web application bundler
- NodeJs

## Installation

1. Clone the repository

```sh
git clone https://github.com/dennisja/react-starter-parcel.git
```

2. Set up a starter of your choice

   > All specific starters are provided as releases. To setup a starter to the following

    1. Change the name of the origin to point to you repo

    ```sh
    git remote rename origin old_origin
    git remote add origin link-to-your-repo
    ```

    2. Rename the current master branch

    ```sh
    git branch -m master old_master
    ```

    3. Pull in the preffered starter as the master branch

    ```sh
    git checkout -b master apollo-v1.1
    ```

    4. Delete the old master branch

    ```sh
    git branch -d old_master
    ```

    5. Drop all the tags

    ```sh
    git tag -d `git tag | grep -E '.'`
    ```

6. Install dependencies
   While in the root directory of the application on the command line, run 👇

```sh
yarn
```

or

```sh
yarn install
```

4. Run the application

```sh
yarn start
```

## License

Distributed under the MIT License. See [license file](LICENSE)
