# hw-nestjs

### local database setting (PostgreSQL@14)

```shell
# PostgreSQL 설치
$ brew update
$ brew install postgresql@14
$ postgres --version
postgres (PostgreSQL) 14.6 (Homebrew)

# 백그라운드로 실행 확인
$ brew services start postgresql
==> Successfully started `postgresql@14` (label: homebrew.mxcl.postgresql@14)
$ ps -e | grep postgresql
12432 ??         0:00.04 /opt/homebrew/opt/postgresql@14/bin/postgres -D /opt/homebrew/var/postgresql@14
12484 ttys002    0:00.00 grep postgresql

# postgresql CLI 클라이언트로 서버에 접근 (관리자권한)
$ psql postgres
psql (14.6 (Homebrew))
Type "help" for help.
postgres=# 

# DB 사용자 추가
postgres= CREATE ROLE hyunwoo WITH LOGIN PASSWORD '12341234';
CREATE ROLE
postgres= \du
                                   List of roles
 Role name |                         Attributes                         | Member of 
-----------+------------------------------------------------------------+-----------
 hyunwoo   |                                                            | {}
 user      | Superuser, Create role, Create DB, Replication, Bypass RLS | {}

# DB 생성 및 특정 사용자에게 권한 부여
postgres= CREATE DATABASE wms OWNER hyunwoo;
CREATE DATABASE
postgres= \q # 쉘 나가기

# 해당 사용자로 접근
$ psql postgres -U hyunwoo
psql (14.6 (Homebrew))
Type "help" for help.

postgres=> \list
                           List of databases
    Name    |  Owner  | Encoding | Collate | Ctype | Access privileges 
------------+---------+----------+---------+-------+-------------------
 postgres   | user    | UTF8     | C       | C     | 
 template0  | user    | UTF8     | C       | C     | =c/user          +
            |         |          |         |       | user=CTc/user
 template1  | user    | UTF8     | C       | C     | =c/user          +
            |         |          |         |       | user=CTc/user
 wms        | hyunwoo | UTF8     | C       | C     | 
(4 rows)
```

### git setting

```shell
$ git init
$ git config  user.name "yourgithubname"
$ git config  user.email "yourgithubemail"
$ git add .
$ git commit -m "first commit"
$ git branch -M main
$ git remote add origin git@github.com-private:Deepple/hw-nestjs.git
$ git push -u origin main
```

### start dev

```shell
$ nest new hw-nestjs --strict # npm
$ cd hw-nestjs
$ npm install
$ npm run start:dev # watch mode
# localhost:3000
```