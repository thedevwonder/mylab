---
title: Permissions. Knock Knock!
---

Suppose we want to build a feature that assigns roles/permissions to each user. I, am a GitHub user, can have admin access of a project, while only having read access of another. Similarly, a single repo may have multiple contributors at different levels. We wanna maintain their records and relations, storing them in a persistent storage.
This is a simple case of assigning roles/permissions to users, where a ***role*** is a relation between repository and user.
Such a many-to-many relation problem also requires flexibility in defining relations between entities, such that it can be scaled up in the future.

### Using Graphs

Using a graph to model our data 