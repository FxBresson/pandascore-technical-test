# Pandascore LOL Match technical Test

This project is my rendition of the technical test to join Pandascore ! It consists in listening to a websocket server to display real time data of a League of Legend match.

Specs of the test can be found [here](https://gist.github.com/NicolasMarlier/597a6fbf825d55bc31596b0567fbf0fb)

## This project uses :

- React (via `create-react-app`)
- Redux
- rxjs
- redux-observable
- recharts

## How to start :

```
$ npm install
$ npm run start
```

to launch the project

and in another terminal

```
$ npm run serve
```

to launch the websocket server

## Here is the list of implemented feats :

- Data fetch started by an action caught by an epic with redux-observable
- Connection to the websocket with rxjs
- Saving of data in the redux store
- Real time display of the match data with React
- Real time graph of team gold with a recharts line graph
- Front improvement

## To-do list of possible improvements:

- Add components and helper tests
- Handle websocket connection errors and reconnection
- Add more stats based on the available data (for example players stats)
- Handle match ending (add animations ?)
