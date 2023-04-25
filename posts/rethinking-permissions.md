---
title: Permissions. Knock Knock!
---

Suppose we want to build a feature that assigns roles/permissions to each user. I, am a GitHub user, can have admin access of a project, while only having read access of another. Similarly, a single repo may have multiple contributors at different levels. We wanna maintain their records and relations, storing them in a persistent storage.
This is a simple case of assigning roles/permissions to users, where a ***role*** is a relation between repository and user.
Such a many-to-many relation problem also requires flexibility in defining relations between entities, such that it can be scaled up in the future.

### Using Graphs

GitHub in it's enterprise version offers user-defined roles. Any custom role/permission/relation is difficult to model in restrictiveness of a relational model.
However, modelling our data as graph gives us much more flexibility in defining more relations between our entities.
During my early stages of working in a startup as a software dev, I was given a similar task of assigning roles or permission to users.

A graph model has a separate table for vertices and a separate table for edges.
 