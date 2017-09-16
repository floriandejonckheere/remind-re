# Remindre

A quick set-and-forget reminder app built in React Native.


## Getting started

Install the following software first:

- RVM
- Ruby 2.4.1
- Yarn
- NodeJS 8.5.0

Then install all dependencies:

```
$ # Back-end dependencies
$ gem install bundler --no-ri --no-rdoc
$ bundle install

$ # Front-end dependencies (based in `web` folder)
$ cd web && yarn install
```

## Development

Start both the Rails server and the Webpack server:

```
$ bundle exec rails server
$ cd web; yarn run start
```
