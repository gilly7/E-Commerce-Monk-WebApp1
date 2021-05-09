package database

import (
	"database/sql"
	"fmt"

	_ "github.com/go-sql-driver/mysql"
)

func Connection() (DB *sql.DB) {

	dbDriver := "mysql"
	dbUser := "root"
	dbName := "monk"

	db, err := sql.Open(dbDriver, dbUser+":"+"@/"+dbName+"?parseTime=true")

	if err != nil {
		panic(err.Error())
	}
	fmt.Println("connection done")

	return db
}
