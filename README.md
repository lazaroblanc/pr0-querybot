# pr0-querybot
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Flazaroblanc%2Fpr0-querybot.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2Flazaroblanc%2Fpr0-querybot?ref=badge_shield)


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

## License
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Flazaroblanc%2Fpr0-querybot.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2Flazaroblanc%2Fpr0-querybot?ref=badge_large)