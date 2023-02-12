# Noted 0

## Authors

- stacksparrow4

## Category

- web

## Description

Ok so the last note taking site I made was insecure. So I decided to remake it.
Surely you can't find my secrets this time! 😼

## Difficulty

- Easy

## Points

50

## Solution

<details>
<summary>Spoiler</summary>

### Idea

Use an SQL injection to retrieve the note with the flag.

### Walkthrough

This time the link to each note has a url with something like
`?id=502527619122` on the end. This time we can't guess the URL for the note,
but we can use a simple SQL injection to find the flag.

If you change
`?id=502527619122`
to
`?id=502527619122 OR 1=1`
it will show you all notes.

(Reasoning:
Behind the scenes, the code runs this query in the database:

```
SELECT note_data FROM notes WHERE note_id=502527619122
```

Because the input is not sanitised correctly, using `?id=502527619122 OR 1=1`
will change the query to

```
SELECT note_data FROM notes WHERE note_id=502527619122 OR 1=1
```

which will be true for any note as 1 always equals 1. Therefore all notes will
be returned)

### Flag

`OWEEK{sqli_15_a_cl4551C_4f21z}`

</details>
