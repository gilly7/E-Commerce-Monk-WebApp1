package database

import (
	"database/sql"

	_ "github.com/go-sql-driver/mysql"
)

func Connection() (DB *sql.DB) {

	// dbDriver := "mysql"
	// dbUser := "root"
	// dbName := "monk"

	//db, err := sql.Open(dbDriver,dbUser+":"+"@/"+dbName+"?parseTime=true")

	db, err := sql.Open("mysql", "root:Ng@14all7@tcp(127.0.0.1:3306)/monk")

	if err != nil {
		panic(err.Error())
	}

	return db
}
