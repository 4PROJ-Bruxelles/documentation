# Introduction

The backup is handled by a Docker container to allow the best avaibility of the backup service.
It uses `pg_dump` on the primary database of the API which contains everything.
To allow a daily backup at 2AM, the service is based on a `cron`job which will react to the time (for a better accuracy, please install `ntp` on the Docker host).

To build the image, you need to execute:
```bash
docker build -t backup-database .
```
  
To run the container, you first need to create an `variables` file.
You can copy the template by doing:
```
cp variables.template variables
```

And you can run the container with:
```bash
docker run -it -v <local path>:/app/backups backup-database
```


