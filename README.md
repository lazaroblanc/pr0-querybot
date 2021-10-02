# pr0-querybot

This readme is still work-in-progress

## Self-hosting

### Configuration files

#### `.env`

Rename `.env-template` to `.env` and set the variable values

| Variable  | Description                                                      |
| --------- | ---------------------------------------------------------------- |
| `BOT_TOKEN` | Discord bot user token                                           |
| `USERNAME`  | pr0gramm.com username                                            |
| `PASSWORD`  | pr0gramm.com password                                            |
| `DEBUG`     | Set to `true` to enable debug log output (defaults to `false`)   |
| `VERBOSE`   | Set to `true` to enable verbose log output (defaults to `false`) |

#### `config.yaml`

##### Queries

| Key                | Description                                                    |
| ------------------ | -------------------------------------------------------------- |
| `queries`          | List of queries to execute                                     |
| `queries.query`    | The actual search string for the query                         |
| `queries.channel`  | The channel ID where new posts from the query should be posted |
| `queries.interval` | The interval in minutes in which the query should be executed  |